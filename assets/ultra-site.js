(function () {
  const REPO_BASE = window.__ULTRA_BASE_PATH || "/";
  const ADMIN_CONFIG_KEY = "ultra-admin-config-v20260617-clean01";
  const LEGACY_ADMIN_CONFIG_KEYS = ["ultra-admin-config-v1"];
  const ADMIN_SESSION_KEY = "ultra-admin-session-v1";
  const ADMIN_VIEW_KEY = "ultra-admin-view-v1";
  const ADMIN_PASSWORD_HASH = "9a7ee57b5b0f2ad1785189fd021fdf1e9b790e958d8c8221aedb60325346526f";
  let adminPendingConfirm = null;
  let contentScriptText = null;
  const CONTENT = loadContent();
  const CASES = CONTENT.cases;
  const BRANDS = CONTENT.brands;
  const STORAGE_KEY = "ultra-locale";
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const navIntroEnabled = !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  let navIntroPlayed = false;
  if (navIntroEnabled) document.body.classList.add("is-nav-intro");

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
      tagline: "Global exhibition delivery for Chinese brands going abroad.",
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
      tagline: "为中国品牌出海提供全球展会交付服务。",
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
      home: "Ultra Expo provides global exhibition and spatial design delivery services for Chinese brands going abroad, covering strategy, space design, overseas localization, engineering, and on-site build.",
      contact: "Contact Ultra Expo for overseas exhibition booth design, brand spaces, product launches, and end-to-end local delivery support."
    },
    zh: {
      home: "皓创展览 Ultra Expo 为中国品牌出海提供全球展会与空间设计落地服务，覆盖品牌策划、空间设计、海外本地化、工程搭建与现场交付。",
      contact: "联系 Ultra Expo 皓创展览，咨询海外展会、展台设计、品牌空间、新品发布与本地化落地服务。"
    }
  };

  const stats = [
    { value: "15+", en: "Countries & Regions", zh: "覆盖国家与地区" },
    { value: "200+", en: "Global Projects", zh: "全球交付项目" },
    { value: "50K+㎡", en: "Delivered Area", zh: "累计交付面积" },
    { value: "20+", en: "Overseas Build Partners", zh: "海外搭建伙伴" }
  ];

  const clients = ["BMW", "Leadshine", "GEO", "GOODWE", "SAJ", "SUNTECH", "E&E Cable Solutions", "KSTAR", "Elecnova", "SSAM", "CRRC", "WATTSONIC", "SUNGROW", "Molcel", "Coca-Cola", "SCUD", "MUST", "Autocraft", "Furrion", "Xiamen ITG", "TSUN"];

  const staticBrandLogoSource = [
    { id: "kunshan-gintune-welding", englishName: "KUNSHAN GINTUNE WELDING", originalLogo: "./assets/notion/brands/kunshan-gintune-welding-color-logo-1.png", grayLogo: "./assets/notion/brands/kunshan-gintune-welding-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "fuermu", englishName: "FUERMU", originalLogo: "./assets/notion/brands/fuermu-color-logo-1.png", grayLogo: "./assets/notion/brands/fuermu-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "cathcend", englishName: "Cathcend", originalLogo: "./assets/notion/brands/cathcend-color-logo-1.png", grayLogo: "./assets/notion/brands/cathcend-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "scud", englishName: "SCUD", originalLogo: "./assets/notion/brands/scud-color-logo-1.png", grayLogo: "./assets/notion/brands/scud-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "leadshine", englishName: "Leadshine", originalLogo: "./assets/notion/brands/leadshine-color-logo-1.png", grayLogo: "./assets/notion/brands/leadshine-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "suntech", englishName: "SUNTECH", originalLogo: "./assets/notion/brands/suntech-color-logo-1.png", grayLogo: "./assets/notion/brands/suntech-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "must", englishName: "MUST", originalLogo: "./assets/notion/brands/must-color-logo-1.png", grayLogo: "./assets/notion/brands/must-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "tsun", englishName: "TSUN", originalLogo: "./assets/notion/brands/tsun-color-logo-1.png", grayLogo: "./assets/notion/brands/tsun-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "saj", englishName: "SAJ", originalLogo: "./assets/notion/brands/saj-color-logo-1.png", grayLogo: "./assets/notion/brands/saj-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "sunhome", englishName: "SUNHOME", originalLogo: "./assets/notion/brands/sunhome-color-logo-1.png", grayLogo: "./assets/notion/brands/sunhome-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "geo", englishName: "GEO", originalLogo: "./assets/notion/brands/geo-color-logo-1.png", grayLogo: "./assets/notion/brands/geo-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "crrc", englishName: "CRRC", originalLogo: "./assets/notion/brands/crrc-color-logo-1.png", grayLogo: "./assets/notion/brands/crrc-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "kstar", englishName: "KSTAR", originalLogo: "./assets/notion/brands/kstar-color-logo-1.png", grayLogo: "./assets/notion/brands/kstar-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "ssam", englishName: "SSAM", originalLogo: "./assets/notion/brands/ssam-color-logo-1.png", grayLogo: "./assets/notion/brands/ssam-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "elecnova", englishName: "Elecnova", originalLogo: "./assets/notion/brands/elecnova-color-logo-1.png", grayLogo: "./assets/notion/brands/elecnova-gray-logo-1.png", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "goodwe", englishName: "GOODWE", originalLogo: "./assets/notion/brands/goodwe-color-logo-1.png", grayLogo: "./assets/notion/brands/goodwe-gray-logo-1.png", isFeaturedBrand: true, featuredBrandOrder: null, brandOrder: 18, isOnline: true },
    { id: "wattsonic", englishName: "Wattsonic", originalLogo: "./assets/notion/brands/wattsonic-color-logo-1.svg", grayLogo: "./assets/notion/brands/wattsonic-gray-logo-1.svg", isFeaturedBrand: false, featuredBrandOrder: null, brandOrder: 18, isOnline: true }
  ];

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
      brand: "Brand",
      industry: "Industry",
      country: "Country",
      area: "Area",
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
      brand: "品牌",
      industry: "行业",
      country: "展会国家",
      area: "面积",
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
        Africa: "非洲",
        Oceania: "大洋洲",
        Asia: "亚洲",
        "Middle East": "中东",
        China: "中国",
        Global: "全球"
      },
      types: { Design: "设计案例", Delivered: "落地案例", Event: "活动案例" }
    }
  };
  filterLabels.en.regions = { Asia: "Asia", Europe: "Europe", "North America": "North America", "South America": "South America", Africa: "Africa", Oceania: "Oceania" };

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
    const eventYear = caseYear(item);
    const eventWithYear = `${item.event || ""}${eventYear ? ` ${eventYear}` : ""}`.trim();
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
    return pageDescriptions[lang][pageKey(path)] || pageDescriptions[lang].home;
  }

  function setMetaContent(selector, value) {
    const node = document.head.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function applyDocumentMeta(path, lang) {
    const title = titleForPath(path, lang);
    const description = descriptionForPath(path, lang);
    const robots = path === "/admin" ? "noindex,nofollow" : "index,follow";
    document.title = title;
    setMetaContent('meta[name="title"]', title);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="robots"]', robots);
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

  function defaultExhibitionLogos() {
    return [
      "IFA Berlin",
      "CES Las Vegas",
      "MWC Barcelona",
      "Intersolar Europe",
      "The Battery Show",
      "RE+",
      "Smart Energy",
      "Solar Solutions International",
      "Solar Storage Live",
      "Intersolar South America",
      "The Green Expo",
      "ENERGAIA",
      "Solar & Storage Live UK",
      "SNEC PV Power Expo",
      "EICMA",
      "Key Energy",
      "Green Energy Expo",
      "ENEX",
      "PV EXPO TOKYO",
      "Aquatech",
      "PCIM",
      "SPS",
      "OTC",
      "APEX"
    ].map((name, index) => ({
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      name,
      logo: "",
      order: index + 1,
      visible: true
    }));
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
      about: {
        serviceMedia: [
          { title: "STRATEGY", type: "image", url: "/assets/about/strategy.png?v=20260617-about-service-media02", poster: "", alt: "Strategy service media" },
          { title: "DESIGN", type: "image", url: "/assets/about/design.png?v=20260617-about-service-media02", poster: "", alt: "Design service media" },
          { title: "ABROAD", type: "image", url: "/assets/about/abroad.png?v=20260617-about-service-media02", poster: "", alt: "Abroad service media" },
          { title: "BUILD", type: "image", url: "/assets/about/build.png?v=20260617-about-service-media02", poster: "", alt: "Build service media" }
        ],
        exhibitionLogos: defaultExhibitionLogos()
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
          brandsDatabaseId: "",
          casesDatabaseId: "",
          apiEndpoint: "",
          integrationToken: "",
          notes: "Use a backend proxy before connecting a real Notion token."
        }
      },
      contact: {
        email: "jack@ultraexpo.com",
        phone: "+86 185 0614 4181",
        whatsapp: "",
        wechat: "",
        addressZh: "Suzhou, China",
        addressEn: "Suzhou, China",
        footerEntries: [
          { labelZh: "商务合作", labelEn: "Business Partnership", value: "/contact" },
          { labelZh: "电话咨询", labelEn: "Phone Consultation", value: "tel:+8618506144181" },
          { labelZh: "联系邮箱", labelEn: "Email", value: "mailto:jack@ultraexpo.com" }
        ]
      },
      contactMessages: {
        items: []
      },
      siteSettings: {
        siteNameZh: "皓创展览",
        siteNameEn: "Ultra Expo",
        logo: "/assets/ultra-logo.svg",
        favicon: "/assets/favicon.svg",
        defaultLanguage: "en",
        notionToken: "",
        notionBrandsDatabaseId: "",
        notionCasesDatabaseId: "",
        ossRegion: "",
        ossBucket: "",
        ossAccessKeyId: "",
        ossAccessKeySecret: "",
        ossCdnDomain: ""
      },
      brands: {
        items: null
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
    output.about = { ...base.about, ...(saved.about || {}) };
    output.about.serviceMedia = Array.isArray(saved.about?.serviceMedia) ? saved.about.serviceMedia : base.about.serviceMedia;
    output.about.exhibitionLogos = Array.isArray(saved.about?.exhibitionLogos) ? saved.about.exhibitionLogos : base.about.exhibitionLogos;
    output.integrations = { ...base.integrations, ...(saved.integrations || {}) };
    output.integrations.aliyun = { ...base.integrations.aliyun, ...(saved.integrations?.aliyun || {}) };
    output.integrations.notion = { ...base.integrations.notion, ...(saved.integrations?.notion || {}) };
    output.contact = { ...base.contact, ...(saved.contact || {}) };
    output.contactMessages = { ...base.contactMessages, ...(saved.contactMessages || {}) };
    output.contactMessages.items = Array.isArray(saved.contactMessages?.items) ? saved.contactMessages.items : base.contactMessages.items;
    output.siteSettings = { ...base.siteSettings, ...(saved.siteSettings || {}) };
    output.brands = { ...base.brands, ...(saved.brands || {}) };
    output.cases = { ...base.cases, ...(saved.cases || {}) };
    return output;
  }

  function getAdminConfig() {
    const base = defaultAdminConfig();
    try {
      LEGACY_ADMIN_CONFIG_KEYS.forEach(key => localStorage.removeItem(key));
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

  function caseSortValue(item, index) {
    const featured = item?.isFeaturedCase || item?.featured ? 0 : 1;
    const { dateStart, dateEnd } = caseDateRange(item || {});
    const dateValue = Date.parse(dateStart || dateEnd || "");
    const year = Number(caseYear(item || {}));
    const fallback = Number.isFinite(year) ? Date.UTC(year, 0, 1) : 0;
    return [featured, -(Number.isFinite(dateValue) ? dateValue : fallback), index];
  }

  function sortCases(items) {
    return [...items]
      .map((item, index) => ({ item, sort: caseSortValue(item, index) }))
      .sort((a, b) => a.sort[0] - b.sort[0] || a.sort[1] - b.sort[1] || a.sort[2] - b.sort[2])
      .map(entry => entry.item);
  }

  function liveContent() {
    const contentBrands = Array.isArray(window.UltraContent?.brands) ? window.UltraContent.brands : null;
    const contentCases = Array.isArray(window.UltraContent?.cases) ? window.UltraContent.cases : null;
    if (contentBrands || contentCases) return normalizeContent(contentBrands || [], contentCases || loadCases());
    if (Array.isArray(window.UltraBrands) || Array.isArray(window.UltraCases)) {
      return normalizeContent(Array.isArray(window.UltraBrands) ? window.UltraBrands : [], loadCases());
    }
    return CONTENT;
  }

  function brandHasLogo(item) {
    const logos = brandLogoUrls(item);
    return Boolean(logos.grayLogo || logos.colorLogo);
  }

  function brandLogoUrls(item) {
    const grayLogo = adminPreviewSrc(adminFileUrl(item?.grayLogo) || adminFileUrl(item?.originalLogo));
    const colorLogo = adminPreviewSrc(adminFileUrl(item?.originalLogo) || adminFileUrl(item?.grayLogo));
    return { grayLogo, colorLogo };
  }

  function syncedBrandSource() {
    if (Array.isArray(window.UltraContent?.brands) && window.UltraContent.brands.length) {
      if (window.UltraContent.brands.some(brandHasLogo)) return window.UltraContent.brands;
    }
    if (Array.isArray(window.UltraBrands) && window.UltraBrands.length && window.UltraBrands.some(brandHasLogo)) return window.UltraBrands;
    const loadedBrands = loadBrands();
    if (loadedBrands.length && loadedBrands.some(brandHasLogo)) return loadedBrands;
    if (staticBrandLogoSource.length) return staticBrandLogoSource;
    return [];
  }

  function explicitBrandSource() {
    const override = getAdminConfig().brands?.items;
    const overrideItems = Array.isArray(override) && override.length ? override : [];
    const syncedItems = syncedBrandSource();
    if (syncedItems.length) {
      const overrideById = new Map(overrideItems.map(item => [item?.id, item]).filter(([id]) => id));
      return syncedItems.map(item => {
        const overrideItem = overrideById.get(item?.id);
        if (!overrideItem) return item;
        return {
          ...item,
          isFeaturedBrand: Boolean(overrideItem.isFeaturedBrand ?? item.isFeaturedBrand),
          featuredBrandOrder: overrideItem.featuredBrandOrder ?? item.featuredBrandOrder,
          brandOrder: overrideItem.brandOrder ?? item.brandOrder
        };
      });
    }
    if (overrideItems.some(brandHasLogo)) return overrideItems;
    return [];
  }

  function sortBrandsForDisplay(items) {
    return [...items]
      .map((item, index) => ({ item, index }))
      .sort((a, b) => {
        const aFeatured = a.item?.isFeaturedBrand ? 0 : 1;
        const bFeatured = b.item?.isFeaturedBrand ? 0 : 1;
        const aOrder = Number(aFeatured === 0 ? (a.item?.featuredBrandOrder ?? a.item?.brandOrder ?? a.item?.order) : (a.item?.brandOrder ?? a.item?.order));
        const bOrder = Number(bFeatured === 0 ? (b.item?.featuredBrandOrder ?? b.item?.brandOrder ?? b.item?.order) : (b.item?.brandOrder ?? b.item?.order));
        return aFeatured - bFeatured ||
          (Number.isFinite(aOrder) ? aOrder : 9999) - (Number.isFinite(bOrder) ? bOrder : 9999) ||
          a.index - b.index;
      })
      .map(entry => entry.item);
  }

  let externalContentLoadStarted = false;
  let externalContentRefreshDone = false;

  function ensureExternalContent(callback) {
    if (syncedBrandSource().length) {
      callback?.();
      return;
    }
    if (externalContentLoadStarted) return;
    externalContentLoadStarted = true;
    const finish = () => callback?.();
    const injectScript = () => {
      const script = document.createElement("script");
      script.src = routeLink("/assets/ultra-cases.js?v=20260617-clean01");
      script.onload = finish;
      script.onerror = () => {};
      document.head.appendChild(script);
    };
    if (window.fetch) {
      fetch(routeLink("/assets/ultra-cases.js?v=20260617-clean01"), { cache: "no-store" })
        .then(response => response.ok ? response.text() : "")
        .then(text => {
          if (!text) {
            injectScript();
            return;
          }
          contentScriptText = text;
          applyContentScriptText(text);
          finish();
        })
        .catch(injectScript);
      return;
    }
    injectScript();
  }

  function parseContentArray(text, name, nextName) {
    const pattern = new RegExp(`window\\.${name}\\s*=\\s*(\\[[\\s\\S]*?\\]);\\s*window\\.${nextName}`);
    const match = String(text || "").match(pattern);
    if (!match) return [];
    return JSON.parse(match[1]);
  }

  function applyContentScriptText(text) {
    try {
      const brands = parseContentArray(text, "UltraBrands", "UltraCases");
      if (brands.length) window.UltraBrands = brands;
      const cases = parseContentArray(text, "UltraCases", "UltraContent");
      if (cases.length) window.UltraCases = cases;
      if (brands.length || cases.length) {
        window.UltraContent = {
          ...(window.UltraContent || {}),
          source: "notion-static",
          brands: brands.length ? brands : (Array.isArray(window.UltraContent?.brands) ? window.UltraContent.brands : []),
          cases: cases.length ? cases : (Array.isArray(window.UltraContent?.cases) ? window.UltraContent.cases : [])
        };
      }
    } catch (error) {
      console.warn("Unable to parse Ultra Expo content data", error);
    }
  }

  function maybeRefreshContentBackedLogos(root) {
    if (externalContentRefreshDone) return;
    const needsBrandLogos = root.querySelector(".ultra-about-brand-wall, .ultra-home-trusted-section") &&
      !root.querySelector(".ultra-about-brand-logo, .ultra-home-client-logo");
    if (!needsBrandLogos) return;
    ensureExternalContent(() => {
      if (externalContentRefreshDone || !explicitBrandSource().length) return;
      externalContentRefreshDone = true;
      renderAppPage(currentPath(), locale());
    });
  }

  function mergeContentOverrides(baseItems, overrideItems) {
    const merged = Array.isArray(baseItems) ? baseItems.map(item => ({ ...item })) : [];
    if (!Array.isArray(overrideItems) || !overrideItems.length) return merged;
    const indexById = new Map(merged.map((item, index) => [item?.id, index]).filter(([id]) => id));
    overrideItems.forEach(item => {
      if (!item) return;
      const id = item.id;
      if (id && indexById.has(id)) {
        const index = indexById.get(id);
        merged[index] = { ...merged[index], ...item };
        return;
      }
      merged.push({ ...item });
    });
    return merged;
  }

  function isCurrentCaseAsset(url) {
    const value = String(url || "").trim();
    if (!value) return false;
    if (value.startsWith("./assets/notion/cases/") || value.startsWith("/assets/notion/cases/")) return true;
    try {
      return new URL(value, document.baseURI).pathname.includes("/assets/notion/cases/");
    } catch (error) {
      return false;
    }
  }

  function hasCurrentCaseMedia(item) {
    if (isCurrentCaseAsset(caseImage(item))) return true;
    return caseGalleryImages(item).some(isCurrentCaseAsset);
  }

  function activeCases() {
    const override = getAdminConfig().cases?.items;
    const items = mergeContentOverrides(liveContent().cases, override);
    return sortCases(items.filter(item => item?.isOnline !== false && hasCurrentCaseMedia(item)));
  }

  function activeBrands() {
    const override = getAdminConfig().brands?.items;
    const items = mergeContentOverrides(liveContent().brands, override);
    return sortBrandsForDisplay(items.filter(item => item?.isOnline !== false));
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

  function loadContent() {
    if (window.UltraContent && Array.isArray(window.UltraContent.cases)) {
      return normalizeContent(Array.isArray(window.UltraContent.brands) ? window.UltraContent.brands : [], window.UltraContent.cases);
    }
    return normalizeContent(Array.isArray(window.UltraBrands) ? window.UltraBrands : loadBrands(), loadCases());
  }

  function normalizeContent(sourceBrands, sourceCases) {
    const slug = value => String(value || "brand").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const parseArea = value => {
      if (typeof value === "number") return value;
      const match = String(value || "").match(/\d+(?:\.\d+)?/);
      return match ? Number(match[0]) : null;
    };
    const toFiles = (value, fallbackName) => {
      if (!value) return [];
      if (Array.isArray(value)) return value.filter(Boolean);
      return [{ name: fallbackName || "local-mock-file", url: value, source: "local-mock" }];
    };
    const brandMap = new Map((sourceBrands || []).map(brand => [brand.id, brand]));
    const cases = (sourceCases || []).map((item, index) => {
      const brandEnglishName = item.brandEnglishName || item.client || "";
      const brandId = item.brandId || slug(brandEnglishName);
      const areaSqm = item.areaSqm ?? parseArea(item.area);
      const range = caseDateRange(item);
      const year = Number(caseYear({ ...item, ...range })) || null;
      if (brandEnglishName && !brandMap.has(brandId)) {
        brandMap.set(brandId, {
          id: brandId,
          chineseName: item.brandChineseName || "",
          englishName: brandEnglishName,
          originalLogo: { files: toFiles(item.brandLogoOriginal, `${brandId}-original-logo`) },
          grayLogo: { files: toFiles(item.brandLogoGray, `${brandId}-gray-logo`) },
          industry: item.industry ? [item.industry] : [],
          isFeaturedBrand: Boolean(item.isFeaturedBrand),
          featuredBrandOrder: item.featuredBrandOrder ?? null,
          brandOrder: item.brandOrder ?? index + 1,
          isOnline: item.brandOnline !== false,
          notes: ""
        });
      }
      return {
        ...item,
        id: item.id || `case-${index + 1}`,
        title: item.title || [brandEnglishName, item.event, year].filter(Boolean).join(" · "),
        brandId,
        brandEnglishName,
        exhibitionName: item.exhibitionName || item.event || "",
        country: item.country || item.location || item.region || "",
        dateStart: range.dateStart,
        dateEnd: range.dateEnd,
        year,
        areaSqm,
        chineseIntro: item.chineseIntro || item.description?.zh || "",
        englishIntro: item.englishIntro || item.description?.en || "",
        coverImage: item.coverImage || { files: toFiles(item.image, `${item.id || "case"}-cover`) },
        galleryImages: item.galleryImages || { files: toFiles(item.images || [], `${item.id || "case"}-gallery`) },
        isFeaturedCase: item.isFeaturedCase ?? Boolean(item.featured),
        featuredCaseOrder: item.featuredCaseOrder ?? (item.featured ? index + 1 : null),
        casePageOrder: item.casePageOrder ?? index + 1,
        isOnline: item.isOnline !== false,
        notes: item.notes || ""
      };
    });
    const brands = Array.from(brandMap.values()).sort((a, b) => (Number(a.brandOrder) || 9999) - (Number(b.brandOrder) || 9999));
    window.UltraContent = window.UltraContent || {
      version: "2026-06-13-local-mock",
      source: "local-mock",
      sync: {
        notion: { enabled: false, brandsDatabaseId: "", casesDatabaseId: "" },
        aliyunOss: { enabled: false, bucket: "", region: "", publicBaseUrl: "" }
      },
      schemas: {
        brands: ["chineseName", "englishName", "originalLogo", "grayLogo", "industry", "isFeaturedBrand", "featuredBrandOrder", "brandOrder", "isOnline", "notes"],
        cases: ["title", "brandId", "exhibitionName", "dateStart", "dateEnd", "year", "areaSqm", "industry", "country", "chineseIntro", "englishIntro", "coverImage", "galleryImages", "isFeaturedCase", "featuredCaseOrder", "casePageOrder", "isOnline", "notes"]
      },
      brands,
      cases
    };
    return { brands, cases };
  }

  function loadContentScriptText() {
    try {
      const script = document.querySelector('script[src*="ultra-cases.js"]');
      const url = script?.src || new URL("assets/ultra-cases.js", document.baseURI).href;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      if (xhr.status < 200 || xhr.status >= 300) return "";
      contentScriptText = xhr.responseText || "";
      return contentScriptText;
    } catch (error) {
      console.warn("Unable to load Ultra Expo content data", error);
      return "";
    }
  }

  function loadBrands() {
    if (Array.isArray(window.UltraBrands)) return window.UltraBrands;
    try {
      const text = contentScriptText || loadContentScriptText();
      const parsed = parseContentArray(text, "UltraBrands", "UltraCases");
      if (!parsed.length) return [];
      window.UltraBrands = parsed;
      return parsed;
    } catch (error) {
      console.warn("Unable to load Ultra Expo brands", error);
      return [];
    }
  }

  function loadCases() {
    if (Array.isArray(window.UltraCases)) return window.UltraCases;
    try {
      const text = contentScriptText || loadContentScriptText();
      const parsed = parseContentArray(text, "UltraCases", "UltraContent");
      if (!parsed.length) return [];
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

  function scrollToHashTarget(hash, behavior = "smooth") {
    const targetId = decodeURIComponent(String(hash || "").replace(/^#/, ""));
    if (!targetId) return false;
    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior, block: "start" });
    });
    return true;
  }

  function resetIntroForRoute() {
    document.body.classList.add("is-intro-reset");
    document.body.classList.remove("is-ready");
  }

  function triggerNavIntroOnce() {
    if (!navIntroEnabled || navIntroPlayed || !document.body.classList.contains("is-nav-intro")) return;
    navIntroPlayed = true;
    window.requestAnimationFrame(() => {
      document.body.classList.add("is-nav-enter");
      window.setTimeout(() => {
        document.body.classList.remove("is-nav-intro", "is-nav-enter");
      }, 620);
    });
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
          ${navItems.map(item => {
            const label = L.nav[item.key];
            const active = activePath === item.path || (item.path === "/cases" && activePath.startsWith("/cases"));
            return `<a href="${routeLink(item.path)}" data-route="${item.path}" aria-label="${esc(label)}" class="ultra-split-rolling${active ? " is-active" : ""}">${rollingButtonText(label)}</a>`;
          }).join("")}
        </div>
        <div class="ultra-actions">
          <button class="ultra-lang ultra-split-rolling" type="button" data-locale-toggle="${nextLang}" aria-label="${lang === "zh" ? "Switch to English" : "切换到中文"}">
            <span class="ultra-lang-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18M12 3c3 3.25 3 14.75 0 18M12 3c-3 3.25-3 14.75 0 18"></path>
              </svg>
            </span>
            <span class="ultra-lang-label">${rollingButtonText(langLabel)}</span>
          </button>
          <a class="ultra-primary ultra-split-rolling" href="${routeLink("/contact")}" data-route="/contact" aria-label="${esc(L.cta)}">${rollingButtonText(L.cta)}</a>
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
        zhTitle: "策略",
        enSub: "Brand Planning",
        zhSub: "品牌策划",
        enDesc: "Overseas strategy · Content & creative direction · Exhibition planning & timeline management",
        zhLead: "出海策略 · 内容创意 · 展会规划",
        zhDesc: "我们帮助客户在空间设计开始之前明确参展目标、品牌信息层级、产品表达与观众动线，让展台真正服务品牌出海目标。"
      },
      {
        icon: "design",
        code: "02",
        enTitle: "Design",
        zhTitle: "设计",
        enSub: "Spatial Design",
        zhSub: "空间设计",
        enDesc: "Concept design · 3D visualization & rendering · Construction drawing package",
        zhLead: "概念设计 · 3D 渲染 · 施工图深化",
        zhDesc: "我们将品牌语言转化为空间结构，结合视觉识别、产品陈列、灯光材料与观众动线进行系统设计。"
      },
      {
        icon: "abroad",
        code: "03",
        enTitle: "Abroad",
        zhTitle: "海外落地",
        enSub: "Overseas Execution",
        zhSub: "海外执行",
        enDesc: "Local sourcing & supplier management · Customs clearance & logistics · Cross-timezone project coordination",
        zhLead: "本地供应 · 清关物流 · 跨时区项目管理",
        zhDesc: "通过本地化供应链、海外伙伴与项目管理，我们降低跨国展会交付中的不确定性。"
      },
      {
        icon: "build",
        code: "04",
        enTitle: "Build",
        zhTitle: "搭建",
        enSub: "Engineering & Build",
        zhSub: "工程搭建",
        enDesc: "Factory prefabrication · On-site construction & QC · Strike, pack & return logistics",
        zhLead: "工厂预制 · 现场施工 · 拆撤回运",
        zhDesc: "从工厂预制到现场搭建，我们关注设计还原、工期控制、材料质量和展期稳定运行。"
      }
    ];
    return `
      <section class="ultra-home-services" data-ultra-home-services data-ultra-static-en>
        <div class="ultra-home-services-inner">
          <div class="ultra-home-services-head">
            <div class="ultra-home-services-kicker">${zh ? "一体化展会服务" : "END-TO-END EXHIBITION SERVICES"}</div>
            <h2>${zh ? "从策略到现场的全球展会交付服务" : "End-to-end Exhibition Services"}</h2>
            <p>${zh ? "海外展会的难点不只是设计，而是策略、空间设计、生产、物流、清关、现场施工和跨时区沟通之间的衔接。Ultra Expo 将这些环节整合进同一套交付体系。" : "Overseas exhibitions are not only about design. Ultra Expo integrates strategy, spatial design, production, logistics, customs clearance, on-site construction, and cross-time-zone communication into one delivery system."}</p>
          </div>
          <div class="ultra-home-services-list">
            ${serviceItems.map((item, index) => `
              <article class="ultra-home-service-row ultra-character-block-reveal" data-ultra-character-block-reveal style="--reveal-group-delay:${index * 135}ms;--char-reveal-step:28ms;--block-reveal-duration:0.42s;">
                <div class="ultra-home-service-code">${item.code}</div>
                <div class="ultra-home-service-title">
                  <h3 data-reveal-text>${zh ? item.zhTitle : item.enTitle}</h3>
                  <span>${esc(zh ? item.zhSub : item.enSub)}</span>
                </div>
                <div class="ultra-home-service-copy">
                  <strong>${esc(zh ? item.zhLead : item.enDesc)}</strong>
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

  function homeSelectedHTML(lang) {
    const zh = lang === "zh";
    const items = activeCases()
      .filter(item => caseImage(item))
      .slice(0, 14);
    if (!items.length) return "";
    const rowA = items.slice(0, Math.min(8, items.length));
    const rowB = items.length > 8 ? items.slice(8, 14) : [...items].reverse();
    const imageCard = item => `
      <a class="ultra-selected-card" href="${routeLink(`/cases/${item.id}`)}" data-route="/cases/${esc(item.id)}" aria-label="${esc(`${item.client} ${item.event || ""}`)}">
        <img src="${esc(caseImage(item))}" alt="${esc(`${caseBrandName(item)} ${caseEventName(item) || ""}`)}" loading="lazy" decoding="async" fetchpriority="low">
        <span>
          <strong>${esc(caseBrandName(item))}</strong>
          <em>${esc([caseEventName(item), caseYear(item)].filter(Boolean).join(" / "))}</em>
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
          ${rowA.length ? row(rowA) : ""}
          ${rowB.length ? row(rowB, true) : ""}
        </div>
      </section>
    `;
  }

  function homeHeroTitle(lang) {
    return lang === "zh"
      ? ["\u4e3a\u4e2d\u56fd\u54c1\u724c\u51fa\u6d77", "\u6784\u5efa\u5168\u7403\u5c55\u4f1a\u4ea4\u4ed8\u7cfb\u7edf"]
      : ["Global exhibition delivery", "for Chinese brands going abroad."];
  }

  function homeHeroCopy(lang) {
    return lang === "zh"
      ? "\u8986\u76d6\u7b56\u7565\u3001\u7a7a\u95f4\u8bbe\u8ba1\u3001\u6d77\u5916\u672c\u5730\u5316\u3001\u5de5\u7a0b\u642d\u5efa\u4e0e\u73b0\u573a\u4ea4\u4ed8\u7684\u4e00\u4f53\u5316\u670d\u52a1\u3002"
      : "Strategy, spatial design, overseas localization, engineering, and on-site build in one controlled delivery system.";
  }

  function rollingButtonText(label) {
    const chars = Array.from(label || "");
    const splitText = chars.map((char, index) => {
      if (/\s/.test(char)) return `<span class="ultra-rolling-btn-space" aria-hidden="true">&nbsp;</span>`;
      const safeChar = esc(char);
      return `<span class="ultra-rolling-btn-char" style="--i:${index}" aria-hidden="true"><span class="ultra-rolling-btn-char-current">${safeChar}</span><span class="ultra-rolling-btn-char-duplicate">${safeChar}</span></span>`;
    }).join("");
    return `
      <span class="ultra-rolling-btn-text" aria-hidden="true">${splitText}</span>
    `;
  }

  function statRollingText(label) {
    const safeLabel = esc(label || "");
    return `<span class="ultra-stat-roll-track" aria-hidden="true"><span>${safeLabel}</span><span>${safeLabel}</span></span>`;
  }

  function homeHeroHTML(lang) {
    const zh = lang === "zh";
    const heroTitle = homeHeroTitle(lang);
    const titleText = heroTitle.join(" ");
    const titleLines = heroTitle.map((line, index) => `<span class="hero-focus-line" style="--intro-index:${index}">${esc(line)}</span>`).join("");
    const casesLabel = zh ? "\u67e5\u770b\u6848\u4f8b" : "View Cases";
    const servicesLabel = zh ? "\u4e86\u89e3\u670d\u52a1" : "Our Services";
    return `
      <section class="home-hero-scene ultra-home-hero-section ultra-home-hero-rebuilt-section" data-ultra-home-hero data-animate>
        <section class="raster-scroll-scene" data-raster-scene>
          <div class="raster-sticky">
            <div class="raster-cols" data-raster-cols aria-hidden="true"></div>
            <div class="home-hero-content ultra-home-hero-rebuilt" data-ultra-static-en>
              <div class="ultra-home-hero-rebuilt-title">
                <h1 class="hero-focus-title" aria-label="${esc(titleText)}">
                  <span class="title-blur" aria-hidden="true">${titleLines}</span>
                  <span class="title-sharp" aria-hidden="true">${titleLines}</span>
                </h1>
              </div>
              <div class="ultra-home-hero-rebuilt-bottom">
                <p class="ultra-home-intro-copy">${esc(homeHeroCopy(lang))}</p>
                <div class="ultra-home-hero-rebuilt-actions ultra-home-intro-actions">
                  <a class="ultra-home-hero-rebuilt-primary ultra-split-rolling" href="${routeLink("/cases")}" data-route="/cases" aria-label="${esc(casesLabel)}">${rollingButtonText(casesLabel)}</a>
                  <a class="ultra-home-hero-rebuilt-secondary ultra-split-rolling" href="${routeLink("/services")}" data-route="/services" aria-label="${esc(servicesLabel)}">${rollingButtonText(servicesLabel)}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="raster-page-grain" aria-hidden="true"></div>
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
    const brandLogos = sortBrandsForDisplay(explicitBrandSource().filter(item => item?.isOnline !== false))
      .map((brand, index) => {
        const label = brand?.englishName || brand?.name || brand?.id || "Brand";
        const { grayLogo, colorLogo } = brandLogoUrls(brand);
        return { id: brand?.id || `brand-${index}`, label, grayLogo, colorLogo };
      })
      .filter(brand => brand.grayLogo || brand.colorLogo);
    const logos = [...brandLogos, ...brandLogos];
    const logoHTML = logos.map(brand => `
              <span class="ultra-home-client" data-brand-id="${esc(brand.id)}" title="${esc(brand.label)}">
                ${brand.grayLogo ? `<img class="ultra-home-client-logo is-gray" src="${esc(brand.grayLogo)}" alt="${esc(brand.label)}" loading="lazy">` : ""}
                ${brand.colorLogo ? `<img class="ultra-home-client-logo is-color" src="${esc(brand.colorLogo)}" alt="" loading="lazy" aria-hidden="true">` : ""}
                ${!brand.grayLogo && !brand.colorLogo ? `<span>${esc(brand.label)}</span>` : ""}
              </span>
            `).join("");
    return `
      <section class="ultra-home-trusted-section" data-ultra-home-trusted data-animate>
        <h2 class="ultra-home-trusted-title">${esc(title)}</h2>
        <div class="ultra-home-client-marquee" aria-label="${lang === "zh" ? "\u5408\u4f5c\u5ba2\u6237" : "Client logos"}">
          <div class="ultra-home-client-track">
            ${logoHTML}
          </div>
        </div>
      </section>
    `;
  }

  let homeClientMarqueeStop = null;

  function initHomeClientMarquee(root) {
    if (typeof homeClientMarqueeStop === "function") {
      homeClientMarqueeStop();
      homeClientMarqueeStop = null;
    }
    const marquee = root?.querySelector?.(".ultra-home-client-marquee");
    const track = root?.querySelector?.(".ultra-home-client-track");
    if (!marquee || !track) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    track.classList.add("is-js-marquee");
    let position = 0;
    let currentSpeed = 0;
    let targetSpeed = 0;
    let loopWidth = 0;
    let frame = 0;
    let lastTime = 0;
    const durationSeconds = 46;
    const easeMs = 640;
    const updateMetrics = () => {
      loopWidth = Math.max(1, track.scrollWidth / 2);
      targetSpeed = loopWidth / durationSeconds;
      if (!currentSpeed) currentSpeed = targetSpeed;
    };
    const setPaused = paused => {
      updateMetrics();
      targetSpeed = paused ? 0 : loopWidth / durationSeconds;
    };
    const tick = time => {
      if (!track.isConnected) return;
      if (!lastTime) lastTime = time;
      const dt = Math.min(time - lastTime, 64);
      lastTime = time;
      const blend = 1 - Math.exp(-dt / easeMs);
      currentSpeed += (targetSpeed - currentSpeed) * blend;
      position -= currentSpeed * (dt / 1000);
      if (position <= -loopWidth) position += loopWidth;
      track.style.setProperty("--home-client-x", `${position.toFixed(2)}px`);
      frame = window.requestAnimationFrame(tick);
    };
    updateMetrics();
    frame = window.requestAnimationFrame(tick);
    marquee.addEventListener("pointerenter", () => setPaused(true), { passive: true });
    marquee.addEventListener("pointerleave", () => setPaused(false), { passive: true });
    marquee.addEventListener("focusin", () => setPaused(true));
    marquee.addEventListener("focusout", () => setPaused(false));
    window.addEventListener("resize", updateMetrics, { passive: true });
    homeClientMarqueeStop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateMetrics);
      track.classList.remove("is-js-marquee");
      track.style.removeProperty("--home-client-x");
    };
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
    initHomeClientMarquee(container);
    window.UltraHomeRasterBackground?.init?.(container);
    initUltraTypeReveal(container);
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
    const serviceAnchors = ["brand-strategy", "space-design", "overseas-delivery", "engineering-build"];
    const footerServices = services.map((s, index) => {
      const anchor = serviceAnchors[index] || "";
      return {
        href: routeLink(anchor ? `/services#${anchor}` : "/services"),
        route: "/services",
        targetId: anchor,
        label: zh ? s.zhTitle : s.enTitle
      };
    });
    const footerContact = (adminConfig.footer.contactLinks || [])
      .filter(item => item.enabled !== false)
      .map(item => {
        const isBusiness = item.key === "business";
        return {
          ...item,
          label: adminLabel(item, lang),
          href: isBusiness ? routeLink("/contact#contact-form") : adminHref(item),
          route: isBusiness ? "/contact" : item.route,
          targetId: isBusiness ? "contact-form" : ""
        };
      });
    const footerContactText = footerContact.filter(item => !["phone", "phone-consultation", "email", "wechat", "wechat-official", "rednote", "linkedin"].includes(item.key));
    const socialItems = (adminConfig.footer.socialLinks || [])
      .filter(item => item.enabled !== false)
      .map(item => ({ ...item, label: adminLabel(item, lang), href: adminHref(item) }));
    const footerColumn = (heading, items) => `
      <nav class="ultra-footer-column" aria-label="${esc(heading.replace("/", ""))}">
        <h4>${esc(heading)}</h4>
        ${items.map(item => `<a class="ultra-footer-link ultra-footer-rolling ultra-split-rolling" href="${esc(item.href)}" ${item.route ? `data-route="${esc(item.route)}"` : ""} ${item.targetId ? `data-scroll-target="${esc(item.targetId)}"` : ""} data-label="${esc(item.label)}" aria-label="${esc(item.label)}">${rollingButtonText(item.label)}</a>`).join("")}
      </nav>
    `;
    const iconSVG = {
      phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.5 9.5 3l2.1 5.1-1.8 1.2c.9 1.9 2.4 3.4 4.2 4.2l1.3-1.8 5 2.2-.5 2.8c-.2 1-1 1.7-2 1.7C10.9 18.4 5.6 13.1 5.6 6.2c0-.9.5-1.6 1.1-2.7Z"/></svg>`,
      email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.7 6h14.6c1 0 1.7.7 1.7 1.7v8.6c0 1-.7 1.7-1.7 1.7H4.7c-1 0-1.7-.7-1.7-1.7V7.7C3 6.7 3.7 6 4.7 6Zm.7 1.8 6.6 4.8 6.6-4.8H5.4Zm13.8 8.4V9.4l-6.8 4.9a.7.7 0 0 1-.8 0L4.8 9.4v6.8h14.4Z"/></svg>`,
      rednote: `<svg viewBox="0 0 200 200" aria-hidden="true"><path d="M114.825 132.607H93.2201C92.0198 132.607 91.6198 132.607 92.42 131.407C94.0204 128.206 95.6206 124.205 98.0211 121.004C98.4211 120.204 98.8213 119.804 100.022 119.804H110.424C111.624 119.804 111.624 119.404 111.624 118.204V81.396C111.624 80.1957 111.224 79.7956 110.024 80.1957H104.022C102.822 80.1957 102.422 79.7957 102.422 78.9954V68.9933C102.422 67.7931 102.822 67.3929 104.023 67.3929H131.629C132.429 67.3929 132.829 67.3929 132.829 68.5932V78.9954C132.829 79.7956 132.429 80.1957 131.629 80.1957H125.627C124.427 80.1957 124.027 80.5957 124.027 81.796V118.604C124.027 119.404 124.427 119.804 125.227 119.804H135.629C136.829 119.804 137.23 120.204 137.23 121.405V131.407C137.23 132.607 136.829 133.007 135.629 133.007C129.228 132.607 122.026 132.607 114.825 132.607ZM40.0087 92.9985V121.004C40.0087 123.005 39.6087 125.405 38.4083 127.406C36.0078 131.407 32.407 132.607 27.606 132.207C22.805 131.807 20.0043 129.406 18.8042 125.005C17.6039 120.604 17.6039 121.405 21.6047 120.604C23.2051 120.604 25.2055 121.405 26.8058 120.204C27.606 119.404 27.2059 117.404 27.2059 115.403V62.992C27.2059 61.7917 27.6059 61.3916 28.8063 61.3916H38.4083C39.6086 61.3916 40.0087 61.7917 40.0087 62.992V92.9985Z" fill="currentColor"/><path d="M97.621 104.201C96.0208 107.001 94.8205 110.202 93.2201 113.003C92.42 115.003 91.2197 115.403 89.6193 115.403H80.0173C79.2171 115.403 78.4169 115.403 77.6168 115.003C74.8161 114.203 74.016 112.203 74.8161 109.002C76.4165 104.201 79.2171 100.2 81.2175 95.3989C81.6176 94.5987 82.0177 94.1987 82.4179 92.9984H74.016C70.8153 92.1982 69.2149 90.1978 70.8153 86.5971C72.0156 82.9962 74.016 78.9954 76.0164 75.7947C78.0169 72.1939 79.6172 67.793 82.0177 63.7921C82.4177 62.9919 82.8179 62.5918 84.0181 62.5918H94.0204C95.2205 62.5918 95.2205 62.9919 94.8204 63.7921C92.42 68.9933 89.6193 73.7942 87.2188 78.9954C86.8188 79.3954 86.8188 79.7955 86.4188 80.5958C86.0188 81.396 86.4188 81.7959 87.2188 82.196C88.019 82.596 88.019 81.796 88.419 81.3959C88.8192 80.5958 89.2193 80.1956 90.4196 80.1956H100.422C101.622 80.1956 101.622 80.5956 101.222 81.3959C98.0212 87.7972 94.8205 94.5987 91.6198 101C90.4196 103.401 90.8196 104.201 93.6202 104.201H97.621ZM8.00183 126.606C5.6013 121.805 3.20077 117.404 0.800244 112.603C0.400244 112.203 0.400244 111.803 0.800244 111.402C2.40064 107.802 2.40064 103.801 2.40064 99.3997C2.80064 92.9984 3.20077 86.9971 3.60091 80.9958C3.60091 80.1956 4.00091 79.7955 4.80117 79.7955H15.6034C16.4037 79.7955 16.8037 79.7955 16.8037 80.9958C16.0036 90.1978 15.6034 99.3997 14.4032 109.002C13.6032 115.003 11.6026 121.005 7.60183 125.805C8.40183 125.805 8.00183 126.205 8.00183 126.606ZM55.612 79.7955H60.8132C62.0135 79.7955 62.0135 80.1955 62.4135 81.3959C62.8135 89.7976 63.6138 98.1995 64.4139 106.601C64.4139 107.401 64.4139 108.602 64.814 109.402C65.6141 111.002 65.214 112.603 64.414 114.603C62.8136 117.804 61.2132 121.805 59.2128 125.005C58.8128 126.206 58.4127 126.206 57.6124 125.005C54.8119 120.204 52.8115 115.803 51.6111 110.202C50.411 105.001 50.411 99.7999 50.0108 94.5987C49.6108 89.7976 49.2107 85.7968 48.8106 80.9958C48.8106 79.7955 48.8106 79.3955 50.411 79.3955C52.0112 80.1955 53.6116 79.7955 55.612 79.7955ZM76.0164 132.607C73.6159 132.607 69.6151 133.007 66.8144 132.207C65.6141 131.807 65.2141 131.407 66.0144 130.606C68.0147 127.006 69.6151 123.405 71.6155 119.804C72.0155 119.404 72.0155 118.604 72.8157 119.004C75.6164 120.204 79.2171 119.804 82.4179 119.804H90.8196C91.6198 119.804 92.0198 120.204 91.6198 121.004C89.6193 124.605 88.0191 128.206 86.0185 132.207C85.6185 133.007 85.2185 133.007 84.4183 133.007C82.0177 132.607 79.6172 132.607 76.0164 132.607ZM190.041 79.7955C185.64 79.7955 185.64 79.7955 185.64 75.3946C185.64 74.1943 185.64 72.594 186.04 70.9936C186.84 67.793 189.641 65.7926 193.642 66.1926C196.442 66.5926 199.243 69.3933 199.243 72.994C199.243 76.5948 196.842 78.9954 193.242 79.3954C192.041 79.7955 191.241 79.7955 190.041 79.7955ZM164.435 118.604V131.407C164.435 132.607 164.035 133.007 162.835 133.007H152.833C151.633 133.007 151.233 132.607 151.233 131.407V106.201C151.233 105.001 150.833 104.601 149.632 104.601H140.03C138.83 104.601 138.43 104.601 138.43 103.401V92.9984C138.43 91.7982 138.83 91.7982 140.03 91.7982H150.032C151.233 91.7982 151.633 91.398 151.233 90.1978V82.196C151.233 80.9958 150.833 80.9958 149.632 80.9958H143.631C142.831 80.9958 142.431 80.9958 142.431 79.7955V69.3933C142.431 68.5933 142.831 68.193 143.631 68.193H149.632C150.432 68.193 150.833 67.793 150.833 66.9927C150.833 64.1922 150.833 64.1922 154.033 64.1922H162.435C163.235 64.1922 163.635 64.5922 163.635 65.3925C163.635 68.193 163.635 68.193 166.436 68.193C170.037 68.193 173.637 68.9933 176.438 70.5935C180.839 72.994 182.439 77.395 182.439 81.7959V90.1978C182.439 91.398 182.839 91.7982 184.04 91.7982C188.841 91.7982 192.441 92.9984 195.242 96.9992C196.842 98.9996 197.643 102.2 197.643 104.601V121.405C197.643 127.806 194.042 132.207 187.64 133.407C185.24 133.807 182.039 133.807 179.639 133.007C175.238 131.807 172.437 127.806 172.037 123.405C172.037 122.205 172.437 122.605 173.237 122.605H183.64C184.84 122.605 185.24 122.205 185.24 121.004V110.202C185.24 107.401 183.64 105.401 180.439 105.401H164.435C163.635 105.401 163.235 105.801 163.235 106.601C164.435 109.802 164.435 113.803 164.435 118.604ZM171.237 85.3967C171.237 79.7955 171.637 79.7955 165.236 79.7955C164.435 79.7955 164.035 80.1955 164.035 80.9958V89.7976C164.035 90.5979 164.435 90.9979 165.236 90.9979H170.037C170.837 90.9979 171.237 90.5979 171.237 89.7976L171.237 85.3967Z" fill="currentColor"/></svg>`,
      wechat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.7 5.2c-4 0-7.2 2.6-7.2 5.8 0 1.8 1 3.4 2.6 4.4l-.7 2.2 2.6-1.3c.8.2 1.7.4 2.7.4.3 0 .6 0 .9-.1-.3-.7-.5-1.4-.5-2.1 0-2.9 2.9-5.2 6.4-5.2.1 0 .3 0 .4.1-.9-2.5-3.7-4.2-7.2-4.2Zm-2.5 4.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm5 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm4.5.8c-3 0-5.3 1.8-5.3 4.1s2.4 4.1 5.3 4.1c.7 0 1.4-.1 2-.3l2.1 1-.5-1.8c1.2-.8 1.9-1.9 1.9-3.1 0-2.2-2.5-4-5.5-4Zm-1.8 3.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Zm3.8 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z"/></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 4.5h15v15h-15v-15Zm3.1 6v6.5h2v-6.5h-2Zm1-3.2c-.7 0-1.1.4-1.1 1s.4 1 1.1 1 1.1-.4 1.1-1-.4-1-1.1-1Zm2.7 3.2v6.5h2v-3.5c0-.9.5-1.5 1.3-1.5.7 0 1.1.5 1.1 1.5v3.5h2v-3.8c0-2-1.1-2.9-2.6-2.9-.9 0-1.5.4-1.8 1v-.8h-2Z"/></svg>`
    };
    const bottomPrimaryLabel = zh ? "\u63d0\u4ea4\u9879\u76ee\u9700\u6c42" : "Submit Project Brief";
    const bottomSecondaryLabel = zh ? "\u53d1\u9001\u90ae\u4ef6" : "Send an Email";
    return `
      <section class="ultra-bottom-cta" data-ultra-bottom>
        <div class="ultra-bottom-ambient" aria-hidden="true"></div>
        <div class="ultra-bottom-cta-inner">
          <div class="ultra-bottom-cta-copy">
            <h2>${zh ? "让我们一起为你的品牌，在全球搭建舞台。" : "Let’s build your global stage."}</h2>
            <div class="ultra-bottom-actions">
              <a class="ultra-bottom-primary ultra-split-rolling" href="${routeLink("/contact")}" data-route="/contact" aria-label="${esc(bottomPrimaryLabel)}">${rollingButtonText(bottomPrimaryLabel)}</a>
              <a class="ultra-bottom-secondary ultra-split-rolling" href="mailto:jack@ultraexpo.com" aria-label="${esc(bottomSecondaryLabel)}">${rollingButtonText(bottomSecondaryLabel)}</a>
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
              <nav class="ultra-footer-column ultra-footer-contact-column" aria-label="Contact">
                <h4>CONTACT/</h4>
                ${footerContactText.map(item => `<a class="ultra-footer-link ultra-footer-rolling ultra-split-rolling" href="${esc(item.href)}" ${item.route ? `data-route="${esc(item.route)}"` : ""} ${item.targetId ? `data-scroll-target="${esc(item.targetId)}"` : ""} data-label="${esc(item.label)}" aria-label="${esc(item.label)}">${rollingButtonText(item.label)}</a>`).join("")}
                <div class="ultra-footer-contact-buttons" aria-label="Contact buttons">
                  ${socialItems.map(item => `<a class="ultra-social-card" href="${esc(item.href)}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="${item.href.startsWith("http") ? "noopener" : ""}" aria-label="${esc(item.label)}" data-label="${esc(item.label)}">${iconSVG[item.icon] || iconSVG.email}<span>${esc(item.label)}</span></a>`).join("")}
                </div>
              </nav>
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
    const aboutConfig = getAdminConfig().about || {};
    const configuredServiceMedia = Array.isArray(aboutConfig.serviceMedia) ? aboutConfig.serviceMedia : [];
    const aboutStats = zh ? [
      ["15+", "\u8986\u76d6\u56fd\u5bb6\u4e0e\u5730\u533a"],
      ["200+", "\u5168\u7403\u4ea4\u4ed8\u9879\u76ee"],
      ["50K+ SQM", "\u7d2f\u8ba1\u4ea4\u4ed8\u9762\u79ef"],
      ["20+", "\u6d77\u5916\u642d\u5efa\u4f19\u4f34"]
    ] : [
      ["15+", "Countries"],
      ["200+", "Projects"],
      ["50K+ SQM", "Delivered area"],
      ["20+", "Overseas partners"]
    ];
    const serviceCards = zh ? [
      ["STRATEGY", "\u7b56\u7565\u89c4\u5212", "\u51fa\u6d77\u7b56\u7565 / \u5185\u5bb9\u521b\u610f / \u5c55\u4f1a\u89c4\u5212"],
      ["DESIGN", "\u7a7a\u95f4\u8bbe\u8ba1", "\u6982\u5ff5\u8bbe\u8ba1 / 3D \u6e32\u67d3 / \u65bd\u5de5\u56fe\u6df1\u5316"],
      ["ABROAD", "\u6d77\u5916\u843d\u5730", "\u672c\u5730\u4f9b\u5e94 / \u6e05\u5173\u7269\u6d41 / \u8de8\u65f6\u533a\u9879\u76ee\u7ba1\u7406"],
      ["BUILD", "\u5de5\u7a0b\u642d\u5efa", "\u5de5\u5382\u9884\u5236 / \u73b0\u573a\u65bd\u5de5 / \u62c6\u64a4\u56de\u8fd0"]
    ] : [
      ["STRATEGY", "Strategy", "Go-to-market strategy / Content planning / Exhibition planning"],
      ["DESIGN", "Design", "Concept design / 3D visualization / Technical drawings"],
      ["ABROAD", "Abroad", "Local supply / Customs and logistics / Cross-time-zone project management"],
      ["BUILD", "Build", "Factory prefabrication / On-site construction / Dismantling and return logistics"]
    ];
    const defaultServiceMedia = [
      { title: "STRATEGY", type: "image", url: "/assets/about/strategy.png?v=20260617-about-service-media02", alt: "Strategy service media" },
      { title: "DESIGN", type: "image", url: "/assets/about/design.png?v=20260617-about-service-media02", alt: "Design service media" },
      { title: "ABROAD", type: "image", url: "/assets/about/abroad.png?v=20260617-about-service-media02", alt: "Abroad service media" },
      { title: "BUILD", type: "image", url: "/assets/about/build.png?v=20260617-about-service-media02", alt: "Build service media" }
    ];
    const deliveryNodes = zh ? [
      ["\u82cf\u5dde", "\u603b\u90e8 / \u8bbe\u8ba1\u4e2d\u5fc3"],
      ["\u5357\u901a", "6,000 SQM \u4e3b\u5de5\u5382"],
      ["\u6ce2\u5170", "4,000 SQM \u6b27\u6d32\u5de5\u5382"],
      ["\u9999\u6e2f", "\u56fd\u9645\u7ed3\u7b97\u4e2d\u5fc3"],
      ["\u6d1b\u6749\u77f6", "5,000 SQM \u5317\u7f8e\u4ed3\u50a8"]
    ] : [
      ["SUZHOU", "HQ and Design Center"],
      ["NANTONG", "6,000 SQM Main Factory"],
      ["POLAND", "4,000 SQM Europe Factory"],
      ["HONG KONG", "Finance Hub"],
      ["LOS ANGELES", "5,000 SQM US Operations"]
    ];
    const exhibitionLogos = (Array.isArray(aboutConfig.exhibitionLogos) ? aboutConfig.exhibitionLogos : defaultExhibitionLogos())
      .filter(item => item?.visible !== false)
      .sort((a, b) => (Number(a.order) || 9999) - (Number(b.order) || 9999));
    const reasons = zh ? [
      ["01", "\u672c\u5730\u5316\u4f9b\u5e94\u94fe", "\u81ea\u6709\u5de5\u5382\u4e0e\u6d77\u5916\u8d44\u6e90\u534f\u540c\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u957f\u8ddd\u79bb\u8fd0\u8f93\uff0c\u63d0\u9ad8\u9879\u76ee\u63a7\u5236\u529b\u3002"],
      ["02", "\u8de8\u65f6\u533a\u54cd\u5e94", "\u4e2d\u56fd\u603b\u90e8\u3001\u9999\u6e2f\u7ed3\u7b97\u4e2d\u5fc3\u4e0e\u6d77\u5916\u8fd0\u8425\u8d44\u6e90\u534f\u540c\uff0c\u652f\u6301\u8de8\u65f6\u533a\u9879\u76ee\u6c9f\u901a\u3002"],
      ["03", "\u5e73\u5747 8 \u5468\u4ea4\u4ed8", "\u4ece\u6982\u5ff5\u8bbe\u8ba1\u5230\u73b0\u573a\u5f00\u5c55\uff0c\u9879\u76ee\u5468\u671f\u53ef\u63a7\uff0c\u5173\u952e\u8282\u70b9\u6e05\u6670\u900f\u660e\u3002"],
      ["04", "\u9879\u76ee\u7ecf\u7406\u9a7b\u573a", "\u6d77\u5916\u9879\u76ee\u53ef\u6d3e\u9063\u4e2d\u56fd\u9879\u76ee\u7ecf\u7406\u73b0\u573a\u7763\u5bfc\uff0c\u51cf\u5c11\u6c9f\u901a\u5931\u771f\u548c\u73b0\u573a\u504f\u5dee\u3002"]
    ] : [
      ["01", "LOCAL SUPPLY CHAIN", "Owned factories and overseas resources reduce unnecessary long-distance shipping and improve project control."],
      ["02", "24H RESPONSE", "China headquarters, Hong Kong finance hub, and overseas operations support cross-time-zone coordination."],
      ["03", "8-WEEK DELIVERY", "From concept to opening day, we keep timelines visible, practical, and manageable."],
      ["04", "ON-SITE PM", "Chinese project managers can be assigned on site to reduce communication loss and execution deviation."]
    ];
    const certs = zh ? [
      ["ISO 9001", "\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8ba4\u8bc1"],
      ["AAA Rating", "AAA \u7ea7\u4fe1\u7528\u4f01\u4e1a"],
      ["CACE Member", "\u4e2d\u56fd\u5c55\u89c8\u9986\u534f\u4f1a\u4f1a\u5458"],
      ["ISO 14001", "\u73af\u5883\u7ba1\u7406\u4f53\u7cfb\u8ba4\u8bc1"],
      ["ISO 45001", "\u804c\u4e1a\u5065\u5eb7\u5b89\u5168\u8ba4\u8bc1"],
      ["HK Entity", "\u9999\u6e2f\u6ce8\u518c\u4e3b\u4f53 / \u56fd\u9645\u7ed3\u7b97"]
    ] : [
      ["ISO 9001", "Quality Management System"],
      ["AAA Rating", "AAA Credit Enterprise"],
      ["CACE Member", "China Association for Exhibition Centers Member"],
      ["ISO 14001", "Environmental Management System"],
      ["ISO 45001", "Occupational Health and Safety"],
      ["HK Entity", "Hong Kong Registered Entity / International Settlement"]
    ];
    const explicitBrands = sortBrandsForDisplay(explicitBrandSource().filter(item => item?.isOnline !== false));
    const activeLogoBrands = activeBrands().filter(brandHasLogo);
    const brandSource = explicitBrands.length ? explicitBrands : activeLogoBrands;
    const brandWallBrands = sortBrandsForDisplay(brandSource.filter(brandHasLogo));
    const sectionIntro = (kicker, title, body, options = {}) => `
      <div class="ultra-about-head${options.revealTitle ? " ultra-character-block-reveal" : ""}" data-about-reveal${options.revealTitle ? " data-ultra-character-block-reveal" : ""}>
        ${kicker ? `<div class="ultra-about-kicker">${esc(kicker)}</div>` : ""}
        <h2${options.revealTitle ? " data-reveal-text" : ""}>${esc(title)}</h2>
        ${body ? `<p>${esc(body)}</p>` : ""}
      </div>
    `;
    const reasonIconKeys = ["supply", "response", "timeline", "onsite"];
    const renderServiceMedia = (media, title) => {
      const item = media && typeof media === "object" ? media : {};
      const type = String(item.type || "image").toLowerCase();
      let url = adminPreviewSrc(String(item.url || "").trim());
      const poster = adminPreviewSrc(String(item.poster || "").trim());
      const alt = item.alt || `${title} media`;
      if (/\/assets\/about\/(?:strategy|design|abroad|build)\.png(?:$|\?)/.test(url)) {
        url = `${url.split("?")[0]}?v=20260617-about-service-media02`;
      }
      if (url && type === "video") {
        return `<video src="${esc(url)}" ${poster ? `poster="${esc(poster)}"` : ""} muted playsinline loop preload="metadata" aria-label="${esc(alt)}"></video>`;
      }
      if (url) {
        return `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy">`;
      }
      return `<div class="ultra-about-media-placeholder" aria-hidden="true"></div>`;
    };
    const renderExhibitionLogo = item => {
      const name = item?.name || "Exhibition";
      const logo = String(item?.logo || "").trim();
      return `<span class="ultra-exhibition-logo-card">${logo ? `<img src="${esc(logo)}" alt="${esc(name)}">` : `<b>${esc(name)}</b>`}</span>`;
    };
    const renderBrandLogoCard = (brand, index) => {
      const englishName = brand?.englishName || brand?.name || brand?.id || "Brand";
      const chineseName = brand?.chineseName || englishName;
      const label = zh ? chineseName : englishName;
      const { grayLogo, colorLogo } = brandLogoUrls(brand);
      const logoMarkup = grayLogo || colorLogo
        ? `${grayLogo ? `<img class="ultra-about-brand-logo is-gray" src="${esc(grayLogo)}" alt="${esc(label)}" loading="lazy">` : ""}${colorLogo ? `<img class="ultra-about-brand-logo is-color" src="${esc(colorLogo)}" alt="" loading="lazy" aria-hidden="true">` : ""}`
        : `<span>${esc(label)}</span>`;
      return `<article class="ultra-about-brand-card" data-brand-scroll-card data-brand-id="${esc(brand?.id || `brand-${index}`)}" title="${esc(label)}" style="--about-card-index:${index}; --brand-progress:0">${logoMarkup}</article>`;
    };
    const exhibitionRows = [
      exhibitionLogos.filter((_, index) => index % 2 === 0),
      exhibitionLogos.filter((_, index) => index % 2 === 1)
    ].filter(row => row.length);

    return `
      <div class="ultra-about">
        <section class="ultra-hero ultra-about-hero">
          <div class="ultra-about-hero-bg" aria-hidden="true"></div>
          <div class="ultra-about-wrap ultra-about-hero-grid">
            <div class="ultra-about-hero-copy">
              <div class="ultra-about-kicker">${zh ? "\u5173\u4e8e\u7693\u521b / \u5c55\u4f1a\u4e0e\u51fa\u6d77" : "ABOUT ULTRA / EXHIBITION & ABROAD"}</div>
              <h1>${zh ? "\u8ba9\u4e2d\u56fd\u54c1\u724c<br>\u5728\u6d77\u5916<br>\u5448\u73b0\u672c\u5730\u54c1\u724c\u59ff\u6001" : "We make<br>Chinese brands<br>look at home overseas."}</h1>
              <p>${zh ? "\u7693\u521b\u5c55\u89c8 Ultra Expo \u6210\u7acb\u4e8e\u4e2d\u56fd\u82cf\u5dde\uff0c\u4e13\u6ce8\u670d\u52a1\u4e2d\u56fd\u54c1\u724c\u7684\u6d77\u5916\u5c55\u4f1a\u3001\u65b0\u54c1\u53d1\u5e03\u4e0e\u96f6\u552e\u7a7a\u95f4\u9879\u76ee\u3002\u6211\u4eec\u63d0\u4f9b\u4ece\u7b56\u7565\u3001\u7a7a\u95f4\u8bbe\u8ba1\u5230\u6d77\u5916\u672c\u5730\u5316\u751f\u4ea7\u3001\u7269\u6d41\u3001\u642d\u5efa\u4e0e\u73b0\u573a\u4ea4\u4ed8\u7684\u4e00\u4f53\u5316\u670d\u52a1\u3002" : "Ultra Expo is a global exhibition delivery team based in Suzhou, China. We help Chinese brands show up professionally in overseas exhibitions, product launches, and retail spaces, from strategy and spatial design to localized production, logistics, construction, and on-site delivery."}</p>
              <div class="ultra-about-stats">
                ${aboutStats.map((stat, index) => `<div><i class="ultra-about-stat-icon icon-${index}" aria-hidden="true"></i><strong class="ultra-about-stat-number ultra-stat-split" aria-label="${esc(stat[0])}">${statRollingText(stat[0])}</strong><span class="ultra-about-stat-label">${esc(stat[1])}</span></div>`).join("")}
              </div>
            </div>
            <div class="ultra-about-system" aria-hidden="true">
              <div class="ultra-about-system-frame">
                <span class="node suzhou"></span><span class="node poland"></span><span class="node la"></span><span class="node hk"></span>
                <i class="rail one"></i><i class="rail two"></i><i class="rail three"></i>
                <div class="system-label">STRATEGY / DESIGN / ABROAD / BUILD</div>
              </div>
            </div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-statement">
          <div class="ultra-about-wrap">
            ${sectionIntro(zh ? "\u6211\u4eec\u662f\u8c01" : "WHO WE ARE", zh ? "\u4e00\u652f\u4e3a\u4e2d\u56fd\u54c1\u724c\u51fa\u6d77\u800c\u751f\u7684\u5168\u7403\u5c55\u4f1a\u843d\u5730\u56e2\u961f" : "A global exhibition team built for Chinese brands going abroad.", zh ? "\u6211\u4eec\u670d\u52a1\u4e2d\u56fd\u54c1\u724c\u5728\u6d77\u5916\u5e02\u573a\u7684\u9996\u6b21\u4eae\u76f8\u3001\u6301\u7eed\u53c2\u5c55\u4e0e\u7a7a\u95f4\u843d\u5730\u3002\u76f8\u6bd4\u5355\u4e00\u8bbe\u8ba1\u516c\u53f8\u6216\u672c\u5730\u642d\u5efa\u5546\uff0c\u7693\u521b\u66f4\u5173\u6ce8\u4ece\u54c1\u724c\u7b56\u7565\u3001\u7a7a\u95f4\u4f53\u9a8c\u3001\u4f9b\u5e94\u94fe\u3001\u5de5\u7a0b\u6267\u884c\u5230\u73b0\u573a\u7ba1\u7406\u7684\u5b8c\u6574\u94fe\u8def\u3002" : "We support Chinese brands as they enter, present, and grow in overseas markets. Unlike a single design studio or a local booth contractor, Ultra Expo focuses on the full delivery chain: brand strategy, spatial experience, supply chain coordination, engineering execution, and on-site management.")}
            <div class="ultra-about-statement-points ultra-character-block-reveal" data-ultra-character-block-reveal>
              ${(zh ? [
                ["\u4ee5\u54c1\u724c\u7b56\u7565\u5f00\u59cb", "\u5728\u7a7a\u95f4\u8bbe\u8ba1\u4e4b\u524d\u5148\u660e\u786e\u5c55\u4f1a\u76ee\u6807\u3001\u4ea7\u54c1\u4e3b\u7ebf\u3001\u89c2\u4f17\u8def\u5f84\u4e0e\u5e02\u573a\u8bed\u5883\u3002"],
                ["\u628a\u8bbe\u8ba1\u8f6c\u6210\u53ef\u843d\u5730\u7684\u5de5\u7a0b", "\u6982\u5ff5\u3001\u6750\u6599\u3001\u7ed3\u6784\u3001\u9884\u5236\u548c\u73b0\u573a\u8282\u70b9\u88ab\u7eb3\u5165\u540c\u4e00\u5957\u4ea4\u4ed8\u8282\u594f\u3002"],
                ["\u5728\u6d77\u5916\u4fdd\u6301\u672c\u5730\u54cd\u5e94", "\u8fde\u63a5\u672c\u5730\u4f9b\u5e94\u3001\u6e05\u5173\u7269\u6d41\u3001\u642d\u5efa\u4f19\u4f34\u548c\u9a7b\u573a\u9879\u76ee\u7ba1\u7406\u3002"],
                ["\u8ba9\u54c1\u724c\u8868\u8fbe\u7a33\u5b9a\u5230\u5f00\u5c55\u65e5", "\u51cf\u5c11\u8de8\u56fd\u534f\u4f5c\u4e2d\u7684\u4fe1\u606f\u635f\u8017\uff0c\u8ba9\u5ba2\u6237\u59cb\u7ec8\u9762\u5bf9\u4e00\u4e2a\u8d1f\u8d23\u5230\u5e95\u7684\u56e2\u961f\u3002"]
              ] : [
                ["Start with brand strategy", "Clarify exhibition goals, product narrative, audience flow, and market context before spatial design begins."],
                ["Translate design into buildable engineering", "Concept, material, structure, prefabrication, and site milestones are managed in one delivery rhythm."],
                ["Stay locally responsive overseas", "Connect local supply, customs, logistics, build partners, and on-site project management."],
                ["Keep the brand stable through opening day", "Reduce information loss across borders so clients work with one accountable team from plan to site."]
              ]).map((point, index) => `<article><h3 data-reveal-text style="--line-index:${index}">${esc(point[0])}</h3><p>${esc(point[1])}</p></article>`).join("")}
            </div>
            <div class="ultra-about-metric-row" data-about-reveal>${aboutStats.slice(0, 3).map(stat => `<article><strong>${esc(stat[0])}</strong><span>${esc(stat[1])}</span></article>`).join("")}</div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-services">
          <div class="ultra-about-wrap">
            ${sectionIntro("", zh ? "\u4e00\u4f53\u5316\u5c55\u4f1a\u51fa\u6d77\u670d\u52a1" : "End-to-End Exhibition Services", zh ? "\u5176\u4e2d\u300c\u6d77\u5916\u843d\u5730\u300d\u662f\u6211\u4eec\u7684\u6838\u5fc3\u5dee\u5f02\u5316\u80fd\u529b\u3002" : "ABROAD is where our global delivery capability becomes the key difference.")}
            <div class="ultra-about-service-grid">${serviceCards.map((card, index) => {
              const configuredMedia = configuredServiceMedia[index] || {};
              const media = String(configuredMedia?.url || "").trim() ? configuredMedia : defaultServiceMedia[index] || {};
              return `<article class="${card[0] === "ABROAD" ? "is-featured " : ""}ultra-character-block-reveal" data-about-reveal data-ultra-character-block-reveal style="--service-card-index:${index}">
                <div class="ultra-about-service-card-top">
                  <h3 data-reveal-text>${esc(card[1])}</h3>
                  <span class="ultra-about-card-icon icon-${esc(card[0].toLowerCase())}" aria-hidden="true"></span>
                </div>
                <div class="ultra-about-service-card-copy">
                  <p>${esc(card[2])}</p>
                </div>
                <div class="ultra-about-service-media">${renderServiceMedia(media, card[0])}</div>
              </article>`;
            }).join("")}</div>
            <div class="ultra-about-flow" data-about-reveal>${["STRATEGY", "DESIGN", "ABROAD", "BUILD"].map(x => `<span>${x}</span>`).join("<i></i>")}</div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-delivery">
          <div class="ultra-about-wrap ultra-about-delivery-grid">
            <div>
              ${sectionIntro("", zh ? "\u5168\u7403\u4ea4\u4ed8\uff0c\u672c\u5730\u6267\u884c" : "Global delivery, local execution.", zh ? "5 \u4e2a\u81ea\u6709\u5de5\u5382 / 3 \u5927\u533a\u57df\u529e\u516c\u5ba4 / 20+ \u6d77\u5916\u642d\u5efa\u4f19\u4f34\u3002\u5168\u7403\u672c\u5730\u5316\u751f\u4ea7\uff0c\u610f\u5473\u7740\u66f4\u77ed\u7684\u7269\u6d41\u8ddd\u79bb\u3001\u66f4\u4f4e\u7684\u5173\u7a0e\u98ce\u9669\u3001\u66f4\u5feb\u7684\u73b0\u573a\u54cd\u5e94\u3002" : "5 owned factories / 3 regional offices / 20+ overseas build partners. Localized production means shorter logistics routes, lower tariff risks, and faster on-site response.")}
              <div class="ultra-about-node-list">${deliveryNodes.map((node, index) => `<article class="ultra-character-block-reveal" data-about-reveal data-ultra-character-block-reveal data-about-node="${index}"><strong data-reveal-text>${esc(node[0])}</strong><span>${esc(node[1])}</span></article>`).join("")}</div>
            </div>
            <div class="ultra-about-map" data-about-reveal aria-label="${zh ? "\u5168\u7403\u4ea4\u4ed8\u8282\u70b9" : "Global delivery nodes"}">
              ${deliveryNodes.map((node, index) => `<button type="button" class="map-dot dot-${index}" aria-label="${esc(node[0])}"><span>${esc(node[0])}</span></button>`).join("")}
              <img class="ultra-about-world-map-image" src="./assets/world-dotted-map.svg" alt="" loading="lazy" aria-hidden="true">
              <svg class="ultra-about-world-map" viewBox="0 0 900 520" aria-hidden="true">
                <defs>
                  <pattern id="ultraWorldDots" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1.75"></circle>
                  </pattern>
                  <filter id="ultraWorldGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
                    <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                  </filter>
                </defs>
                <g class="world-grid">
                  <path d="M42 260H858M450 42V478M112 122C286 82 616 82 788 122M112 398C286 438 616 438 788 398M225 52V468M675 52V468M90 190H810M90 330H810"></path>
                </g>
                <g class="world-land" aria-hidden="true"></g>
                <g class="world-routes">
                  <path d="M751.5 182C751 180.4 751.6 180 752.2 180.3"></path>
                  <path d="M751.5 182C676 88 575 103 502.5 133.1"></path>
                  <path d="M751.5 182C661 98 291 104 154.4 175.5"></path>
                  <path d="M751.5 182C744 188 739.8 194 735.4 202.9"></path>
                </g>
                <g class="world-route-flow">
                  <path d="M751.5 182C751 180.4 751.6 180 752.2 180.3"></path>
                  <path d="M751.5 182C676 88 575 103 502.5 133.1"></path>
                  <path d="M751.5 182C661 98 291 104 154.4 175.5"></path>
                  <path d="M751.5 182C744 188 739.8 194 735.4 202.9"></path>
                </g>
                <g class="world-hubs" filter="url(#ultraWorldGlow)">
                  <circle cx="751.5" cy="182" r="4.8"></circle>
                  <circle cx="752.2" cy="180.3" r="3.8"></circle>
                  <circle cx="502.5" cy="133.1" r="3.8"></circle>
                  <circle cx="735.4" cy="202.9" r="3.8"></circle>
                  <circle cx="154.4" cy="175.5" r="3.8"></circle>
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-shows">
          <div class="ultra-about-wrap">
            ${sectionIntro(zh ? "\u5168\u7403\u5c55\u4f1a\u7248\u56fe" : "GLOBAL EXHIBITIONS", zh ? "\u8986\u76d6\u5173\u952e\u56fd\u9645\u5c55\u4f1a\u5e73\u53f0\u7684\u9879\u76ee\u7ecf\u9a8c" : "Experience across key global exhibition platforms", zh ? "Ultra Expo \u670d\u52a1\u8fc7\u591a\u4e2a\u91cd\u8981\u56fd\u9645\u5c55\u4f1a\u5e73\u53f0\uff0c\u5e2e\u52a9\u4e2d\u56fd\u54c1\u724c\u5728\u4e0d\u540c\u5730\u533a\u3001\u884c\u4e1a\u4e0e\u5c55\u4f1a\u573a\u666f\u4e2d\u4fdd\u6301\u7a33\u5b9a\u3001\u4e13\u4e1a\u548c\u4e00\u81f4\u7684\u54c1\u724c\u5448\u73b0\u3002" : "Ultra Expo has supported projects across major international exhibition platforms, helping Chinese brands show up consistently across regions, industries, and event formats.")}
            <p class="ultra-exhibition-supporting" data-about-reveal>${zh ? "\u4ece\u65b0\u80fd\u6e90\u4e0e\u50a8\u80fd\u5c55\u4f1a\uff0c\u5230\u79d1\u6280\u3001\u6c7d\u8f66\u3001\u5de5\u4e1a\u5236\u9020\u4e0e\u7efc\u5408\u8d38\u6613\u6d3b\u52a8\uff0c\u6211\u4eec\u7684\u9879\u76ee\u7ecf\u9a8c\u8986\u76d6\u6b27\u6d32\u3001\u5317\u7f8e\u3001\u5357\u7f8e\u3001\u4e9a\u6d32\u3001\u4e2d\u4e1c\u4e0e\u4e2d\u56fd\u5e02\u573a\u3002" : "From energy and battery shows to technology, mobility, industrial, and global trade events, our project experience spans Europe, North America, South America, Asia, the Middle East, and China."}</p>
            <div class="ultra-exhibition-logo-wall" data-about-reveal aria-label="${zh ? "\u5168\u7403\u5c55\u4f1a\u5e73\u53f0 Logo Wall" : "Global exhibition platform logo wall"}">
              ${exhibitionRows.map((row, rowIndex) => `<div class="ultra-exhibition-logo-row ${rowIndex % 2 ? "is-reverse" : ""}"><div>${row.concat(row).map(renderExhibitionLogo).join("")}</div></div>`).join("")}
            </div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-reasons">
          <div class="ultra-about-wrap">
            ${sectionIntro("", zh ? "\u5ba2\u6237\u9009\u62e9\u7693\u521b\u7684\u56db\u4e2a\u7406\u7531" : "Four reasons brands choose Ultra.", "")}
            <div class="ultra-about-reason-grid">${reasons.map((reason, index) => `<article data-about-reveal style="--about-card-index:${index}"><div class="ultra-about-reason-top"><span class="ultra-about-reason-icon icon-${reasonIconKeys[index] || "supply"}" aria-hidden="true"></span><h3>${esc(reason[1])}</h3></div><p>${esc(reason[2])}</p></article>`).join("")}</div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-trust">
          <div class="ultra-about-wrap">
            ${sectionIntro(zh ? "\u8ba4\u8bc1\u4e0e\u4f53\u7cfb" : "CERTIFICATIONS", zh ? "\u4ee5\u6807\u51c6\u4ea4\u4ed8" : "Built with standards.", zh ? "\u6211\u4eec\u7684\u4ea4\u4ed8\u6d41\u7a0b\u7531\u8ba4\u53ef\u7684\u7ba1\u7406\u4f53\u7cfb\u3001\u884c\u4e1a\u4f1a\u5458\u8d44\u8d28\u548c\u56fd\u9645\u8fd0\u8425\u4e3b\u4f53\u652f\u6491\uff0c\u5e2e\u52a9\u6d77\u5916\u9879\u76ee\u4fdd\u6301\u53ef\u9760\u3001\u53ef\u8ffd\u6eaf\u548c\u53ef\u7ba1\u7406\u3002" : "Our delivery process is supported by recognized management systems, industry memberships, and international operating entities, helping overseas projects stay reliable, traceable, and manageable.", { revealTitle: true })}
            <div class="ultra-about-cert-grid">${certs.map((cert, index) => `<article data-about-reveal style="--about-card-index:${index}"><strong>${esc(cert[0])}</strong><span>${esc(cert[1])}</span></article>`).join("")}</div>
          </div>
        </section>
        <section class="ultra-section ultra-about-section ultra-about-brand-wall">
          <div class="ultra-about-wrap">
            ${sectionIntro(zh ? "\u5ba2\u6237\u4e0e\u54c1\u724c" : "TRUSTED BY BRANDS", zh ? "\u6211\u4eec\u670d\u52a1\u8fc7\u7684\u54c1\u724c" : "Brands we've helped show up overseas.", zh ? "\u4ece\u65b0\u80fd\u6e90\u3001\u51fa\u884c\u3001\u6d88\u8d39\u54c1\u724c\u5230\u5de5\u4e1a\u79d1\u6280\uff0c\u7693\u521b\u5c55\u89c8\u670d\u52a1\u4e2d\u56fd\u54c1\u724c\u51fa\u73b0\u5728\u5168\u7403\u5c55\u4f1a\u3001\u65b0\u54c1\u53d1\u5e03\u4e0e\u54c1\u724c\u7a7a\u95f4\u73b0\u573a\u3002" : "From energy and mobility to consumer brands and industrial technology, Ultra Expo supports companies across global exhibitions, launches, and branded spaces.")}
            <div class="ultra-about-brand-grid">
              ${brandWallBrands.map(renderBrandLogoCard).join("")}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function legacyAboutPage(lang) {
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

  function ServiceRasterBackground() {
    return `
      <div class="service-raster-bg" data-service-raster-background aria-hidden="true">
        <canvas class="service-raster-dot-canvas"></canvas>
        <div class="service-raster-dot-grid"></div>
        <div class="service-raster-columns">
          <span class="service-raster-column service-raster-column--01"></span>
          <span class="service-raster-column service-raster-column--02"></span>
          <span class="service-raster-column service-raster-column--03"></span>
          <span class="service-raster-column service-raster-column--04"></span>
          <span class="service-raster-column service-raster-column--05"></span>
          <span class="service-raster-column service-raster-column--06"></span>
          <span class="service-raster-column service-raster-column--07"></span>
          <span class="service-raster-column service-raster-column--08"></span>
        </div>
        <div class="service-raster-grain"></div>
        <div class="service-raster-shadow-mask"></div>
      </div>
    `;
  }

  function CasesRasterBackground() {
    return `
      <div class="cases-raster-bg" aria-hidden="true">
        <div class="cases-corner-glow"></div>
        <div class="service-raster-columns columns cases-columns">
          <span class="service-raster-column column cases-column cases-column--01"></span>
          <span class="service-raster-column column cases-column cases-column--02"></span>
          <span class="service-raster-column column cases-column cases-column--03"></span>
          <span class="service-raster-column column cases-column cases-column--04"></span>
          <span class="service-raster-column column cases-column cases-column--05"></span>
          <span class="service-raster-column column cases-column cases-column--06"></span>
          <span class="service-raster-column column cases-column cases-column--07"></span>
          <span class="service-raster-column column cases-column cases-column--08"></span>
          <span class="service-raster-column column cases-column cases-column--09"></span>
          <span class="service-raster-column column cases-column cases-column--10"></span>
          <span class="service-raster-column column cases-column cases-column--11"></span>
          <span class="service-raster-column column cases-column cases-column--12"></span>
        </div>
        <div class="service-raster-grain grain cases-grain"></div>
        <div class="cases-diamond-mask"></div>
        <div class="cases-edge-fade"></div>
      </div>
    `;
  }

  function servicesPage(lang) {
    const zh = lang === "zh";
    const text = (en, cn) => zh ? cn : en;
    const serviceKicker = value => zh ? ({
      "THE CHALLENGE": "项目难点",
      "THE ULTRA SOLUTION": "Ultra 解决方案",
      "SERVICE PILLARS": "服务板块",
      "DETAILED SERVICE PROCESS": "服务流程",
      "WHAT WE DELIVER": "交付成果",
      "WHY ULTRA": "为什么选择 Ultra"
    }[value] || value) : value;
    const stageLabel = value => zh ? String(value || "")
      .replace(/STRATEGY/g, "策略")
      .replace(/DESIGN/g, "设计")
      .replace(/ABROAD/g, "海外")
      .replace(/BUILD/g, "搭建")
      .replace(/SYSTEM/g, "系统") : value;
    const serviceIntro = (kicker, title, cnTitle, copy, cnCopy) => `
      <div class="ultra-services-head" data-services-reveal>
        <div class="ultra-services-kicker">${esc(serviceKicker(kicker))}</div>
        <h2>${esc(text(title, cnTitle))}</h2>
        ${copy ? `<p>${esc(text(copy, cnCopy))}</p>` : ""}
      </div>
    `;
    const challengeItems = [
      ["01", "Fragmented Vendors", "供应商分散", "When design, production, logistics, customs, and on-site build are handled by separate teams, information breaks and accountability becomes unclear.", "设计、制作、物流、清关和现场搭建由不同团队负责时，信息容易断层，责任边界模糊，最终影响方案还原度。"],
      ["02", "Cross-time-zone Communication", "跨时区沟通成本", "Overseas projects often cross multiple time zones. Slow feedback loops can reduce decision speed before and during the show.", "海外展会项目通常跨越多个时区，问题反馈慢、沟通链路长，容易影响现场决策效率。"],
      ["03", "Local Execution Risk", "本地执行不确定", "Venue rules, material standards, labor practices, customs procedures, and site management vary from country to country.", "不同国家的展馆规则、材料标准、人工方式、清关流程和现场管理习惯不同，风险往往发生在落地阶段。"],
      ["04", "Brand Consistency", "品牌呈现不稳定", "The same brand can look different across countries when visual standards, spatial experience, and build quality are not managed together.", "同一品牌在不同国家、不同展会中容易出现视觉标准、空间体验和施工品质不一致的问题。"]
    ];
    const servicePillars = [
      {
        key: "strategy",
        index: "01",
        title: "STRATEGY",
        zhTitle: "品牌策划",
        subtitle: "Market strategy / Content creative / Exhibition planning",
        zhSubtitle: "出海策略 / 内容创意 / 展会规划",
        description: "Before space design begins, Ultra clarifies exhibition goals, market context, product focus, audience paths, and the message hierarchy that should be remembered.",
        zhDescription: "从展会目标、品牌定位、产品重点、观众路径和内容表达出发，先明确为什么参展、如何表达、用什么空间语言建立记忆点。",
        steps: ["01", "02"],
        tag: "PLANNING",
        zhTag: "前期规划"
      },
      {
        key: "design",
        index: "02",
        title: "DESIGN",
        zhTitle: "空间设计",
        subtitle: "Concept design / 3D visualization / Construction drawing",
        zhSubtitle: "概念设计 / 3D 可视化 / 施工图深化",
        description: "Brand strategy becomes spatial structure, product display, visual focus, and a visitor journey that can be built, reviewed, and controlled.",
        zhDescription: "将品牌策略转化为空间结构、视觉焦点、产品展示和观众动线，确保方案既有展示效果，也能被真实建造。",
        steps: ["03", "04", "05", "06"],
        tag: "BUILDABLE",
        zhTag: "可落地方案"
      },
      {
        key: "abroad",
        index: "03",
        title: "ABROAD",
        zhTitle: "海外落地",
        subtitle: "Local supply / Logistics & customs / Cross-time-zone PM",
        zhSubtitle: "本地供应 / 物流清关 / 跨时区项目管理",
        description: "This is Ultra's core difference: making a design cross borders, supply chains, languages, time zones, and local site rules without losing stability.",
        zhDescription: "海外落地是 Ultra 的核心差异化能力。我们关注的不只是方案设计，而是方案如何跨越国家、供应链、语言、时区和现场规则，最终稳定呈现。",
        steps: ["07", "08", "09", "10", "11"],
        tag: "CORE DIFFERENCE",
        zhTag: "核心差异",
        isCore: true
      },
      {
        key: "build",
        index: "04",
        title: "BUILD",
        zhTitle: "工程搭建",
        subtitle: "Factory prefabrication / On-site build / Dismantling & storage",
        zhSubtitle: "工厂预制 / 现场施工 / 拆撤回运",
        description: "From engineering development and material production to site build, maintenance, dismantling, and return logistics, every build detail stays under control.",
        zhDescription: "从工程深化、材料制作到现场搭建、开展维护和拆撤回运，控制制作质量、现场效率和最终呈现效果。",
        steps: ["06", "07", "09", "11"],
        tag: "ENGINEERING",
        zhTag: "工程执行"
      }
    ];
    const processItems = [
      ["01", "Brief & Requirement", "需求沟通", "STRATEGY", "Confirm date, venue, booth size, budget, brand goals, product focus, venue restrictions, and project boundaries.", "确认展会时间、地点、面积、预算、品牌目标、产品重点、展馆限制和项目交付边界，为后续策略和设计建立清晰基础。"],
      ["02", "Strategy & Direction", "策略方向", "STRATEGY", "Clarify the business problem, target audience, key message, product story, and exhibition priorities.", "梳理参展目标、受众路径、品牌信息、展示重点和核心表达方向，明确展台需要解决的商业和展示问题。"],
      ["03", "Concept Design", "概念设计", "DESIGN", "Translate strategy into spatial language, structure, visitor flow, brand moments, and product display logic.", "将策略转化为空间语言、结构关系、参观动线、品牌记忆点和产品展示逻辑，形成可推进的概念方案。"],
      ["04", "3D Visualization", "3D 可视化", "DESIGN", "Build a visual model for layout, scale, material, lighting, color, and visitor experience review.", "通过 3D 效果图呈现空间比例、材料、灯光、色彩和观众体验，便于客户评审与内部确认。"],
      ["05", "Quotation & Material Review", "报价与材料确认", "DESIGN", "Review cost, material, structure, feasibility, transport, and local build conditions before committing to production.", "同步确认预算、材料、结构、制作方式、运输条件和本地施工可行性，避免设计与落地脱节。"],
      ["06", "Construction Drawing", "施工图深化", "DESIGN / BUILD", "Turn the approved concept into technical drawings, build details, dimensions, materials, and installation instructions.", "将确认后的方案转化为施工图、结构节点、尺寸标注、材料清单和安装说明，为制作与现场搭建提供依据。"],
      ["07", "Production / Local Fabrication", "生产 / 本地制作", "ABROAD", "Coordinate factory prefabrication or local fabrication based on schedule, materials, shipping routes, and site conditions.", "根据项目周期、材料要求、交付时间和运输条件，协调工厂预制或海外本地制作，提高执行效率并降低跨国运输风险。"],
      ["08", "Logistics & Customs", "物流与清关", "ABROAD", "Manage packing, international shipping, customs documents, arrival timing, and local transfer to reduce uncertainty.", "统筹物料打包、国际运输、清关文件、到馆时间和本地转运，降低海外展会物流和清关的不确定性。"],
      ["09", "On-site Build", "现场搭建", "ABROAD / BUILD", "Coordinate the local build team for construction, equipment installation, lighting, detail correction, and pre-opening checks.", "项目经理协调本地搭建团队完成现场施工、设备安装、灯光调试、细节修正和开展前验收。"],
      ["10", "Exhibition Support", "展期支持", "ABROAD", "Support maintenance, urgent fixes, and material needs during the show so the booth stays stable through the exhibition.", "展会期间提供现场维护、突发问题处理和必要的物料支持，确保品牌展示在整个展期中稳定运行。"],
      ["11", "Dismantling / Return / Storage", "拆撤 / 回运 / 仓储", "ABROAD / BUILD", "Handle dismantling, material return, reusable asset sorting, and storage planning for future exhibition cycles.", "展会结束后完成拆撤、物料回运、复用件整理和仓储安排，为后续多展期项目保留资产价值。"]
    ];
    const deliverables = [
      ["01", "A clear exhibition strategy", "清晰的参展策略", "Goals, audience path, content focus, and spatial priority are aligned before design begins."],
      ["02", "A buildable spatial concept", "可落地的空间方案", "The concept considers structure, material, budget, transport, and on-site conditions."],
      ["03", "A localized overseas execution plan", "本地化海外执行方案", "Supply chain, venue rules, customs, logistics, and local build conditions are planned early."],
      ["04", "A controlled project timeline", "可追踪的项目周期", "Milestones, responsibilities, and handovers stay visible across time zones."],
      ["05", "A consistent global brand experience", "稳定统一的全球品牌体验", "Visual standards, spatial experience, and engineering quality remain consistent across markets."]
    ];
    const whyItems = [
      ["01", "Local Supply Chain", "本地化供应链", "Owned factories, overseas storage, and local build partners reduce dependency on one shipping route and improve response speed."],
      ["02", "Cross-time-zone Response", "跨时区响应", "China HQ and overseas teams coordinate across project time zones to speed up communication and issue handling."],
      ["03", "Controlled Delivery", "周期可控", "Every phase from concept to opening day is managed with clear milestones, ownership, and delivery checkpoints."],
      ["04", "On-site PM", "项目经理现场督导", "Key overseas projects can be coordinated on site to reduce information loss between design, production, and build."]
    ];
    const activeForSystem = ["strategy", "design", "abroad", "build"];
    const serviceSystemGraphic = `
      <div class="ultra-services-system ultra-services-solution-system" data-services-system aria-label="${esc(text("Ultra delivery system", "Ultra \u4ea4\u4ed8\u7cfb\u7edf"))}">
        <div class="ultra-services-system-center">
          <span>ULTRA</span>
          <strong>${esc(text("DELIVERY SYSTEM", "\u4ea4\u4ed8\u7cfb\u7edf"))}</strong>
        </div>
        ${servicePillars.map((pillar, index) => `
          <button type="button" class="ultra-services-system-node node-${pillar.key} ${pillar.isCore ? "is-active" : ""}" data-system-node="${esc(pillar.key)}">
            <span>${esc(zh ? pillar.zhTitle : pillar.title)}</span>
            <small>${esc(zh ? pillar.zhTag : (pillar.isCore ? "CORE DIFFERENCE" : pillar.tag))}</small>
          </button>
        `).join("")}
        ${activeForSystem.map((key, index) => `<i class="ultra-services-system-line line-${key}" aria-hidden="true"></i>`).join("")}
      </div>
    `;

    return `
      <div class="ultra-services">
        ${ServiceRasterBackground()}
        <div class="ultra-services-content">
        <section class="ultra-services-hero" data-services-reveal>
          <div class="ultra-services-wrap ultra-services-hero-grid">
            <div class="ultra-services-hero-copy">
              <div class="ultra-services-kicker">${esc(text("SERVICES / GLOBAL EXHIBITION DELIVERY", "业务能力 / 全球展会交付"))}</div>
              <h1>${esc(text("From strategy to build. One system for overseas exhibitions.", "从策略到搭建，一套完整的海外展会交付系统。"))}</h1>
              <p>${esc(text("Ultra Expo helps Chinese brands turn overseas exhibition ideas into buildable, localized, and on-site-ready brand experiences.", "Ultra Expo 为中国品牌提供从出海策略、空间设计、海外本地化落地到工程搭建的一体化展会服务，让品牌在海外展会中呈现出更专业、更本土、更稳定的形象。"))}</p>
              <strong>${esc(text("We don't just build booths. We make Chinese brands look at home overseas.", "我们不只是展台搭建商，我们让中国品牌在海外呈现出本土品牌的姿态。"))}</strong>
              <div class="ultra-services-hero-actions">
                <a class="ultra-services-primary" href="${routeLink("/contact")}" data-route="/contact">${esc(text("Start a Project", "咨询项目"))}<span aria-hidden="true">&#8594;</span></a>
                <a class="ultra-services-secondary" href="#service-process">${esc(text("View Service Process", "查看服务流程"))}</a>
              </div>
            </div>
          </div>
        </section>

        <section class="ultra-services-section ultra-services-challenge" id="the-challenge">
          <div class="ultra-services-wrap ultra-services-split">
            <div class="ultra-services-sticky">
              ${serviceIntro("THE CHALLENGE", "Overseas exhibitions are not just design problems.", "海外展会的难点，从来不只是设计。", "The real challenge is continuity. Strategy, design, production, logistics, customs, on-site build, and exhibition support all need to work as one connected system.", "真正影响海外展会结果的，不只是效果图好不好看，而是策略、设计、制作、物流、清关、现场搭建和展期支持之间能否连续协同。任何一个环节脱节，最终都会反映在现场效果里。")}
            </div>
            <div class="ultra-services-challenge-grid">
              ${challengeItems.map(item => `
                <article class="ultra-services-problem-card" data-services-reveal>
                  <span>${esc(item[0])}</span>
                  <h3>${esc(zh ? item[2] : item[1])}</h3>
                  <p>${esc(zh ? item[4] : item[3])}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="ultra-services-section ultra-services-solution">
          <div class="ultra-services-wrap">
            ${serviceSystemGraphic}
            <div class="ultra-services-solution-panel" data-services-reveal>
              <div>
                <div class="ultra-services-kicker">${esc(serviceKicker("THE ULTRA SOLUTION"))}</div>
                <h2>${esc(text("One team. One timeline. One accountable delivery system.", "一个团队，一条项目线，一个负责到底的交付系统。"))}</h2>
                <p>${esc(text("Ultra connects strategy, spatial design, overseas localization, and construction into one project workflow, reducing handover loss and improving delivery certainty.", "Ultra 将品牌策划、空间设计、海外落地和工程搭建整合在同一条项目链路中。客户面对的不是多个割裂供应商，而是一套可控、可追踪、可落地的服务系统。"))}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="ultra-services-light-transition" aria-hidden="true"></section>

        <section class="ultra-services-section ultra-services-pillars">
          <div class="ultra-services-wrap">
            ${serviceIntro("SERVICE PILLARS", "Turning cross-border uncertainty into", "把跨境不确定性转化为可控交付。", "Ultra's service is not a set of isolated capabilities. Strategy, design, abroad execution, and build work together as one managed project system.", "Ultra 的服务不是孤立的单点能力，而是由策略、设计、海外落地和工程搭建共同构成的项目交付体系。")}
            <div class="ultra-services-pillar-grid">
              ${servicePillars.map(pillar => `
                <article id="${esc({ strategy: "brand-strategy", design: "space-design", abroad: "overseas-delivery", build: "engineering-build" }[pillar.key] || pillar.key)}" class="ultra-services-pillar ultra-character-block-reveal ${pillar.isCore ? "is-core" : ""}" data-services-reveal data-ultra-character-block-reveal data-pillar="${esc(pillar.key)}" data-steps="${esc(pillar.steps.join(","))}">
                  <span class="ultra-services-pillar-icon" aria-hidden="true"></span>
                  <div class="ultra-services-pillar-top">
                    <span>${esc(pillar.index)}</span>
                    <b>${esc(zh ? pillar.zhTag : pillar.tag)}</b>
                  </div>
                  <h3 data-reveal-text>${esc(zh ? pillar.zhTitle : pillar.title)}</h3>
                  <strong>${esc(text(pillar.subtitle, pillar.zhSubtitle))}</strong>
                  <p>${esc(text(pillar.description, pillar.zhDescription))}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="ultra-services-section ultra-services-process" id="service-process">
          <div class="ultra-services-wrap">
            ${serviceIntro("DETAILED SERVICE PROCESS", "Every step is part of one delivery system.", "每一个服务步骤，都是完整交付系统的一部分。", "From the first brief to dismantling and storage, Ultra keeps every step connected, trackable, and accountable.", "从前期需求、策略方向、概念设计、3D 可视化，到海外制作、物流清关、现场搭建、展期支持和拆撤仓储，Ultra 将每一个服务环节整合进同一条项目交付链路中。")}
            <div class="ultra-services-process-grid">
              ${processItems.map(item => {
                const isAbroad = item[3].includes("ABROAD");
                return `<article class="ultra-services-process-card ${isAbroad ? "is-abroad" : ""}" data-services-reveal data-process-card data-step="${esc(item[0])}">
                  <div class="ultra-services-process-top"><span>${esc(item[0])}</span><b>${esc(stageLabel(item[3]))}</b></div>
                  <h3>${esc(zh ? item[2] : item[1])}</h3>
                  <p>${esc(zh ? item[5] : item[4])}</p>
                  <i aria-hidden="true">&#8594;</i>
                </article>`;
              }).join("")}
              <article class="ultra-services-process-card ultra-services-system-card" data-services-reveal data-process-card>
                <div class="ultra-services-process-top"><span>12</span><b>${esc(stageLabel("SYSTEM"))}</b></div>
                <h3>${esc(text("One connected workflow", "一条连续的项目链路"))}</h3>
                <h4>${esc(text("Strategy, design, abroad, build", "策略、设计、海外落地与工程搭建"))}</h4>
                <p>${esc(text("Strategy, design, abroad execution, and build are connected in one managed delivery system.", "策略、设计、海外落地与工程搭建在同一条项目链路中协同推进。"))}</p>
              </article>
            </div>
          </div>
        </section>

        <section class="ultra-services-section ultra-services-deliver">
          <div class="ultra-services-wrap">
            ${serviceIntro("WHAT WE DELIVER", "Not just a booth. A controlled overseas brand presence.", "不只是一个展台，而是一套可控的海外品牌呈现。", "Ultra helps brands reduce uncertainty in cross-border projects and keep strategy, design, production, and delivery aligned.", "Ultra 的价值不只是搭建一个空间，而是帮助品牌降低跨国项目的不确定性，让策略、设计、制作和落地结果保持一致。")}
            <div class="ultra-services-deliver-grid">
              ${deliverables.map(item => `
                <article class="ultra-services-deliver-card" data-services-reveal data-deliver-card data-deliver-icon="${esc(item[0])}">
                  <i class="ultra-services-deliver-icon" aria-hidden="true"></i>
                  <span>${esc(item[0])}</span>
                  <h3>${esc(text(item[1], item[2]))}</h3>
                  <p>${esc(zh ? {
                    "01": "在设计开始前明确项目目标、受众路径、内容重点和空间优先级。",
                    "02": "设计同步考虑材料、结构、预算、运输和现场条件，而不只停留在效果图。",
                    "03": "针对不同国家的供应链、展馆规则、物流清关和现场执行条件提前规划。",
                    "04": "关键节点清晰，责任边界明确，减少跨时区项目中的沟通消耗和交付风险。",
                    "05": "让品牌在不同国家和展会中保持一致的视觉标准、空间体验和工程品质。"
                  }[item[0]] : item[3])}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="ultra-services-section ultra-services-why">
          <div class="ultra-services-wrap ultra-services-split">
            <div class="ultra-services-sticky">
              ${serviceIntro("WHY ULTRA", "Built for Chinese brands going global.", "为中国品牌出海而建立的交付能力。", "Ultra's service system is built around the real overseas exhibition project chain: design fidelity, cross-border coordination, local execution, and on-site response.", "Ultra 的服务体系围绕海外展会真实项目链路建立，重点解决中国品牌在海外展示中遇到的设计还原、跨国协同、本地执行和现场响应问题。")}
            </div>
            <div class="ultra-services-why-grid">
              ${whyItems.map((item, index) => `
                <article class="ultra-services-why-card" data-services-reveal data-why-card style="--why-index:${index}">
                  <span>${esc(item[0])}</span>
                  <div><h3>${esc(text(item[1], item[2]))}</h3><p>${esc(zh ? {
                    "01": "通过自有工厂、海外仓储和本地搭建伙伴，减少对单一路径的依赖，提高项目响应速度。",
                    "02": "中国总部与海外团队协同，覆盖不同项目时区，提升沟通效率和现场问题处理速度。",
                    "03": "从概念设计到现场开展建立完整节点管理，让项目进度、责任边界和交付结果更清晰。",
                    "04": "关键海外项目由项目经理现场协调，减少设计、制作和现场执行之间的信息失真。"
                  }[item[0]] : item[3])}</p></div>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        </div>
      </div>
    `;
  }

  function filterState() {
    const params = new URLSearchParams(window.location.search);
    return {
      year: params.get("year") || "All",
      brand: "All",
      industry: params.get("industry") || "All",
      region: params.get("region") || params.get("country") || "All",
      area: params.get("area") || "All",
      more: params.get("more") === "1"
    };
  }

  function filteredCases(state) {
    return activeCases().filter(item => {
      if (state.year !== "All" && String(caseYear(item)) !== state.year) return false;
      if (state.brand !== "All" && item.brandId !== state.brand) return false;
      if (state.industry !== "All" && item.industry !== state.industry) return false;
      if (state.region !== "All" && caseRegion(item) !== state.region) return false;
      if (state.area !== "All" && areaBucket(item.areaSqm) !== state.area) return false;
      return true;
    });
  }

  function filterOptions(field) {
    const order = {
      industry: ["Energy", "Battery", "Industrial", "Automotive", "Consumer Tech", "Telecom", "Water Treatment", "Retail", "Launch Event", "Smart Manufacturing", "Exhibition", "Welding Material"],
      region: ["Asia", "Europe", "North America", "South America", "Africa", "Oceania"],
      area: ["lt50", "50-100", "100-200", "200plus"]
    };
    const values = activeCases()
      .map(item => field === "brand" ? item.brandId : field === "area" ? areaBucket(item.areaSqm) : field === "year" ? caseYear(item) : field === "region" ? caseRegion(item) : item[field])
      .filter(Boolean)
      .map(value => String(value));
    const available = [...new Set(values)];
    if (field === "year") {
      return ["All", ...available.sort((a, b) => Number(b) - Number(a))];
    }
    if (field === "brand") {
      return ["All", ...activeBrands().map(brand => brand.id).filter(id => available.includes(id))];
    }
    const preferred = order[field] || [];
    return ["All", ...preferred.filter(value => available.includes(value)), ...available.filter(value => !preferred.includes(value)).sort()];
  }

  function optionLabel(field, value, lang) {
    if (value === "All") return labels[lang].all;
    if (field === "brand") return brandName(value);
    if (field === "industry") return translateCaseValue("industry", value, lang);
    if (field === "area") return areaLabel(value);
    if (field === "country") return translateCaseValue("country", value, lang);
    if (field === "region") return filterLabels[lang].regions[value] || value;
    if (field === "type") return filterLabels[lang].types[value] || value;
    return value;
  }

  function filtersHTML(lang, state) {
    const filterButton = (field, value, pending = false) => {
      const label = optionLabel(field, value, lang);
      return `<button data-${pending ? "pending-" : ""}filter="${field}" data-value="${esc(value)}" class="ultra-split-rolling ${state[field] === value ? "is-active" : ""}" aria-label="${esc(label)}">${rollingButtonText(label)}</button>`;
    };
    const group = (field, pending = false) => `
      <div class="ultra-filter-group">
        <div class="ultra-filter-label">${esc(filterLabels[lang][field])}</div>
        <div class="ultra-filter-options">
          ${filterOptions(field).map(value => filterButton(field, value, pending)).join("")}
        </div>
      </div>`;
    return `
      <div class="ultra-filter ${state.more ? "is-open" : ""}" data-case-filters>
        <div class="ultra-filter-primary">
          ${group("year")}
          <button class="ultra-filter-more-toggle ultra-split-rolling" type="button" data-more-filters aria-expanded="${state.more ? "true" : "false"}" aria-label="${esc(lang === "zh" ? "更多筛选" : "More Filters")}">${rollingButtonText(lang === "zh" ? "更多筛选" : "More Filters")}</button>
        </div>
        <div class="ultra-filter-more" data-filter-more-panel>
          ${["industry", "region", "area"].map(field => group(field, true)).join("")}
          <div class="ultra-filter-actions">
            <button class="ultra-secondary ultra-split-rolling" type="button" data-clear-filters aria-label="${esc(lang === "zh" ? "重置" : "Reset")}">${rollingButtonText(lang === "zh" ? "重置" : "Reset")}</button>
            <button class="ultra-primary ultra-split-rolling" type="button" data-apply-filters aria-label="${esc(lang === "zh" ? "应用筛选" : "Apply Filters")}">${rollingButtonText(lang === "zh" ? "应用筛选" : "Apply Filters")}</button>
          </div>
        </div>
      </div>`;
  }

  function areaBucket(value) {
    const area = Number(value);
    if (!Number.isFinite(area)) return "";
    if (area < 50) return "lt50";
    if (area < 100) return "50-100";
    if (area < 200) return "100-200";
    return "200plus";
  }

  function areaLabel(value) {
    return ({ lt50: "<50㎡", "50-100": "50-100㎡", "100-200": "100-200㎡", "200plus": "200㎡+" })[value] || value;
  }

  function caseRegion(item) {
    const raw = String(caseCountry(item) || item.region || "").trim().toLowerCase();
    const normalized = raw.replace(/\./g, "").replace(/\s+/g, " ");
    const map = {
      australia: "Oceania",
      belgium: "Europe",
      brazil: "South America",
      china: "Asia",
      europe: "Europe",
      france: "Europe",
      germany: "Europe",
      global: "Asia",
      indonesia: "Asia",
      italy: "Europe",
      japan: "Asia",
      korea: "Asia",
      mexico: "North America",
      netherlands: "Europe",
      philippines: "Asia",
      poland: "Europe",
      romania: "Europe",
      russia: "Europe",
      "saudi arabia": "Asia",
      spain: "Europe",
      sweden: "Europe",
      thailand: "Asia",
      "united kingdom": "Europe",
      uk: "Europe",
      "united states": "North America",
      usa: "North America",
      us: "North America",
      vietnam: "Asia"
    };
    return map[normalized] || item.region || "";
  }

  function translateCaseValue(type, value, lang) {
    if (lang !== "zh" || !value) return value || "";
    const key = String(value).trim().toLowerCase();
    const dictionaries = {
      industry: {
        energy: "能源",
        battery: "电池 / 储能",
        industrial: "工业制造",
        automotive: "汽车",
        "consumer tech": "消费科技",
        telecom: "通信科技",
        "water treatment": "水处理",
        retail: "零售空间",
        "launch event": "发布会 / 活动",
        "smart manufacturing": "智能制造",
        exhibition: "展会综合"
      },
      country: {
        australia: "澳大利亚",
        belgium: "比利时",
        brazil: "巴西",
        china: "中国",
        europe: "欧洲",
        france: "法国",
        germany: "德国",
        global: "全球",
        indonesia: "印度尼西亚",
        italy: "意大利",
        japan: "日本",
        korea: "韩国",
        mexico: "墨西哥",
        netherlands: "荷兰",
        philippines: "菲律宾",
        poland: "波兰",
        romania: "罗马尼亚",
        russia: "俄罗斯",
        "saudi arabia": "沙特阿拉伯",
        spain: "西班牙",
        sweden: "瑞典",
        thailand: "泰国",
        "united kingdom": "英国",
        uk: "英国",
        "united states": "美国",
        usa: "美国",
        us: "美国",
        vietnam: "越南"
      }
    };
    return dictionaries[type]?.[key] || value;
  }
  function brandName(id) {
    const brand = activeBrands().find(item => item.id === id);
    return brand?.englishName || id;
  }

  function caseBrandName(item) {
    return item.brandEnglishName || item.client || brandName(item.brandId) || "";
  }

  function caseBrandDisplayName(item, lang) {
    const brand = brandForCase(item);
    if (lang === "zh") {
      return brand?.chineseName || item.brandChineseName || caseBrandName(item);
    }
    return brand?.englishName || caseBrandName(item);
  }

  function caseEventName(item) {
    return item.exhibitionName || item.event || "";
  }

  function caseCountry(item) {
    return item.country || item.location || item.region || "";
  }

  function caseImage(item) {
    return item.coverImage?.files?.[0]?.url || item.image || "";
  }

  function fileUrl(file) {
    if (!file) return "";
    if (typeof file === "string") return file;
    return file.url || file.href || "";
  }

  function brandForCase(item) {
    return activeBrands().find(brand => brand.id === item.brandId) || null;
  }

  function brandLogo(item) {
    const brand = brandForCase(item);
    return fileUrl(brand?.originalLogo?.files?.[0]) || fileUrl(brand?.grayLogo?.files?.[0]) || item.brandLogoOriginal || item.brandLogoGray || "";
  }

  function caseGalleryImages(item) {
    const unique = [];
    const cover = caseImage(item);
    if (cover) unique.push(cover);
    (item.galleryImages?.files || item.images || []).map(fileUrl).filter(Boolean).forEach(url => {
      if (!unique.includes(url)) unique.push(url);
    });
    return unique;
  }

  function caseIntro(item, lang) {
    return lang === "zh" ? (item.chineseIntro || item.description?.zh || item.englishIntro || item.description?.en || "") : (item.englishIntro || item.description?.en || item.chineseIntro || item.description?.zh || "");
  }

  function caseAreaText(item) {
    return item.areaSqm ? `${item.areaSqm}㎡` : (item.area || "");
  }

  function caseDateValue(value) {
    if (!value) return "";
    if (typeof value === "object") return value.start || value.date || value.name || "";
    return String(value).trim();
  }

  function caseDateInputValue(value) {
    const text = caseDateValue(value);
    if (!text) return "";
    const iso = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    const ymd = iso || text.match(/^(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
    if (ymd) {
      return `${ymd[1]}-${String(ymd[2]).padStart(2, "0")}-${String(ymd[3]).padStart(2, "0")}`;
    }
    const parsed = new Date(text);
    if (Number.isNaN(parsed.getTime())) return "";
    return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`;
  }

  function caseDateRange(item) {
    const dateRange = item.exhibitionDate || item.dateRange || item.notionDate || item.Date || (typeof item.date === "object" ? item.date : null);
    const rangeParts = typeof dateRange === "string" ? dateRange.split(/\s*(?:\u2192|->| to )\s*/i) : [];
    const start = item.dateStart || item.startDate || item.exhibitionStartDate || dateRange?.start || rangeParts[0] || "";
    const end = item.dateEnd || item.endDate || item.exhibitionEndDate || dateRange?.end || rangeParts[1] || "";
    const dateStart = caseDateInputValue(start);
    const dateEnd = caseDateInputValue(end) || dateStart;
    return { dateStart, dateEnd };
  }

  function caseDateParts(value) {
    const text = caseDateValue(value);
    if (!text) return null;
    const iso = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    const ymd = iso || text.match(/^(\\d{4})\\D+(\\d{1,2})\\D+(\\d{1,2})/);
    if (ymd) {
      return { year: Number(ymd[1]), month: Number(ymd[2]), day: Number(ymd[3]) };
    }
    const parsed = new Date(text);
    if (Number.isNaN(parsed.getTime())) return null;
    return { year: parsed.getFullYear(), month: parsed.getMonth() + 1, day: parsed.getDate() };
  }

  function sameCaseDate(a, b) {
    return a && b && a.year === b.year && a.month === b.month && a.day === b.day;
  }

  function formatCaseDate(value) {
    const parts = caseDateParts(value);
    if (!parts) return caseDateValue(value);
    const mm = String(parts.month).padStart(2, "0");
    const dd = String(parts.day).padStart(2, "0");
    return `${parts.year}.${mm}.${dd}`;
  }

  function formatCaseDateEnd(startParts, endParts) {
    const mm = String(endParts.month).padStart(2, "0");
    const dd = String(endParts.day).padStart(2, "0");
    if (startParts.year === endParts.year && startParts.month === endParts.month) return dd;
    if (startParts.year === endParts.year) return `${mm}.${dd}`;
    return `${endParts.year}.${mm}.${dd}`;
  }

  function caseDateText(item) {
    const { dateStart: start, dateEnd: end } = caseDateRange(item);
    const startParts = caseDateParts(start);
    const endParts = caseDateParts(end);
    if (start && end) {
      if (sameCaseDate(startParts, endParts) || caseDateValue(start) === caseDateValue(end)) return formatCaseDate(start);
      if (startParts && endParts) return `${formatCaseDate(start)}-${formatCaseDateEnd(startParts, endParts)}`;
      return `${formatCaseDate(start)} - ${formatCaseDate(end)}`;
    }
    if (start || end) return formatCaseDate(start || end);
    return caseDateValue(item.date) || item.year || "";
  }

  function caseYear(item) {
    const { dateStart, dateEnd } = caseDateRange(item);
    return caseDateParts(dateStart)?.year || caseDateParts(dateEnd)?.year || item.year || "";
  }
  function caseMeta(item, lang = "en") {
    return [
      [translateCaseValue("country", caseCountry(item), lang), caseYear(item)].filter(Boolean).join(" · "),
      [item.areaSqm ? `${item.areaSqm}㎡` : item.area, translateCaseValue("industry", item.industry, lang)].filter(Boolean).join(" · ")
    ].filter(Boolean);
  }

  function caseCard(item, lang) {
    const image = caseImage(item);
    return `
      <a class="ultra-case-card" href="${routeLink(`/cases/${item.id}`)}" data-route="/cases/${esc(item.id)}">
        ${image ? `<img src="${esc(image)}" alt="${esc(caseBrandName(item))} ${esc(caseEventName(item))}">` : `<div class="ultra-placeholder"></div>`}
        <div class="ultra-case-teaser">
          <strong>${esc(caseBrandName(item))}</strong>
          <span>${esc([caseYear(item), translateCaseValue("country", caseCountry(item), lang)].filter(Boolean).join(" / "))}</span>
        </div>
        <div class="ultra-case-info">
          <h3>${esc(caseBrandName(item))}</h3>
          <p>${esc(caseEventName(item))}</p>
          <div class="ultra-meta">${caseMeta(item, lang).map(x => `<span>${esc(x)}</span>`).join("")}</div>
          <div class="ultra-case-link">${lang === "zh" ? "查看案例" : "View Case"} <span aria-hidden="true">→</span></div>
        </div>
      </a>
    `;
  }

  function casesPage(lang) {
    const zh = lang === "zh";
    const state = filterState();
    const items = filteredCases(state);
    const initialCount = 24;
    return `
      <div class="cases-page">
        ${CasesRasterBackground()}
        <div class="cases-page-content">
          <section class="ultra-section ultra-cases-index"><div class="ultra-wrap">
        ${sectionHead(zh ? "案例信息流" : "CASE FEED", labels[lang].allCases, "")}
        ${filtersHTML(lang, state)}
        <div class="ultra-case-grid" data-case-grid>${items.map((c, index) => `<div class="${index >= initialCount ? "is-hidden" : ""}" data-case-item>${caseCard(c, lang)}</div>`).join("")}</div>
        ${items.length > initialCount ? `<div class="ultra-load-more-wrap"><button class="ultra-secondary" type="button" data-load-more>${zh ? "加载更多" : "Load More"}</button></div>` : ""}
          </div></section>
        </div>
      </div>
    `;
  }

  function caseDetailPage(id, lang, options = {}) {
    const zh = lang === "zh";
    const allCases = activeCases();
    const item = allCases.find(c => c.id === id);
    if (!item) return caseMissingPage(id, lang);
    const logo = brandLogo(item);
    const area = caseAreaText(item);
    const images = caseGalleryImages(item);
    const stats = [
      ["client", zh ? "客户" : "Client", caseBrandDisplayName(item, lang)],
      ["industry", zh ? "行业" : "Industry", translateCaseValue("industry", item.industry, lang)],
      ["country", zh ? "国家" : "Country", translateCaseValue("country", caseCountry(item), lang)],
      ["date", zh ? "日期" : "Date", caseDateText(item)]
    ].filter(row => row[2]);
    const shellClass = `ultra-case-detail ${options.modal ? "is-modal" : "is-page"} ${images.length <= 4 ? "is-short-gallery" : ""}`;
    return `
      <section class="${shellClass}" data-case-detail="${esc(item.id)}">
        ${options.modal && !options.hideClose ? `<button class="ultra-case-esc ultra-split-rolling" type="button" data-case-modal-close aria-label="${zh ? "关闭案例" : "Close case"}">${rollingButtonText("ESC")}<i aria-hidden="true">&times;</i></button>` : ""}
        <div class="ultra-case-detail-copy">
          <div class="ultra-case-detail-logo">
            ${logo ? `<img src="${esc(logo)}" alt="${esc(caseBrandDisplayName(item, lang))} logo">` : `<strong>${esc(caseBrandDisplayName(item, lang))}</strong>`}
          </div>
          <div class="ultra-case-detail-title">${esc([caseEventName(item), area].filter(Boolean).join("  ·  "))}</div>
          <div class="ultra-case-detail-line" aria-hidden="true"></div>
          <div class="ultra-case-detail-meta">
            ${stats.map(row => `
              <article data-case-detail-meta="${esc(row[0])}">
                <span aria-hidden="true">${caseDetailIcon(row[0])}</span>
                <div><strong>${esc(row[1])}</strong><p>${esc(row[2])}</p></div>
              </article>
            `).join("")}
          </div>
          <p class="ultra-case-detail-intro">${esc(caseIntro(item, lang))}</p>
        </div>
        <div class="ultra-case-detail-gallery" data-case-detail-gallery>
          ${images.map((src, index) => `<figure><img src="${esc(src)}" alt="${esc(`${caseBrandName(item)} ${caseEventName(item)} ${index + 1}`)}"></figure>`).join("")}
        </div>
      </section>
    `;
  }

  function caseMissingPage(id, lang) {
    const zh = lang === "zh";
    const title = zh ? "\u8be5\u6848\u4f8b\u5df2\u4e0b\u7ebf" : "Case no longer available.";
    const copy = zh
      ? "\u8fd9\u4e2a\u9879\u76ee\u4e0d\u5728\u5f53\u524d\u53d1\u5e03\u7684\u6848\u4f8b\u6570\u636e\u4e2d\uff0c\u8bf7\u56de\u5230\u6848\u4f8b\u4e2d\u5fc3\u67e5\u770b\u6700\u65b0\u9879\u76ee\u3002"
      : "This project is not part of the current published case data. Return to the case feed for the latest work.";
    const label = zh ? "\u8fd4\u56de\u6848\u4f8b\u4e2d\u5fc3" : "Back to Cases";
    return `
      <section class="ultra-case-missing">
        <div class="ultra-case-missing-inner">
          <span>CASE / ${esc(id || "missing")}</span>
          <h1>${esc(title)}</h1>
          <p>${esc(copy)}</p>
          <a class="ultra-secondary ultra-split-rolling" href="${routeLink("/cases")}" data-route="/cases">${rollingButtonText(label)}</a>
        </div>
      </section>
    `;
  }

  function caseDetailIcon(type) {
    const icons = {
      client: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="M5.6 19.1c.9-3.2 3.1-4.8 6.4-4.8s5.5 1.6 6.4 4.8"/></svg>`,
      industry: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 19.5h15"/><path d="M6 19.5V8.2l5.2 2.8V8.2l6.8 3.7v7.6"/><path d="M8.4 14.2h1.4M12 14.2h1.4M15.6 14.2H17M8.4 17h1.4M12 17h1.4M15.6 17H17"/></svg>`,
      country: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.2-5.6 6.2-11.2a6.2 6.2 0 0 0-12.4 0C5.8 15.4 12 21 12 21Z"/><path d="M12 12.1a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"/></svg>`,
      date: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 5.5h11.6a1.7 1.7 0 0 1 1.7 1.7v10.6a1.7 1.7 0 0 1-1.7 1.7H6.2a1.7 1.7 0 0 1-1.7-1.7V7.2a1.7 1.7 0 0 1 1.7-1.7Z"/><path d="M8 3.8v3.4M16 3.8v3.4M4.5 9.5h15"/><path d="M8 13h2M12 13h2M16 13h1M8 16h2M12 16h2"/></svg>`
    };
    return icons[type] || icons.client;
  }
  function contactPage(lang) {
    const zh = lang === "zh";
    const contact = getAdminConfig().contact || defaultAdminConfig().contact;
    const emailHref = contact.email ? `mailto:${contact.email}` : "mailto:jack@ultraexpo.com";
    const phoneHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : "tel:+8618506144181";
    const contactEmail = contact.email || "jack@ultraexpo.com";
    const contactPhone = contact.phone || "+86 185 0614 4181";
    const officeText = zh ? "中国苏州  ·  香港  ·  洛杉矶  ·  柏林" : "Suzhou, China  ·  Hong Kong  ·  Los Angeles  ·  Berlin";
    const inquiryTypes = [
      { value: "Exhibition Booth", zh: "海外展台设计与搭建", en: "Exhibition Booth", copyZh: "展台设计、制作、物流与现场搭建。", copyEn: "Booth design, fabrication, logistics, and on-site build." },
      { value: "Product Launch", zh: "新品发布与品牌活动", en: "Product Launch", copyZh: "发布会、路演、快闪与线下体验。", copyEn: "Launch events, roadshows, pop-ups, and offline experiences." },
      { value: "Retail Space", zh: "零售空间与快闪空间", en: "Retail Space", copyZh: "门店、展厅、临展与品牌空间。", copyEn: "Retail, showroom, temporary display, and brand spaces." },
      { value: "General Inquiry", zh: "其他合作咨询", en: "General Inquiry", copyZh: "任何出海展示与空间落地问题。", copyEn: "Any global display or spatial delivery question." }
    ];
    const budgets = zh ? ["50,000 美元以下", "50,000-100,000 美元", "100,000-300,000 美元", "300,000 美元以上"] : ["Under 50K USD", "50K-100K USD", "100K-300K USD", "300K+ USD"];
    const responseSteps = zh ? [
      ["提交", "你提交项目需求"],
      ["评估", "我们确认展会时间、国家、面积与目标"],
      ["回复", "对应团队尽快联系并给出下一步建议"]
    ] : [
      ["Submit", "You submit the project brief"],
      ["Review", "We review schedule, country, area, and goals"],
      ["Reply", "The right team replies with next-step guidance"]
    ];
    const contactRows = [
      { title: "Business Inquiry", body: [contact.email, contact.phone, contact.wechat ? `${zh ? "微信" : "WeChat"}: ${contact.wechat}` : "", contact.whatsapp ? `WhatsApp: ${contact.whatsapp}` : ""].filter(Boolean).join("<br>") },
      { title: "Office", body: zh ? contact.addressZh || contact.addressEn : contact.addressEn || contact.addressZh },
      { title: "Response", body: zh ? "我们会根据项目所在地、时间与需求类型安排对应团队跟进。" : "We route each inquiry by region, schedule, and project type before replying." }
    ].filter(item => item.body);
    return `
      <section class="ultra-contact-page">
        <section class="ultra-contact-hero">
          <div class="ultra-contact-shell ultra-contact-hero-grid">
            <div class="ultra-contact-hero-copy">
              <div class="ultra-contact-kicker">${zh ? "联系我们" : "CONTACT"}</div>
              <h1>${zh ? `<span>联系</span><span>Ultra Expo</span>` : `<span>Contact</span><span>Ultra Expo</span>`}</h1>
              <div class="ultra-contact-hero-reveal-title ultra-character-block-reveal" data-ultra-character-block-reveal>
                <h2 data-reveal-text>${zh ? "告诉我们你的项目计划" : "Tell us what you are planning"}</h2>
              </div>
              <p>${zh ? "无论是海外展会、新品发布、零售空间，还是品牌出海展示需求，都可以从这里开始。留下你的信息，我们会尽快与你联系。" : "Whether it is an overseas exhibition, product launch, retail space, or brand presence abroad, start here. Share your brief and we will help map the next step."}</p>
              ${zh ? "" : `<p class="ultra-contact-english">Tell us what you are planning. We will help map the next step.</p>`}
              <div class="ultra-contact-actions">
                <a class="ultra-primary" href="#contact-form" data-contact-scroll>${zh ? "提交咨询" : "Send Inquiry"}</a>
                <a class="ultra-secondary" href="${routeLink("/cases")}" data-route="/cases">${zh ? "查看案例" : "View Cases"}</a>
              </div>
            </div>
            <aside class="ultra-contact-promise" aria-label="${zh ? "响应承诺" : "Response promise"}">
              ${[
                [zh ? "快速响应" : "Quick Response", zh ? "快速响应，尽快确认需求" : "Fast response and requirement confirmation"],
                [zh ? "全球协同" : "Global Coordination", zh ? "支持海外展会与跨时区项目沟通" : "Cross-time-zone project coordination for global shows"],
                [zh ? "全流程交付" : "End-to-End Delivery", zh ? "从策划、设计到本地化落地一体化交付" : "Strategy, design, localization, and on-site delivery"]
              ].map((item, index) => `<article><span>0${index + 1}</span><strong>${esc(item[0])}</strong><p>${esc(item[1])}</p></article>`).join("")}
            </aside>
          </div>
        </section>

        <section class="ultra-contact-types" aria-label="${zh ? "咨询类型" : "Inquiry types"}">
          <div class="ultra-contact-shell">
            <div class="ultra-contact-section-head">
              <span>${zh ? "咨询类型" : "INQUIRY TYPE"}</span>
              <h2>${zh ? "你可以先选择一个方向。" : "Choose the closest starting point."}</h2>
            </div>
            <div class="ultra-contact-type-grid">
              ${inquiryTypes.map(item => `
                <button type="button" class="ultra-contact-type-card" data-inquiry-type="${esc(item.value)}">
                  <strong>${esc(zh ? item.zh : item.en)}</strong>
                  <span>${esc(zh ? item.copyZh : item.copyEn)}</span>
                  <p>${esc(zh ? "点击后将同步到留言表单。" : "Select to prefill the inquiry type.")}</p>
                </button>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="ultra-contact-form-section" id="contact-form">
          <div class="ultra-contact-shell ultra-contact-form-layout">
            <form class="ultra-contact-form-card" data-contact-form novalidate>
              <input type="text" name="website" tabindex="-1" autocomplete="off" class="ultra-honeypot" aria-hidden="true">
              <div class="ultra-contact-form-head">
                <span>${zh ? "留言表单" : "CONTACT FORM"}</span>
                <h2>${zh ? "留下必要信息，我们来推进下一步。" : "Leave the essentials. We will take it from there."}</h2>
              </div>
              <div class="ultra-contact-form-grid">
                ${contactField("name", zh ? "姓名" : "Name", "text", true)}
                ${contactField("company", zh ? "公司" : "Company", "text", true)}
                ${contactField("contact", zh ? "联系方式" : "Email or Phone", "text", true)}
                <label class="ultra-contact-field">
                  <span>${zh ? "咨询类型" : "Inquiry Type"} *</span>
                  <select name="inquiryType" required>
                    <option value="">${zh ? "请选择" : "Select one"}</option>
                    ${inquiryTypes.map(item => `<option value="${esc(item.value)}">${esc(zh ? item.zh : item.en)}</option>`).join("")}
                  </select>
                  <em data-field-error="inquiryType"></em>
                </label>
                ${contactField("eventName", zh ? "展会名称" : "Event Name")}
                ${contactField("countryRegion", zh ? "展会国家或地区" : "Country / Region")}
                ${contactField("expectedDate", zh ? "预计时间" : "Expected Date")}
                ${contactField("boothArea", zh ? "展位面积" : "Booth Area")}
                <label class="ultra-contact-field">
                  <span>${zh ? "预算范围" : "Budget Range"}</span>
                  <select name="budgetRange">
                    <option value="">${zh ? "待沟通" : "To be discussed"}</option>
                    ${budgets.map(item => `<option>${esc(item)}</option>`).join("")}
                  </select>
                  <em data-field-error="budgetRange"></em>
                </label>
                <label class="ultra-contact-field is-wide">
                  <span>${zh ? "留言内容" : "Message"} *</span>
                  <textarea name="message" required placeholder="${zh ? "请简单说明你的展会、展位面积、时间、国家/地区或目前遇到的问题。" : "Briefly share the event, booth area, timeline, country/region, or the challenge you are working through."}"></textarea>
                  <em data-field-error="message"></em>
                </label>
              </div>
              <div class="ultra-contact-form-footer">
                <button class="ultra-submit ultra-split-rolling" type="submit" data-contact-submit aria-label="${esc(zh ? "提交咨询" : "Send Inquiry")}">${rollingButtonText(zh ? "提交咨询" : "Send Inquiry")}</button>
              </div>
              <div class="ultra-contact-feedback" data-form-feedback hidden></div>
            </form>

            <aside class="ultra-contact-side">
              <section class="ultra-contact-info-card">
                <span>${zh ? "联系方式" : "CONTACT INFO"}</span>
                <h3>${zh ? "也可以直接联系 Ultra Expo。" : "You can also reach Ultra Expo directly."}</h3>
                <div class="ultra-contact-info-list">
                  <article><strong>${zh ? "邮箱" : "Email"}</strong><p><a href="${esc(emailHref)}">${esc(contactEmail)}</a></p></article>
                  <article><strong>${zh ? "电话" : "Phone"}</strong><p><a href="${esc(phoneHref)}">${esc(contactPhone)}</a></p></article>
                  <article><strong>${zh ? "办公室" : "Office"}</strong><p>${esc(officeText)}</p></article>
                </div>
              </section>
              <section class="ultra-contact-info-card">
                <span>${zh ? "响应流程" : "RESPONSE PROCESS"}</span>
                <h3>${zh ? "提交后会发生什么？" : "What happens next?"}</h3>
                <ol class="ultra-contact-steps">
                  ${responseSteps.map(item => `<li><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span></li>`).join("")}
                </ol>
              </section>
            </aside>
          </div>
        </section>

        <section class="ultra-contact-process" aria-label="${zh ? "响应流程" : "Response process"}">
          <div class="ultra-contact-shell">
            <section class="ultra-contact-process-card">
              <div class="ultra-contact-section-head">
                <span>${zh ? "响应流程" : "RESPONSE PROCESS"}</span>
                <h2>${zh ? "提交后会发生什么？" : "What happens next?"}</h2>
              </div>
              <ol class="ultra-contact-steps">
                ${responseSteps.map(item => `<li><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span></li>`).join("")}
              </ol>
            </section>
          </div>
        </section>
      </section>
    `;
  }

  function contactField(name, label, type = "text", required = false) {
    return `
      <label class="ultra-contact-field">
        <span>${esc(label)}${required ? " *" : ""}</span>
        <input name="${esc(name)}" type="${esc(type)}" ${required ? "required" : ""}>
        <em data-field-error="${esc(name)}"></em>
      </label>
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
    const brandItems = config.brands?.items || activeBrands();
    const caseItems = config.cases.items || activeCases();
    const moduleRow = (key, title, desc) => `
      <label class="ultra-admin-check">
        <input type="checkbox" name="module.${key}" ${home[key] !== false ? "checked" : ""}>
        <span><strong>${esc(title)}</strong><em>${esc(desc)}</em></span>
      </label>
    `;
    return `
      ${pageHero("CONTENT OPS", zh ? "Notion 内容库规划" : "Notion Content Plan", zh ? "第一阶段不创建复杂独立后台。这里用于查看本地 mock 数据结构、维护浏览器内 JSON 覆盖，并预留 Notion 与 OSS 同步配置。" : "Phase one keeps content in local mock data and prepares for Notion plus OSS sync. This page stores browser-local JSON overrides only.", lang)}
      <section class="ultra-section ultra-admin-section"><div class="ultra-wrap">
        <form class="ultra-admin" data-admin-config>
          <div class="ultra-admin-toolbar">
            <div>
              <div class="ultra-section-kicker">${zh ? "本地 mock / JSON" : "LOCAL MOCK / JSON"}</div>
              <h2>${zh ? "内容配置面板" : "Content configuration"}</h2>
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
              <h3>${zh ? "Notion / 阿里云 OSS 同步入口" : "Notion / Aliyun OSS Sync Entry"}</h3>
              <p>${zh ? "这里只记录字段和同步目标，不代表 Notion、OSS 已经打通。正式接入时请通过后端代理或构建脚本处理 token、图片下载和 OSS 上传。" : "This records the planned field and sync targets only. Real Notion tokens, image downloads, and OSS uploads should run through a backend proxy or build script."}</p>
              <textarea name="integrations" spellcheck="false">${adminJSON(config.integrations || {})}</textarea>
            </section>

            <section class="ultra-admin-panel is-wide">
              <h3>${zh ? "品牌库 Brands" : "Brands Database"}</h3>
              <p>${zh ? "字段与未来 Notion Brands 数据库保持一致。留空或填 null 则使用 assets/ultra-cases.js 自动生成的品牌 mock。当前数量：" : "Fields match the future Notion Brands database. Blank or null falls back to brands generated from assets/ultra-cases.js. Current count: "}${Array.isArray(brandItems) ? brandItems.length : 0}</p>
              <textarea name="brands.items" spellcheck="false">${adminJSON(brandItems)}</textarea>
            </section>

            <section class="ultra-admin-panel is-wide">
              <h3>${zh ? "案例库 Cases" : "Cases Database"}</h3>
              <p>${zh ? "字段与未来 Notion Cases 数据库保持一致。图片保留在 Files 对象内，后续由同步脚本处理 Notion 文件、OSS 上传和站点数据生成。当前数量：" : "Fields match the future Notion Cases database. Image references stay inside Files objects; later sync scripts can handle Notion files, OSS upload, and site data generation. Current count: "}${Array.isArray(caseItems) ? caseItems.length : 0}</p>
              <textarea name="cases.items" spellcheck="false">${adminJSON(caseItems)}</textarea>
            </section>
          </div>
        </form>
      </div></section>
    `;
  }

  function adminActiveView() {
    try {
      return sessionStorage.getItem(ADMIN_VIEW_KEY) || "dashboard";
    } catch {
      return "dashboard";
    }
  }

  function setAdminActiveView(view) {
    try {
      sessionStorage.setItem(ADMIN_VIEW_KEY, view);
    } catch {}
  }

  function adminSlug(value, fallback = "item") {
    const clean = String(value || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return clean || `${fallback}-${Date.now()}`;
  }

  function adminPreviewSrc(url) {
    const value = String(url || "");
    if (!value || value.startsWith("data:") || value.startsWith("http") || value.startsWith("blob:")) return value;
    if (value.startsWith("./")) return routeLink(value.slice(1));
    if (value.startsWith("/")) return routeLink(value);
    return value;
  }

  function adminFileUrl(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return adminFileUrl(value[0]);
    return value.files?.[0]?.url || value.url || "";
  }

  function adminFileUrls(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(adminFileUrl).filter(Boolean);
    if (Array.isArray(value.files)) return value.files.map(file => file?.url).filter(Boolean);
    const url = adminFileUrl(value);
    return url ? [url] : [];
  }

  function adminFileObject(url, name = "admin-local-file") {
    return url ? { name, url, source: url.startsWith("data:") ? "browser-preview" : "local-mock" } : null;
  }

  function adminImageValue(url, name) {
    const file = adminFileObject(url, name);
    return { files: file ? [file] : [] };
  }

  function adminBrands() {
    const items = getAdminConfig().brands?.items;
    return sortBrandsForDisplay(mergeContentOverrides(liveContent().brands, items).filter(item => item?.isOnline !== false));
  }

  function adminCases() {
    const items = getAdminConfig().cases?.items;
    return sortCases(mergeContentOverrides(liveContent().cases, items).filter(item => item?.isOnline !== false));
  }

  function adminBrandById(id) {
    return adminBrands().find(item => item.id === id);
  }

  function adminBrandDisplay(brand) {
    if (!brand) return "Unassigned";
    return [brand.chineseName, brand.englishName].filter(Boolean).join(" / ") || brand.id || "Brand";
  }

  function adminMetric(label, value, view) {
    return `<button type="button" class="ultra-admin-metric" data-admin-section="${esc(view)}"><span>${esc(label)}</span><strong>${esc(value)}</strong><em>Open ${esc(view)}</em></button>`;
  }

  function adminField(name, label, value = "", type = "text", attrs = "") {
    return `<label class="ultra-admin-field"><span>${esc(label)}</span><input type="${esc(type)}" name="${esc(name)}" value="${esc(value)}" ${attrs}></label>`;
  }

  function adminTextArea(name, label, value = "", attrs = "") {
    return `<label class="ultra-admin-field is-wide"><span>${esc(label)}</span><textarea name="${esc(name)}" ${attrs}>${esc(value)}</textarea></label>`;
  }

  function adminSelect(name, label, value, options, attrs = "") {
    return `
      <label class="ultra-admin-field">
        <span>${esc(label)}</span>
        <select name="${esc(name)}" ${attrs}>
          ${options.map(option => {
            const opt = typeof option === "string" ? { value: option, label: option } : option;
            return `<option value="${esc(opt.value)}" ${String(value || "") === String(opt.value) ? "selected" : ""}>${esc(opt.label)}</option>`;
          }).join("")}
        </select>
      </label>
    `;
  }

  function adminImageField(name, label, value = "", accept = "image/*") {
    const url = adminFileUrl(value);
    return `
      <div class="ultra-admin-field ultra-admin-image-field" data-admin-image-field>
        <span>${esc(label)}</span>
        <input type="hidden" name="${esc(name)}" value="${esc(url)}">
        <div class="ultra-admin-image-preview ${url ? "has-image" : ""}" data-admin-image-preview>
          ${url ? `<img src="${esc(adminPreviewSrc(url))}" alt="">` : `<span>No image</span>`}
        </div>
        <div class="ultra-admin-inline-actions">
          <label class="ultra-admin-small-button">Upload<input type="file" accept="${esc(accept)}" data-admin-image-upload></label>
          <button type="button" class="ultra-admin-small-button" data-admin-image-clear>Delete</button>
        </div>
      </div>
    `;
  }

  function adminGalleryItem(url, index, total) {
    return `
      <figure class="ultra-admin-gallery-item" draggable="true" data-admin-gallery-item="${index}">
        <img src="${esc(adminPreviewSrc(url))}" alt="">
        <figcaption>
          <button type="button" data-admin-gallery-move="up" ${index === 0 ? "disabled" : ""}>Up</button>
          <button type="button" data-admin-gallery-move="down" ${index >= total - 1 ? "disabled" : ""}>Down</button>
          <button type="button" data-admin-gallery-delete>Delete</button>
        </figcaption>
      </figure>
    `;
  }

  function adminGalleryField(value = []) {
    const urls = adminFileUrls(value);
    return `
      <div class="ultra-admin-field is-wide ultra-admin-gallery-field" data-admin-gallery-field>
        <span>Gallery Images</span>
        <input type="hidden" name="galleryUrls" value="${esc(JSON.stringify(urls))}">
        <div class="ultra-admin-gallery" data-admin-gallery-list>
          ${urls.map((url, index) => adminGalleryItem(url, index, urls.length)).join("")}
        </div>
        <label class="ultra-admin-small-button">Upload Images<input type="file" accept="image/*" multiple data-admin-gallery-upload></label>
      </div>
    `;
  }

  function adminDashboardSection(brands, cases) {
    const messages = adminContactMessages();
    const newMessages = messages.filter(item => item.status === "new").length;
    return `
      <section class="ultra-admin-view ${adminActiveView() === "dashboard" ? "is-active" : ""}" data-admin-view="dashboard">
        <div class="ultra-admin-view-head"><span>Dashboard</span><h1>Content Overview</h1></div>
        <div class="ultra-admin-metrics">
          ${adminMetric("Brands", brands.length, "brands")}
          ${adminMetric("Cases", cases.length, "cases")}
          ${adminMetric("New Messages", newMessages, "messages")}
          ${adminMetric("Contact Messages", messages.length, "messages")}
        </div>
        <div class="ultra-admin-two-col">
          <section class="ultra-admin-panel"><h2>Recently Updated Brands</h2><ul class="ultra-admin-list">${brands.slice(0, 5).map(item => `<li><button type="button" data-admin-section="brands"><strong>${esc(adminBrandDisplay(item))}</strong><span>${item.isFeaturedBrand ? "Featured" : "Normal"}</span></button></li>`).join("") || "<li>No brands yet.</li>"}</ul></section>
          <section class="ultra-admin-panel"><h2>Recent Messages</h2><ul class="ultra-admin-list">${messages.slice(0, 5).map(item => `<li><button type="button" data-admin-section="messages"><strong>${esc(item.company || item.name || "-")}</strong><span>${esc(item.status || "new")}</span></button></li>`).join("") || "<li>No messages yet.</li>"}</ul></section>
        </div>
      </section>
    `;
  }

  function adminBrandForm() {
    return `
      <form class="ultra-admin-edit-form" data-admin-brand-form>
        <input type="hidden" name="id" value="">
        <div class="ultra-admin-modal-body">
          <div class="ultra-admin-form-head"><h2 data-admin-brand-form-title>New Brand</h2><p>Use the star to prioritize this brand on public featured areas.</p></div>
          <div class="ultra-admin-form-grid">
            ${adminField("chineseName", "Chinese Name", "", "text", "required")}
            ${adminField("englishName", "English Name", "", "text", "required")}
            ${adminImageField("originalLogoUrl", "Color Logo")}
            ${adminImageField("grayLogoUrl", "Gray Logo")}
            <label class="ultra-admin-checkline"><input type="checkbox" name="isFeaturedBrand"> Featured brand</label>
          </div>
        </div>
        <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save Brand</button><button type="button" data-admin-brand-cancel>Cancel</button></div>
      </form>
    `;
  }

  function adminBrandsSection(brands) {
    return `
      <section class="ultra-admin-view ${adminActiveView() === "brands" ? "is-active" : ""}" data-admin-view="brands">
        <div class="ultra-admin-view-head"><span>Brands</span><h1>Brand Management</h1><button type="button" class="ultra-admin-primary" data-admin-brand-new>New Brand</button></div>
        <div class="ultra-admin-table-tools"><input type="search" placeholder="Search brand name" data-admin-brand-search></div>
        <div class="ultra-admin-table-wrap">
          <table class="ultra-admin-table" data-admin-brand-table>
            <thead><tr><th>Logo</th><th>Chinese Name</th><th>English Name</th><th>Featured</th><th>Actions</th></tr></thead>
            <tbody>
              ${brands.map(item => {
                const logo = adminFileUrl(item.originalLogo);
                return `
                  <tr data-admin-brand-row data-search="${esc(`${item.chineseName || ""} ${item.englishName || ""}`.toLowerCase())}">
                    <td>${logo ? `<img class="ultra-admin-logo-thumb" src="${esc(adminPreviewSrc(logo))}" alt="">` : "<span class=\"ultra-admin-empty-thumb\">Logo</span>"}</td>
                    <td>${esc(item.chineseName || "-")}</td>
                    <td>${esc(item.englishName || item.id || "-")}</td>
                    <td><button type="button" class="ultra-admin-star ${item.isFeaturedBrand ? "is-on" : ""}" data-admin-toggle-brand="${esc(item.id)}">${item.isFeaturedBrand ? "★" : "☆"}</button></td>
                    <td><button type="button" data-admin-edit-brand="${esc(item.id)}">Edit</button><button type="button" data-admin-delete-brand="${esc(item.id)}">Delete</button></td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="5" class="ultra-admin-empty">No brands yet.</td></tr>`}
            </tbody>
          </table>
        </div>
        ${adminBrandForm()}
      </section>
    `;
  }

  function adminCaseForm(brands) {
    const brandOptions = brands.map(brand => ({ value: brand.id, label: adminBrandDisplay(brand) }));
    return `
      <form class="ultra-admin-edit-form" data-admin-case-form>
        <input type="hidden" name="id" value="">
        <div class="ultra-admin-modal-body">
          <div class="ultra-admin-form-head"><h2 data-admin-case-form-title>New Case</h2><p>Use featured cases to prioritize homepage and case page highlights.</p></div>
          <div class="ultra-admin-form-grid">
            ${adminSelect("brandId", "Related Brand", brands[0]?.id || "", brandOptions, "required")}
            ${adminField("exhibitionName", "Exhibition Name", "", "text", "required")}
            ${adminField("dateStart", "Start Date", "", "date", "required")}
            ${adminField("dateEnd", "End Date", "", "date", "required")}
            ${adminField("area", "Area", "", "text")}
            ${adminField("industry", "Industry", "", "text", "required")}
            ${adminField("country", "Country", "", "text", "required")}
            ${adminTextArea("chineseIntro", "Chinese Intro")}
            ${adminTextArea("englishIntro", "English Intro")}
            ${adminImageField("coverImageUrl", "Cover Image")}
            ${adminGalleryField()}
            <label class="ultra-admin-checkline"><input type="checkbox" name="isFeaturedCase"> Featured case</label>
          </div>
        </div>
        <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save Case</button><button type="button" data-admin-case-cancel>Cancel</button></div>
      </form>
    `;
  }

  function adminCasesSection(cases, brands) {
    const years = [...new Set(cases.map(item => caseYear(item)).filter(Boolean))].sort((a, b) => b - a);
    const industries = [...new Set(cases.map(item => item.industry).filter(Boolean))].sort();
    const countries = [...new Set(cases.map(item => item.country).filter(Boolean))].sort();
    const brandOptions = brands.map(brand => ({ value: brand.id, label: adminBrandDisplay(brand) }));
    return `
      <section class="ultra-admin-view ${adminActiveView() === "cases" ? "is-active" : ""}" data-admin-view="cases">
        <div class="ultra-admin-view-head"><span>Cases</span><h1>Case Management</h1><button type="button" class="ultra-admin-primary" data-admin-case-new>New Case</button></div>
        <div class="ultra-admin-table-tools">
          <input type="search" placeholder="Search exhibition name" data-admin-case-search>
          ${adminSelect("caseYearFilter", "Year", "", [{ value: "", label: "All Years" }, ...years.map(String)], "data-admin-case-filter=\"year\"")}
          ${adminSelect("caseBrandFilter", "Brand", "", [{ value: "", label: "All Brands" }, ...brandOptions], "data-admin-case-filter=\"brand\"")}
          ${adminSelect("caseIndustryFilter", "Industry", "", [{ value: "", label: "All Industries" }, ...industries], "data-admin-case-filter=\"industry\"")}
          ${adminSelect("caseCountryFilter", "Country", "", [{ value: "", label: "All Countries" }, ...countries], "data-admin-case-filter=\"country\"")}
          ${adminSelect("caseFeaturedFilter", "Featured", "", [{ value: "", label: "All" }, { value: "1", label: "Featured" }, { value: "0", label: "Normal" }], "data-admin-case-filter=\"featured\"")}
        </div>
        <div class="ultra-admin-table-wrap">
          <table class="ultra-admin-table" data-admin-case-table>
            <thead><tr><th>Cover</th><th>Brand</th><th>Exhibition</th><th>Date</th><th>Area</th><th>Industry</th><th>Country</th><th>Featured</th><th>Actions</th></tr></thead>
            <tbody>
              ${cases.map(item => {
                const cover = adminFileUrl(item.coverImage);
                const brand = adminBrandById(item.brandId);
                return `
                  <tr data-admin-case-row data-search="${esc(`${item.exhibitionName || ""} ${item.title || ""}`.toLowerCase())}" data-year="${esc(caseYear(item) || "")}" data-brand="${esc(item.brandId || "")}" data-industry="${esc(item.industry || "")}" data-country="${esc(item.country || "")}" data-featured="${item.isFeaturedCase ? "1" : "0"}">
                    <td>${cover ? `<img class="ultra-admin-cover-thumb" src="${esc(adminPreviewSrc(cover))}" alt="">` : "<span class=\"ultra-admin-empty-thumb\">Cover</span>"}</td>
                    <td>${esc(adminBrandDisplay(brand))}</td>
                    <td>${esc(item.exhibitionName || item.title || "-")}</td>
                    <td>${esc(caseDateText(item) || "-")}</td>
                    <td>${esc(item.area || (item.areaSqm ? `${item.areaSqm} sqm` : "-"))}</td>
                    <td>${esc(item.industry || "-")}</td>
                    <td>${esc(item.country || "-")}</td>
                    <td><button type="button" class="ultra-admin-star ${item.isFeaturedCase ? "is-on" : ""}" data-admin-toggle-case="${esc(item.id)}">${item.isFeaturedCase ? "★" : "☆"}</button></td>
                    <td><button type="button" data-admin-edit-case="${esc(item.id)}">Edit</button><button type="button" data-admin-delete-case="${esc(item.id)}">Delete</button></td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="9" class="ultra-admin-empty">No cases yet.</td></tr>`}
            </tbody>
          </table>
        </div>
        ${adminCaseForm(brands)}
      </section>
    `;
  }

  function adminContactSection(contact) {
    const entries = Array.isArray(contact.footerEntries) ? contact.footerEntries : [];
    return `
      <section class="ultra-admin-view ${adminActiveView() === "contact" ? "is-active" : ""}" data-admin-view="contact">
        <div class="ultra-admin-view-head"><span>Contact</span><h1>Contact Management</h1></div>
        <form class="ultra-admin-edit-form" data-admin-contact-form>
          <div class="ultra-admin-form-grid">
            ${adminField("email", "Email", contact.email || "", "email", "required")}
            ${adminField("phone", "Phone", contact.phone || "", "text", "required")}
            ${adminField("whatsapp", "WhatsApp", contact.whatsapp || "")}
            ${adminField("wechat", "WeChat", contact.wechat || "")}
            ${adminTextArea("addressZh", "Chinese Address", contact.addressZh || "")}
            ${adminTextArea("addressEn", "English Address", contact.addressEn || "")}
          </div>
          <h2>Footer Contact Entries</h2>
          <div class="ultra-admin-repeater" data-admin-footer-entries>
            ${[...entries, { labelZh: "", labelEn: "", value: "" }].map((entry, index) => `
              <div class="ultra-admin-repeater-row">
                ${adminField(`footerLabelZh${index}`, "Label ZH", entry.labelZh || "")}
                ${adminField(`footerLabelEn${index}`, "Label EN", entry.labelEn || "")}
                ${adminField(`footerValue${index}`, "Value", entry.value || "")}
              </div>
            `).join("")}
          </div>
          <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save Contact</button></div>
        </form>
      </section>
    `;
  }

  function adminContactMessagesSection(messages) {
    const sorted = [...messages].sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
    const statusOptions = [
      { value: "", label: "All Statuses" },
      { value: "new", label: "New" },
      { value: "contacted", label: "Contacted" },
      { value: "quoted", label: "Quoted" },
      { value: "closed", label: "Closed" },
      { value: "spam", label: "Spam" }
    ];
    return `
      <section class="ultra-admin-view ${adminActiveView() === "messages" ? "is-active" : ""}" data-admin-view="messages">
        <div class="ultra-admin-view-head"><span>Contact Messages</span><h1>留言管理</h1></div>
        <div class="ultra-admin-message-layout">
          <div>
            <div class="ultra-admin-table-tools">
              <input type="search" placeholder="Search name, company, contact, message" data-admin-message-search>
              ${adminSelect("messageStatusFilter", "Status", "", statusOptions, "data-admin-message-filter=\"status\"")}
            </div>
            <div class="ultra-admin-table-wrap">
              <table class="ultra-admin-table ultra-admin-message-table" data-admin-message-table>
                <thead><tr><th>Submitted</th><th>Name</th><th>Company</th><th>Contact</th><th>Inquiry</th><th>Country / Region</th><th>Status</th></tr></thead>
                <tbody>
                  ${sorted.map(item => `
                    <tr data-admin-message-row data-message-id="${esc(item.id)}" data-status="${esc(item.status || "new")}" data-search="${esc(`${item.name || ""} ${item.company || ""} ${item.contact || ""} ${item.message || ""}`.toLowerCase())}">
                      <td>${esc(formatAdminDate(item.createdAt))}</td>
                      <td>${esc(item.name || "-")}</td>
                      <td>${esc(item.company || "-")}</td>
                      <td>${esc(item.contact || "-")}</td>
                      <td>${esc(item.inquiryType || "-")}</td>
                      <td>${esc(item.countryRegion || "-")}</td>
                      <td><span class="ultra-admin-status-pill is-${esc(item.status || "new")}">${esc(item.status || "new")}</span></td>
                    </tr>
                  `).join("") || `<tr><td colspan="7" class="ultra-admin-empty">No contact messages yet.</td></tr>`}
                </tbody>
              </table>
            </div>
          </div>
          <aside class="ultra-admin-message-detail" data-admin-message-detail>
            <h2>Message Detail</h2>
            <p class="ultra-admin-note">Click a message on the left to view the full content, update status, or add an internal note.</p>
          </aside>
        </div>
      </section>
    `;
  }

  function adminAboutSection(about) {
    const fallback = defaultAdminConfig().about;
    const serviceMedia = Array.isArray(about.serviceMedia) ? about.serviceMedia : fallback.serviceMedia;
    const exhibitionLogos = Array.isArray(about.exhibitionLogos) ? about.exhibitionLogos : fallback.exhibitionLogos;
    return `
      <section class="ultra-admin-view ${adminActiveView() === "about" ? "is-active" : ""}" data-admin-view="about">
        <div class="ultra-admin-view-head"><span>About</span><h1>About Page Media</h1></div>
        <form class="ultra-admin-edit-form" data-admin-about-form>
          <h2>Service Card Media</h2>
          <div class="ultra-admin-form-grid ultra-admin-service-media-grid">
            ${serviceMedia.slice(0, 4).map((item, index) => {
              const title = item?.title || ["STRATEGY", "DESIGN", "ABROAD", "BUILD"][index] || `CARD ${index + 1}`;
              return adminImageField(`serviceMedia${index}`, `${title} image`, item?.url || "", "image/svg+xml,image/png,image/webp,image/*");
            }).join("")}
          </div>
          <p class="ultra-admin-note">Upload one image for each service card. SVG, PNG, and WebP are supported. Leave a field blank to show the designed placeholder.</p>
          <h2>Global Exhibition Logos</h2>
          <div class="ultra-admin-form-grid">
            ${adminTextArea("exhibitionLogos", "Exhibition logo wall items", JSON.stringify(exhibitionLogos, null, 2), "spellcheck=\"false\"")}
          </div>
          <p class="ultra-admin-note">Only exhibition platforms belong here. Supported fields: id, name, logo, order, visible. Logo accepts SVG, PNG, or WebP URL/data URL. Do not add client logos or links.</p>
          <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save About</button></div>
        </form>
      </section>
    `;
  }

  function adminSettingsSection(settings) {
    return `
      <section class="ultra-admin-view ${adminActiveView() === "settings" ? "is-active" : ""}" data-admin-view="settings">
        <div class="ultra-admin-view-head"><span>Site Settings</span><h1>Website Configuration</h1></div>
        <form class="ultra-admin-edit-form" data-admin-settings-form>
          <h2>Basic Site Settings</h2>
          <div class="ultra-admin-form-grid">
            ${adminField("siteNameZh", "Site Name ZH", settings.siteNameZh || "", "text", "required")}
            ${adminField("siteNameEn", "Site Name EN", settings.siteNameEn || "", "text", "required")}
            ${adminImageField("logo", "Site Logo", settings.logo || "")}
            ${adminImageField("favicon", "Favicon", settings.favicon || "")}
            ${adminSelect("defaultLanguage", "Default Language", settings.defaultLanguage || "en", [{ value: "zh", label: "Chinese" }, { value: "en", label: "English" }])}
          </div>
          <h2>Notion Configuration</h2>
          <div class="ultra-admin-form-grid">
            ${adminField("notionToken", "Notion Token", settings.notionToken || "", "password")}
            ${adminField("notionBrandsDatabaseId", "Brands Database ID", settings.notionBrandsDatabaseId || "")}
            ${adminField("notionCasesDatabaseId", "Cases Database ID", settings.notionCasesDatabaseId || "")}
          </div>
          <h2>Aliyun OSS Configuration</h2>
          <div class="ultra-admin-form-grid">
            ${adminField("ossRegion", "OSS Region", settings.ossRegion || "")}
            ${adminField("ossBucket", "Bucket Name", settings.ossBucket || "")}
            ${adminField("ossAccessKeyId", "AccessKey ID", settings.ossAccessKeyId || "", "password")}
            ${adminField("ossAccessKeySecret", "AccessKey Secret", settings.ossAccessKeySecret || "", "password")}
            ${adminField("ossCdnDomain", "CDN Domain", settings.ossCdnDomain || "")}
          </div>
          <p class="ultra-admin-note">This static admin stores local mock configuration only. Do not put production secrets here.</p>
          <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save Settings</button></div>
        </form>
      </section>
    `;
  }

  function adminLoginPage() {
    return `
      <section class="ultra-admin-login-screen">
        <form class="ultra-admin-login" data-admin-login>
          <img src="${routeLink("/assets/ultra-logo.svg")}" alt="Ultra Expo">
          <input type="password" name="password" autocomplete="current-password" placeholder="Admin password" aria-label="Admin password" required>
          <button type="submit">Enter</button>
          <p class="ultra-admin-status" data-admin-status></p>
        </form>
      </section>
    `;
  }

  function adminPage() {
    if (!isAdminUnlocked()) return adminLoginPage();
    const config = getAdminConfig();
    const brands = adminBrands();
    const cases = adminCases();
    const active = adminActiveView();
    const menu = [
      ["dashboard", "Dashboard"],
      ["brands", "Brands"],
      ["cases", "Cases"],
      ["about", "About"],
      ["contact", "Contact"],
      ["messages", "Contact Messages"],
      ["settings", "Site Settings"]
    ];
    return `
      <section class="ultra-admin-shell">
        <aside class="ultra-admin-sidebar">
          <img src="${routeLink("/assets/ultra-logo.svg")}" alt="Ultra Expo">
          <nav>${menu.map(([view, label]) => `<button type="button" class="${active === view ? "is-active" : ""}" data-admin-section="${esc(view)}">${esc(label)}</button>`).join("")}</nav>
          <button type="button" class="ultra-admin-sidebar-action" data-admin-logout>Logout</button>
        </aside>
        <main class="ultra-admin-workspace">
          <header class="ultra-admin-topbar">
            <div><strong>Ultra Expo Admin</strong><span>Last saved: ${esc(config.updatedAt || "Not saved yet")}</span></div>
            <button type="button" data-admin-reset>Reset Local Mock</button>
          </header>
          <p class="ultra-admin-status" data-admin-status></p>
          ${adminDashboardSection(brands, cases)}
          ${adminBrandsSection(brands)}
          ${adminCasesSection(cases, brands)}
          ${adminAboutSection(config.about || {})}
          ${adminContactSection(config.contact || {})}
          ${adminContactMessagesSection(adminContactMessages())}
          ${adminSettingsSection(config.siteSettings || {})}
        </main>
      </section>
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

  function caseModalHTML(lang, forcedId = "") {
    const id = forcedId;
    if (!id || !activeCases().some(item => item.id === id)) return "";
    const zh = lang === "zh";
    return `<div class="ultra-case-modal" data-case-modal><button class="ultra-case-esc ultra-split-rolling" type="button" data-case-modal-close aria-label="${zh ? "关闭案例" : "Close case"}">${rollingButtonText("ESC")}<i aria-hidden="true">&times;</i></button>${caseDetailPage(id, lang, { modal: true, hideClose: true })}</div>`;
  }

  function applyPageIntro(root, path) {
    if (!root || path === "/admin") return;
    const firstScreen = root.querySelector(".ultra-main > .ultra-hero, .ultra-main > .ultra-section, .ultra-main > .cases-page .ultra-cases-index, .ultra-main > .ultra-services .ultra-services-hero, .ultra-main > .ultra-contact-page .ultra-contact-hero, .ultra-main > .ultra-case-detail.is-page");
    if (firstScreen) firstScreen.classList.add("ultra-page-intro-scope");
    const selectors = [
      ".ultra-main > .ultra-hero .ultra-kicker",
      ".ultra-main > .ultra-hero h1",
      ".ultra-main > .ultra-hero p",
      ".ultra-main > .ultra-hero .ultra-hero-actions",
      ".ultra-about-hero-copy > .ultra-about-kicker",
      ".ultra-about-hero-copy > h1",
      ".ultra-about-hero-copy > p",
      ".ultra-about-hero-copy > .ultra-about-stats > *",
      ".ultra-about-system-frame",
      ".ultra-services-hero-copy > .ultra-services-kicker",
      ".ultra-services-hero-copy > h1",
      ".ultra-services-hero-copy > p",
      ".ultra-services-hero-copy > strong",
      ".ultra-services-hero-copy > .ultra-services-hero-actions",
      ".ultra-services-system",
      ".ultra-cases-index .ultra-section-head",
      ".ultra-cases-index .ultra-filter",
      ".ultra-cases-index .ultra-case-grid > [data-case-item]:not(.is-hidden) .ultra-case-card",
      ".ultra-case-detail.is-page .ultra-case-detail-logo",
      ".ultra-case-detail.is-page .ultra-case-detail-title",
      ".ultra-case-detail.is-page .ultra-case-detail-line",
      ".ultra-case-detail.is-page .ultra-case-detail-meta",
      ".ultra-case-detail.is-page .ultra-case-detail-intro",
      ".ultra-case-detail.is-page .ultra-case-detail-gallery",
      ".ultra-contact-hero-copy > .ultra-contact-kicker",
      ".ultra-contact-hero-copy > h1",
      ".ultra-contact-hero-copy > .ultra-contact-hero-reveal-title",
      ".ultra-contact-hero-copy > p",
      ".ultra-contact-hero-copy > .ultra-contact-actions",
      ".ultra-contact-promise > article"
    ];
    const items = [];
    selectors.forEach(selector => {
      root.querySelectorAll(selector).forEach(node => {
        if (!items.includes(node)) items.push(node);
      });
    });
    items.forEach((node, index) => {
      node.classList.add("ultra-page-intro-item");
      node.style.setProperty("--page-intro-delay", `${500 + Math.min(index, 6) * 140}ms`);
    });
  }

  function splitUltraTypeRevealText(node, lineIndex = 0) {
    if (!node || node.dataset.revealReady === "true") return;
    const original = node.textContent || "";
    const tokens = original.match(/\S+|\s+/g) || [];
    const blockStyles = [
      { color: "var(--block-blue)", opacity: "0.62", scale: "0.78" },
      { color: "var(--block-gray)", opacity: "0", scale: "0.44" },
      { color: "var(--block-gray)", opacity: "0.44", scale: "0.62" },
      { color: "var(--block-blue-soft)", opacity: "0", scale: "0.42" },
      { color: "var(--block-gray)", opacity: "0.38", scale: "0.54" },
      { color: "var(--block-dark)", opacity: "0.34", scale: "0.48" },
      { color: "var(--block-blue-soft)", opacity: "0.52", scale: "0.68" },
      { color: "var(--block-gray)", opacity: "0", scale: "0.40" },
      { color: "var(--block-gray)", opacity: "0.34", scale: "0.50" },
      { color: "var(--block-blue)", opacity: "0.46", scale: "0.58" }
    ];
    let charIndex = 0;
    const line = tokens.map(token => {
      if (/^\s+$/.test(token)) return `<span class="char-reveal-space" aria-hidden="true"> </span>`;
      const chars = Array.from(token).map(char => {
        const safeChar = esc(char);
        const blockStyle = blockStyles[(charIndex + lineIndex) % blockStyles.length];
        const output = `<span class="char-reveal-char" style="--char-index:${charIndex};--block-color:${blockStyle.color};--block-opacity:${blockStyle.opacity};--block-scale-x:${blockStyle.scale}" data-char-index="${charIndex}" aria-hidden="true"><span class="char-reveal-glyph">${safeChar}</span><span class="char-reveal-block" aria-hidden="true"></span></span>`;
        charIndex += 1;
        return output;
      }).join("");
      return `<span class="char-reveal-word">${chars}</span>`;
    }).join("");
    node.dataset.revealReady = "true";
    node.setAttribute("aria-label", original.trim());
    node.style.setProperty("--line-index", String(lineIndex));
    node.style.setProperty("--char-count", String(Math.max(charIndex, 1)));
    node.innerHTML = `<span class="char-reveal-line" aria-hidden="true">${line}</span>`;
  }

  function runUltraTypeRevealGroup(group) {
    if (!group || group.dataset.revealPlayed === "true") return;
    group.dataset.revealPlayed = "true";
  }

  function isUltraTypeRevealReady(group) {
    if (!group) return false;
    const rect = group.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.76 && rect.bottom >= 0;
  }

  function initUltraTypeReveal(root = document) {
    const groups = [...root.querySelectorAll("[data-ultra-character-block-reveal], [data-ultra-type-reveal], [data-char-reveal-group]")];
    if (!groups.length) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      groups.forEach(group => group.classList.add("is-visible"));
      return;
    }
    groups.forEach(group => {
      [...group.querySelectorAll("[data-reveal-text]")].forEach((node, index) => splitUltraTypeRevealText(node, index));
    });
    if (!("IntersectionObserver" in window)) {
      groups.forEach(group => {
        group.classList.add("is-visible");
        runUltraTypeRevealGroup(group);
      });
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        runUltraTypeRevealGroup(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24% 0px" });
    groups.forEach(group => {
      if (isUltraTypeRevealReady(group)) {
        group.classList.add("is-visible");
        runUltraTypeRevealGroup(group);
        return;
      }
      observer.observe(group);
    });
  }

  window.UltraTypeReveal = {
    init: initUltraTypeReveal
  };
  window.UltraCharacterBlockReveal = {
    init: initUltraTypeReveal
  };

  function initAboutPage(root) {
    const about = root.querySelector(".ultra-about");
    if (!about) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const revealNodes = [...about.querySelectorAll("[data-about-reveal]")];
    if (reduced || !("IntersectionObserver" in window)) {
      revealNodes.forEach(node => node.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
      revealNodes.forEach((node, index) => {
        node.style.setProperty("--about-delay", `${Math.min(index * 45, 260)}ms`);
        observer.observe(node);
      });
    }

    const hero = about.querySelector(".ultra-about-hero");
    if (hero && !reduced) {
      hero.addEventListener("pointermove", event => {
        const rect = hero.getBoundingClientRect();
        const px = rect.width ? (event.clientX - rect.left) / rect.width - 0.5 : 0;
        const py = rect.height ? (event.clientY - rect.top) / rect.height - 0.5 : 0;
        hero.style.setProperty("--about-mx", `${(px * 26).toFixed(2)}px`);
        hero.style.setProperty("--about-my", `${(py * 18).toFixed(2)}px`);
      }, { passive: true });
      hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--about-mx", "0px");
        hero.style.setProperty("--about-my", "0px");
      }, { passive: true });
    }

    const map = about.querySelector(".ultra-about-map");
    const nodeCards = [...about.querySelectorAll("[data-about-node]")];
    const setActiveNode = index => {
      map?.querySelectorAll(".map-dot").forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
      nodeCards.forEach(card => card.classList.toggle("is-active", Number(card.dataset.aboutNode) === index));
    };
    const clearActiveNode = () => setActiveNode(-1);
    nodeCards.forEach(card => {
      card.addEventListener("mouseenter", () => setActiveNode(Number(card.dataset.aboutNode)), { passive: true });
      card.addEventListener("mouseleave", clearActiveNode, { passive: true });
      card.addEventListener("focusin", () => setActiveNode(Number(card.dataset.aboutNode)));
      card.addEventListener("focusout", clearActiveNode);
    });
    map?.querySelectorAll(".map-dot").forEach((dot, index) => {
      dot.addEventListener("mouseenter", () => setActiveNode(index), { passive: true });
      dot.addEventListener("mouseleave", clearActiveNode, { passive: true });
      dot.addEventListener("focus", () => setActiveNode(index));
      dot.addEventListener("blur", clearActiveNode);
    });
    clearActiveNode();

    const brandCards = [...about.querySelectorAll("[data-brand-scroll-card]")];
    if (brandCards.length) {
      const revealBrandCard = card => {
        card.style.setProperty("--brand-progress", "1");
        card.style.setProperty("--brand-y", "0px");
        card.style.setProperty("--brand-clip", "0%");
        card.classList.add("is-visible");
        card.classList.add("is-brand-active");
      };
      if (reduced || !("IntersectionObserver" in window)) {
        brandCards.forEach(revealBrandCard);
      } else {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            revealBrandCard(entry.target);
            observer.unobserve(entry.target);
          });
        }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
        brandCards.forEach(card => observer.observe(card));
      }
    }
  }

  let serviceRasterCleanup = null;

  function initServiceRasterBackground(root) {
    if (serviceRasterCleanup) {
      serviceRasterCleanup();
      serviceRasterCleanup = null;
    }

    const background = root.querySelector("[data-service-raster-background]");
    if (!background) return;

    const canvas = background.querySelector(".service-raster-dot-canvas");
    const context = canvas?.getContext?.("2d", { alpha: true });
    const columns = [...background.querySelectorAll(".service-raster-column")];
    if (!canvas || !context || !columns.length) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    let width = 0;
    let height = 0;
    let highlightedDots = [];
    let animationFrame = 0;
    let scrollFrame = 0;
    let lastAppliedScrollY = -1;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = background.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width || window.innerWidth || 1));
      height = Math.max(1, Math.round(background.offsetHeight || rect.height || (window.innerHeight * 1.25) || 1));
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const spacing = width < 720 ? 18 : 20;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const total = cols * rows;
      const highlightCount = Math.max(12, Math.round(total * 0.0038));
      const used = new Set();
      highlightedDots = [];

      while (highlightedDots.length < highlightCount && used.size < total) {
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        const key = `${col}:${row}`;
        if (used.has(key)) continue;
        used.add(key);
        highlightedDots.push({
          x: col * spacing + spacing / 2,
          y: row * spacing + spacing / 2,
          size: width < 720 ? 1.45 : 1.65,
          phaseA: Math.random() * Math.PI * 2,
          phaseB: Math.random() * Math.PI * 2,
          durationA: 7200 + Math.random() * 11800,
          durationB: 11800 + Math.random() * 18200,
          baseAlpha: 0.22 + Math.random() * 0.12,
          peakAlpha: 0.34 + Math.random() * 0.24
        });
      }
    };

    const draw = time => {
      context.clearRect(0, 0, width, height);
      highlightedDots.forEach(dot => {
        const waveA = Math.sin((time / dot.durationA) * Math.PI * 2 + dot.phaseA) * 0.5 + 0.5;
        const waveB = Math.sin((time / dot.durationB) * Math.PI * 2 + dot.phaseB) * 0.5 + 0.5;
        const shimmer = Math.pow(waveA * 0.72 + waveB * 0.28, 2.6);
        const alpha = Math.min(0.88, dot.baseAlpha + shimmer * dot.peakAlpha);
        context.fillStyle = `rgba(67, 132, 255, ${alpha})`;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fill();
      });
      animationFrame = window.requestAnimationFrame(draw);
    };

    const updateScrollParallax = () => {
      scrollFrame = 0;
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      if (scrollY === lastAppliedScrollY) return;
      lastAppliedScrollY = scrollY;
      columns.forEach(column => {
        const factor = Number.parseFloat(getComputedStyle(column).getPropertyValue("--scroll-factor")) || 0;
        column.style.setProperty("--scroll-shift", `${scrollY * factor}px`);
      });
    };

    const requestScrollUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScrollParallax);
    };

    const handleResize = () => {
      resizeCanvas();
      lastAppliedScrollY = -1;
      updateScrollParallax();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    handleResize();

    if (reduced) {
      draw(0);
      window.cancelAnimationFrame(animationFrame);
    } else {
      animationFrame = window.requestAnimationFrame(draw);
    }

    serviceRasterCleanup = () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", requestScrollUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }

  function initServicesPage(root) {
    const servicesRoot = root.querySelector(".ultra-services");
    if (!servicesRoot) {
      if (serviceRasterCleanup) {
        serviceRasterCleanup();
        serviceRasterCleanup = null;
      }
      return;
    }
    initServiceRasterBackground(servicesRoot);
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const revealNodes = [...servicesRoot.querySelectorAll("[data-services-reveal]")];
    if (reduced || !("IntersectionObserver" in window)) {
      revealNodes.forEach(node => node.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      revealNodes.forEach((node, index) => {
        node.style.setProperty("--services-delay", `${Math.min(index * 55, 420)}ms`);
        observer.observe(node);
      });
    }

    const setActiveSteps = steps => {
      const active = new Set(String(steps || "").split(",").filter(Boolean));
      servicesRoot.querySelectorAll("[data-step]").forEach(card => {
        card.classList.toggle("is-linked", active.has(card.dataset.step));
      });
    };
    servicesRoot.querySelectorAll("[data-pillar]").forEach(card => {
      card.addEventListener("mouseenter", () => setActiveSteps(card.dataset.steps), { passive: true });
      card.addEventListener("focusin", () => setActiveSteps(card.dataset.steps));
      card.addEventListener("mouseleave", () => setActiveSteps("07,08,09,10,11"), { passive: true });
      card.addEventListener("focusout", () => setActiveSteps("07,08,09,10,11"));
    });
    setActiveSteps("07,08,09,10,11");

    const system = servicesRoot.querySelector(".ultra-services-solution-system");
    const setSystemActive = key => {
      system?.querySelectorAll("[data-system-node]").forEach(node => {
        node.classList.toggle("is-active", node.dataset.systemNode === key);
        node.classList.toggle("is-dimmed", node.dataset.systemNode !== key);
      });
      system?.setAttribute("data-active", key);
    };
    system?.querySelectorAll("[data-system-node]").forEach(node => {
      node.addEventListener("mouseenter", () => setSystemActive(node.dataset.systemNode), { passive: true });
      node.addEventListener("focus", () => setSystemActive(node.dataset.systemNode));
      node.addEventListener("mouseleave", () => setSystemActive("abroad"), { passive: true });
      node.addEventListener("blur", () => setSystemActive("abroad"));
    });
    setSystemActive("abroad");

    const pillarSection = servicesRoot.querySelector(".ultra-services-pillars");
    const pillarCardsForProgress = [...servicesRoot.querySelectorAll(".ultra-services-pillar")];
    if (pillarSection && pillarCardsForProgress.length && !reduced) {
      let pillarTicking = false;
      const clamp01 = value => Math.min(Math.max(value, 0), 1);
      const updatePillarCards = () => {
        pillarTicking = false;
        const viewport = window.innerHeight || document.documentElement.clientHeight || 1;
        pillarCardsForProgress.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const local = clamp01((viewport * 0.82 - rect.top - index * 18) / (viewport * 0.42));
          card.style.setProperty("--pillar-progress", local.toFixed(4));
        });
      };
      const requestPillarUpdate = () => {
        if (pillarTicking) return;
        pillarTicking = true;
        window.requestAnimationFrame(updatePillarCards);
      };
      updatePillarCards();
      window.addEventListener("scroll", requestPillarUpdate, { passive: true });
      window.addEventListener("resize", requestPillarUpdate, { passive: true });
    } else {
      pillarCardsForProgress.forEach(card => card.style.setProperty("--pillar-progress", "1"));
    }

    const processSection = servicesRoot.querySelector(".ultra-services-process");
    const processCards = [...servicesRoot.querySelectorAll("[data-process-card]")];
    if (processSection && processCards.length) {
      if (reduced) {
        processCards.forEach(card => card.style.setProperty("--process-y", "0px"));
      } else {
        let processTicking = false;
        const clamp01 = value => Math.min(Math.max(value, 0), 1);
        const updateProcessCards = () => {
          processTicking = false;
          const rect = processSection.getBoundingClientRect();
          const viewport = window.innerHeight || document.documentElement.clientHeight || 1;
          const raw = (viewport * 0.9 - rect.top) / (rect.height + viewport * 0.18);
          processCards.forEach((card, index) => {
            const local = clamp01((raw - index * 0.055) / 0.32);
            const eased = 1 - Math.pow(1 - local, 3);
            card.style.setProperty("--process-y", `${Math.round((1 - eased) * 76)}px`);
            card.style.setProperty("--process-scale", (0.955 + eased * 0.045).toFixed(4));
            card.style.setProperty("--process-opacity", (0.38 + eased * 0.62).toFixed(4));
            card.classList.toggle("is-entered", eased > 0.68);
          });
        };
        const requestProcessUpdate = () => {
          if (processTicking) return;
          processTicking = true;
          window.requestAnimationFrame(updateProcessCards);
        };
        updateProcessCards();
        window.addEventListener("scroll", requestProcessUpdate, { passive: true });
        window.addEventListener("resize", requestProcessUpdate, { passive: true });
      }
    }

    const deliverSection = servicesRoot.querySelector(".ultra-services-deliver");
    if (deliverSection) {
      if (reduced) {
        deliverSection.style.setProperty("--deliver-progress", "1");
      } else {
        let deliverTicking = false;
        const updateDeliverProgress = () => {
          deliverTicking = false;
          const rect = deliverSection.getBoundingClientRect();
          const viewport = window.innerHeight || document.documentElement.clientHeight || 1;
          const raw = (viewport * 0.68 - rect.top) / (rect.height * 1.05);
          const progress = Math.min(Math.max(raw, 0), 1);
          deliverSection.style.setProperty("--deliver-progress", progress.toFixed(4));
        };
        const requestDeliverUpdate = () => {
          if (deliverTicking) return;
          deliverTicking = true;
          window.requestAnimationFrame(updateDeliverProgress);
        };
        updateDeliverProgress();
        window.addEventListener("scroll", requestDeliverUpdate, { passive: true });
        window.addEventListener("resize", requestDeliverUpdate, { passive: true });
      }
    }

    const whySection = servicesRoot.querySelector(".ultra-services-why");
    const whyCards = [...servicesRoot.querySelectorAll("[data-why-card]")];
    if (whySection && whyCards.length) {
      const whySticky = whySection.querySelector(".ultra-services-sticky");
      const whySplit = whySection.querySelector(".ultra-services-split");
      const whyGrid = whySection.querySelector(".ultra-services-why-grid");
      let whyTicking = false;
      const clamp01 = value => Math.min(Math.max(value, 0), 1);
      const updateWhyCards = () => {
        whyTicking = false;
        const viewport = window.innerHeight || document.documentElement.clientHeight || 1;
        if (whySticky && whySplit && whyGrid && window.innerWidth > 1180) {
          const sectionRect = whySection.getBoundingClientRect();
          const splitRect = whySplit.getBoundingClientRect();
          const gridRect = whyGrid.getBoundingClientRect();
          const releaseTop = Math.max(0, whyGrid.offsetTop + whyGrid.offsetHeight - whySticky.offsetHeight);
          whySection.style.setProperty("--why-pin-left", `${Math.round(splitRect.left)}px`);
          whySection.style.setProperty("--why-pin-width", `${Math.round(whySticky.offsetWidth)}px`);
          whySection.style.setProperty("--why-sticky-height", `${Math.round(whySticky.offsetHeight)}px`);
          whySection.style.setProperty("--why-release-left", `${Math.round(whySticky.offsetLeft)}px`);
          whySection.style.setProperty("--why-release-top", `${Math.round(releaseTop)}px`);
          const hasEntered = sectionRect.top <= 0;
          const cardsFinished = gridRect.bottom <= viewport * 0.92 || sectionRect.bottom <= viewport;
          whySection.classList.toggle("is-why-pinned", hasEntered && !cardsFinished);
          whySection.classList.toggle("is-why-released", hasEntered && cardsFinished);
        } else {
          whySection.classList.remove("is-why-pinned", "is-why-released");
        }
        whyCards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const local = clamp01((viewport * 0.84 - rect.top) / (viewport * 0.34));
                const eased = 1 - Math.pow(1 - local, 3);
                card.style.setProperty("--why-show", eased.toFixed(4));
                card.style.setProperty("--why-y", `${Math.round((1 - eased) * 92)}px`);
                card.style.setProperty("--why-scale", (0.97 + eased * 0.03).toFixed(4));
                card.classList.toggle("is-active", eased > 0.55);
              });
      };
      const requestWhyUpdate = () => {
        if (whyTicking) return;
        whyTicking = true;
        window.requestAnimationFrame(updateWhyCards);
      };
      updateWhyCards();
      window.addEventListener("scroll", requestWhyUpdate, { passive: true });
      window.addEventListener("resize", requestWhyUpdate, { passive: true });
    }
  }

  let contactRailScrollBound = false;

  function setContactRailProgress(card) {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight || 1;
    const raw = (viewport * 0.95 - rect.top) / (viewport * 0.45);
    const progress = Math.min(Math.max(raw, 0), 1);
    card.style.setProperty("--contact-rail-progress", progress.toFixed(4));
  }

  function updateContactRails(root = document) {
    root.querySelectorAll?.(".ultra-contact-process-card").forEach(setContactRailProgress);
  }

  function initContactPage(root) {
    if (!root.querySelector(".ultra-contact-process-card")) return;
    updateContactRails(root);
    if (!contactRailScrollBound) {
      contactRailScrollBound = true;
      window.addEventListener("scroll", () => updateContactRails(document), { passive: true });
      window.addEventListener("resize", () => updateContactRails(document), { passive: true });
    }
  }

  let activeCaseModalId = "";
  let skipNextCasesIntro = false;
  let suppressNextCaseModalPopRender = false;

  function renderAppPage(path, lang) {
    applyLocaleAttributes(lang);
    applyDocumentMeta(path, lang);
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const pathCaseId = path.startsWith("/cases/") ? path.split("/").pop() : "";
    const modalCaseId = history.state?.ultraCaseModal && activeCaseModalId && activeCaseModalId === pathCaseId ? pathCaseId : "";
    const introKey = modalCaseId ? "/cases" : path.startsWith("/cases/") ? path : path.split("#")[0];
    const skipIntro = Boolean(modalCaseId) || (skipNextCasesIntro && path === "/cases");
    skipNextCasesIntro = false;
    const playIntro = path !== "/admin" && !skipIntro && !reduced && document.body.dataset.pageIntroPath !== introKey;
    if (playIntro) {
      resetIntroForRoute();
    }
    let root = document.getElementById("ultra-app");
    if (!root) {
      root = document.createElement("div");
      root.id = "ultra-app";
      document.body.appendChild(root);
    }
    document.documentElement.classList.remove("ultra-home-active");
    document.documentElement.classList.add("ultra-app-active");
    if (path === "/admin") {
      root.innerHTML = `<div class="ultra-site ultra-admin-site"><main class="ultra-main ultra-admin-main">${routeContent(path, lang)}</main></div>`;
    } else if (modalCaseId) {
      root.innerHTML = `<div class="ultra-site">${navHTML(lang, "/cases")}<main class="ultra-main">${routeContent("/cases", lang)}</main>${footerHTML(lang)}${caseModalHTML(lang, modalCaseId)}</div>`;
    } else if (path.startsWith("/cases/")) {
      root.innerHTML = `<div class="ultra-site ultra-case-detail-site">${navHTML(lang, path)}<main class="ultra-main ultra-case-detail-main">${routeContent(path, lang)}</main></div>`;
    } else {
      const siteClass = path === "/services" ? "ultra-site ultra-services-site" : path === "/contact" ? "ultra-site ultra-contact-site" : "ultra-site";
      root.innerHTML = `<div class="${siteClass}">${navHTML(lang, path)}<main class="ultra-main">${routeContent(path, lang)}</main>${footerHTML(lang)}</div>`;
    }
    if (!modalCaseId) {
      root.querySelectorAll(".ultra-main > .ultra-hero, .ultra-main > .ultra-section, .ultra-main > .cases-page .ultra-section, .ultra-bottom-cta, .ultra-footer").forEach((node, index) => {
        node.setAttribute("data-animate", "");
        node.style.animationDelay = `${Math.min(index * 90, 360)}ms`;
      });
    }
    triggerNavIntroOnce();
    if (!modalCaseId) applyPageIntro(root, path);
    if (playIntro) {
      window.requestAnimationFrame(() => {
        document.body.classList.remove("is-intro-reset");
        document.body.classList.add("is-ready");
        document.body.dataset.pageIntroPath = introKey;
      });
    } else {
      document.body.classList.remove("is-intro-reset");
      document.body.classList.add("is-ready");
      document.body.dataset.pageIntroPath = introKey;
    }
    initAboutPage(root);
    initUltraTypeReveal(root);
    initServicesPage(root);
    initContactPage(root);
    initCasesMasonry(root);
    initCaseDetail(root);
    maybeRefreshContentBackedLogos(root);
    if (window.location.hash) scrollToHashTarget(window.location.hash, "auto");
  }

  let casesMasonryResizeBound = false;
  let casesMasonryFrame = 0;
  let caseDetailResizeBound = false;
  let caseDetailAlignFrame = 0;

  function alignCaseDetailEsc(root = document) {
    const esc = root.querySelector?.(".ultra-case-esc") || document.querySelector(".ultra-case-esc");
    const anchor = root.querySelector?.(".ultra-case-detail.is-modal .ultra-case-detail-copy") || document.querySelector(".ultra-case-detail.is-modal .ultra-case-detail-copy");
    if (!esc || !anchor) return;
    const left = Math.max(18, Math.floor(anchor.getBoundingClientRect().left));
    esc.style.left = `${left}px`;
  }

  function initCaseDetail(root) {
    alignCaseDetailEsc(root);
    window.requestAnimationFrame(() => alignCaseDetailEsc(root));
    if (!caseDetailResizeBound) {
      caseDetailResizeBound = true;
      window.addEventListener("resize", () => {
        window.cancelAnimationFrame(caseDetailAlignFrame);
        caseDetailAlignFrame = window.requestAnimationFrame(() => alignCaseDetailEsc(document));
      }, { passive: true });
    }
  }

  function scheduleCasesMasonry(root = document) {
    cancelAnimationFrame(casesMasonryFrame);
    casesMasonryFrame = requestAnimationFrame(() => resizeCasesMasonry(root));
  }

  function resizeCasesMasonry(root = document) {
    const grids = root.matches?.("[data-case-grid]") ? [root] : [...root.querySelectorAll("[data-case-grid]")];
    grids.forEach(grid => {
      if (!grid.closest(".ultra-cases-index")) return;
      const style = getComputedStyle(grid);
      const gap = parseFloat(style.getPropertyValue("--case-feed-gap")) || 5;
      const columns = window.matchMedia("(max-width: 640px)").matches ? 1 : window.matchMedia("(max-width: 900px)").matches ? 2 : 3;
      const width = grid.clientWidth;
      const columnWidth = (width - gap * (columns - 1)) / columns;
      const columnHeights = Array(columns).fill(0);
      grid.querySelectorAll("[data-case-item]").forEach(item => {
        if (item.classList.contains("is-hidden")) {
          item.style.width = "";
          item.style.transform = "";
          return;
        }
        const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        const x = columnIndex * (columnWidth + gap);
        const y = columnHeights[columnIndex];
        item.style.width = `${columnWidth}px`;
        item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        const card = item.querySelector(".ultra-case-card");
        const height = card?.getBoundingClientRect().height || item.scrollHeight || item.getBoundingClientRect().height;
        columnHeights[columnIndex] = y + height + gap;
      });
      grid.style.height = `${Math.max(0, ...columnHeights) ? Math.max(0, ...columnHeights) - gap : 0}px`;
    });
  }

  function initCasesMasonry(root) {
    if (!root.querySelector(".ultra-cases-index [data-case-grid]")) return;
    root.querySelectorAll(".ultra-cases-index img").forEach(img => {
      if (img.complete) return;
      img.addEventListener("load", () => scheduleCasesMasonry(root), { once: true });
      img.addEventListener("error", () => scheduleCasesMasonry(root), { once: true });
    });
    scheduleCasesMasonry(root);
    setTimeout(() => scheduleCasesMasonry(root), 350);
    if (!casesMasonryResizeBound) {
      casesMasonryResizeBound = true;
      window.addEventListener("resize", () => scheduleCasesMasonry(document), { passive: true });
    }
  }

  function enhanceHome(lang) {
    applyLocaleAttributes(lang);
    applyDocumentMeta("/", lang);
    if (serviceRasterCleanup) {
      serviceRasterCleanup();
      serviceRasterCleanup = null;
    }
    document.documentElement.classList.remove("ultra-app-active");
    document.documentElement.classList.add("ultra-home-active");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const playIntro = !reduced && document.body.dataset.pageIntroPath !== "/";
    if (playIntro) resetIntroForRoute();
    const root = document.getElementById("ultra-app");
    if (root) root.innerHTML = `<div class="ultra-site ultra-home-shell">${navHTML(lang, "/")}</div>`;
    triggerNavIntroOnce();
    const container = document.getElementById("container");
    if (container) {
      container.innerHTML = "";
      renderHomeContent(container, lang);
    }
    if (playIntro) {
      window.requestAnimationFrame(() => {
        document.body.classList.remove("is-intro-reset");
        document.body.classList.add("is-ready");
        document.body.dataset.pageIntroPath = "/";
      });
    } else {
      document.body.classList.remove("is-intro-reset");
      document.body.classList.add("is-ready");
      document.body.dataset.pageIntroPath = "/";
    }
    const switcher = document.querySelector(".ultra-home-lang");
    if (switcher) switcher.remove();
  }

  function render() {
    const lang = locale();
    const path = currentPath();
    if (path === "/") {
      enhanceHome(lang);
      return;
    }
    if (typeof homeClientMarqueeStop === "function") {
      homeClientMarqueeStop();
      homeClientMarqueeStop = null;
    }
    window.UltraHomeRasterBackground?.destroy?.();
    document.documentElement.classList.remove("ultra-home-active");
    const switcher = document.querySelector(".ultra-home-lang");
    if (switcher) switcher.remove();
    renderAppPage(path, lang);
  }

  function updateFilters(field, value) {
    const state = filterState();
    state[field] = value;
    if (["brand", "industry", "region", "area"].includes(field)) state.more = true;
    setCaseFilterQuery(state);
  }

  function setCaseFilterQuery(state) {
    const params = new URLSearchParams();
    ["year", "brand", "industry", "region", "area"].forEach(key => {
      const val = state[key];
      if (val && val !== "All") params.set(key, val);
    });
    if (state.more) params.set("more", "1");
    const query = params.toString();
    history.replaceState({}, "", `${routeLink("/cases")}${query ? "?" + query : ""}`);
    render();
  }

  function setCaseModal(id) {
    const params = new URLSearchParams(window.location.search);
    if (id) {
      activeCaseModalId = id;
      history.pushState({ ultraCaseModal: true }, "", routeLink(`/cases/${id}`));
      render();
      return;
    }
    const close = () => {
      activeCaseModalId = "";
      skipNextCasesIntro = true;
      params.delete("case");
      const query = params.toString();
      if (history.state?.ultraCaseModal) {
        suppressNextCaseModalPopRender = true;
        modal?.remove();
        history.back();
        return;
      }
      modal?.remove();
      history.replaceState({}, "", `${routeLink("/cases")}${query ? "?" + query : ""}`);
    };
    const modal = document.querySelector("[data-case-modal]");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (!modal || modal.classList.contains("is-closing") || reduced) {
      close();
      return;
    }
    modal.classList.add("is-closing");
    window.setTimeout(close, 220);
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
    const brandsItems = parseAdminTextarea(form, "brands.items", null);
    if (brandsItems !== null && !Array.isArray(brandsItems)) throw new Error("brands.items must be a JSON array or null.");
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
      brands: {
        items: brandsItems
      },
      cases: {
        items: casesItems
      }
    };
  }

  function saveAdminSection(config, view, message = "Saved.") {
    setAdminActiveView(view);
    saveAdminConfig(config);
    render();
    setAdminStatus(document, message);
  }

  function setAdminImageFieldValue(form, name, url) {
    const input = form?.elements[name];
    if (!input) return;
    input.value = url || "";
    const field = input.closest("[data-admin-image-field]");
    const preview = field?.querySelector("[data-admin-image-preview]");
    if (!preview) return;
    preview.classList.toggle("has-image", Boolean(url));
    preview.innerHTML = url ? `<img src="${esc(adminPreviewSrc(url))}" alt="">` : "<span>No image</span>";
  }

  function adminGalleryUrls(field) {
    try {
      const hidden = field?.querySelector('input[name="galleryUrls"]');
      const parsed = JSON.parse(hidden?.value || "[]");
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
      return [];
    }
  }

  function setAdminGalleryUrls(field, urls) {
    const clean = urls.filter(Boolean);
    const hidden = field?.querySelector('input[name="galleryUrls"]');
    const list = field?.querySelector("[data-admin-gallery-list]");
    if (hidden) hidden.value = JSON.stringify(clean);
    if (list) list.innerHTML = clean.map((url, index) => adminGalleryItem(url, index, clean.length)).join("");
  }

  function openAdminConfirm(title, message, onConfirm) {
    adminPendingConfirm = onConfirm;
    document.querySelector("[data-admin-confirm-modal]")?.remove();
    const modal = document.createElement("div");
    modal.className = "ultra-admin-confirm";
    modal.setAttribute("data-admin-confirm-modal", "");
    modal.innerHTML = `
      <div class="ultra-admin-confirm-card" role="dialog" aria-modal="true" aria-label="${esc(title)}">
        <span>Confirm Action</span>
        <h2>${esc(title)}</h2>
        <p>${esc(message)}</p>
        <div class="ultra-admin-confirm-actions">
          <button type="button" data-admin-confirm-cancel>Cancel</button>
          <button type="button" class="is-danger" data-admin-confirm-accept>Delete</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.documentElement.classList.add("ultra-admin-modal-open");
  }

  function closeAdminConfirm() {
    document.querySelector("[data-admin-confirm-modal]")?.remove();
    adminPendingConfirm = null;
    if (!document.querySelector("[data-admin-brand-form].is-open, [data-admin-case-form].is-open")) {
      document.documentElement.classList.remove("ultra-admin-modal-open");
    }
  }

  function resetAdminBrandForm() {
    const form = document.querySelector("[data-admin-brand-form]");
    if (!form) return;
    form.reset();
    form.elements.id.value = "";
    form.querySelector("[data-admin-brand-form-title]").textContent = "New Brand";
    setAdminImageFieldValue(form, "originalLogoUrl", "");
    setAdminImageFieldValue(form, "grayLogoUrl", "");
    openAdminBrandModal();
  }

  function fillAdminBrandForm(id) {
    const item = adminBrands().find(brand => brand.id === id);
    const form = document.querySelector("[data-admin-brand-form]");
    if (!item || !form) return;
    form.elements.id.value = item.id || "";
    form.elements.chineseName.value = item.chineseName || "";
    form.elements.englishName.value = item.englishName || "";
    form.elements.isFeaturedBrand.checked = Boolean(item.isFeaturedBrand);
    setAdminImageFieldValue(form, "originalLogoUrl", adminFileUrl(item.originalLogo));
    setAdminImageFieldValue(form, "grayLogoUrl", adminFileUrl(item.grayLogo));
    form.querySelector("[data-admin-brand-form-title]").textContent = "Edit Brand";
    openAdminBrandModal();
  }

  function openAdminBrandModal() {
    const form = document.querySelector("[data-admin-brand-form]");
    if (!form) return;
    form.classList.add("is-open");
    document.documentElement.classList.add("ultra-admin-modal-open");
  }

  function closeAdminBrandModal() {
    const form = document.querySelector("[data-admin-brand-form]");
    form?.classList.remove("is-open");
    if (!document.querySelector("[data-admin-confirm-modal], [data-admin-case-form].is-open")) {
      document.documentElement.classList.remove("ultra-admin-modal-open");
    }
  }

  function collectAdminBrand(form) {
    const id = form.elements.id.value || adminSlug(form.elements.englishName.value || form.elements.chineseName.value, "brand");
    const current = adminBrands().find(item => item.id === id) || {};
    return {
      ...current,
      id,
      chineseName: form.elements.chineseName.value.trim(),
      englishName: form.elements.englishName.value.trim(),
      originalLogo: adminImageValue(form.elements.originalLogoUrl.value, `${id}-color-logo`),
      grayLogo: adminImageValue(form.elements.grayLogoUrl.value, `${id}-gray-logo`),
      isFeaturedBrand: Boolean(form.elements.isFeaturedBrand.checked),
      isOnline: current.isOnline !== false,
      brandOrder: current.brandOrder ?? adminBrands().length + 1
    };
  }

  function resetAdminCaseForm() {
    const form = document.querySelector("[data-admin-case-form]");
    if (!form) return;
    form.reset();
    form.elements.id.value = "";
    const today = new Date().toISOString().slice(0, 10);
    form.elements.dateStart.value = today;
    form.elements.dateEnd.value = today;
    form.querySelector("[data-admin-case-form-title]").textContent = "New Case";
    setAdminImageFieldValue(form, "coverImageUrl", "");
    setAdminGalleryUrls(form.querySelector("[data-admin-gallery-field]"), []);
    openAdminCaseModal();
  }

  function fillAdminCaseForm(id) {
    const item = adminCases().find(entry => entry.id === id);
    const form = document.querySelector("[data-admin-case-form]");
    if (!item || !form) return;
    form.elements.id.value = item.id || "";
    form.elements.brandId.value = item.brandId || "";
    form.elements.exhibitionName.value = item.exhibitionName || "";
    const range = caseDateRange(item);
    form.elements.dateStart.value = range.dateStart || (item.year ? `${item.year}-01-01` : "");
    form.elements.dateEnd.value = range.dateEnd || range.dateStart || (item.year ? `${item.year}-01-01` : "");
    form.elements.area.value = item.area || (item.areaSqm ? `${item.areaSqm} sqm` : "");
    form.elements.industry.value = item.industry || "";
    form.elements.country.value = item.country || "";
    form.elements.chineseIntro.value = item.chineseIntro || "";
    form.elements.englishIntro.value = item.englishIntro || "";
    form.elements.isFeaturedCase.checked = Boolean(item.isFeaturedCase);
    setAdminImageFieldValue(form, "coverImageUrl", adminFileUrl(item.coverImage));
    setAdminGalleryUrls(form.querySelector("[data-admin-gallery-field]"), adminFileUrls(item.galleryImages));
    form.querySelector("[data-admin-case-form-title]").textContent = "Edit Case";
    openAdminCaseModal();
  }

  function openAdminCaseModal() {
    const form = document.querySelector("[data-admin-case-form]");
    if (!form) return;
    form.classList.add("is-open");
    document.documentElement.classList.add("ultra-admin-modal-open");
  }

  function closeAdminCaseModal() {
    const form = document.querySelector("[data-admin-case-form]");
    form?.classList.remove("is-open");
    document.documentElement.classList.remove("ultra-admin-modal-open");
  }

  function collectAdminCase(form) {
    const exhibitionName = form.elements.exhibitionName.value.trim();
    const brand = adminBrandById(form.elements.brandId.value);
    const dateStart = form.elements.dateStart.value;
    const dateEnd = form.elements.dateEnd.value || dateStart;
    const year = caseDateParts(dateStart)?.year || "";
    const id = form.elements.id.value || adminSlug([brand?.englishName, exhibitionName, year].filter(Boolean).join("-"), "case");
    const current = adminCases().find(item => item.id === id) || {};
    const areaText = form.elements.area.value.trim();
    const areaNumber = Number((areaText.match(/\d+(?:\.\d+)?/) || [])[0]);
    const galleryUrls = JSON.parse(form.elements.galleryUrls.value || "[]");
    return {
      ...current,
      id,
      title: [brand?.englishName, exhibitionName, year].filter(Boolean).join(" · "),
      brandId: form.elements.brandId.value,
      brandEnglishName: brand?.englishName || current.brandEnglishName || "",
      exhibitionName,
      dateStart,
      dateEnd,
      year: Number(year) || null,
      area: areaText,
      areaSqm: Number.isFinite(areaNumber) ? areaNumber : current.areaSqm ?? null,
      industry: form.elements.industry.value.trim(),
      country: form.elements.country.value.trim(),
      chineseIntro: form.elements.chineseIntro.value.trim(),
      englishIntro: form.elements.englishIntro.value.trim(),
      coverImage: adminImageValue(form.elements.coverImageUrl.value, `${id}-cover`),
      galleryImages: { files: galleryUrls.map((url, index) => adminFileObject(url, `${id}-gallery-${index + 1}`)).filter(Boolean) },
      isFeaturedCase: Boolean(form.elements.isFeaturedCase.checked),
      isOnline: current.isOnline !== false,
      casePageOrder: current.casePageOrder ?? adminCases().length + 1
    };
  }

  function applyAdminBrandSearch() {
    const query = (document.querySelector("[data-admin-brand-search]")?.value || "").trim().toLowerCase();
    document.querySelectorAll("[data-admin-brand-row]").forEach(row => {
      row.hidden = query && !row.dataset.search.includes(query);
    });
  }

  function applyAdminCaseFilters() {
    const query = (document.querySelector("[data-admin-case-search]")?.value || "").trim().toLowerCase();
    const filters = {};
    document.querySelectorAll("[data-admin-case-filter]").forEach(input => {
      filters[input.dataset.adminCaseFilter] = input.value;
    });
    document.querySelectorAll("[data-admin-case-row]").forEach(row => {
      const visible = (!query || row.dataset.search.includes(query)) &&
        (!filters.year || row.dataset.year === filters.year) &&
        (!filters.brand || row.dataset.brand === filters.brand) &&
        (!filters.industry || row.dataset.industry === filters.industry) &&
        (!filters.country || row.dataset.country === filters.country) &&
        (!filters.featured || row.dataset.featured === filters.featured);
      row.hidden = !visible;
    });
  }

  function adminContactMessages() {
    const config = getAdminConfig();
    return Array.isArray(config.contactMessages?.items) ? config.contactMessages.items : [];
  }

  function contactMessageStatuses(selected = "new") {
    return [
      { value: "new", label: "New" },
      { value: "contacted", label: "Contacted" },
      { value: "quoted", label: "Quoted" },
      { value: "closed", label: "Closed" },
      { value: "spam", label: "Spam" }
    ].map(item => `<option value="${esc(item.value)}" ${item.value === selected ? "selected" : ""}>${esc(item.label)}</option>`).join("");
  }

  function formatAdminDate(value) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(undefined, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  function applyAdminMessageFilters() {
    const query = (document.querySelector("[data-admin-message-search]")?.value || "").trim().toLowerCase();
    const status = document.querySelector("[data-admin-message-filter='status']")?.value || "";
    document.querySelectorAll("[data-admin-message-row]").forEach(row => {
      row.hidden = Boolean((query && !row.dataset.search.includes(query)) || (status && row.dataset.status !== status));
    });
  }

  function adminMessageById(id) {
    return adminContactMessages().find(item => item.id === id);
  }

  function fillAdminMessageDetail(id) {
    const target = document.querySelector("[data-admin-message-detail]");
    const item = adminMessageById(id);
    if (!target || !item) return;
    document.querySelectorAll("[data-admin-message-row]").forEach(row => row.classList.toggle("is-active", row.dataset.messageId === id));
    const detailRows = [
      ["Submitted", formatAdminDate(item.createdAt)],
      ["Name", item.name],
      ["Company", item.company],
      ["Contact", item.contact],
      ["Inquiry Type", item.inquiryType],
      ["Event Name", item.eventName],
      ["Country / Region", item.countryRegion],
      ["Expected Date", item.expectedDate],
      ["Booth Area", item.boothArea],
      ["Budget Range", item.budgetRange],
      ["Language", item.language],
      ["Source Page", item.sourcePage]
    ].filter(row => row[1]);
    target.innerHTML = `
      <form data-admin-message-detail-form>
        <input type="hidden" name="id" value="${esc(item.id)}">
        <div class="ultra-admin-form-head">
          <h2>${esc(item.company || item.name || "Contact message")}</h2>
          <p>${esc(formatAdminDate(item.createdAt))}</p>
        </div>
        <div class="ultra-admin-message-meta">
          ${detailRows.map(row => `<div><span>${esc(row[0])}</span><strong>${esc(row[1])}</strong></div>`).join("")}
        </div>
        <div class="ultra-admin-message-body">
          <span>Message</span>
          <p>${esc(item.message || "-")}</p>
        </div>
        <div class="ultra-admin-form-grid">
          <label class="ultra-admin-field"><span>Status</span><select name="status">${contactMessageStatuses(item.status || "new")}</select></label>
          ${adminTextArea("internalNote", "Internal Note", item.internalNote || "")}
        </div>
        <div class="ultra-admin-form-actions"><button type="submit" class="ultra-admin-primary">Save Message</button></div>
      </form>
    `;
  }

  function saveAdminMessageDetail(form) {
    const id = form.elements.id.value;
    const config = getAdminConfig();
    const items = adminContactMessages().map(item => item.id === id ? {
      ...item,
      status: form.elements.status.value,
      internalNote: form.elements.internalNote.value.trim(),
      updatedAt: new Date().toISOString()
    } : item);
    saveAdminSection({ ...config, contactMessages: { items } }, "messages", "Message saved.");
  }

  function contactSubmitTooFast() {
    const key = "ultra-contact-submit-times-v1";
    const now = Date.now();
    let times = [];
    try {
      times = JSON.parse(localStorage.getItem(key) || "[]").filter(value => now - Number(value) < 60000);
    } catch {
      times = [];
    }
    if (times.length >= 3) return true;
    times.push(now);
    localStorage.setItem(key, JSON.stringify(times));
    return false;
  }

  function setContactFieldError(form, name, message) {
    const error = form.querySelector(`[data-field-error="${CSS.escape(name)}"]`);
    const field = form.elements[name]?.closest(".ultra-contact-field");
    if (error) error.textContent = message || "";
    field?.classList.toggle("has-error", Boolean(message));
  }

  function setContactFeedback(form, type, message) {
    const feedback = form.querySelector("[data-form-feedback]");
    if (!feedback) return;
    feedback.hidden = false;
    feedback.className = `ultra-contact-feedback is-${type}`;
    feedback.innerHTML = message;
  }

  function collectContactMessage(form) {
    const value = name => String(form.elements[name]?.value || "").trim();
    const now = new Date().toISOString();
    return {
      id: `msg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now,
      updatedAt: now,
      name: value("name"),
      company: value("company"),
      contact: value("contact"),
      inquiryType: value("inquiryType"),
      message: value("message"),
      eventName: value("eventName"),
      countryRegion: value("countryRegion"),
      expectedDate: value("expectedDate"),
      boothArea: value("boothArea"),
      budgetRange: value("budgetRange"),
      sourcePage: "contact",
      language: locale(),
      status: "new",
      internalNote: "",
      userAgent: navigator.userAgent
    };
  }

  function validateContactForm(form) {
    const lang = locale();
    const zh = lang === "zh";
    const required = ["name", "company", "contact", "inquiryType", "message"];
    let valid = true;
    required.forEach(name => {
      const value = String(form.elements[name]?.value || "").trim();
      const message = value ? "" : (zh ? "请填写此项。" : "Please complete this field.");
      setContactFieldError(form, name, message);
      if (message) valid = false;
    });
    return valid;
  }

  async function handleContactSubmit(form) {
    const zh = locale() === "zh";
    const button = form.querySelector("[data-contact-submit]");
    const originalText = button?.getAttribute("aria-label") || button?.textContent || "Send Inquiry";
    form.querySelector("[data-form-feedback]")?.setAttribute("hidden", "");
    if (String(form.elements.website?.value || "").trim()) {
      setContactFeedback(form, "success", `<strong>${zh ? "已收到你的咨询，我们会尽快与你联系。" : "Thanks, your inquiry has been received."}</strong>`);
      return;
    }
    if (!validateContactForm(form)) return;
    if (contactSubmitTooFast()) {
      setContactFeedback(form, "error", `<strong>${zh ? "提交过于频繁，请稍后再试，或通过页面中的邮箱 / 电话直接联系我们。" : "Too many attempts. Please try again later or contact us by email / phone."}</strong>`);
      return;
    }
    try {
      if (button) {
        button.disabled = true;
        button.textContent = zh ? "提交中..." : "Sending...";
      }
      await new Promise(resolve => setTimeout(resolve, 420));
      const config = getAdminConfig();
      const items = [collectContactMessage(form), ...adminContactMessages()];
      saveAdminConfig({ ...config, contactMessages: { items } });
      setContactFeedback(form, "success", `<strong>${zh ? "已收到你的咨询，我们会尽快与你联系。" : "Thanks, your inquiry has been received."}</strong><span>${zh ? "留言已进入后台存档，方便后续跟进管理。" : "Your message has been saved for follow-up."}</span>`);
      form.reset();
      form.querySelectorAll(".ultra-contact-type-card.is-active").forEach(card => card.classList.remove("is-active"));
    } catch (error) {
      console.warn("Contact submit failed", error);
      setContactFeedback(form, "error", `<strong>${zh ? "提交失败，请稍后再试，或通过页面中的邮箱 / 电话直接联系我们。" : "Submission failed. Please try again later or contact us by email / phone."}</strong>`);
    } finally {
      if (button) {
        button.disabled = false;
        button.setAttribute("aria-label", originalText);
        button.innerHTML = rollingButtonText(originalText);
      }
    }
  }

  function collectAdminContact(form) {
    const entries = [];
    form.querySelectorAll(".ultra-admin-repeater-row").forEach((row, index) => {
      const labelZh = form.elements[`footerLabelZh${index}`]?.value.trim() || "";
      const labelEn = form.elements[`footerLabelEn${index}`]?.value.trim() || "";
      const value = form.elements[`footerValue${index}`]?.value.trim() || "";
      if (labelZh || labelEn || value) entries.push({ labelZh, labelEn, value });
    });
    return {
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      whatsapp: form.elements.whatsapp.value.trim(),
      wechat: form.elements.wechat.value.trim(),
      addressZh: form.elements.addressZh.value.trim(),
      addressEn: form.elements.addressEn.value.trim(),
      footerEntries: entries
    };
  }

  function collectAdminAbout(form) {
    const current = getAdminConfig().about || {};
    const baseMedia = Array.isArray(current.serviceMedia) ? current.serviceMedia : defaultAdminConfig().about.serviceMedia;
    let parsed;
    if (form.elements.serviceMedia0) {
      parsed = ["STRATEGY", "DESIGN", "ABROAD", "BUILD"].map((title, index) => ({
        title,
        type: "image",
        url: String(form.elements[`serviceMedia${index}`]?.value || "").trim(),
        poster: "",
        alt: `${title} service media`
      }));
    } else {
      const raw = String(form.elements.serviceMedia?.value || "").trim();
      parsed = raw ? JSON.parse(raw) : baseMedia;
      if (!Array.isArray(parsed)) throw new Error("serviceMedia must be a JSON array.");
    }
    const rawLogos = String(form.elements.exhibitionLogos?.value || "").trim();
    const parsedLogos = rawLogos ? JSON.parse(rawLogos) : defaultExhibitionLogos();
    if (!Array.isArray(parsedLogos)) throw new Error("exhibitionLogos must be a JSON array.");
    return {
      serviceMedia: parsed.slice(0, 4).map((item, index) => ({
        title: String(item?.title || ["STRATEGY", "DESIGN", "ABROAD", "BUILD"][index] || `CARD ${index + 1}`),
        type: String(item?.type || "image").toLowerCase() === "video" ? "video" : "image",
        url: String(item?.url || "").trim(),
        poster: String(item?.poster || "").trim(),
        alt: String(item?.alt || item?.title || "").trim()
      })),
      exhibitionLogos: parsedLogos.map((item, index) => {
        const name = String(item?.name || "").trim();
        if (!name) throw new Error(`exhibitionLogos[${index}].name is required.`);
        return {
          id: String(item?.id || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")),
          name,
          logo: String(item?.logo || "").trim(),
          order: Number.isFinite(Number(item?.order)) ? Number(item.order) : index + 1,
          visible: item?.visible !== false
        };
      })
    };
  }

  function collectAdminSettings(form) {
    return {
      siteNameZh: form.elements.siteNameZh.value.trim(),
      siteNameEn: form.elements.siteNameEn.value.trim(),
      logo: form.elements.logo.value,
      favicon: form.elements.favicon.value,
      defaultLanguage: form.elements.defaultLanguage.value,
      notionToken: form.elements.notionToken.value,
      notionBrandsDatabaseId: form.elements.notionBrandsDatabaseId.value.trim(),
      notionCasesDatabaseId: form.elements.notionCasesDatabaseId.value.trim(),
      ossRegion: form.elements.ossRegion.value.trim(),
      ossBucket: form.elements.ossBucket.value.trim(),
      ossAccessKeyId: form.elements.ossAccessKeyId.value,
      ossAccessKeySecret: form.elements.ossAccessKeySecret.value,
      ossCdnDomain: form.elements.ossCdnDomain.value.trim()
    };
  }

  document.addEventListener("click", event => {
    const contactScroll = event.target.closest("[data-contact-scroll]");
    if (contactScroll) {
      event.preventDefault();
      document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const inquiryCard = event.target.closest("[data-inquiry-type]");
    if (inquiryCard) {
      event.preventDefault();
      document.querySelectorAll("[data-inquiry-type]").forEach(card => card.classList.toggle("is-active", card === inquiryCard));
      const form = document.querySelector("[data-contact-form]");
      if (form?.elements.inquiryType) {
        form.elements.inquiryType.value = inquiryCard.dataset.inquiryType || "";
        setContactFieldError(form, "inquiryType", "");
        document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    const messageRow = event.target.closest("[data-admin-message-row]");
    if (messageRow) {
      event.preventDefault();
      fillAdminMessageDetail(messageRow.dataset.messageId);
      return;
    }

    if (event.target.closest("[data-admin-confirm-cancel]")) {
      event.preventDefault();
      closeAdminConfirm();
      return;
    }

    if (event.target.closest("[data-admin-confirm-accept]")) {
      event.preventDefault();
      const action = adminPendingConfirm;
      closeAdminConfirm();
      if (typeof action === "function") action();
      return;
    }

    const sectionButton = event.target.closest("[data-admin-section]");
    if (sectionButton) {
      event.preventDefault();
      const view = sectionButton.dataset.adminSection;
      setAdminActiveView(view);
      document.querySelectorAll("[data-admin-section]").forEach(button => button.classList.toggle("is-active", button === sectionButton));
      document.querySelectorAll("[data-admin-view]").forEach(panel => panel.classList.toggle("is-active", panel.dataset.adminView === view));
      return;
    }

    if (event.target.closest("[data-admin-brand-new]")) {
      event.preventDefault();
      resetAdminBrandForm();
      return;
    }

    if (event.target.closest("[data-admin-brand-cancel]")) {
      event.preventDefault();
      closeAdminBrandModal();
      return;
    }

    const editBrand = event.target.closest("[data-admin-edit-brand]");
    if (editBrand) {
      event.preventDefault();
      fillAdminBrandForm(editBrand.dataset.adminEditBrand);
      return;
    }

    const toggleBrand = event.target.closest("[data-admin-toggle-brand]");
    if (toggleBrand) {
      event.preventDefault();
      const id = toggleBrand.dataset.adminToggleBrand;
      const config = getAdminConfig();
      const brands = adminBrands().map(item => item.id === id ? { ...item, isFeaturedBrand: !item.isFeaturedBrand } : item);
      saveAdminSection({ ...config, brands: { items: brands } }, "brands", "Brand star updated.");
      return;
    }

    const deleteBrand = event.target.closest("[data-admin-delete-brand]");
    if (deleteBrand) {
      event.preventDefault();
      const id = deleteBrand.dataset.adminDeleteBrand;
      openAdminConfirm("Delete brand?", "This brand will be removed from the local mock data.", () => {
        const config = getAdminConfig();
        saveAdminSection({ ...config, brands: { items: adminBrands().map(item => item.id === id ? { ...item, isOnline: false } : item) } }, "brands", "Brand deleted.");
      });
      return;
    }

    if (event.target.closest("[data-admin-case-new]")) {
      event.preventDefault();
      resetAdminCaseForm();
      return;
    }

    if (event.target.closest("[data-admin-case-cancel]")) {
      event.preventDefault();
      closeAdminCaseModal();
      return;
    }

    const editCase = event.target.closest("[data-admin-edit-case]");
    if (editCase) {
      event.preventDefault();
      fillAdminCaseForm(editCase.dataset.adminEditCase);
      return;
    }

    const toggleCase = event.target.closest("[data-admin-toggle-case]");
    if (toggleCase) {
      event.preventDefault();
      const id = toggleCase.dataset.adminToggleCase;
      const config = getAdminConfig();
      const cases = adminCases().map(item => item.id === id ? { ...item, isFeaturedCase: !item.isFeaturedCase } : item);
      saveAdminSection({ ...config, cases: { items: cases } }, "cases", "Case star updated.");
      return;
    }

    const deleteCase = event.target.closest("[data-admin-delete-case]");
    if (deleteCase) {
      event.preventDefault();
      const id = deleteCase.dataset.adminDeleteCase;
      openAdminConfirm("Delete case?", "This case will be removed from the local mock data.", () => {
        const config = getAdminConfig();
        saveAdminSection({ ...config, cases: { items: adminCases().map(item => item.id === id ? { ...item, isOnline: false } : item) } }, "cases", "Case deleted.");
      });
      return;
    }

    const clearImage = event.target.closest("[data-admin-image-clear]");
    if (clearImage) {
      event.preventDefault();
      const field = clearImage.closest("[data-admin-image-field]");
      const input = field?.querySelector("input[type='hidden']");
      if (input) openAdminConfirm("Delete image?", "This image preview will be removed from the form.", () => setAdminImageFieldValue(input.form, input.name, ""));
      return;
    }

    const galleryDelete = event.target.closest("[data-admin-gallery-delete]");
    if (galleryDelete) {
      event.preventDefault();
      const field = galleryDelete.closest("[data-admin-gallery-field]");
      const item = galleryDelete.closest("[data-admin-gallery-item]");
      const index = Number(item?.dataset.adminGalleryItem);
      openAdminConfirm("Delete gallery image?", "This image will be removed from the gallery list.", () => {
        const urls = adminGalleryUrls(field);
        urls.splice(index, 1);
        setAdminGalleryUrls(field, urls);
      });
      return;
    }

    const galleryMove = event.target.closest("[data-admin-gallery-move]");
    if (galleryMove) {
      event.preventDefault();
      const field = galleryMove.closest("[data-admin-gallery-field]");
      const item = galleryMove.closest("[data-admin-gallery-item]");
      const index = Number(item?.dataset.adminGalleryItem);
      const urls = adminGalleryUrls(field);
      const next = galleryMove.dataset.adminGalleryMove === "up" ? index - 1 : index + 1;
      if (next < 0 || next >= urls.length) return;
      [urls[index], urls[next]] = [urls[next], urls[index]];
      setAdminGalleryUrls(field, urls);
      return;
    }

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
    const pendingFilterBtn = event.target.closest("[data-pending-filter]");
    if (pendingFilterBtn) {
      event.preventDefault();
      const group = pendingFilterBtn.closest(".ultra-filter-group");
      group?.querySelectorAll("[data-pending-filter]").forEach(button => button.classList.remove("is-active"));
      pendingFilterBtn.classList.add("is-active");
      return;
    }
    const moreFiltersBtn = event.target.closest("[data-more-filters]");
    if (moreFiltersBtn) {
      event.preventDefault();
      const root = moreFiltersBtn.closest("[data-case-filters]");
      const open = !root?.classList.contains("is-open");
      root?.classList.toggle("is-open", open);
      moreFiltersBtn.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    const applyFiltersBtn = event.target.closest("[data-apply-filters]");
    if (applyFiltersBtn) {
      event.preventDefault();
      const root = applyFiltersBtn.closest("[data-case-filters]");
      const next = { ...filterState(), more: true };
      root?.querySelectorAll("[data-pending-filter].is-active").forEach(button => {
        next[button.dataset.pendingFilter] = button.dataset.value || "All";
      });
      setCaseFilterQuery(next);
      return;
    }
    const loadMoreBtn = event.target.closest("[data-load-more]");
    if (loadMoreBtn) {
      event.preventDefault();
      const grid = loadMoreBtn.closest(".ultra-wrap")?.querySelector("[data-case-grid]");
      const hidden = [...(grid?.querySelectorAll("[data-case-item].is-hidden") || [])].slice(0, 24);
      hidden.forEach(node => node.classList.remove("is-hidden"));
      if (grid) scheduleCasesMasonry(grid);
      if (!grid?.querySelector("[data-case-item].is-hidden")) loadMoreBtn.remove();
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
    if (event.target.closest("[data-case-modal-close]")) {
      event.preventDefault();
      setCaseModal("");
      return;
    }
    const link = event.target.closest("a[data-route]");
    if (link) {
      const path = link.dataset.route;
      if (path) {
        event.preventDefault();
        if (currentPath() === "/cases" && path.startsWith("/cases/") && link.closest(".ultra-cases-index")) {
          setCaseModal(path.split("/").pop());
          return;
        }
        const targetHash = link.dataset.scrollTarget || (new URL(link.href, window.location.href)).hash.replace(/^#/, "");
        const current = currentPath();
        const nextIntroKey = path.startsWith("/cases/") ? path : path.split("#")[0];
        const shouldResetIntro = path !== "/admin" && current !== nextIntroKey;
        if (shouldResetIntro) resetIntroForRoute();
        if (!targetHash) window.scrollTo({ top: 0, behavior: "auto" });
        history.pushState({}, "", `${routeLink(path)}${targetHash ? `#${targetHash}` : ""}`);
        render();
        if (targetHash) {
          scrollToHashTarget(targetHash, "auto");
        }
      }
    }
  });

  document.addEventListener("input", event => {
    if (event.target.closest("[data-admin-brand-search]")) applyAdminBrandSearch();
    if (event.target.closest("[data-admin-case-search]")) applyAdminCaseFilters();
    if (event.target.closest("[data-admin-message-search]")) applyAdminMessageFilters();
    const contactInput = event.target.closest("[data-contact-form] input, [data-contact-form] textarea, [data-contact-form] select");
    if (contactInput?.name) {
      setContactFieldError(contactInput.form, contactInput.name, "");
    }
  });

  document.addEventListener("dragstart", event => {
    const item = event.target.closest("[data-admin-gallery-item]");
    if (!item) return;
    event.dataTransfer?.setData("text/plain", item.dataset.adminGalleryItem || "");
    event.dataTransfer?.setData("application/x-ultra-gallery", "1");
  });

  document.addEventListener("dragover", event => {
    if (event.target.closest("[data-admin-gallery-item]")) event.preventDefault();
  });

  document.addEventListener("drop", event => {
    const target = event.target.closest("[data-admin-gallery-item]");
    if (!target || event.dataTransfer?.getData("application/x-ultra-gallery") !== "1") return;
    event.preventDefault();
    const field = target.closest("[data-admin-gallery-field]");
    const from = Number(event.dataTransfer.getData("text/plain"));
    const to = Number(target.dataset.adminGalleryItem);
    const urls = adminGalleryUrls(field);
    if (!Number.isFinite(from) || !Number.isFinite(to) || from === to) return;
    const [moved] = urls.splice(from, 1);
    urls.splice(to, 0, moved);
    setAdminGalleryUrls(field, urls);
  });

  document.addEventListener("change", event => {
    if (event.target.closest("[data-admin-message-filter]")) {
      applyAdminMessageFilters();
      return;
    }

    if (event.target.closest("[data-admin-case-filter]")) {
      applyAdminCaseFilters();
      return;
    }

    const imageUpload = event.target.closest("[data-admin-image-upload]");
    if (imageUpload?.files?.length) {
      const file = imageUpload.files[0];
      const input = imageUpload.closest("[data-admin-image-field]")?.querySelector("input[type='hidden']");
      const reader = new FileReader();
      reader.onload = () => {
        if (input) setAdminImageFieldValue(input.form, input.name, String(reader.result || ""));
      };
      reader.readAsDataURL(file);
      imageUpload.value = "";
      return;
    }

    const galleryUpload = event.target.closest("[data-admin-gallery-upload]");
    if (galleryUpload?.files?.length) {
      const field = galleryUpload.closest("[data-admin-gallery-field]");
      const urls = adminGalleryUrls(field);
      [...galleryUpload.files].forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          urls.push(String(reader.result || ""));
          setAdminGalleryUrls(field, urls);
        };
        reader.readAsDataURL(file);
      });
      galleryUpload.value = "";
      return;
    }

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

    const adminBrandForm = event.target.closest("[data-admin-brand-form]");
    if (adminBrandForm) {
      event.preventDefault();
      const config = getAdminConfig();
      const item = collectAdminBrand(adminBrandForm);
      const others = adminBrands().filter(brand => brand.id !== item.id);
      closeAdminBrandModal();
      saveAdminSection({ ...config, brands: { items: [...others, item] } }, "brands", "Brand saved.");
      return;
    }

    const adminCaseForm = event.target.closest("[data-admin-case-form]");
    if (adminCaseForm) {
      event.preventDefault();
      const config = getAdminConfig();
      const item = collectAdminCase(adminCaseForm);
      const others = adminCases().filter(entry => entry.id !== item.id);
      closeAdminCaseModal();
      saveAdminSection({ ...config, cases: { items: [...others, item] } }, "cases", "Case saved.");
      return;
    }

    const adminContactForm = event.target.closest("[data-admin-contact-form]");
    if (adminContactForm) {
      event.preventDefault();
      const config = getAdminConfig();
      const contact = collectAdminContact(adminContactForm);
      const contactLinks = contact.footerEntries.map((entry, index) => ({
        key: `contact-${index + 1}`,
        labelZh: entry.labelZh,
        labelEn: entry.labelEn,
        href: entry.value,
        route: entry.value?.startsWith("/") ? entry.value : "",
        enabled: true
      }));
      saveAdminSection({ ...config, contact, footer: { ...config.footer, contactLinks } }, "contact", "Contact saved.");
      return;
    }

    const adminMessageDetailForm = event.target.closest("[data-admin-message-detail-form]");
    if (adminMessageDetailForm) {
      event.preventDefault();
      saveAdminMessageDetail(adminMessageDetailForm);
      return;
    }

    const adminAboutForm = event.target.closest("[data-admin-about-form]");
    if (adminAboutForm) {
      event.preventDefault();
      try {
        const config = getAdminConfig();
        saveAdminSection({ ...config, about: collectAdminAbout(adminAboutForm) }, "about", "About saved.");
      } catch (error) {
        setAdminStatus(document, "Save failed: " + error.message, true);
      }
      return;
    }

    const adminSettingsForm = event.target.closest("[data-admin-settings-form]");
    if (adminSettingsForm) {
      event.preventDefault();
      const config = getAdminConfig();
      const siteSettings = collectAdminSettings(adminSettingsForm);
      saveAdminSection({
        ...config,
        siteSettings,
        integrations: {
          ...config.integrations,
          notion: {
            ...config.integrations.notion,
            integrationToken: siteSettings.notionToken,
            brandsDatabaseId: siteSettings.notionBrandsDatabaseId,
            casesDatabaseId: siteSettings.notionCasesDatabaseId
          },
          aliyun: {
            ...config.integrations.aliyun,
            ossRegion: siteSettings.ossRegion,
            ossBucket: siteSettings.ossBucket,
            accessKeyId: siteSettings.ossAccessKeyId,
            accessKeySecret: siteSettings.ossAccessKeySecret,
            cdnDomain: siteSettings.ossCdnDomain
          }
        }
      }, "settings", "Settings saved.");
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
    handleContactSubmit(form);
  });

  window.addEventListener("popstate", () => {
    if (suppressNextCaseModalPopRender) {
      suppressNextCaseModalPopRender = false;
      skipNextCasesIntro = false;
      activeCaseModalId = "";
      document.querySelector("[data-case-modal]")?.remove();
      document.body.classList.remove("is-intro-reset");
      document.body.classList.add("is-ready");
      document.body.dataset.pageIntroPath = currentPath().split("#")[0];
      return;
    }
    render();
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.querySelector("[data-case-modal]")) {
      event.preventDefault();
      setCaseModal("");
    }
  });

  function registerUltraAssetCache() {
    if (!("serviceWorker" in navigator) || !window.isSecureContext) return;
    const basePath = window.__ULTRA_BASE_PATH || "/";
    const scope = basePath.endsWith("/") ? basePath : `${basePath}/`;
    const serviceWorkerUrl = `${scope}ultra-sw.js?v=20260617-clean01`;
    const register = () => {
      navigator.serviceWorker.register(serviceWorkerUrl, { scope }).catch(() => {});
    };
    window.UltraAssetCache = {
      clear() {
        return navigator.serviceWorker.ready.then(registration => new Promise(resolve => {
          const worker = registration.active || registration.waiting || registration.installing;
          if (!worker) {
            resolve(false);
            return;
          }
          const channel = new MessageChannel();
          const timeout = window.setTimeout(() => resolve(false), 2000);
          channel.port1.onmessage = event => {
            window.clearTimeout(timeout);
            resolve(event.data?.type === "ULTRA_ASSET_CACHE_CLEARED");
          };
          worker.postMessage({ type: "ULTRA_CLEAR_ASSET_CACHE" }, [channel.port2]);
        }));
      }
    };
    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
    }
  }

  window.addEventListener("load", () => {
    if (currentPath() === "/") return;
    window.requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  }, { once: true });
  registerUltraAssetCache();
  window.addEventListener("DOMContentLoaded", render);
  setTimeout(() => {
    const app = document.getElementById("ultra-app");
    if (!app || !app.children.length) render();
  }, 900);
})();
