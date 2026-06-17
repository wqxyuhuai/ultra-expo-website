(() => {
  const layouts = {
    desktop: {
      litEnds: [72, 78, 84, 90, 96, 103, 111, 120, 130, 141, 153, 166, 180, 195, 211, 228],
      finalEnds: [46, 44, 42, 40, 37, 34, 31, 28, 25, 22, 19, 16, 13, 10, 7, 4]
    },
    tablet: {
      litEnds: [74, 82, 91, 101, 112, 124, 137, 151, 166, 182, 199, 217],
      finalEnds: [48, 45, 42, 39, 36, 33, 29, 25, 21, 17, 13, 9]
    },
    mobile: {
      litEnds: [76, 88, 102, 118, 136, 157, 180, 205],
      finalEnds: [50, 45, 40, 35, 30, 25, 20, 15]
    }
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  }

  function mix(a, b, t) {
    const ca = hexToRgb(a);
    const cb = hexToRgb(b);
    const p = clamp(t, 0, 1);
    const r = Math.round(ca.r + (cb.r - ca.r) * p);
    const g = Math.round(ca.g + (cb.g - ca.g) * p);
    const b2 = Math.round(ca.b + (cb.b - ca.b) * p);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b2.toString(16).padStart(2, "0")}`;
  }

  function rgba(hex, alpha) {
    const c = hexToRgb(hex);
    return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
  }

  function currentMode() {
    if (window.innerWidth <= 680) return "mobile";
    if (window.innerWidth <= 1024) return "tablet";
    return "desktop";
  }

  class HomeRasterBackground {
    constructor(scene) {
      this.scene = scene;
      this.host = scene.closest(".home-hero-scene") || scene;
      this.colsWrap = scene.querySelector("[data-raster-cols]");
      this.reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
      this.columns = [];
      this.lastMode = "";
      this.scrollProgress = 0;
      this.mouseYTarget = 0;
      this.mouseYNow = 0;
      this.mouseXTarget = 0.5;
      this.mouseXNow = 0.5;
      this.pointerActive = false;
      this.resizeTimer = 0;
      this.raf = 0;

      this.updateScrollProgress = this.updateScrollProgress.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.resetMouse = this.resetMouse.bind(this);
      this.onResize = this.onResize.bind(this);
      this.animate = this.animate.bind(this);

      this.buildColumns(true);
      window.addEventListener("scroll", this.updateScrollProgress, { passive: true });
      window.addEventListener("resize", this.onResize, { passive: true });
      window.addEventListener("pointermove", this.onPointerMove, { passive: true });
      window.addEventListener("pointerleave", this.resetMouse, { passive: true });
      window.addEventListener("blur", this.resetMouse);
      this.raf = requestAnimationFrame(this.animate);
    }

    destroy() {
      clearTimeout(this.resizeTimer);
      cancelAnimationFrame(this.raf);
      window.removeEventListener("scroll", this.updateScrollProgress);
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("pointermove", this.onPointerMove);
      window.removeEventListener("pointerleave", this.resetMouse);
      window.removeEventListener("blur", this.resetMouse);
    }

    getColumnColors(i, count) {
      const x = count <= 1 ? 0 : i / (count - 1);
      const center = clamp(1 - Math.abs(x - 0.57) / 0.57, 0, 1);
      const rightPower = x;
      const leftPower = 1 - x;
      const edgePower = Math.abs(x - 0.5) * 2;
      const rightTopPower = clamp((x - 0.54) / 0.46, 0, 1);
      const leftBottomPower = clamp((0.32 - x) / 0.32, 0, 1);

      const highlightBase = mix("#89b6fd", "#72a7fb", center * .62);
      const highlight = mix(mix(highlightBase, "#5f96ef", edgePower * .10), "#4d86ef", Math.max(0, rightPower - .72) * .24);
      const highSoft = mix("#76abfb", "#4d83e9", rightPower * .42);
      const c0Base = mix("#0a1b3a", "#07152d", rightPower * .22);
      const c1Base = mix("#163a80", "#0a1c42", rightPower * .52);

      return {
        c0: mix(c0Base, "#000103", rightTopPower * .92),
        c1: mix(c1Base, "#01040c", rightTopPower * .82),
        c2: mix(mix("#2b63d5", "#174db4", rightPower * .42), "#09204e", rightTopPower * .34),
        c3: mix("#4d87ef", "#306fe0", rightPower * .40),
        c4: highlight,
        c5: mix(highSoft, "#3c7be4", edgePower * .16),
        c6: mix(mix("#285ecf", "#1545a8", rightPower * .56), "#061228", leftBottomPower * .36),
        c7: mix(mix("#102c63", "#07163a", rightPower * .64), "#01050d", leftBottomPower * .58),
        c8: mix("#061126", "#000103", .62 + edgePower * .18 + leftBottomPower * .18),
        c9: mix("#010307", "#000000", .88),
        shineA: rgba(mix("#4f8cf2", "#3976e5", rightPower * .46), .15 + center * .055),
        shineB: rgba(highlight, .31 + center * .075),
        shineC: rgba(mix("#6ba1f8", "#467ee5", rightPower * .50), .19 + center * .055),
        shineBase: (0.29 + center * 0.15 + leftPower * 0.018).toFixed(3),
        fillOpacity: (0.90 + center * 0.10).toFixed(3),
        grain: (0.45 + edgePower * 0.12).toFixed(3)
      };
    }

    makeStops(litEnd, x) {
      const center = clamp(1 - Math.abs(x - 0.57) / 0.57, 0, 1);
      const leftBottomPower = clamp((0.32 - x) / 0.32, 0, 1);
      const brightY = clamp(29 + x * 58, 28, litEnd - 30);

      const s1 = clamp(brightY - 34, 8, Math.max(9, litEnd - 42));
      const s2 = clamp(brightY - 22, s1 + 5, litEnd - 32);
      const s3 = clamp(brightY - 10, s2 + 5, litEnd - 23);
      const s4 = clamp(brightY + 4, s3 + 7, litEnd - 14);
      const s5 = clamp(brightY + 22, s4 + 9, litEnd - 3);
      const tailOffset = 4 + center * 7 - leftBottomPower * 10;
      const s6 = Math.max(s5 + 12, litEnd - 10 + tailOffset);
      const s7 = Math.max(s6 + 11, litEnd + 5 + tailOffset);
      const s8 = Math.max(s7 + 12, litEnd + 18 + tailOffset);
      const s9 = Math.max(s8 + 13, litEnd + 31 + tailOffset);
      const s10 = Math.max(s9 + 13, litEnd + 44 + tailOffset);

      return { brightY, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 };
    }

    buildColumns(force = false) {
      if (!this.colsWrap) return;
      const mode = currentMode();
      if (!force && mode === this.lastMode && this.columns.length) return;
      this.lastMode = mode;

      const layout = layouts[mode];
      const count = layout.litEnds.length;
      this.host.style.setProperty("--raster-cols", String(count));

      this.colsWrap.innerHTML = layout.litEnds.map((litEnd, i) => {
        const x = count <= 1 ? 0 : i / (count - 1);
        const colors = this.getColumnColors(i, count);
        const finalEnd = layout.finalEnds[i];
        const lift = Math.max(0, litEnd - finalEnd);
        const centerPower = clamp(1 - Math.abs(x - 0.57) / 0.57, 0, 1);
        const follow = 0.78 + centerPower * 1.32;
        const speed = 15.5 + (i % 5) * 1.45;
        const delay = -i * 0.58;
        const liftEase = 1.10 + x * 3.20;
        const stops = this.makeStops(litEnd, x);
        const colH = Math.max(380, stops.s10 + 150);
        const fillH = colH + 52;
        const shineTop = Math.max(5, stops.brightY - 34);
        const shineH = Math.min(104, Math.max(66, stops.s7 - shineTop + 12));
        const noiseH = Math.min(colH, Math.max(160, stops.s10 + 48));

        return `<span class="raster-col" data-x="${x.toFixed(4)}" data-lift="${lift.toFixed(3)}" data-lift-ease="${liftEase.toFixed(3)}" data-follow="${follow.toFixed(3)}" data-shine-base="${colors.shineBase}" style="--i:${i};--col-h:${colH.toFixed(2)}svh;--fill-h:${fillH.toFixed(2)}svh;--scroll-y:0vh;--color-y:0vh;--shine-y:0vh;--flow-speed:${speed.toFixed(2)}s;--flow-delay:${delay.toFixed(2)}s;--reveal-delay:${i * 28}ms;--s1:${stops.s1.toFixed(2)}svh;--s2:${stops.s2.toFixed(2)}svh;--s3:${stops.s3.toFixed(2)}svh;--s4:${stops.s4.toFixed(2)}svh;--s5:${stops.s5.toFixed(2)}svh;--s6:${stops.s6.toFixed(2)}svh;--s7:${stops.s7.toFixed(2)}svh;--s8:${stops.s8.toFixed(2)}svh;--s9:${stops.s9.toFixed(2)}svh;--s10:${stops.s10.toFixed(2)}svh;--shine-top:${shineTop.toFixed(2)}svh;--shine-h:${shineH.toFixed(2)}svh;--noise-h:${noiseH.toFixed(2)}svh;--fill-opacity:${colors.fillOpacity};--c0:${colors.c0};--c1:${colors.c1};--c2:${colors.c2};--c3:${colors.c3};--c4:${colors.c4};--c5:${colors.c5};--c6:${colors.c6};--c7:${colors.c7};--c8:${colors.c8};--c9:${colors.c9};--shine-a:${colors.shineA};--shine-b:${colors.shineB};--shine-c:${colors.shineC};--shine-live:${colors.shineBase};--fill-brightness:1.01;--fill-sat:1.06;--shine-blur:.25px;--shine-sat:1.12;--shine-brightness:1.02;--grain:${colors.grain};"><span class="raster-fill"></span><span class="raster-shine"></span></span>`;
      }).join("");

      this.columns = Array.from(this.colsWrap.children);
      this.updateScrollProgress();
    }

    updateScrollProgress() {
      const rect = this.scene.getBoundingClientRect();
      const viewportH = Math.max(window.innerHeight, 1);
      const total = Math.max(this.scene.offsetHeight - viewportH, 1);
      this.scrollProgress = clamp(-rect.top / (total * 0.7), 0, 1);
      const handoff = clamp((this.scrollProgress - 0.34) / 0.36, 0, 1);
      const bridgeIn = clamp((this.scrollProgress - 0.24) / 0.24, 0, 1);
      const bridgeHold = 0.38 + (1 - this.scrollProgress) * 0.12;
      const bridge = bridgeIn * bridgeHold;
      this.host.style.setProperty("--raster-handoff", handoff.toFixed(3));
      this.host.style.setProperty("--raster-blue-bridge", bridge.toFixed(3));
    }

    onPointerMove(event) {
      const viewportH = Math.max(window.innerHeight, 1);
      const viewportW = Math.max(window.innerWidth, 1);
      this.mouseYTarget = (event.clientY / viewportH - 0.5) * 32;
      this.mouseXTarget = clamp(event.clientX / viewportW, 0, 1);
      this.pointerActive = true;
    }

    resetMouse() {
      this.mouseYTarget = 0;
      this.pointerActive = false;
    }

    onResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(() => {
        this.buildColumns(false);
        this.updateScrollProgress();
      }, 120);
    }

    animate() {
      if (!this.reduceMotion) {
        this.mouseYNow += (this.mouseYTarget - this.mouseYNow) * 0.095;
        this.mouseXNow += (this.mouseXTarget - this.mouseXNow) * 0.085;
      } else {
        this.mouseYNow = 0;
        this.mouseXNow = 0.5;
      }

      const time = performance.now();
      const activity = this.pointerActive ? 1 : 0;

      this.columns.forEach((column, i) => {
        const lift = Number(column.dataset.lift || 0);
        const liftEase = Number(column.dataset.liftEase || 1.2);
        const follow = Number(column.dataset.follow || 1);
        const x = Number(column.dataset.x || 0.5);
        const shineBase = Number(column.dataset.shineBase || 0.34);
        const proximity = Math.exp(-Math.pow((x - this.mouseXNow) / 0.22, 2));
        const mouseEnergy = Math.min(1, Math.abs(this.mouseYNow) / 32);
        const micro = this.reduceMotion ? 0 : Math.sin(time * 0.00038 + i * 0.54) * 0.36;
        const micro2 = this.reduceMotion ? 0 : Math.sin(time * 0.00031 + i * 0.41) * 0.30;
        const columnProgress = 1 - Math.pow(1 - this.scrollProgress, liftEase);
        const scrollY = -(lift * columnProgress);
        const colorY = this.mouseYNow * (0.38 + follow * 0.13 + proximity * 0.12) + micro;
        const shineY = this.mouseYNow * (follow * 1.26 + proximity * 0.65) + micro2;
        const hoverBoost = activity * proximity * (0.10 + mouseEnergy * 0.08);
        const shineLive = clamp(shineBase + hoverBoost, 0.16, 0.72);
        const fillBrightness = 1.01 + activity * proximity * (0.025 + mouseEnergy * 0.045);
        const shineBrightness = 1.02 + activity * proximity * (0.10 + mouseEnergy * 0.16);
        const shineSat = 1.12 + activity * proximity * 0.18;
        const shineBlur = 0.25 + activity * proximity * 0.32;

        column.style.setProperty("--scroll-y", `${scrollY.toFixed(3)}vh`);
        column.style.setProperty("--color-y", `${colorY.toFixed(3)}vh`);
        column.style.setProperty("--shine-y", `${shineY.toFixed(3)}vh`);
        column.style.setProperty("--shine-live", shineLive.toFixed(3));
        column.style.setProperty("--fill-brightness", fillBrightness.toFixed(3));
        column.style.setProperty("--shine-brightness", shineBrightness.toFixed(3));
        column.style.setProperty("--shine-sat", shineSat.toFixed(3));
        column.style.setProperty("--shine-blur", `${shineBlur.toFixed(3)}px`);
      });

      this.raf = requestAnimationFrame(this.animate);
    }
  }

  let activeInstance = null;

  function init(root = document) {
    const scene = root.querySelector?.("[data-raster-scene]");
    if (!scene) {
      destroy();
      return null;
    }
    if (activeInstance?.scene === scene) {
      activeInstance.updateScrollProgress();
      return activeInstance;
    }
    destroy();
    activeInstance = new HomeRasterBackground(scene);
    return activeInstance;
  }

  function destroy() {
    if (!activeInstance) return;
    activeInstance.destroy();
    activeInstance = null;
  }

  window.UltraHomeRasterBackground = { init, destroy };
})();
