(function () {
  const REPO_BASE = window.__ULTRA_BASE_PATH || "/";
  const ADMIN_CONFIG_KEY = "ultra-admin-config-v1";
  const ADMIN_SESSION_KEY = "ultra-admin-session-v1";
  const ADMIN_PASSWORD_HASH = "9a7ee57b5b0f2ad1785189fd021fdf1e9b790e958d8c8221aedb60325346526f";
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
      copyright: "© 2026 Ultra Expo. 保留所有权利。"
    }
  };

  const navItems = [
    { path: "/", key: 0 },
    { path: "/about", key: 1 },
    { path: "/services", key: 2 },
    { path: "/cases", key: 3 },
    { path: "/contact", key: 4 }
  ];

  const pageTitles = {
    en: {
      home: "Ultra Expo | Global Exhibition & Spatial Delivery",
      about: "About | Ultra Expo",
      services: "Services | Ultra Expo",
      cases: "Cases | Ultra Expo",
      contact: "Contact | Ultra Expo",
      admin: "Admin | Ultra Expo"
    },
    zh: {
      home: "皓创展览 Ultra Expo｜全球展会与空间设计落地服务",
      about: "公司介绍｜Ultra Expo 皓创展览",
      services: "业务能力｜Ultra Expo 皓创展览",
      cases: "案例中心｜Ultra Expo 皓创展览",
      contact: "联系我们｜Ultra Expo 皓创展览",
      admin: "后台配置｜Ultra Expo 皓创展览"
    }
  };

  const pageDescriptions = {
    en: {
      home: "Ultra Expo provides global exhibition and spatial design delivery services for Chinese brands going abroad, covering strategy, space design, overseas localization, engineering, and on-site build."
    },
    zh: {
      home: "皓创展览 Ultra Expo 为中国品牌出海提供全球展会与空间设计落地服务，覆盖品牌策划、空间设计、海外本地化、工程搭建与现场交付。"
    }
  };

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
      "Ultra Expo delivers the full stack for Chinese brands going global — strategy, spatial design, and end-to-end local build.": "为中国品牌出海提供全球展会与空间设计落地服务。",
      "View Cases": "查看案例",
      "Our Services": "了解服务能力",
      "Explore Services": "了解服务能力",
      "Trusted by China's most innovative global brands.": "服务新能源、汽车出行、智能制造、消费科技与全球活动等多个行业客户。",
      "TRUSTED BY": "我们的合作客户",
      "Countries & Regions": "覆盖国家与地区",
      "Projects Delivered": "全球交付项目",
      "Global Projects": "全球交付项目",
      "Exhibition Area Built": "累计交付面积",
      "Delivered Area": "累计交付面积",
      "Overseas Partners": "海外搭建伙伴",
      "Overseas Build Partners": "海外搭建伙伴",
      "Global experience, proven delivery.": "全球项目经验",
      "A global exhibition delivery team built for Chinese brands going global — from strategy and spatial design to end-to-end local build.": "一支为中国品牌出海而生的全球展会落地团队",
      "A global exhibition delivery team": "一支为中国品牌出海而生的",
      "built for Chinese brands": "全球展会落地团队",
      "going global — from strategy and spatial design to": "",
      "end-to-end local build.": "",
      "Ultra Expo was founded in Suzhou, China, with operations spanning 15+ countries. We specialize in overseas exhibitions, product launches, and retail spaces — delivering the full cycle from strategy and design to localized build.": "皓创展览 Ultra Expo 成立于中国苏州，业务覆盖全球 15+ 国家与地区。我们专注于海外展会、新品发布与零售空间，提供从策划、设计到本地化交付的全流程服务。",
      "We're not just a booth builder — we're the project partner that helps Chinese brands establish a professional, credible, localized presence at global exhibitions. Founded in Suzhou · 15+ countries · 200+ projects delivered.": "我们不只是展台搭建商，而是帮助中国品牌在海外建立专业、可信、本地化形象的项目伙伴。成立于苏州 · 覆盖 15+ 国家 · 交付 200+ 项目。",
      "Strategy": "Strategy",
      "Design": "Design",
      "Abroad": "Abroad",
      "Build": "Build",
      "End-to-End Exhibition Services": "核心业务",
      "Brand Planning": "Brand Planning",
      "Spatial Design": "Spatial Design",
      "Overseas Execution": "Overseas Execution",
      "Engineering & Build": "Engineering & Build",
      "Overseas strategy · Content & creative direction · Exhibition planning & timeline management": "出海策略 · 内容创意 · 展会规划",
      "Concept design · 3D visualization & rendering · Construction drawing package": "概念设计 · 3D 渲染 · 施工图深化",
      "Local sourcing & supplier management · Customs clearance & logistics · Cross-timezone project coordination": "本地供应 · 清关物流 · 跨时区项目管理",
      "Factory prefabrication · On-site construction & QC · Strike, pack & return logistics": "工厂预制 · 现场施工 · 拆撤回运",
      "Selected Works": "精选案例",
      "SELECTED WORKS": "精选案例",
      "From design to delivery.": "以真实项目，展示从设计到交付的能力。",
      "Real projects. Real results. Every booth, every country.": "真实项目。真实结果。每个展台，每个国家。",
      "Why Ultra": "为什么选择 Ultra",
      "WHY ULTRA": "为什么选择皓创",
      "Global delivery. Local execution.": "全球资源，本地交付。",
      "We turn cross-border exhibition uncertainty into controllable delivery.": "把跨国展会的不确定性，变成可控的交付结果。",
      "Turning cross-border uncertainty into": "把跨国展会的不确定性，",
      "controlled delivery.": "变成可控的交付结果。",
      "Localized Supply Chain": "本地化供应链",
      "Local supplier networks across Europe, North America, and Southeast Asia reduce logistics risk and compress delivery timelines.": "依托中国、欧洲与北美的工厂和仓储资源，我们减少对单一路线运输的依赖，并提升本地响应速度。",
      "Cross-Timezone Response": "跨时区项目协同",
      "Real-time project coordination across time zones. Clients stay informed at every stage; issues get resolved fast.": "中国团队与海外伙伴协同工作，支持亚洲、欧洲和北美之间的跨时区沟通。",
      "Controlled Timeline": "项目周期可控",
      "From kickoff to strike, every milestone is clearly defined and tracked. Overseas construction never becomes a black box.": "从概念设计、施工图深化、工厂预制、物流到现场搭建，每个阶段都有清晰的节点规划。",
      "On-Site Management": "现场项目管理",
      "Dedicated on-site project managers supervise every build phase. Quality visible, milestones controlled, anomalies handled in real time.": "我们与本地搭建团队协同，保障设计还原、施工质量和展期最终呈现。",
      "Let’s build your global stage.": "让我们一起为你的品牌，在全球搭建舞台。"
    }
  };
  homeText.zhToEn = Object.fromEntries(Object.entries(homeText.enToZh).map(([en, zh]) => [zh, en]).filter(([zh]) => zh));

  function locale() {
    return localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
  }

  function setLocale(next) {
    const path = currentPath();
    localStorage.setItem(STORAGE_KEY, next);
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    render();
    if (path === "/") {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 360);
    }
  }

  function applyLocaleAttributes(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.setAttribute("data-ultra-locale", lang);
  }

  function pageKey(path) {
    if (path === "/") return "home";
    return path.replace(/^\//, "").split("/")[0] || "home";
  }

  function caseTitle(item, lang) {
    const suffix = lang === "zh" ? "｜Ultra Expo 皓创展览" : " | Ultra Expo";
    if (!item) return pageTitles[lang].cases;
    const eventWithYear = `${item.event || ""}${item.year ? ` ${item.year}` : ""}`.trim();
    return `${[item.client, eventWithYear].filter(Boolean).join(" / ")}${suffix}`;
  }

  function titleForPath(path, lang) {
    if (path.startsWith("/cases/")) {
      return caseTitle(activeCases().find(item => item.id === path.split("/").pop()), lang);
    }
    return pageTitles[lang][pageKey(path)] || pageTitles[lang].home;
  }

  function descriptionForPath(path, lang) {
    if (path.startsWith("/cases/")) {
      const item = activeCases().find(entry => entry.id === path.split("/").pop());
      const detailDescription = item?.description?.[lang];
      if (detailDescription && (lang === "en" || /[\u4e00-\u9fff]/.test(detailDescription))) return detailDescription;
    }
    return pageDescriptions[lang].home;
  }

  function setMetaContent(selector, value) {
    const node = document.head.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function applyDocumentMeta(path, lang) {
    const title = titleForPath(path, lang);
    const description = descriptionForPath(path, lang);
    document.title = title;
    setMetaContent('meta[name="title"]', title);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:description"]', description);
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

  function defaultAdminConfig() {
    return {
      version: 1,
      updatedAt: "",
      modules: {
        home: {
          trusted: true,
          services: true,
          selectedWorks: true,
          metrics: true,
          footer: true
        }
      },
      footer: {
        contactLinks: [
          { key: "business", labelEn: "Business Partnership", labelZh: "商务合作", href: "/contact", route: "/contact", enabled: true },
          { key: "wechat-official", labelEn: "WeChat Official Account", labelZh: "微信公众号", href: "https://weixin.sogou.com/weixin?type=1&query=Ultra%20Expo", enabled: true },
          { key: "phone-consultation", labelEn: "Phone Consultation", labelZh: "电话咨询", href: "tel:+8618506144181", enabled: true }
        ],
        socialLinks: [
          { key: "phone", icon: "phone", labelEn: "Phone", labelZh: "电话", href: "tel:+8618506144181", enabled: true },
          { key: "email", icon: "email", labelEn: "Email", labelZh: "邮箱", href: "mailto:jack@ultraexpo.com", enabled: true },
          { key: "rednote", icon: "rednote", labelEn: "RED", labelZh: "小红书", href: "https://www.xiaohongshu.com/search_result?keyword=%E7%9A%93%E5%88%9B%E5%B1%95%E8%A7%88", enabled: true },
          { key: "wechat", icon: "wechat", labelEn: "WeChat", labelZh: "微信公众号", href: "https://weixin.sogou.com/weixin?type=1&query=%E7%9A%93%E5%88%9B%E5%B1%95%E8%A7%88", enabled: true },
          { key: "linkedin", icon: "linkedin", labelEn: "LinkedIn", labelZh: "领英", href: "https://www.linkedin.com/search/results/companies/?keywords=Ultra%20Expo", enabled: true }
        ]
      },
      integrations: {
        aliyun: {
          enabled: false,
          ossBucket: "",
          ossRegion: "",
          cdnDomain: "",
          accessKeyId: "",
          accessKeySecret: "",
          notes: "Do not store production secrets in a static site."
        },
        notion: {
          enabled: false,
          workspace: "",
          databaseId: "",
          apiEndpoint: "",
          integrationToken: "",
          notes: "Use a backend proxy before connecting a real Notion token."
        }
      },
      cases: {
        items: null
      }
    };
  }

  function mergeAdminConfig(base, saved) {
    if (!saved || typeof saved !== "object") return base;
    const output = { ...base, ...saved };
    output.modules = { ...base.modules, ...(saved.modules || {}) };
    output.modules.home = { ...base.modules.home, ...(saved.modules?.home || {}) };
    output.footer = { ...base.footer, ...(saved.footer || {}) };
    output.integrations = { ...base.integrations, ...(saved.integrations || {}) };
    output.integrations.aliyun = { ...base.integrations.aliyun, ...(saved.integrations?.aliyun || {}) };
    output.integrations.notion = { ...base.integrations.notion, ...(saved.integrations?.notion || {}) };
    output.cases = { ...base.cases, ...(saved.cases || {}) };
    return output;
  }

  function getAdminConfig() {
    const base = defaultAdminConfig();
    try {
      const raw = localStorage.getItem(ADMIN_CONFIG_KEY);
      return raw ? mergeAdminConfig(base, JSON.parse(raw)) : base;
    } catch (error) {
      console.warn("Unable to read Ultra admin config", error);
      return base;
    }
  }

  function saveAdminConfig(config) {
    const next = mergeAdminConfig(defaultAdminConfig(), config);
    next.updatedAt = new Date().toISOString();
    localStorage.setItem(ADMIN_CONFIG_KEY, JSON.stringify(next));
    return next;
  }

  function activeCases() {
    const override = getAdminConfig().cases?.items;
    return Array.isArray(override) && override.length ? override : CASES;
  }

  function adminLabel(item, lang) {
    return lang === "zh" ? (item.labelZh || item.labelEn || item.label || item.key || "") : (item.labelEn || item.labelZh || item.label || item.key || "");
  }

  function adminHref(item) {
    if (!item) return "#";
    if (item.route) return routeLink(item.route);
    const href = item.href || "#";
    return href.startsWith("/") ? routeLink(href) : href;
  }

  function adminJSON(value) {
    return esc(JSON.stringify(value, null, 2));
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
    const nextLang = lang === "zh" ? "en" : "zh";
    const langLabel = lang === "zh" ? "CN" : "EN";
    return `
      <nav class="ultra-nav">
        <a class="ultra-brand" href="${routeLink("/")}" data-route="/">
          <img class="ultra-brand-logo" src="${routeLink("/assets/ultra-logo.svg")}" alt="Ultra Expo 皓创展览">
        </a>
        <div class="ultra-links">
          ${navItems.map(item => `<a href="${routeLink(item.path)}" data-route="${item.path}" class="${activePath === item.path || (item.path === "/cases" && activePath.startsWith("/cases")) ? "is-active" : ""}">${L.nav[item.key]}</a>`).join("")}
        </div>
        <div class="ultra-actions">
          <button class="ultra-lang" type="button" data-locale-toggle="${nextLang}" aria-label="${lang === "zh" ? "Switch to English" : "切换到中文"}">
            <span class="ultra-lang-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18M12 3c3 3.25 3 14.75 0 18M12 3c-3 3.25-3 14.75 0 18"></path>
              </svg>
            </span>
            <span class="ultra-lang-label">${langLabel}</span>
          </button>
          <a class="ultra-primary" href="${routeLink("/contact")}" data-route="/contact">${L.cta}</a>
        </div>
      </nav>
    `;
  }

  function homeWhyHTML(lang) {
    const zh = lang === "zh";
    const metrics = zh ? [
      {
        label: "项目平均交付准时率",
        value: "99%",
        desc: "以里程碑节点管理设计、生产、物流与现场。"
      },
      {
        label: "最快方案响应",
        value: "24 小时",
        desc: "需求明确后快速完成方向判断与项目评估。"
      },
      {
        label: "覆盖展会类型",
        value: "8 大行业",
        desc: "服务新能源、储能、工业、汽车、科技等行业。"
      },
      {
        label: "客户复购率",
        value: "70%+",
        desc: "连续服务客户的跨区域展会与年度项目。"
      }
    ] : [
      {
        label: "Average on-time delivery",
        value: "99%",
        desc: "Milestone control across design, production, logistics, and site."
      },
      {
        label: "Fastest brief response",
        value: "24h",
        desc: "Fast direction check and project scoping after brief confirmation."
      },
      {
        label: "Industries covered",
        value: "8 sectors",
        desc: "Energy, battery, industrial, automotive, tech, events, and more."
      },
      {
        label: "Repeat client rate",
        value: "70%+",
        desc: "Long-term clients across regional exhibitions and annual programs."
      }
    ];
    const proofPoints = zh ? [
      ["设计搭建一体", "方案与落地不脱节，效果可还原"],
      ["自有产能", "工期与品质双重可控"],
      ["全球服务网络", "异地展会无缝执行"]
    ] : [
      ["Integrated design and build", "Concepts stay executable from plan to site"],
      ["Owned production capacity", "Schedule and quality stay under control"],
      ["Global service network", "Cross-border exhibitions execute with fewer gaps"]
    ];

    return `
      <section class="ultra-home-why" data-ultra-home-why>
        <div class="ultra-home-why-inner">
          <div class="ultra-home-why-copy">
            <div class="ultra-home-why-kicker"><span></span>${zh ? "为什么选择皓创" : "WHY ULTRA"}</div>
            <h2>${zh ? "把不确定变成可交付的结果" : "Turning uncertainty into delivered results"}</h2>
            <p>${zh ? "展览的难点从来不是某一个环节，而是设计、生产、物流、现场之间的衔接。皓创把这些环节收进同一个团队，让客户面对的永远是一个负责到底的对接人。" : "Exhibition risk rarely sits in a single step. It appears between design, production, logistics, and site execution. Ultra Expo brings these links into one accountable delivery system."}</p>
            <ul class="ultra-home-why-points">
              ${proofPoints.map(point => `<li><strong>${esc(point[0])}</strong><span>${esc(point[1])}</span></li>`).join("")}
            </ul>
          </div>
          <div class="ultra-home-why-panel">
            ${metrics.map(metric => `
              <article class="ultra-home-why-metric">
                <div>
                  <span>${esc(metric.label)}</span>
                  <p>${esc(metric.desc)}</p>
                </div>
                <strong>${esc(metric.value)}</strong>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function homeWhyCardsHTML(lang) {
    const zh = lang === "zh";
    const cards = zh ? [
      {
        value: "99%",
        title: "项目准时交付",
        text: "以里程碑节点管理设计、生产、物流与现场，确保跨国展会交付节奏清晰可控。"
      },
      {
        value: "24h",
        title: "最快方案响应",
        text: "需求明确后快速完成方向判断、预算评估与落地路径建议，减少前期反复。"
      },
      {
        value: "8 大行业",
        title: "多行业展会经验",
        text: "覆盖新能源、储能、工业制造、汽车出行、消费科技与全球活动等行业客户。"
      },
      {
        value: "70%+",
        title: "客户复购合作",
        text: "长期服务客户的跨区域展会与年度项目，保持设计、生产和现场执行的一致性。"
      }
    ] : [
      {
        value: "99%",
        title: "On-time Delivery",
        text: "Milestone-based control across design, production, logistics, and on-site build keeps delivery visible."
      },
      {
        value: "24h",
        title: "Fastest Brief Response",
        text: "Once a brief is confirmed, we quickly scope direction, budget, and a practical delivery path."
      },
      {
        value: "8 Sectors",
        title: "Industry Coverage",
        text: "Experience across energy, battery, industrial, automotive, consumer tech, and global events."
      },
      {
        value: "70%+",
        title: "Repeat Client Rate",
        text: "Long-term clients trust us across regional exhibitions and annual project programs."
      }
    ];

    return `
      <section class="ultra-home-why" data-ultra-home-why>
        <div class="ultra-home-why-inner">
          <h2>${zh ? `把跨境不确定性转化为 <span>可控交付。</span>` : `Turning cross-border uncertainty into <span>controlled delivery.</span>`}</h2>
          <div class="ultra-home-why-grid">
            ${cards.map(card => `
              <article class="ultra-home-why-card">
                <div class="ultra-home-why-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 4v16M4 12h16M7.5 7.5h9v9h-9z"></path>
                  </svg>
                </div>
                <div class="ultra-home-card-line"></div>
                <strong class="ultra-home-why-num">${esc(card.value)}</strong>
                <h3>${esc(card.title)}</h3>
                <p>${esc(card.text)}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function findHomeWhySection(container) {
    const markers = ["Why Ultra", "为什么选择 Ultra", "为什么选择 ULTRA", "Turning cross-border", "跨境不确定性", "跨国展会的不确定性", "变成可控的交付结果", "Localized Supply Chain", "本地化供应链"];
    const sections = [...container.querySelectorAll("section")];
    return sections.find(section => markers.some(marker => section.textContent.includes(marker)));
  }

  function hideHomeSectionsByMarkers(container, markers, attrName, skipSelector) {
    [...container.querySelectorAll("section")].forEach(section => {
      if (
        section.hasAttribute("data-ultra-home-services") ||
        section.hasAttribute("data-ultra-home-selected") ||
        section.hasAttribute("data-ultra-home-why") ||
        section.hasAttribute("data-ultra-home-bottom")
      ) return;
      if (skipSelector && (section.matches(skipSelector) || section.closest(skipSelector) || section.querySelector(skipSelector))) return;
      if (attrName === "ultraOriginalServices" && !isHomeServicesOriginal(section)) return;
      if (!markers.some(marker => section.textContent.includes(marker))) return;
      section.dataset[attrName] = "true";
      section.hidden = true;
      section.style.display = "none";
    });
  }

  function injectHomeWhySection(lang) {
    const container = document.getElementById("container");
    if (!container) return;
    const existing = container.querySelector("[data-ultra-home-why]");
    if (existing) existing.remove();
    const original = container.querySelector("[data-ultra-original-why]") || findHomeWhySection(container);
    if (!original) return;
    original.dataset.ultraOriginalWhy = "true";
    original.hidden = true;
    original.style.display = "none";
    original.insertAdjacentHTML("beforebegin", homeWhyCardsHTML(lang));
    hideHomeSectionsByMarkers(container, ["Why Ultra", "为什么选择 Ultra", "为什么选择 ULTRA", "Turning cross-border", "跨境不确定性", "跨国展会的不确定性", "变成可控的交付结果", "Localized Supply Chain", "本地化供应链"], "ultraOriginalWhy", "[data-ultra-home-why]");
    container.querySelector("[data-ultra-home-why]")?.setAttribute("data-animate", "");
  }

  function homeServiceIcon(kind) {
    const icons = {
      strategy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5h16M4 12h10M4 17.5h7"></path><path d="m15.5 15 2 2 3.5-4"></path></svg>`,
      design: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5h16"></path><path d="m6 16 8.8-8.8 2 2L8 18H6v-2Z"></path><path d="m13.4 8.6 2 2"></path></svg>`,
      abroad: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4c2.2 2.5 2.2 13.5 0 16M12 4c-2.2 2.5-2.2 13.5 0 16"></path><path d="m16.4 16.2 2.1 2.1"></path></svg>`,
      build: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20h14"></path><path d="M7 20V8l5-3 5 3v12"></path><path d="M9.5 11h5M9.5 15h5"></path></svg>`
    };
    return icons[kind] || icons.strategy;
  }

  function homeServicesHTML(lang) {
    const zh = lang === "zh";
    const serviceItems = [
      {
        icon: "strategy",
        code: "01",
        enTitle: "Strategy",
        zhTitle: "Strategy",
        enSub: "Brand Planning",
        zhSub: "出海策略 · 内容创意 · 展会规划",
        enDesc: "Overseas strategy · Content & creative direction · Exhibition planning & timeline management",
        zhDesc: "我们帮助客户在空间设计开始之前明确参展目标、品牌信息层级、产品表达与观众动线，让展台真正服务品牌出海目标。"
      },
      {
        icon: "design",
        code: "02",
        enTitle: "Design",
        zhTitle: "Design",
        enSub: "Spatial Design",
        zhSub: "概念设计 · 3D 渲染 · 施工图深化",
        enDesc: "Concept design · 3D visualization & rendering · Construction drawing package",
        zhDesc: "我们将品牌语言转化为空间结构，结合视觉识别、产品陈列、灯光材料与观众动线进行系统设计。"
      },
      {
        icon: "abroad",
        code: "03",
        enTitle: "Abroad",
        zhTitle: "Abroad",
        enSub: "Overseas Execution",
        zhSub: "本地供应 · 清关物流 · 跨时区项目管理",
        enDesc: "Local sourcing & supplier management · Customs clearance & logistics · Cross-timezone project coordination",
        zhDesc: "通过本地化供应链、海外伙伴与项目管理，我们降低跨国展会交付中的不确定性。"
      },
      {
        icon: "build",
        code: "04",
        enTitle: "Build",
        zhTitle: "Build",
        enSub: "Engineering & Build",
        zhSub: "工厂预制 · 现场施工 · 拆撤回运",
        enDesc: "Factory prefabrication · On-site construction & QC · Strike, pack & return logistics",
        zhDesc: "从工厂预制到现场搭建，我们关注设计还原、工期控制、材料质量和展期稳定运行。"
      }
    ];
    return `
      <section class="ultra-home-services" data-ultra-home-services data-ultra-static-en>
        <div class="ultra-home-services-inner">
          <div class="ultra-home-services-head">
            <div class="ultra-home-services-kicker">END-TO-END EXHIBITION SERVICES</div>
            <h2>${zh ? "从策略到现场的全球展会交付服务" : "End-to-end Exhibition Services"}</h2>
            <p>${zh ? "海外展会的难点不只是设计，而是策略、空间设计、生产、物流、清关、现场施工和跨时区沟通之间的衔接。Ultra Expo 将这些环节整合进同一套交付体系。" : "Overseas exhibitions are not only about design. Ultra Expo integrates strategy, spatial design, production, logistics, customs clearance, on-site construction, and cross-time-zone communication into one delivery system."}</p>
          </div>
          <div class="ultra-home-services-list">
            ${serviceItems.map(item => `
              <article class="ultra-home-service-row">
                <div class="ultra-home-service-code">${item.code}</div>
                <div class="ultra-home-service-title">
                  <h3>${zh ? item.zhTitle : item.enTitle}</h3>
                  <span>${item.enSub}</span>
                </div>
                <div class="ultra-home-service-copy">
                  <strong>${item.enDesc}</strong>
                  <p>${zh ? item.zhDesc : item.enDesc}</p>
                </div>
                <a class="ultra-home-service-icon" href="${routeLink("/services")}" data-route="/services" aria-label="${esc(zh ? `${item.zhTitle}服务详情` : `${item.enTitle} service details`)}">
                  ${homeServiceIcon(item.icon)}
                </a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function isHomeServicesOriginal(section) {
    if (!section || section.hasAttribute("data-ultra-home-services")) return false;
    const text = section.textContent || "";
    if (text.includes("End-to-End Exhibition Services")) return true;
    if (text.includes("核心业务")) return true;
    if (text.includes("Brand Planning") && text.includes("Construction drawing package")) return true;
    if (text.includes("Brand Planning") && text.includes("Engineering & Build")) return true;
    if (text.includes("Brand Planning") && text.includes("Overseas Execution")) return true;
    if (text.includes("品牌策划") && text.includes("工程搭建")) return true;
    if (text.includes("Overseas strategy") && text.includes("Factory prefabrication")) return true;
    if (text.includes("Content & creative direction") && text.includes("On-site construction")) return true;
    return false;
  }

  function findHomeServicesSection(container) {
    const markers = ["End-to-End Exhibition Services", "核心业务", "Brand Planning", "品牌策划", "Overseas strategy", "出海策略", "Spatial Design", "空间设计", "Overseas Execution", "海外落地", "Engineering & Build", "工程搭建"];
    const sections = [...container.querySelectorAll("section")];
    return sections.find(section => isHomeServicesOriginal(section));
  }

  function injectHomeServicesSection(lang) {
    const container = document.getElementById("container");
    if (!container) return;
    container.querySelectorAll("[data-ultra-home-services]").forEach(node => node.remove());
    container.querySelectorAll("[data-ultra-original-services]").forEach(section => {
      if (isHomeServicesOriginal(section)) return;
      delete section.dataset.ultraOriginalServices;
      section.hidden = false;
      section.style.display = "";
    });
    const original = [...container.querySelectorAll("[data-ultra-original-services]")].find(section => isHomeServicesOriginal(section)) || findHomeServicesSection(container);
    if (!original) return;
    original.dataset.ultraOriginalServices = "true";
    original.hidden = true;
    original.style.display = "none";
    original.insertAdjacentHTML("beforebegin", homeServicesHTML(lang));
    hideHomeSectionsByMarkers(container, ["End-to-End Exhibition Services", "核心业务", "Brand Planning", "品牌策划", "Overseas strategy", "出海策略", "Spatial Design", "空间设计", "Overseas Execution", "海外落地", "Engineering & Build", "工程搭建"], "ultraOriginalServices", "[data-ultra-home-services]");
    const injected = container.querySelector("[data-ultra-home-services]");
    if (injected) {
      injected.hidden = false;
      injected.style.display = "";
      delete injected.dataset.ultraOriginalServices;
      injected.setAttribute("data-animate", "");
    }
  }

  function homeSelectedHTML(lang) {
    const zh = lang === "zh";
    const cases = activeCases()
      .filter(item => item.image)
      .slice(0, 12);
    const fallback = [
      "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/ac7c08ada3b7308087d07536168733b1e83c67fd.ac7c08ad.png",
      "./_components/v2/b6c9104d28fb320af418bddd3d018fb04857710a/1acb0a430a6aa68b9dff5c5c890aa6e78a887638.1acb0a43.png"
    ];
    const items = cases.length ? cases : fallback.map((image, index) => ({
      id: "selected-fallback-" + index,
      client: "ULTRA",
      event: "Selected Work",
      year: "",
      image
    }));
    const rowA = [...items.slice(3, 11), ...items.slice(0, 3)];
    const rowB = [...items.slice(7), ...items.slice(0, 7)];
    const imageCard = item => `
      <a class="ultra-selected-card" href="${routeLink(`/cases/${item.id}`)}" data-route="/cases/${esc(item.id)}" aria-label="${esc(`${item.client} ${item.event || ""}`)}">
        <img src="${esc(item.image)}" alt="${esc(`${item.client} ${item.event || ""}`)}">
        <span>
          <strong>${esc(item.client)}</strong>
          <em>${esc([item.event, item.year].filter(Boolean).join(" / "))}</em>
        </span>
      </a>
    `;
    const row = (itemsForRow, reverse = false) => {
      const doubled = [...itemsForRow, ...itemsForRow];
      return `
        <div class="ultra-selected-row ${reverse ? "is-offset" : ""}">
          <div class="ultra-selected-track">
            ${doubled.map(imageCard).join("")}
          </div>
        </div>
      `;
    };
    return `
      <section class="ultra-home-selected" data-ultra-home-selected>
        <div class="ultra-home-selected-head">
          <div class="ultra-home-selected-kicker">${zh ? "精选案例" : "SELECTED WORKS"}</div>
          <h2>${zh ? "以真实项目，展示从设计到交付的能力。" : "From design to delivery."}</h2>
          <p>${zh ? "Ultra Expo 为新能源、储能、工业制造、汽车、消费电子和科技行业客户提供展会设计与海外交付服务。" : "Real projects. Real results. Every booth, every country."}</p>
        </div>
        <div class="ultra-home-selected-marquee" aria-label="${zh ? "精选案例图片" : "Selected works gallery"}">
          ${row(rowA)}
          ${row(rowB, true)}
        </div>
      </section>
    `;
  }

  function findHomeSelectedSection(container) {
    const markers = ["Selected Works", "精选案例", "From design to delivery", "从设计到交付"];
    const sections = [...container.querySelectorAll("section")];
    return sections.find(section => markers.some(marker => section.textContent.includes(marker)));
  }

  function injectHomeSelectedSection(lang) {
    const container = document.getElementById("container");
    if (!container) return;
    container.querySelectorAll("[data-ultra-home-selected]").forEach(node => node.remove());
    const original = container.querySelector("[data-ultra-original-selected]") || findHomeSelectedSection(container);
    if (!original) return;
    original.dataset.ultraOriginalSelected = "true";
    original.hidden = true;
    original.style.display = "none";
    original.insertAdjacentHTML("beforebegin", homeSelectedHTML(lang));
    container.querySelector("[data-ultra-home-selected]")?.setAttribute("data-animate", "");
  }

  function findHomeBottomSection(container) {
    const markers = ["Let's build your", "Let’s build your", "Start a Project", "Submit Project Brief", "Send an Email", "ULTRA EXPO", "让我们一起为你的品牌", "提交项目需求", "发送邮件", "告诉我们你的展会名称"];
    const sections = [...container.querySelectorAll("section")];
    return sections.find(section => markers.some(marker => section.textContent.includes(marker)));
  }

  function injectHomeBottom(lang) {
    const container = document.getElementById("container");
    if (!container) return;
    container.querySelectorAll("[data-ultra-home-bottom]").forEach(node => node.remove());
    const original = container.querySelector("[data-ultra-original-bottom]") || findHomeBottomSection(container);
    if (!original) return;
    original.dataset.ultraOriginalBottom = "true";
    original.hidden = true;
    original.style.display = "none";
    let sibling = original.nextElementSibling;
    while (sibling) {
      const text = sibling.textContent || "";
      if (/ULTRA EXPO|Links|Services|Contact|Copyright|© 2026|联系我们|导航|服务|联系/.test(text)) {
        sibling.dataset.ultraOriginalBottom = "true";
        sibling.hidden = true;
        sibling.style.display = "none";
        sibling = sibling.nextElementSibling;
      } else {
        break;
      }
    }
    original.insertAdjacentHTML("beforebegin", `<div class="ultra-site ultra-home-bottom" data-ultra-home-bottom data-animate>${siteBottomHTML(lang)}</div>`);
    hideHomeSectionsByMarkers(container, ["Let's build your", "Let’s build your", "Start a Project", "Submit Project Brief", "Send an Email", "让我们一起为你的品牌", "提交项目需求", "发送邮件", "告诉我们你的展会名称"], "ultraOriginalBottom", "[data-ultra-home-bottom]");
  }

  function homeHeroTitle(lang) {
    return lang === "zh"
      ? ["\u8ba9\u4e2d\u56fd\u54c1\u724c\u5728\u6d77\u5916", "\u5448\u73b0\u51fa\u672c\u571f\u54c1\u724c\u7684\u59ff\u6001"]
      : ["We make Chinese brands", "look at home \u2014 overseas."];
  }

  function homeHeroCopy(lang) {
    return lang === "zh"
      ? "\u4e3a\u4e2d\u56fd\u54c1\u724c\u51fa\u6d77\u63d0\u4f9b\u5168\u7403\u5c55\u4f1a\u4e0e\u7a7a\u95f4\u8bbe\u8ba1\u843d\u5730\u670d\u52a1\u3002"
      : "Ultra Expo delivers the full stack for Chinese brands going global \u2014 strategy, spatial design, and end-to-end local build.";
  }

  function homeHeroHTML(lang) {
    const zh = lang === "zh";
    const heroTitle = homeHeroTitle(lang);
    const titleText = heroTitle.join(" ");
    const titleLines = heroTitle.map(line => `<span class="hero-focus-line">${esc(line)}</span>`).join("");
    return `
      <section class="ultra-home-hero-section ultra-home-hero-rebuilt-section" data-ultra-home-hero data-animate>
        <div class="ultra-home-hero-rebuilt" data-ultra-static-en>
          <div class="ultra-home-hero-rebuilt-title">
            <h1 class="hero-focus-title" aria-label="${esc(titleText)}">
              <span class="title-blur" aria-hidden="true">${titleLines}</span>
              <span class="title-sharp" aria-hidden="true">${titleLines}</span>
            </h1>
          </div>
          <div class="ultra-home-hero-rebuilt-bottom">
            <p>${esc(homeHeroCopy(lang))}</p>
            <div class="ultra-home-hero-rebuilt-actions">
              <a class="ultra-home-hero-rebuilt-primary" href="${routeLink("/cases")}" data-route="/cases">${zh ? "\u67e5\u770b\u6848\u4f8b" : "View Cases"}</a>
              <a class="ultra-home-hero-rebuilt-secondary" href="${routeLink("/services")}" data-route="/services">${zh ? "\u4e86\u89e3\u670d\u52a1" : "Our Services"}</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function bindHomeHeroSection(section) {
    if (!section || section.dataset.ultraHeroAmbientBound) return;
    section.dataset.ultraHeroAmbientBound = "true";
    let heroFrame = 0;
    const setHeroAmbient = (x, y) => {
      if (heroFrame) cancelAnimationFrame(heroFrame);
      heroFrame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const px = rect.width ? Math.max(0, Math.min(1, (x - rect.left) / rect.width)) : 0.5;
        const py = rect.height ? Math.max(0, Math.min(1, (y - rect.top) / rect.height)) : 0.42;
        section.style.setProperty("--ultra-hero-mx", `${(px * 100).toFixed(1)}%`);
        section.style.setProperty("--ultra-hero-my", `${(py * 100).toFixed(1)}%`);
        section.style.setProperty("--ultra-hero-shift-x", `${((px - 0.5) * 18).toFixed(1)}px`);
        section.style.setProperty("--ultra-hero-shift-y", `${((py - 0.42) * 10).toFixed(1)}px`);
      });
    };
    section.addEventListener("pointermove", event => setHeroAmbient(event.clientX, event.clientY), { passive: true });
    section.addEventListener("pointerleave", () => setHeroAmbient(window.innerWidth / 2, window.innerHeight * 0.42), { passive: true });

    const focusTitle = section.querySelector(".hero-focus-title");
    if (!focusTitle || focusTitle.dataset.ultraFocusBound) return;
    focusTitle.dataset.ultraFocusBound = "true";
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    let focusFrame = 0;
    let focusActive = false;
    const updateFocus = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      focusTitle.style.setProperty("--title-mx", `${currentX.toFixed(2)}%`);
      focusTitle.style.setProperty("--title-my", `${currentY.toFixed(2)}%`);
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        focusFrame = requestAnimationFrame(updateFocus);
      } else {
        focusFrame = 0;
      }
    };
    const moveFocus = (x, y) => {
      const rect = focusTitle.getBoundingClientRect();
      targetX = rect.width ? Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100)) : 50;
      targetY = rect.height ? Math.max(0, Math.min(100, ((y - rect.top) / rect.height) * 100)) : 50;
      if (!focusFrame) focusFrame = requestAnimationFrame(updateFocus);
    };
    const centerFocus = () => {
      targetX = 50;
      targetY = 50;
      if (!focusFrame) focusFrame = requestAnimationFrame(updateFocus);
    };
    const handleFocusPointer = event => {
      const rect = focusTitle.getBoundingClientRect();
      const inside = event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (inside) {
        focusActive = true;
        moveFocus(event.clientX, event.clientY);
      } else if (focusActive) {
        focusActive = false;
        centerFocus();
      }
    };
    section.addEventListener("pointermove", handleFocusPointer, { passive: true });
    section.addEventListener("mousemove", handleFocusPointer, { passive: true });
    section.addEventListener("pointerleave", centerFocus, { passive: true });
    section.addEventListener("mouseleave", centerFocus, { passive: true });
    focusTitle.addEventListener("pointermove", event => moveFocus(event.clientX, event.clientY), { passive: true });
    focusTitle.addEventListener("mousemove", event => moveFocus(event.clientX, event.clientY), { passive: true });
    focusTitle.addEventListener("pointerleave", centerFocus, { passive: true });
    focusTitle.addEventListener("mouseleave", centerFocus, { passive: true });
  }

  function homeTrustedHTML(lang) {
    const title = lang === "zh"
      ? "\u670d\u52a1\u65b0\u80fd\u6e90\u3001\u6c7d\u8f66\u51fa\u884c\u3001\u667a\u80fd\u5236\u9020\u3001\u6d88\u8d39\u79d1\u6280\u4e0e\u5168\u7403\u6d3b\u52a8\u7b49\u591a\u4e2a\u884c\u4e1a\u5ba2\u6237\u3002"
      : "Trusted by China's most innovative global brands.";
    const logos = [...clients, ...clients];
    return `
      <section class="ultra-home-trusted-section" data-ultra-home-trusted data-animate>
        <h2 class="ultra-home-trusted-title">${esc(title)}</h2>
        <div class="ultra-home-client-marquee" aria-label="${lang === "zh" ? "\u5408\u4f5c\u5ba2\u6237" : "Client logos"}">
          <div class="ultra-home-client-track">
            ${logos.map(name => `<span class="ultra-home-client">${esc(name)}</span>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderHomeContent(container, lang) {
    const homeModules = getAdminConfig().modules.home || {};
    const sections = [homeHeroHTML(lang)];
    if (homeModules.trusted !== false) sections.push(homeTrustedHTML(lang));
    if (homeModules.services !== false) sections.push(homeServicesHTML(lang));
    if (homeModules.selectedWorks !== false) sections.push(homeSelectedHTML(lang));
    if (homeModules.metrics !== false) sections.push(homeWhyCardsHTML(lang));
    if (homeModules.footer !== false) sections.push(`<div class="ultra-site ultra-home-bottom" data-ultra-home-bottom data-animate>${siteBottomHTML(lang)}</div>`);
    container.innerHTML = sections.join("");
    container.querySelectorAll(".ultra-home-services, .ultra-home-selected, .ultra-home-why").forEach(section => {
      section.setAttribute("data-animate", "");
    });
    bindHomeHeroSection(container.querySelector(".ultra-home-hero-rebuilt-section"));
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

  function siteBottomHTML(lang) {
    const L = labels[lang];
    const zh = lang === "zh";
    const adminConfig = getAdminConfig();
    const footerLinks = navItems.map(item => ({ href: routeLink(item.path), route: item.path, label: L.nav[item.key] }));
    const footerServices = services.map(s => ({ href: routeLink("/services"), route: "/services", label: zh ? s.zhTitle : s.enTitle }));
    const footerContact = (adminConfig.footer.contactLinks || [])
      .filter(item => item.enabled !== false)
      .map(item => ({ ...item, label: adminLabel(item, lang), href: adminHref(item) }));
    const socialItems = (adminConfig.footer.socialLinks || [])
      .filter(item => item.enabled !== false)
      .map(item => ({ ...item, label: adminLabel(item, lang), href: adminHref(item) }));
    const footerColumn = (heading, items) => `
      <nav class="ultra-footer-column" aria-label="${esc(heading.replace("/", ""))}">
        <h4>${esc(heading)}</h4>
        ${items.map(item => `<a class="ultra-footer-link" href="${esc(item.href)}" ${item.route ? `data-route="${esc(item.route)}"` : ""} data-label="${esc(item.label)}"><span>${esc(item.label)}</span></a>`).join("")}
      </nav>
    `;
    const iconSVG = {
      phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.5 9.5 3l2.1 5.1-1.8 1.2c.9 1.9 2.4 3.4 4.2 4.2l1.3-1.8 5 2.2-.5 2.8c-.2 1-1 1.7-2 1.7C10.9 18.4 5.6 13.1 5.6 6.2c0-.9.5-1.6 1.1-2.7Z"/></svg>`,
      email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17v-11Zm1.4 1.2 7.1 5 7.1-5H4.9Zm14.1 8.5v-6.7l-7 4.8-7-4.8v6.7h14Z"/></svg>`,
      rednote: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4V5Zm3.2 3.2v7.6h1.9v-2.6h1.2l1.5 2.6h2.1l-1.8-3c1-.4 1.5-1.1 1.5-2.2 0-1.6-1.1-2.4-3.1-2.4H7.2Zm1.9 1.5h1.1c1 0 1.5.3 1.5 1s-.5 1-1.5 1H9.1v-2Zm6.1-1.5v7.6H17v-2.7h2.2v-1.5H17V9.8h2.5V8.2h-4.3Z"/></svg>`,
      wechat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.7 5.2c-4 0-7.2 2.6-7.2 5.8 0 1.8 1 3.4 2.6 4.4l-.7 2.2 2.6-1.3c.8.2 1.7.4 2.7.4.3 0 .6 0 .9-.1-.3-.7-.5-1.4-.5-2.1 0-2.9 2.9-5.2 6.4-5.2.1 0 .3 0 .4.1-.9-2.5-3.7-4.2-7.2-4.2Zm-2.5 4.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm5 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm4.5.8c-3 0-5.3 1.8-5.3 4.1s2.4 4.1 5.3 4.1c.7 0 1.4-.1 2-.3l2.1 1-.5-1.8c1.2-.8 1.9-1.9 1.9-3.1 0-2.2-2.5-4-5.5-4Zm-1.8 3.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Zm3.8 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z"/></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 4.5h15v15h-15v-15Zm3.1 6v6.5h2v-6.5h-2Zm1-3.2c-.7 0-1.1.4-1.1 1s.4 1 1.1 1 1.1-.4 1.1-1-.4-1-1.1-1Zm2.7 3.2v6.5h2v-3.5c0-.9.5-1.5 1.3-1.5.7 0 1.1.5 1.1 1.5v3.5h2v-3.8c0-2-1.1-2.9-2.6-2.9-.9 0-1.5.4-1.8 1v-.8h-2Z"/></svg>`
    };
    return `
      <section class="ultra-bottom-cta" data-ultra-bottom>
        <div class="ultra-bottom-ambient" aria-hidden="true"></div>
        <div class="ultra-bottom-cta-inner">
          <div class="ultra-bottom-cta-copy">
            <h2>${zh ? "让我们一起为你的品牌，在全球搭建舞台。" : "Let’s build your global stage."}</h2>
            <div class="ultra-bottom-actions">
              <a class="ultra-bottom-primary" href="${routeLink("/contact")}" data-route="/contact">${zh ? "提交项目需求" : "Submit Project Brief"}<span aria-hidden="true">→</span></a>
              <a class="ultra-bottom-secondary" href="mailto:jack@ultraexpo.com">${zh ? "发送邮件" : "Send an Email"}</a>
            </div>
          </div>
          <p class="ultra-bottom-summary">${zh ? "告诉我们你的展会名称、国家城市、展位面积与项目时间，Ultra Expo 将为你评估设计与海外落地方案。" : "Tell us your exhibition, country, city, booth size, and project timeline. Ultra Expo will scope your design and overseas delivery plan."}</p>
        </div>
      </section>
      <footer class="ultra-footer" data-ultra-bottom>
        <div class="ultra-footer-frame" aria-hidden="true"></div>
        <div class="ultra-footer-inner">
          <div class="ultra-footer-brand">
            <a class="ultra-footer-logo" href="${routeLink("/")}" data-route="/">
              <img src="${routeLink("/assets/ultra-logo.svg")}" alt="Ultra Expo 皓创展览">
            </a>
            <small>${L.copyright}</small>
          </div>
          <div class="ultra-footer-panel">
            <div class="ultra-footer-menu">
              ${footerColumn("LINKS/", footerLinks)}
              ${footerColumn("SERVICES/", footerServices)}
              ${footerColumn("CONTACT/", footerContact)}
            </div>
          </div>
          <div class="ultra-footer-social" aria-label="${zh ? "社媒与联系方式" : "Social and contact links"}">
            ${socialItems.map(item => `<a class="ultra-social-card" href="${esc(item.href)}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="${item.href.startsWith("http") ? "noopener" : ""}" aria-label="${esc(item.label)}" data-label="${esc(item.label)}">${iconSVG[item.icon] || iconSVG.email}<span>${esc(item.label)}</span></a>`).join("")}
          </div>
        </div>
      </footer>
    `;
  }

  function footerHTML(lang) {
    return siteBottomHTML(lang);
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
    return activeCases().filter(item => {
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
    const values = activeCases()
      .map(item => item[field])
      .filter(Boolean)
      .map(value => String(value));
    const merged = [...new Set([...(fixed[field] || ["All"]), ...values])];
    if (field === "year") {
      return ["All", ...merged.filter(value => value !== "All").sort((a, b) => Number(b) - Number(a))];
    }
    return merged;
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
    const featured = activeCases().filter(c => c.featured).slice(0, 8);
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
    const allCases = activeCases();
    const item = allCases.find(c => c.id === id) || allCases[0];
    const overview = [
      ["Client", "客户", item.client],
      ["Event", "展会", item.event],
      ["Location", "地点", item.location],
      ["Area", "面积", item.area],
      ["Year", "年份", item.year],
      ["Industry", "行业", item.industry],
      ["Services", "服务内容", (item.services || []).join(" / ")]
    ].filter(x => x[2]);
    const related = allCases.filter(c => c.id !== item.id && (c.industry === item.industry || c.region === item.region)).slice(0, 3);
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

  function isAdminUnlocked() {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
    } catch {
      return false;
    }
  }

  async function sha256Hex(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
  }

  function adminLoginPage(lang) {
    const zh = lang === "zh";
    return `
      ${pageHero("ADMIN", zh ? "后台配置中心" : "Site Control Center", zh ? "此页面没有前台入口。请输入管理员密码后配置网站模块、底部社媒、服务集成与案例数据。" : "This page has no public navigation entry. Enter the admin password to configure modules, footer social links, integrations, and case data.", lang)}
      <section class="ultra-section ultra-admin-section"><div class="ultra-wrap">
        <form class="ultra-admin-login" data-admin-login>
          <div class="ultra-section-kicker">${zh ? "访问验证" : "ACCESS GATE"}</div>
          <h2>${zh ? "输入复杂密码" : "Enter the complex password"}</h2>
          <p>${zh ? "静态站点的密码只能作为前端门禁，不能替代真正的服务端权限控制。" : "This is a client-side gate for a static site. It is not a replacement for server-side access control."}</p>
          <div class="ultra-field">
            <label>${zh ? "管理员密码" : "Admin Password"}</label>
            <input type="password" name="password" autocomplete="current-password" required>
          </div>
          <button class="ultra-primary ultra-admin-submit" type="submit">${zh ? "进入后台" : "Unlock Admin"}</button>
          <p class="ultra-admin-status" data-admin-status></p>
        </form>
      </div></section>
    `;
  }

  function adminPage(lang) {
    const zh = lang === "zh";
    if (!isAdminUnlocked()) return adminLoginPage(lang);
    const config = getAdminConfig();
    const home = config.modules.home || {};
    const caseItems = config.cases.items || activeCases();
    const moduleRow = (key, title, desc) => `
      <label class="ultra-admin-check">
        <input type="checkbox" name="module.${key}" ${home[key] !== false ? "checked" : ""}>
        <span><strong>${esc(title)}</strong><em>${esc(desc)}</em></span>
      </label>
    `;
    return `
      ${pageHero("ADMIN", zh ? "后台配置中心" : "Site Control Center", zh ? "按模块维护首页、底栏社媒、第三方配置与案例信息。配置保存在当前浏览器，可导出 JSON 备份。" : "Maintain homepage modules, footer social links, third-party settings, and cases. Config is stored in this browser and can be exported as JSON.", lang)}
      <section class="ultra-section ultra-admin-section"><div class="ultra-wrap">
        <form class="ultra-admin" data-admin-config>
          <div class="ultra-admin-toolbar">
            <div>
              <div class="ultra-section-kicker">${zh ? "本地配置" : "LOCAL CONFIG"}</div>
              <h2>${zh ? "网站配置面板" : "Website configuration"}</h2>
              <p>${zh ? "更新时间：" : "Updated: "}${esc(config.updatedAt || (zh ? "尚未保存" : "Not saved yet"))}</p>
            </div>
            <div class="ultra-admin-actions">
              <button class="ultra-primary" type="submit">${zh ? "保存配置" : "Save Config"}</button>
              <button class="ultra-secondary" type="button" data-admin-export>${zh ? "导出 JSON" : "Export JSON"}</button>
              <label class="ultra-secondary ultra-admin-import">${zh ? "导入 JSON" : "Import JSON"}<input type="file" accept="application/json" data-admin-import></label>
              <button class="ultra-secondary" type="button" data-admin-reset>${zh ? "恢复默认" : "Reset"}</button>
              <button class="ultra-secondary" type="button" data-admin-logout>${zh ? "退出" : "Logout"}</button>
            </div>
          </div>
          <p class="ultra-admin-status" data-admin-status></p>

          <div class="ultra-admin-grid">
            <section class="ultra-admin-panel">
              <h3>${zh ? "首页模块" : "Homepage Modules"}</h3>
              <div class="ultra-admin-checks">
                ${moduleRow("trusted", zh ? "客户 logo / 信任背书" : "Trusted clients", zh ? "Hero 下方的合作客户标题与 logo 跑马灯。" : "Client headline and logo marquee below the hero.")}
                ${moduleRow("services", zh ? "服务列表" : "Service list", zh ? "End-to-end Exhibition Services 模块。" : "End-to-end Exhibition Services module.")}
                ${moduleRow("selectedWorks", zh ? "精选案例" : "Selected works", zh ? "案例图片横向滚动模块。" : "Scrolling selected work gallery.")}
                ${moduleRow("metrics", zh ? "指标卡区" : "Metric cards", zh ? "交付能力与数据卡片。" : "Delivery capability metric cards.")}
                ${moduleRow("footer", zh ? "底部 CTA / Footer" : "Bottom CTA / Footer", zh ? "首页底部 CTA 和页脚。" : "Homepage bottom CTA and footer.")}
              </div>
            </section>

            <section class="ultra-admin-panel">
              <h3>${zh ? "底部社媒" : "Footer Social"}</h3>
              <p>${zh ? "支持字段：key、icon、labelEn、labelZh、href、enabled。icon 可用 phone/email/rednote/wechat/linkedin。" : "Supported fields: key, icon, labelEn, labelZh, href, enabled. Icons: phone/email/rednote/wechat/linkedin."}</p>
              <textarea name="footer.socialLinks" spellcheck="false">${adminJSON(config.footer.socialLinks || [])}</textarea>
            </section>

            <section class="ultra-admin-panel">
              <h3>${zh ? "底部联系链接" : "Footer Contact Links"}</h3>
              <p>${zh ? "用于 footer CONTACT 列。站内链接可写 route: /contact，外链写 href。" : "Used by the footer CONTACT column. Use route for internal links and href for external links."}</p>
              <textarea name="footer.contactLinks" spellcheck="false">${adminJSON(config.footer.contactLinks || [])}</textarea>
            </section>

            <section class="ultra-admin-panel">
              <h3>${zh ? "阿里云 / Notion 等配置" : "Aliyun / Notion Integrations"}</h3>
              <p>${zh ? "静态站不适合保存生产密钥。这里用于记录配置，正式接入请走后端代理。" : "Do not store production secrets in a static site. Use this for planning; route real integrations through a backend proxy."}</p>
              <textarea name="integrations" spellcheck="false">${adminJSON(config.integrations || {})}</textarea>
            </section>

            <section class="ultra-admin-panel is-wide">
              <h3>${zh ? "案例数据" : "Case Data"}</h3>
              <p>${zh ? "填 JSON 数组会覆盖前台案例；留空或填 null 则使用 assets/ultra-cases.js。当前编辑数量：" : "A JSON array overrides the public cases; blank or null falls back to assets/ultra-cases.js. Current editable count: "}${Array.isArray(caseItems) ? caseItems.length : 0}</p>
              <textarea name="cases.items" spellcheck="false">${adminJSON(caseItems)}</textarea>
            </section>
          </div>
        </form>
      </div></section>
    `;
  }

  function routeContent(path, lang) {
    if (path === "/about") return aboutPage(lang);
    if (path === "/services") return servicesPage(lang);
    if (path === "/cases") return casesPage(lang);
    if (path.startsWith("/cases/")) return caseDetailPage(path.split("/").pop(), lang);
    if (path === "/contact") return contactPage(lang);
    if (path === "/admin") return adminPage(lang);
    return "";
  }

  function renderAppPage(path, lang) {
    applyLocaleAttributes(lang);
    applyDocumentMeta(path, lang);
    let root = document.getElementById("ultra-app");
    if (!root) {
      root = document.createElement("div");
      root.id = "ultra-app";
      document.body.appendChild(root);
    }
    document.documentElement.classList.remove("ultra-home-active");
    document.documentElement.classList.add("ultra-app-active");
    root.innerHTML = `<div class="ultra-site">${navHTML(lang, path)}<main class="ultra-main">${routeContent(path, lang)}</main>${footerHTML(lang)}</div>`;
    root.querySelectorAll(".ultra-main > .ultra-hero, .ultra-main > .ultra-section, .ultra-bottom-cta, .ultra-footer").forEach((node, index) => {
      node.setAttribute("data-animate", "");
      node.style.animationDelay = `${Math.min(index * 90, 360)}ms`;
    });
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

  function replacePhraseText(root, map) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    const entries = Object.entries(map)
      .filter(([source]) => source.length > 6)
      .sort((a, b) => b[0].length - a[0].length);
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.parentElement?.closest("[data-ultra-static-en]")) return;
      let next = node.nodeValue;
      entries.forEach(([source, target]) => {
        if (next.includes(source)) next = next.split(source).join(target);
      });
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }

  function emphasizeHomeCopy(root) {
    const phrases = [
      "Countries & Regions",
      "Projects Delivered",
      "Exhibition Area Built",
      "Overseas Partners",
      "Ultra Expo was founded",
      "We're not just a booth builder",
      "Brand Planning",
      "Spatial Design",
      "Overseas Execution",
      "Engineering & Build",
      "Real projects. Real results.",
      "国家与地区",
      "交付项目",
      "展陈面积",
      "海外伙伴",
      "皓创展览成立于",
      "我们不只是展台搭建商",
      "品牌策划",
      "空间设计",
      "海外执行",
      "工程搭建",
      "真实项目"
    ];
    root.querySelectorAll("p, span, div").forEach(element => {
      const text = element.textContent.trim().replace(/\s+/g, " ");
      if (phrases.some(phrase => text === phrase || text.includes(phrase))) {
        element.classList.add("ultra-home-copy-strong");
      }
    });
  }

  function localizeHomeContainer(container, lang) {
    const map = lang === "zh" ? homeText.enToZh : homeText.zhToEn;
    replaceText(container, map);
    replacePhraseText(container, map);
    emphasizeHomeCopy(container);
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

  function markHomeLayout(container) {
    const clean = value => String(value || "").trim().replace(/\s+/g, " ");
    const all = [...container.querySelectorAll("h1, h2, h3, p, div, span, a, button")];
    all.forEach(element => {
      const text = clean(element.textContent);
      if (!text) return;
      if (
        text.length < 140 &&
        (
          text.includes("We make Chinese brands") ||
          text.includes("look at home") ||
          text.includes("overseas.") ||
          text.includes("中国品牌") ||
          text.includes("本土品牌")
        )
      ) {
        element.classList.add("ultra-home-hero-title-line");
        const section = element.closest("section") || element.parentElement;
        section?.classList.add("ultra-home-hero-section");
      }
      if (text.includes("Ultra Expo delivers the full stack") && !text.startsWith("Ultra Expo delivers the full stack")) return;
      if (text.length < 240 && (text.includes("Ultra Expo delivers the full stack") || text.includes("为中国品牌出海提供"))) {
        element.classList.add("ultra-home-hero-copy");
      }
      if (text === "View Cases" || text === "Explore Services" || text === "Our Services" || text === "查看案例" || text === "了解服务能力") {
        element.classList.add("ultra-home-hero-action");
        element.parentElement?.classList.add("ultra-home-hero-actions");
      }
      if (text.length < 180 && (text.includes("Trusted by China's most innovative global brands") || text.includes("服务新能源"))) {
        element.classList.add("ultra-home-trusted-title");
        const section = element.closest("section") || element.parentElement;
        section?.classList.add("ultra-home-trusted-section");
      }
    });
  }

  function normalizeHomeHeroTitle(container, lang) {
    const clean = value => String(value || "").trim().replace(/\s+/g, " ");
    container.querySelectorAll(".ultra-home-hero-title-fixed").forEach(node => node.remove());
    container.querySelectorAll(".ultra-home-hero-title-hidden").forEach(node => node.classList.remove("ultra-home-hero-title-hidden"));
    const section = container.querySelector(".ultra-home-hero-section");
    if (!section) return;
    const titleNodes = [...section.querySelectorAll(".ultra-home-hero-title-line")]
      .filter(node => {
        const text = clean(node.textContent);
        return text.includes("We make Chinese brands") ||
          text.includes("look at home") ||
          text.includes("overseas.") ||
          text.includes("中国品牌") ||
          text.includes("本土品牌");
      });
    if (!titleNodes.length || section.querySelector(".ultra-home-hero-title-fixed")) return;

    const fixed = document.createElement("div");
    fixed.className = `ultra-home-hero-title-fixed is-${lang}`;
    fixed.innerHTML = `<span>We make Chinese brands</span><span>look at home — overseas.</span>`;
    fixed.innerHTML = lang === "zh"
      ? `<span>让中国品牌在海外</span><span>呈现出本土品牌的姿态</span>`
      : `<span>We make Chinese brands</span><span>look at home — overseas.</span>`;
    fixed.innerHTML = lang === "zh"
      ? `<span>\u8ba9\u4e2d\u56fd\u54c1\u724c\u5728\u6d77\u5916</span><span>\u5448\u73b0\u51fa\u672c\u571f\u54c1\u724c\u7684\u59ff\u6001</span>`
      : `<span>We make Chinese brands</span><span>look at home — overseas.</span>`;
    titleNodes.forEach(node => node.classList.add("ultra-home-hero-title-hidden"));
    section.appendChild(fixed);
  }

  function rebuildHomeHeroContent(container, lang) {
    const clean = value => String(value || "").trim().replace(/\s+/g, " ");
    const section = container.querySelector(".ultra-home-hero-section") ||
      [...container.querySelectorAll("section")].find(node => {
        const text = clean(node.textContent);
        return text.includes("We make Chinese brands") || text.includes("look at home") || text.includes("Exhibition & Abroad");
      });
    if (!section) return;

    section.classList.add("ultra-home-hero-section", "ultra-home-hero-rebuilt-section");
    if (!section.dataset.ultraHeroAmbientBound) {
      section.dataset.ultraHeroAmbientBound = "true";
      let heroFrame = 0;
      const setHeroAmbient = (x, y) => {
        if (heroFrame) cancelAnimationFrame(heroFrame);
        heroFrame = requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const px = rect.width ? Math.max(0, Math.min(1, (x - rect.left) / rect.width)) : 0.5;
          const py = rect.height ? Math.max(0, Math.min(1, (y - rect.top) / rect.height)) : 0.42;
          section.style.setProperty("--ultra-hero-mx", `${(px * 100).toFixed(1)}%`);
          section.style.setProperty("--ultra-hero-my", `${(py * 100).toFixed(1)}%`);
          section.style.setProperty("--ultra-hero-shift-x", `${((px - 0.5) * 18).toFixed(1)}px`);
          section.style.setProperty("--ultra-hero-shift-y", `${((py - 0.42) * 10).toFixed(1)}px`);
        });
      };
      section.addEventListener("pointermove", event => setHeroAmbient(event.clientX, event.clientY), { passive: true });
      section.addEventListener("pointerleave", () => setHeroAmbient(window.innerWidth / 2, window.innerHeight * 0.42), { passive: true });
    }
    section.querySelectorAll(".ultra-home-hero-rebuilt").forEach(node => node.remove());
    section.querySelectorAll(".ultra-home-hero-title-fixed").forEach(node => node.remove());

    [...section.querySelectorAll("a, button")].forEach(node => {
      if (!node.closest(".ultra-home-hero-rebuilt")) node.remove();
    });

    const oldHeroText = [
      "Exhibition & Abroad",
      "We make Chinese brands",
      "look at home",
      "overseas.",
      "Ultra Expo delivers the full stack",
      "\u5c55\u4f1a\u4e0e\u6d77\u5916\u843d\u5730",
      "\u8ba9\u4e2d\u56fd\u54c1\u724c",
      "\u672c\u571f\u54c1\u724c",
      "\u4e3a\u4e2d\u56fd\u54c1\u724c\u51fa\u6d77\u63d0\u4f9b"
    ];
    const isOldHeroText = text => oldHeroText.some(fragment => text.includes(fragment));
    const oldTextElements = [...section.querySelectorAll("*")].filter(node => {
      if (node === section || node.closest(".ultra-home-hero-rebuilt")) return false;
      if (node.matches("img, svg, canvas, video, picture, source")) return false;
      if (node.querySelector("img, svg, canvas, video, picture, source")) return false;
      const text = clean(node.textContent);
      return text && text.length < 320 && isOldHeroText(text);
    });
    oldTextElements
      .filter(node => !oldTextElements.some(other => other !== node && node.contains(other)))
      .forEach(node => node.remove());

    [...section.querySelectorAll("*")].forEach(node => {
      if (node.closest(".ultra-home-hero-rebuilt")) return;
      if (node.children.length || clean(node.textContent)) return;
      if (node.matches("img, svg, canvas, video, picture, source")) return;
      const rect = node.getBoundingClientRect();
      if (rect.width >= 16 && rect.width <= 280 && rect.height > 0 && rect.height <= 4) {
        node.remove();
      }
    });

    const zh = lang === "zh";
    const heroTitle = zh
      ? ["\u8ba9\u4e2d\u56fd\u54c1\u724c\u5728\u6d77\u5916", "\u5448\u73b0\u51fa\u672c\u571f\u54c1\u724c\u7684\u59ff\u6001"]
      : ["We make Chinese brands", "look at home — overseas."];
    const heroCopy = zh
      ? "\u4e3a\u4e2d\u56fd\u54c1\u724c\u51fa\u6d77\u63d0\u4f9b\u5168\u7403\u5c55\u4f1a\u4e0e\u7a7a\u95f4\u8bbe\u8ba1\u843d\u5730\u670d\u52a1\u3002"
      : "Ultra Expo delivers the full stack for Chinese brands going global — strategy, spatial design, and end-to-end local build.";
    const titleText = heroTitle.join(" ");
    const titleLines = heroTitle.map(line => `<span class="hero-focus-line">${esc(line)}</span>`).join("");

    section.insertAdjacentHTML("beforeend", `
      <div class="ultra-home-hero-rebuilt" data-ultra-static-en>
        <div class="ultra-home-hero-rebuilt-title">
          <h1 class="hero-focus-title" aria-label="${esc(titleText)}">
            <span class="title-blur" aria-hidden="true">${titleLines}</span>
            <span class="title-sharp" aria-hidden="true">${titleLines}</span>
          </h1>
        </div>
        <div class="ultra-home-hero-rebuilt-bottom">
          <p>${heroCopy}</p>
          <div class="ultra-home-hero-rebuilt-actions">
            <a class="ultra-home-hero-rebuilt-primary" href="${routeLink("/cases")}" data-route="/cases">${zh ? "\u67e5\u770b\u6848\u4f8b" : "View Cases"}</a>
            <a class="ultra-home-hero-rebuilt-secondary" href="${routeLink("/services")}" data-route="/services">${zh ? "\u4e86\u89e3\u670d\u52a1" : "Our Services"}</a>
          </div>
        </div>
      </div>
    `);

    const focusTitle = section.querySelector(".hero-focus-title");
    if (focusTitle && !focusTitle.dataset.ultraFocusBound) {
      focusTitle.dataset.ultraFocusBound = "true";
      let currentX = 50;
      let currentY = 50;
      let targetX = 50;
      let targetY = 50;
      let focusFrame = 0;
      let focusActive = false;
      const updateFocus = () => {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        focusTitle.style.setProperty("--title-mx", `${currentX.toFixed(2)}%`);
        focusTitle.style.setProperty("--title-my", `${currentY.toFixed(2)}%`);
        if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
          focusFrame = requestAnimationFrame(updateFocus);
        } else {
          focusFrame = 0;
        }
      };
      const moveFocus = (x, y) => {
        const rect = focusTitle.getBoundingClientRect();
        targetX = rect.width ? Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100)) : 50;
        targetY = rect.height ? Math.max(0, Math.min(100, ((y - rect.top) / rect.height) * 100)) : 50;
        if (!focusFrame) focusFrame = requestAnimationFrame(updateFocus);
      };
      const centerFocus = () => {
        targetX = 50;
        targetY = 50;
        if (!focusFrame) focusFrame = requestAnimationFrame(updateFocus);
      };
      const handleFocusPointer = event => {
        const rect = focusTitle.getBoundingClientRect();
        const inside = event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (inside) {
          focusActive = true;
          moveFocus(event.clientX, event.clientY);
        } else if (focusActive) {
          focusActive = false;
          centerFocus();
        }
      };
      section.addEventListener("pointermove", handleFocusPointer, { passive: true });
      section.addEventListener("mousemove", handleFocusPointer, { passive: true });
      section.addEventListener("pointerleave", centerFocus, { passive: true });
      section.addEventListener("mouseleave", centerFocus, { passive: true });
      focusTitle.addEventListener("pointermove", event => moveFocus(event.clientX, event.clientY), { passive: true });
      focusTitle.addEventListener("mousemove", event => moveFocus(event.clientX, event.clientY), { passive: true });
      focusTitle.addEventListener("pointerleave", centerFocus, { passive: true });
      focusTitle.addEventListener("mouseleave", centerFocus, { passive: true });
    }

    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
    const textParents = new Set();
    while (walker.nextNode()) {
      const parent = walker.currentNode.parentElement;
      if (parent && !parent.closest(".ultra-home-hero-rebuilt") && clean(walker.currentNode.nodeValue)) {
        textParents.add(parent);
      }
    }
    [...textParents]
      .filter(node => ![...textParents].some(other => other !== node && other.contains(node)))
      .forEach(node => node.remove());
  }

  function enhanceHome(lang) {
    applyLocaleAttributes(lang);
    applyDocumentMeta("/", lang);
    document.documentElement.classList.remove("ultra-app-active");
    document.documentElement.classList.add("ultra-home-active");
    const root = document.getElementById("ultra-app");
    if (root) root.innerHTML = `<div class="ultra-site ultra-home-shell">${navHTML(lang, "/")}</div>`;
    const container = document.getElementById("container");
    if (container) renderHomeContent(container, lang);
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

  function setAdminStatus(root, message, isError = false) {
    const status = root?.querySelector("[data-admin-status]");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  function parseAdminTextarea(form, name, fallback) {
    const field = form.elements[name];
    const raw = field ? String(field.value || "").trim() : "";
    if (!raw || raw === "null") return fallback;
    return JSON.parse(raw);
  }

  function collectAdminConfig(form) {
    const current = getAdminConfig();
    const casesItems = parseAdminTextarea(form, "cases.items", null);
    if (casesItems !== null && !Array.isArray(casesItems)) throw new Error("cases.items must be a JSON array or null.");
    const socialLinks = parseAdminTextarea(form, "footer.socialLinks", []);
    const contactLinks = parseAdminTextarea(form, "footer.contactLinks", []);
    if (!Array.isArray(socialLinks)) throw new Error("footer.socialLinks must be a JSON array.");
    if (!Array.isArray(contactLinks)) throw new Error("footer.contactLinks must be a JSON array.");
    return {
      ...current,
      modules: {
        ...current.modules,
        home: {
          trusted: Boolean(form.elements["module.trusted"]?.checked),
          services: Boolean(form.elements["module.services"]?.checked),
          selectedWorks: Boolean(form.elements["module.selectedWorks"]?.checked),
          metrics: Boolean(form.elements["module.metrics"]?.checked),
          footer: Boolean(form.elements["module.footer"]?.checked)
        }
      },
      footer: {
        socialLinks,
        contactLinks
      },
      integrations: parseAdminTextarea(form, "integrations", {}),
      cases: {
        items: casesItems
      }
    };
  }

  document.addEventListener("click", event => {
    const localeToggle = event.target.closest("[data-locale-toggle]");
    if (localeToggle) {
      event.preventDefault();
      setLocale(localeToggle.dataset.localeToggle);
      return;
    }
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
    const adminLogout = event.target.closest("[data-admin-logout]");
    if (adminLogout) {
      event.preventDefault();
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      render();
      return;
    }
    const adminReset = event.target.closest("[data-admin-reset]");
    if (adminReset) {
      event.preventDefault();
      if (window.confirm("Reset local admin configuration?")) {
        localStorage.removeItem(ADMIN_CONFIG_KEY);
        render();
      }
      return;
    }
    const adminExport = event.target.closest("[data-admin-export]");
    if (adminExport) {
      event.preventDefault();
      const blob = new Blob([JSON.stringify(getAdminConfig(), null, 2)], { type: "application/json" });
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = `ultra-admin-config-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(anchor);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      anchor.remove();
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

  document.addEventListener("change", event => {
    const input = event.target.closest("[data-admin-import]");
    if (!input || !input.files?.length) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || "{}"));
        saveAdminConfig(parsed);
        render();
      } catch (error) {
        setAdminStatus(document, "Import failed: " + error.message, true);
      }
    };
    reader.readAsText(file);
  });

  document.addEventListener("submit", async event => {
    const adminLogin = event.target.closest("[data-admin-login]");
    if (adminLogin) {
      event.preventDefault();
      try {
        const password = adminLogin.elements.password?.value || "";
        const hash = await sha256Hex(password);
        if (hash !== ADMIN_PASSWORD_HASH) {
          setAdminStatus(adminLogin, "Password is incorrect.", true);
          return;
        }
        sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
        render();
      } catch (error) {
        setAdminStatus(adminLogin, "Unable to verify password.", true);
      }
      return;
    }

    const adminConfigForm = event.target.closest("[data-admin-config]");
    if (adminConfigForm) {
      event.preventDefault();
      try {
        saveAdminConfig(collectAdminConfig(adminConfigForm));
        render();
      } catch (error) {
        setAdminStatus(adminConfigForm, "Save failed: " + error.message, true);
      }
      return;
    }

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
