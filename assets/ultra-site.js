(function () {
  const REPO_BASE = window.__ULTRA_BASE_PATH || "/";
  const CASES = loadCases();
  const STORAGE_KEY = "ultra-locale";

  const labels = {
    en: {
      brandSub: "Global Exhibition Delivery",
      nav: ["Home", "About", "Services", "Cases", "Contact"],
      cta: "Start a Project",
      viewCases: "View Cases",
      viewServices: "View Services",
      clear: "Clear Filters",
      all: "All",
      featured: "Featured Cases",
      allCases: "All Cases",
      related: "Related Cases",
      overview: "Project Overview",
      background: "Project Background",
      strategy: "Design Strategy",
      scope: "Delivery Scope",
      value: "Project Value",
      footerCopy: "Global exhibition and spatial design services for Chinese brands going abroad.",
      tagline: "We make Chinese brands look at home — overseas.",
      copyright: "© 2026 Ultra Expo. All rights reserved."
    },
    zh: {
      brandSub: "全球展会落地服务",
      nav: ["首页", "公司介绍", "业务能力", "案例中心", "联系我们"],
      cta: "提交展会需求",
      viewCases: "查看案例",
      viewServices: "查看服务",
      clear: "清除筛选",
      all: "全部",
      featured: "精选案例",
      allCases: "全部案例",
      related: "相关案例",
      overview: "项目概览",
      background: "项目背景",
      strategy: "设计策略",
      scope: "交付范围",
      value: "项目价值",
      footerCopy: "为中国品牌出海提供全球展会与空间设计落地服务。",
      tagline: "让中国品牌在海外，呈现出本土品牌的姿态。",
      copyright: "© 2026 Ultra Expo. All rights reserved."
    }
  };

  const navItems = [
    { path: "/", key: 0 },
    { path: "/about", key: 1 },
    { path: "/services", key: 2 },
    { path: "/cases", key: 3 },
    { path: "/contact", key: 4 }
  ];

  const stats = [
    { value: "15+", en: "Countries & Regions", zh: "覆盖国家与地区" },
    { value: "200+", en: "Global Projects", zh: "全球交付项目" },
    { value: "50K+㎡", en: "Delivered Area", zh: "累计交付面积" },
    { value: "20+", en: "Overseas Build Partners", zh: "海外搭建伙伴" }
  ];

  const clients = ["BMW", "Leadshine", "GEO", "GOODWE", "SAJ", "SUNTECH", "E&E Cable Solutions", "KSTAR", "Elecnova", "SSAM", "CRRC", "WATTSONIC", "SUNGROW", "Molcel", "Coca-Cola", "SCUD", "MUST", "Autocraft", "Furrion", "Xiamen ITG", "TSUN"];

  const services = [
    {
      code: "01 STRATEGY",
      enTitle: "Brand Strategy",
      zhTitle: "品牌策划",
      enDesc: "We define exhibition goals, market context, product storytelling, message hierarchy, and visitor flow before spatial design begins.",
      zhDesc: "在空间设计开始之前明确参展目标、市场语境、产品表达、品牌信息层级和观众动线。",
      enScope: ["Go-to-market exhibition strategy", "Content planning", "Exhibition roadmap", "Brand message hierarchy", "Audience journey planning"],
      zhScope: ["出海展会策略", "内容规划", "展会规划", "品牌信息层级", "观众动线规划"]
    },
    {
      code: "02 DESIGN",
      enTitle: "Space Design",
      zhTitle: "空间设计",
      enDesc: "We translate brand language into spatial structure, connecting identity, product display, lighting, material, and high-visibility brand elements.",
      zhDesc: "将品牌语言转化为空间结构，结合视觉识别、产品陈列、灯光材料和高位品牌识别系统。",
      enScope: ["Concept design", "3D visualization", "Spatial planning", "Product display system", "Construction drawing development"],
      zhScope: ["概念设计", "3D 渲染", "空间规划", "产品展示系统", "施工图深化"]
    },
    {
      code: "03 ABROAD",
      enTitle: "Overseas Delivery",
      zhTitle: "海外落地",
      enDesc: "Our core differentiator is connecting local supply, customs, logistics, cross-time-zone project management, and on-site execution.",
      zhDesc: "核心差异化能力是整合本地供应、清关物流、跨时区项目管理和海外现场执行。",
      enScope: ["Local supply", "Overseas production", "Customs & logistics", "Cross-time-zone project management", "Local build partner coordination"],
      zhScope: ["本地供应", "海外生产", "清关物流", "跨时区项目管理", "本地搭建伙伴协同"]
    },
    {
      code: "04 BUILD",
      enTitle: "Engineering & Build",
      zhTitle: "工程搭建",
      enDesc: "From prefabrication to on-site build, we focus on design accuracy, schedule control, material quality, safety, and stable execution.",
      zhDesc: "从工厂预制到现场搭建，关注设计还原、工期控制、材料质量、施工安全和展期稳定运行。",
      enScope: ["Factory prefabrication", "Material and structure confirmation", "On-site construction", "Exhibition period maintenance", "Dismantling and return logistics"],
      zhScope: ["工厂预制", "材料与结构确认", "现场施工", "展期维护", "拆撤与回运"]
    }
  ];

  const globalNodes = [
    { name: "SUZHOU", zhName: "苏州", en: "HQ & Design Center", zh: "总部 · 设计中心" },
    { name: "NANTONG", zhName: "南通", en: "6,000㎡ Main Factory", zh: "6,000㎡ 主工厂" },
    { name: "POLAND", zhName: "波兰", en: "4,000㎡ Europe Production", zh: "4,000㎡ 欧洲生产资源" },
    { name: "HONG KONG", zhName: "香港", en: "Finance Hub", zh: "国际结算中心" },
    { name: "LOS ANGELES", zhName: "洛杉矶", en: "5,000㎡ US Operations", zh: "5,000㎡ 北美仓储 / 美国运营" },
    { name: "20+ OVERSEAS PARTNERS", zhName: "20+ 海外搭建伙伴", en: "Local Build Partner Network", zh: "本地搭建伙伴网络" }
  ];

  const certifications = [
    ["ISO 9001", "Quality Management System Certification", "质量管理体系认证"],
    ["ISO 14001", "Environmental Management System Certification", "环境管理体系认证"],
    ["ISO 45001", "Occupational Health & Safety Certification", "职业健康安全认证"],
    ["AAA Rating", "Enterprise Credit Rating", "企业信用等级"],
    ["CIIE Supplier", "Exhibition Service Supplier", "展会服务供应商"]
  ];

  const shows = ["IFA Berlin", "CES Las Vegas", "MWC Barcelona", "Intersolar Europe", "The Battery Show", "RE+", "Smart Energy", "Solar Solutions International", "Solar Storage Live", "Intersolar South America", "The Battery Show North America", "RE+ Mexico", "ENERGAIA", "Solar & Storage Live UK", "SNEC PV Power Expo", "EICMA", "Key Energy", "Green Energy Expo", "ENEX", "PV EXPO TOKYO", "Aquatech", "PCIM", "SPS", "OTC", "APEX"];

  const projectFlow = {
    en: ["Brief & Requirement", "Strategy & Direction", "Concept Design", "3D Visualization", "Quotation & Material Review", "Construction Drawing", "Production / Local Fabrication", "Logistics & Customs", "On-site Build", "Exhibition Support", "Dismantling / Return / Storage"],
    zh: ["需求沟通", "策略与方向", "概念设计", "3D 方案", "报价与材料确认", "施工图深化", "生产 / 本地制作", "物流与清关", "现场搭建", "展期支持", "拆撤 / 回运 / 仓储"]
  };

  const filterLabels = {
    en: {
      year: "Year",
      industry: "Industry",
      region: "Region",
      type: "Case Type",
      industries: {
        Energy: "Energy",
        Battery: "Battery",
        Industrial: "Industrial",
        Automotive: "Automotive",
        "Consumer Tech": "Consumer Tech",
        Telecom: "Telecom",
        "Water Treatment": "Water Treatment",
        Retail: "Retail",
        "Launch Event": "Launch Event",
        "Smart Manufacturing": "Smart Manufacturing",
        Exhibition: "Exhibition"
      },
      regions: {},
      types: { Design: "Design", Delivered: "Delivered", Event: "Event" }
    },
    zh: {
      year: "年份",
      industry: "行业",
      region: "地区",
      type: "案例类型",
      industries: {
        Energy: "新能源",
        Battery: "储能 / 电池",
        Industrial: "工业制造",
        Automotive: "汽车",
        "Consumer Tech": "消费电子",
        Telecom: "通信科技",
        "Water Treatment": "水处理",
        Retail: "零售空间",
        "Launch Event": "发布会 / 活动",
        "Smart Manufacturing": "智能制造",
        Exhibition: "展会综合"
      },
      regions: {
        Europe: "欧洲",
        "North America": "北美",
        "South America": "南美",
        Asia: "亚洲",
        "Middle East": "中东",
        China: "中国",
        Global: "全球"
      },
      types: { Design: "设计案例", Delivered: "落地案例", Event: "活动案例" }
    }
  };
  filterLabels.en.regions = { Europe: "Europe", "North America": "North America", "South America": "South America", Asia: "Asia", "Middle East": "Middle East", China: "China", Global: "Global" };

  const homeText = {
    enToZh: {
      "Home": "首页",
      "About": "公司介绍",
      "Services": "业务能力",
      "Cases": "案例中心",
      "Contact": "联系我们",
      "Start a Project": "提交展会需求",
      "Exhibition & Abroad": "展会与海外落地",
      "EXHIBITION & ABROAD": "展会与海外落地",
      "We make Chinese brands": "让中国品牌在海外，",
      "look at home —": "呈现出本土品牌的姿态。",
      "overseas.": "",
      "Ultra Expo delivers the full stack for Chinese brands going global — strategy, spatial design, and end-to-end local build.": "皓创展览 Ultra Expo 是一支为中国品牌出海而生的全球展会落地团队，专注于海外展会、新品发布与零售空间，提供从品牌策划、空间设计到本地化交付的全流程服务。",
      "View Cases": "查看案例",
      "Our Services": "了解服务能力",
      "Explore Services": "了解服务能力",
      "Trusted by China's most innovative global brands.": "我们的合作客户",
      "Countries & Regions": "覆盖国家与地区",
      "Projects Delivered": "全球交付项目",
      "Exhibition Area Built": "累计交付面积",
      "Overseas Partners": "海外搭建伙伴",
      "A global exhibition delivery team built for Chinese brands going global — from strategy and spatial design to end-to-end local build.": "一支为中国品牌出海而生的全球展会落地团队，提供从策略、空间设计到本地化交付的全流程服务。",
      "Ultra Expo was founded in Suzhou, China, with operations spanning 15+ countries. We specialize in overseas exhibitions, product launches, and retail spaces — delivering the full cycle from strategy and design to localized build.": "皓创展览 Ultra Expo 成立于中国苏州，业务覆盖全球 15+ 国家与地区。我们专注于海外展会、新品发布与零售空间，提供从策划、设计到本地化交付的全流程服务。",
      "We're not just a booth builder — we're the project partner that helps Chinese brands establish a professional, credible, localized presence at global exhibitions. Founded in Suzhou · 15+ countries · 200+ projects delivered.": "我们不只是展台搭建商，而是帮助中国品牌在海外建立专业、可信、本地化形象的项目伙伴。成立于苏州 · 覆盖 15+ 国家 · 交付 200+ 项目。",
      "Strategy": "品牌策划",
      "Design": "空间设计",
      "Abroad": "海外落地",
      "Build": "工程搭建",
      "Selected Works": "精选案例",
      "Why Ultra": "为什么选择 Ultra",
      "Global delivery. Local execution.": "全球资源，本地交付。",
      "We turn cross-border exhibition uncertainty into controllable delivery.": "把跨国展会的不确定性，变成可控的交付结果。",
      "Let’s build your global stage.": "让我们一起为你的品牌，在全球搭建舞台。"
    }
  };
  homeText.zhToEn = Object.fromEntries(Object.entries(homeText.enToZh).map(([en, zh]) => [zh, en]).filter(([zh]) => zh));

  function locale() {
    return localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
  }

  function setLocale(next) {
    localStorage.setItem(STORAGE_KEY, next);
    render();
  }

  function stripBase(pathname) {
    let base = REPO_BASE || "/";
    if (!base.endsWith("/")) base += "/";
    let p = pathname;
    if (base !== "/" && p.startsWith(base)) p = "/" + p.slice(base.length);
    p = p.replace(/\/index\.html$/, "/").replace(/\/$/, "");
    return p || "/";
  }

  function currentPath() {
    return stripBase(window.location.pathname);
  }

  function withBase(path) {
    const clean = path === "/" ? "" : path.replace(/^\//, "");
    return (REPO_BASE || "/") + clean;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
  }

  function loadCases() {
    if (Array.isArray(window.UltraCases)) return window.UltraCases;
    try {
      const script = document.querySelector('script[src*="ultra-cases.js"]');
      const url = script?.src || new URL("assets/ultra-cases.js", document.baseURI).href;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      if (xhr.status < 200 || xhr.status >= 300) return [];
      const match = xhr.responseText.match(/window\.UltraCases\s*=\s*(\[[\s\S]*\]);?\s*$/);
      if (!match) return [];
      const parsed = JSON.parse(match[1]);
      window.UltraCases = parsed;
      return parsed;
    } catch (error) {
      console.warn("Unable to load Ultra Expo cases", error);
      return [];
    }
  }

  function routeLink(path) {
    return `${withBase(path)}`;
  }

  function navHTML(lang, activePath) {
    const L = labels[lang];
    return `
      <nav class="ultra-nav">
        <a class="ultra-brand" href="${routeLink("/")}" data-route="/">
          <span class="ultra-brand-mark">U</span>
          <span class="ultra-brand-copy">
            <span class="ultra-brand-name">ULTRA</span>
            <span class="ultra-brand-sub">${lang === "zh" ? "皓创展览" : "皓创展览"}</span>
          </span>
        </a>
        <div class="ultra-links">
          ${navItems.map(item => `<a href="${routeLink(item.path)}" data-route="${item.path}" class="${activePath === item.path || (item.path === "/cases" && activePath.startsWith("/cases")) ? "is-active" : ""}">${L.nav[item.key]}</a>`).join("")}
        </div>
        <div class="ultra-actions">
          <div class="ultra-lang">
            <button class="${lang === "en" ? "is-active" : ""}" data-locale="en">EN</button><span>/</span><button class="${lang === "zh" ? "is-active" : ""}" data-locale="zh">CN</button>
          </div>
          <a class="ultra-primary" href="${routeLink("/contact")}" data-route="/contact">${L.cta}</a>
        </div>
      </nav>
    `;
  }

  function pageHero(label, title, description, lang) {
    return `
      <section class="ultra-hero">
        <div class="ultra-wrap">
          <div class="ultra-kicker">${esc(label)}</div>
          <h1>${esc(title)}</h1>
          <p>${esc(description)}</p>
          <div class="ultra-hero-actions">
            <a class="ultra-primary" href="${routeLink("/contact")}" data-route="/contact">${labels[lang].cta}</a>
            <a class="ultra-secondary" href="${routeLink("/cases")}" data-route="/cases">${labels[lang].viewCases}</a>
          </div>
        </div>
      </section>
    `;
  }

  function sectionHead(kicker, title, copy) {
    return `
      <div class="ultra-section-head">
        <div>
          <div class="ultra-section-kicker">${esc(kicker)}</div>
          <h2>${esc(title)}</h2>
        </div>
        ${copy ? `<p>${esc(copy)}</p>` : ""}
      </div>
    `;
  }

  function statGrid(lang) {
    return `<div class="ultra-grid cols-4">${stats.map(s => `<div class="ultra-stat"><strong>${s.value}</strong><span>${esc(s[lang])}</span></div>`).join("")}</div>`;
  }

  function serviceGrid(lang) {
    return `<div class="ultra-grid cols-4">${services.map(s => `
      <article class="ultra-service">
        <div class="ultra-section-kicker">${s.code}</div>
        <h3>${esc(lang === "zh" ? s.zhTitle : s.enTitle)}</h3>
        <p>${esc(lang === "zh" ? s.zhDesc : s.enDesc)}</p>
        <ul>${(lang === "zh" ? s.zhScope : s.enScope).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </article>
    `).join("")}</div>`;
  }

  function nodesGrid(lang) {
    return `<div class="ultra-grid cols-3">${globalNodes.map(n => `
      <article class="ultra-node">
        <div class="ultra-section-kicker">${esc(lang === "zh" ? n.zhName : n.name)}</div>
        <h3>${esc(n.name)}</h3>
        <p>${esc(n[lang])}</p>
      </article>
    `).join("")}</div>`;
  }

  function tokenList(items) {
    return `<div class="ultra-marquee">${items.map(item => `<span class="ultra-token">${esc(item)}</span>`).join("")}</div>`;
  }

  function footerHTML(lang) {
    const L = labels[lang];
    return `
      <footer class="ultra-footer">
        <div class="ultra-wrap ultra-footer-grid">
          <div>
            <h3>${lang === "zh" ? "ULTRA EXPO 皓创展览" : "ULTRA EXPO"}</h3>
            <p>${L.tagline}</p>
            <p>${L.footerCopy}</p>
          </div>
          <div>
            <h4>${lang === "zh" ? "导航" : "Links"}</h4>
            ${navItems.map(item => `<a href="${routeLink(item.path)}" data-route="${item.path}">${L.nav[item.key]}</a><br>`).join("")}
          </div>
          <div>
            <h4>${lang === "zh" ? "服务" : "Services"}</h4>
            ${services.map(s => `<a href="${routeLink("/services")}" data-route="/services">${esc(lang === "zh" ? s.zhTitle : s.enTitle)}</a><br>`).join("")}
          </div>
          <div>
            <h4>${lang === "zh" ? "联系" : "Contact"}</h4>
            <p><a href="mailto:jack@ultraexpo.com">jack@ultraexpo.com</a><br>+86 185 0614 4181<br>${lang === "zh" ? "苏州 · 香港 · 洛杉矶 · 柏林" : "Suzhou · Hong Kong · Los Angeles · Berlin"}</p>
            <p>${L.copyright}</p>
          </div>
        </div>
      </footer>
    `;
  }

  function aboutPage(lang) {
    const zh = lang === "zh";
    return `
      ${pageHero(zh ? "关于皓创" : "ABOUT ULTRA EXPO", zh ? "一支为中国品牌出海而生的全球展会落地团队" : "A global exhibition delivery team built for Chinese brands going abroad.", zh ? "皓创展览 Ultra Expo 成立于中国苏州，业务覆盖全球 15+ 国家与地区。我们专注于为中国品牌在海外展会、新品发布与零售空间，提供从策划、设计到本地化交付的全流程服务。" : "Ultra Expo was founded in Suzhou, China, with business coverage across 15+ countries and regions. We focus on overseas exhibitions, product launches, and retail spaces, providing full-process services from strategy and design to localized delivery.", lang)}
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead("BRAND STATEMENT", zh ? "我们不只是展台搭建商，而是帮助中国品牌在海外建立专业形象的项目伙伴。" : "We don’t just build booths. We make Chinese brands look at home — overseas.", zh ? "对出海品牌来说，展会空间不只是一个临时结构，而是品牌可信度、产品价值和市场准备度的公开表达。Ultra Expo 帮助客户将品牌目标转化为空间体验，让中国品牌在海外展会中呈现出更专业、更本地化、更可信的形象。" : "For Chinese brands entering international markets, exhibition spaces are more than temporary structures. They are public expressions of brand credibility, product value, and market readiness. Ultra Expo helps transform brand ambition into spaces that feel professional, localized, and ready for global audiences.")}
        ${statGrid(lang)}
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead("CORE SERVICES", zh ? "四大业务板块" : "End-to-End Exhibition Services", zh ? "其中「海外落地」是我们的核心差异化能力。" : "Overseas Delivery is Ultra Expo’s core differentiator.")}
        ${serviceGrid(lang)}
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "全球供应链" : "GLOBAL SUPPLY CHAIN", zh ? "全球生产与落地资源" : "Global production and delivery resources.", zh ? "5 个自有工厂、3 大区域办公室与 20+ 海外搭建伙伴共同支撑本地化生产与现场执行。" : "5 self-owned factories, 3 regional offices, and 20+ overseas build partners support localized production and on-site execution.")}
        ${nodesGrid(lang)}
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "全球展会版图" : "GLOBAL EXHIBITIONS", zh ? "覆盖关键国际展会市场的项目经验。" : "Exhibition experience across key global markets.", zh ? "我们帮助品牌在不同地区、行业与展会场景中保持稳定、专业和一致的品牌呈现。" : "Ultra Expo helps brands show up consistently across regions, industries, and event formats.")}
        ${tokenList(shows)}
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "资质与认证" : "CERTIFICATIONS & MEMBERSHIPS", zh ? "以质量、安全与国际运营能力支撑项目交付。" : "Certified for quality, safety, and international operations.", "")}
        <div class="ultra-grid cols-3">${certifications.map(c => `<article class="ultra-card"><div class="ultra-section-kicker">${c[0]}</div><h3>${esc(c[0])}</h3><p>${esc(zh ? c[2] : c[1])}</p></article>`).join("")}</div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "合作客户" : "CLIENTS", zh ? "服务全球与中国品牌。" : "Trusted by global and Chinese brands.", "")}
        ${tokenList(clients)}
      </div></section>
    `;
  }

  function servicesPage(lang) {
    const zh = lang === "zh";
    return `
      ${pageHero(zh ? "业务能力" : "CORE SERVICES", zh ? "从策略到现场的全球展会交付服务" : "End-to-end exhibition services, from strategy to site.", zh ? "海外展会的难点不只是设计，而是策略、空间设计、生产、物流、清关、现场施工和跨时区沟通之间的衔接。Ultra Expo 将这些环节整合进同一套交付体系。" : "Overseas exhibitions are not only about design. Ultra Expo integrates strategy, spatial design, production, logistics, customs clearance, on-site construction, and cross-time-zone communication into one delivery system.", lang)}
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "四大服务模块" : "SERVICE MODULES", zh ? "Strategy / Design / Abroad / Build 一体化协同。" : "Strategy / Design / Abroad / Build as one integrated system.", zh ? "客户面对一个负责到底的团队，而不是彼此割裂的供应商。" : "Clients work with one accountable team instead of fragmented vendors.")}
        ${serviceGrid(lang)}
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "项目流程" : "PROJECT FLOW", zh ? "从需求沟通到现场开展的清晰流程。" : "A clear process from brief to opening day.", zh ? "每个关键节点都被拆解、确认和管理，降低海外展会交付风险。" : "Every milestone is defined, reviewed, and managed to reduce overseas exhibition delivery risk.")}
        <div class="ultra-grid cols-3">${projectFlow[lang].map((step, i) => `<article class="ultra-card"><div class="ultra-section-kicker">${String(i + 1).padStart(2, "0")}</div><h3>${esc(step)}</h3><p>${esc(zh ? "确认目标、范围、材料、时间与现场执行状态，保证项目进入下一阶段前清晰可控。" : "Confirm goals, scope, materials, timing, and execution status before the project moves to the next stage.")}</p></article>`).join("")}</div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "交付系统" : "DELIVERY SYSTEM", zh ? "为海外展会的真实风险而设计。" : "Designed for the real risks of overseas exhibitions.", "")}
        ${tokenList(zh ? ["本地化供应链", "跨时区项目协同", "工程化细节控制", "一个负责到底的项目团队", "透明的关键节点", "现场项目管理"] : ["Localized supply chain", "Cross-time-zone coordination", "Engineering-driven detail control", "One accountable team", "Transparent milestones", "On-site project management"])}
      </div></section>
    `;
  }

  function filterState() {
    const params = new URLSearchParams(window.location.search);
    return {
      year: params.get("year") || "All",
      industry: params.get("industry") || "All",
      region: params.get("region") || "All",
      type: params.get("type") || "All"
    };
  }

  function filteredCases(state) {
    return CASES.filter(item => {
      if (state.year !== "All" && String(item.year) !== state.year) return false;
      if (state.industry !== "All" && item.industry !== state.industry) return false;
      if (state.region !== "All" && item.region !== state.region) return false;
      if (state.type !== "All" && item.type !== state.type) return false;
      return true;
    });
  }

  function filterOptions(field) {
    const fixed = {
      year: ["All", "2026", "2025", "2024"],
      industry: ["All", "Energy", "Battery", "Industrial", "Automotive", "Consumer Tech", "Telecom", "Water Treatment", "Retail", "Launch Event", "Smart Manufacturing", "Exhibition"],
      region: ["All", "Europe", "North America", "South America", "Asia", "Middle East", "China", "Global"],
      type: ["All", "Design", "Delivered", "Event"]
    };
    return fixed[field];
  }

  function optionLabel(field, value, lang) {
    if (value === "All") return labels[lang].all;
    if (field === "industry") return filterLabels[lang].industries[value] || value;
    if (field === "region") return filterLabels[lang].regions[value] || value;
    if (field === "type") return filterLabels[lang].types[value] || value;
    return value;
  }

  function filtersHTML(lang, state) {
    return `<div class="ultra-filter">${["year", "industry", "region", "type"].map(field => `
      <div class="ultra-filter-group">
        <div class="ultra-filter-label">${esc(filterLabels[lang][field])}</div>
        <div class="ultra-filter-options">
          ${filterOptions(field).map(value => `<button data-filter="${field}" data-value="${esc(value)}" class="${state[field] === value ? "is-active" : ""}">${esc(optionLabel(field, value, lang))}</button>`).join("")}
        </div>
      </div>
    `).join("")}
    <div><button data-clear-filters>${labels[lang].clear}</button></div>
    </div>`;
  }

  function caseMeta(item) {
    return [item.location, item.year, item.area, item.industry, item.region].filter(Boolean);
  }

  function caseCard(item, lang) {
    return `
      <a class="ultra-case-card" href="${routeLink(`/cases/${item.id}`)}" data-route="/cases/${esc(item.id)}">
        ${item.image ? `<img src="${esc(item.image)}" alt="${esc(item.client)} ${esc(item.event)}">` : `<div class="ultra-placeholder"></div>`}
        <div class="ultra-case-info">
          <h3>${esc(item.client)}</h3>
          <p>${esc(item.event)}</p>
          <div class="ultra-meta">${caseMeta(item).map(x => `<span>${esc(x)}</span>`).join("")}</div>
          <div class="ultra-meta">${(item.tags || []).slice(0, 3).map(x => `<span>${esc(optionLabel("industry", x, lang))}</span>`).join("")}</div>
        </div>
      </a>
    `;
  }

  function casesPage(lang) {
    const zh = lang === "zh";
    const state = filterState();
    const items = filteredCases(state);
    const featured = CASES.filter(c => c.featured).slice(0, 8);
    return `
      ${pageHero(zh ? "案例中心" : "SELECTED WORKS", zh ? "以真实项目，展示从设计到交付的能力。" : "Real projects that prove design, delivery, and execution.", zh ? "从欧洲、北美、南美、亚洲到中东市场，Ultra Expo 为新能源、储能、工业制造、汽车、消费电子、科技、水处理、零售空间与活动发布等行业客户提供展会设计与海外交付服务。" : "From Europe, North America, South America, and Asia to the Middle East, Ultra Expo delivers exhibition and event projects for brands across energy, battery, industrial manufacturing, automotive, consumer electronics, technology, water treatment, retail, and launch event sectors.", lang)}
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "精选案例" : "FEATURED CASES", labels[lang].featured, "")}
        <div class="ultra-case-grid">${featured.map(c => caseCard(c, lang)).join("")}</div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "案例数据库" : "CASE DATABASE", `${labels[lang].allCases} / ${items.length}`, zh ? "按年份、行业、地区和案例类型组合筛选。" : "Filter by year, industry, region, and case type.")}
        ${filtersHTML(lang, state)}
        <div class="ultra-case-grid">${items.map(c => caseCard(c, lang)).join("")}</div>
      </div></section>
    `;
  }

  function caseDetailPage(id, lang) {
    const zh = lang === "zh";
    const item = CASES.find(c => c.id === id) || CASES[0];
    const overview = [
      ["Client", "客户", item.client],
      ["Event", "展会", item.event],
      ["Location", "地点", item.location],
      ["Area", "面积", item.area],
      ["Year", "年份", item.year],
      ["Industry", "行业", item.industry],
      ["Services", "服务内容", (item.services || []).join(" / ")]
    ].filter(x => x[2]);
    const related = CASES.filter(c => c.id !== item.id && (c.industry === item.industry || c.region === item.region)).slice(0, 3);
    return `
      ${pageHero(item.type || "CASE", item.client, `${item.event}${item.location ? " · " + item.location : ""}${item.year ? " · " + item.year : ""}`, lang)}
      <section class="ultra-section"><div class="ultra-wrap">
        <div class="ultra-case-grid"><a class="ultra-case-card"><img src="${esc(item.image)}" alt="${esc(item.client)}"></a></div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "项目概览" : "PROJECT OVERVIEW", labels[lang].overview, item.description ? item.description[lang] : "")}
        <div class="ultra-grid cols-4">${overview.map(row => `<div class="ultra-stat"><strong>${esc(row[2])}</strong><span>${esc(zh ? row[1] : row[0])}</span></div>`).join("")}</div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        <div class="ultra-grid cols-2">
          <article class="ultra-card"><div class="ultra-section-kicker">${labels[lang].background}</div><h3>${zh ? "高流量国际展会中的品牌表达" : "Brand presence in a high-traffic international exhibition"}</h3><p>${zh ? "客户需要在海外展会中建立专业的品牌形象，同时支持品牌识别、产品展示与渠道沟通。" : "The client needed a professional overseas exhibition presence that could support brand visibility, product communication, and channel conversations."}</p></article>
          <article class="ultra-card"><div class="ultra-section-kicker">${labels[lang].strategy}</div><h3>${zh ? "清晰的产品分区与开放动线" : "Clear product zones and open circulation"}</h3><p>${zh ? "展台通过高识别度品牌结构、清晰产品分区、开放式动线与洽谈空间，帮助观众快速识别品牌并进入沟通场景。" : "The booth uses high-visibility brand structure, clear product zones, open circulation, and meeting areas to help visitors quickly identify the brand."}</p></article>
          <article class="ultra-card"><div class="ultra-section-kicker">${labels[lang].scope}</div><h3>${zh ? "从方案到现场的一体化交付" : "Integrated delivery from concept to site"}</h3><ul>${(zh ? ["概念设计", "3D 渲染", "施工图深化", "材料确认", "本地制作 / 工厂预制", "物流协调", "现场搭建", "展期支持", "拆撤 / 回运"] : ["Concept design", "3D visualization", "Construction drawing", "Material confirmation", "Local production / prefabrication", "Logistics coordination", "On-site build", "Exhibition support", "Dismantling / return logistics"]).map(x => `<li>${x}</li>`).join("")}</ul></article>
          <article class="ultra-card"><div class="ultra-section-kicker">${labels[lang].value}</div><h3>${zh ? "把设计转化为可控的海外交付流程" : "Turning design into a controllable overseas delivery process"}</h3><p>${zh ? "Ultra Expo 将已确认的设计方案转化为可控的海外交付流程，保障品牌呈现、现场质量与执行周期。" : "Ultra Expo helped translate the approved design into a controllable overseas delivery process, protecting brand presentation, site quality, and execution timing."}</p></article>
        </div>
      </div></section>
      <section class="ultra-section"><div class="ultra-wrap">
        ${sectionHead(zh ? "相关案例" : "RELATED CASES", labels[lang].related, "")}
        <div class="ultra-case-grid">${related.map(c => caseCard(c, lang)).join("")}</div>
      </div></section>
    `;
  }

  function contactPage(lang) {
    const zh = lang === "zh";
    const fields = zh ? ["姓名", "公司", "邮箱", "电话 / WhatsApp / WeChat", "展会名称", "国家 / 城市", "展位面积", "展会时间", "留言"] : ["Name", "Company", "Email", "Phone / WhatsApp / WeChat", "Exhibition Name", "Country / City", "Booth Size", "Exhibition Date", "Message"];
    const projectTypes = zh ? ["品牌策划", "空间设计", "海外落地", "工程搭建", "新品发布", "零售空间", "全流程项目", "活动 / 路演"] : ["Strategy", "Space Design", "Overseas Delivery", "Engineering & Build", "Product Launch", "Retail Space", "Full-Service Project", "Event / Roadshow"];
    const budgets = zh ? ["待沟通", "50,000 美元以下", "50,000–100,000 美元", "100,000–300,000 美元", "300,000 美元以上"] : ["To be discussed", "Under 50K USD", "50K–100K USD", "100K–300K USD", "300K+ USD"];
    return `
      ${pageHero(zh ? "联系我们" : "START A PROJECT", zh ? "让我们一起为你的品牌，在全球搭建舞台。" : "Let’s build your global stage.", zh ? "告诉我们你的展会名称、国家城市、展位面积与项目时间，Ultra Expo 将为你评估设计与海外落地方案。" : "Tell us your exhibition name, country, city, booth size, and project timeline. Ultra Expo will help evaluate your design and overseas delivery needs.", lang)}
      <section class="ultra-section"><div class="ultra-wrap">
        <div class="ultra-form">
          <form class="ultra-form-panel" data-contact-form>
            <div class="ultra-section-kicker">${zh ? "提交你的项目需求" : "SUBMIT YOUR PROJECT BRIEF"}</div>
            <div class="ultra-form-grid">
              ${fields.map((field, i) => `<div class="ultra-field ${i === fields.length - 1 ? "full" : ""}"><label>${esc(field)}</label>${i === fields.length - 1 ? `<textarea name="${esc(field)}"></textarea>` : `<input name="${esc(field)}" ${field.includes("Email") || field.includes("邮箱") ? "type=\"email\"" : ""}>`}</div>`).join("")}
              <div class="ultra-field"><label>${zh ? "需求类型" : "Project Type"}</label><select>${projectTypes.map(x => `<option>${esc(x)}</option>`).join("")}</select></div>
              <div class="ultra-field"><label>${zh ? "预算区间" : "Budget Range"}</label><select>${budgets.map(x => `<option>${esc(x)}</option>`).join("")}</select></div>
              <div class="ultra-field full"><label>${zh ? "上传附件" : "Upload File"}</label><input type="file"><p class="ultra-copy">${zh ? "如有展位图、品牌手册、产品图片或展商手册，可上传附件，方便我们更快评估。" : "Upload booth plan, brand guideline, product images, or exhibition manual if available."}</p></div>
            </div>
            <button class="ultra-submit" type="submit">${zh ? "提交项目需求" : "Submit Project Brief"}</button>
            <p class="ultra-copy" data-form-success hidden>${zh ? "感谢提交。我们的项目团队会查看你的需求，并尽快与你联系。" : "Thank you. Our project team will review your brief and contact you shortly."}</p>
          </form>
          <aside class="ultra-form-panel">
            <div class="ultra-section-kicker">${zh ? "联系方式" : "CONTACT INFO"}</div>
            <h3>${zh ? "什么信息可以帮助我们更快回复？" : "What helps us respond faster?"}</h3>
            <p class="ultra-copy"><a href="mailto:jack@ultraexpo.com">jack@ultraexpo.com</a><br>+86 185 0614 4181<br>${zh ? "中国苏州" : "Suzhou, China"}<br>${zh ? "苏州 / 香港 / 洛杉矶 / 柏林" : "Suzhou / Hong Kong / Los Angeles / Berlin"}</p>
            <ul>${(zh ? ["展会名称和地点", "展位面积和展位图", "展会时间", "品牌手册或 Logo 文件", "产品图片和重点产品清单", "预期服务范围", "预算区间", "目标时间节点"] : ["Exhibition name and location", "Booth size and floor plan", "Exhibition dates", "Brand guideline or logo files", "Product images and key product list", "Expected service scope", "Budget range", "Target timeline"]).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
            <div class="ultra-hero-actions"><a class="ultra-primary" href="mailto:jack@ultraexpo.com">${zh ? "发送邮件" : "Send Email"}</a><a class="ultra-secondary" href="${routeLink("/services")}" data-route="/services">${labels[lang].viewServices}</a></div>
          </aside>
        </div>
      </div></section>
    `;
  }

  function routeContent(path, lang) {
    if (path === "/about") return aboutPage(lang);
    if (path === "/services") return servicesPage(lang);
    if (path === "/cases") return casesPage(lang);
    if (path.startsWith("/cases/")) return caseDetailPage(path.split("/").pop(), lang);
    if (path === "/contact") return contactPage(lang);
    return "";
  }

  function renderAppPage(path, lang) {
    let root = document.getElementById("ultra-app");
    if (!root) {
      root = document.createElement("div");
      root.id = "ultra-app";
      document.body.appendChild(root);
    }
    document.documentElement.classList.remove("ultra-home-active");
    document.documentElement.classList.add("ultra-app-active");
    root.innerHTML = `<div class="ultra-site">${navHTML(lang, path)}<main class="ultra-main">${routeContent(path, lang)}</main>${footerHTML(lang)}</div>`;
    document.title = `${path === "/" ? "Ultra Expo" : path.split("/")[1].replace(/^\w/, c => c.toUpperCase())} | Ultra Expo`;
  }

  function replaceText(root, map) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const text = node.nodeValue.trim();
      if (map[text] !== undefined) node.nodeValue = node.nodeValue.replace(text, map[text]);
    });
  }

  function enhanceHome(lang) {
    document.documentElement.classList.remove("ultra-app-active");
    document.documentElement.classList.add("ultra-home-active");
    const root = document.getElementById("ultra-app");
    if (root) root.innerHTML = `<div class="ultra-site ultra-home-shell">${navHTML(lang, "/")}</div>`;
    const container = document.getElementById("container");
    if (container) {
      replaceText(container, lang === "zh" ? homeText.enToZh : homeText.zhToEn);
      container.querySelectorAll("a").forEach(anchor => {
        const text = anchor.textContent.trim();
        const navIndex = labels.en.nav.indexOf(text);
        const zhIndex = labels.zh.nav.indexOf(text);
        const index = navIndex >= 0 ? navIndex : zhIndex;
        if (index >= 0) {
          const path = navItems[index].path;
          anchor.setAttribute("href", routeLink(path));
          anchor.setAttribute("data-route", path);
        }
        if (text === "Start a Project" || text === "提交展会需求") {
          anchor.setAttribute("href", routeLink("/contact"));
          anchor.setAttribute("data-route", "/contact");
        }
      });
    }
    const switcher = document.querySelector(".ultra-home-lang");
    if (switcher) switcher.remove();
  }

  function render() {
    const lang = locale();
    const path = currentPath();
    if (path === "/") {
      setTimeout(() => enhanceHome(lang), 300);
      return;
    }
    document.documentElement.classList.remove("ultra-home-active");
    const switcher = document.querySelector(".ultra-home-lang");
    if (switcher) switcher.remove();
    renderAppPage(path, lang);
  }

  function updateFilters(field, value) {
    const state = filterState();
    state[field] = value;
    const params = new URLSearchParams();
    Object.entries(state).forEach(([key, val]) => {
      if (val && val !== "All") params.set(key, val);
    });
    const query = params.toString();
    history.replaceState({}, "", `${routeLink("/cases")}${query ? "?" + query : ""}`);
    render();
  }

  document.addEventListener("click", event => {
    const localeBtn = event.target.closest("[data-locale]");
    if (localeBtn) {
      event.preventDefault();
      setLocale(localeBtn.dataset.locale);
      return;
    }
    const filterBtn = event.target.closest("[data-filter]");
    if (filterBtn) {
      event.preventDefault();
      updateFilters(filterBtn.dataset.filter, filterBtn.dataset.value);
      return;
    }
    if (event.target.closest("[data-clear-filters]")) {
      event.preventDefault();
      history.replaceState({}, "", routeLink("/cases"));
      render();
      return;
    }
    const link = event.target.closest("a[data-route]");
    if (link) {
      const path = link.dataset.route;
      if (path) {
        event.preventDefault();
        history.pushState({}, "", routeLink(path));
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });

  document.addEventListener("submit", event => {
    const form = event.target.closest("[data-contact-form]");
    if (!form) return;
    event.preventDefault();
    const success = form.querySelector("[data-form-success]");
    if (success) success.hidden = false;
  });

  window.addEventListener("popstate", render);
  window.addEventListener("DOMContentLoaded", render);
  setTimeout(render, 900);
})();
