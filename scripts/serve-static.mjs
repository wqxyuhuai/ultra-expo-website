import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { networkInterfaces } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number.parseInt(process.env.PORT || "4173", 10);
const host = process.env.HOST || "::";

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".ttf", "font/ttf"],
  [".otf", "font/otf"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".mp4", "video/mp4"],
  [".webm", "video/webm"],
]);

const noCacheHeaders = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(
      request.url || "/",
      `http://${request.headers.host || "localhost"}`,
    );
    const filePath = await resolveFile(url.pathname);

    if (!filePath) {
      await send404(response);
      return;
    }

    const fileStat = await stat(filePath);
    response.writeHead(200, {
      ...noCacheHeaders,
      "Content-Length": fileStat.size,
      "Content-Type": contentType(filePath),
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, {
      ...noCacheHeaders,
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Internal server error");
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Stop the existing server or run with PORT=4174.`,
    );
    process.exit(1);
  }

  throw error;
});

server.listen({ port, host, ipv6Only: false }, () => {
  console.log("Ultra Expo static server");
  console.log(`Root: ${root}`);
  console.log("Available on:");
  console.log(`  http://localhost:${port}`);
  console.log(`  http://127.0.0.1:${port}`);

  for (const address of lanAddresses()) {
    console.log(`  http://${address}:${port}`);
  }

  console.log("Hit CTRL-C to stop the server");
});

async function resolveFile(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const normalizedPath = path
    .normalize(decodedPath)
    .replace(/^(\.\.[/\\])+/, "");
  let candidate = path.resolve(root, `.${normalizedPath}`);

  if (!candidate.startsWith(`${root}${path.sep}`) && candidate !== root) {
    return null;
  }

  const candidateStat = await statIfExists(candidate);

  if (candidateStat?.isDirectory()) {
    candidate = path.join(candidate, "index.html");
  } else if (!candidateStat && !path.extname(candidate)) {
    const htmlCandidate = `${candidate}.html`;
    const htmlStat = await statIfExists(htmlCandidate);
    if (htmlStat?.isFile()) {
      candidate = htmlCandidate;
    }
  }

  const finalStat = await statIfExists(candidate);
  return finalStat?.isFile() ? candidate : null;
}

async function send404(response) {
  const notFoundPath = path.join(root, "404.html");

  if (await canRead(notFoundPath)) {
    const fileStat = await stat(notFoundPath);
    response.writeHead(404, {
      ...noCacheHeaders,
      "Content-Length": fileStat.size,
      "Content-Type": contentType(notFoundPath),
    });
    createReadStream(notFoundPath).pipe(response);
    return;
  }

  response.writeHead(404, {
    ...noCacheHeaders,
    "Content-Type": "text/plain; charset=utf-8",
  });
  response.end("Not found");
}

async function statIfExists(filePath) {
  try {
    return await stat(filePath);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      return null;
    }

    throw error;
  }
}

async function canRead(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function contentType(filePath) {
  return (
    mimeTypes.get(path.extname(filePath).toLowerCase()) ||
    "application/octet-stream"
  );
}

function lanAddresses() {
  return Object.values(networkInterfaces())
    .flat()
    .filter(
      (address) => address && address.family === "IPv4" && !address.internal,
    )
    .map((address) => address.address);
}
