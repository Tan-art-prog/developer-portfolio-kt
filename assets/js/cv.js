  const root = document.documentElement;
  const themeButton = document.getElementById("themeButton");
  const languageSelect = document.getElementById("languageSelect");
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const currentYear = document.getElementById("currentYear");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const translations = {
    vi: {
      pageTitle: "Bàng Khải Tấn — Backend & Software Engineer",
      pageDescription: "Portfolio 3D của Bàng Khải Tấn — Backend & Software Engineer, chuyên C#/.NET, SQL Server và QA Testing.",
      navAbout: "Giới thiệu", navApproach: "Cách làm việc", navProjects: "Dự án", navSkills: "Năng lực", navContact: "Liên hệ",
      workCta: "Trao đổi công việc", availability: "Sẵn sàng cho cơ hội Internship / Fresher",
      heroOverline: "SOFTWARE ENGINEERING · HỒ CHÍ MINH",
      heroTitle: "Kiến tạo hệ thống<br><span class=\"gradient-text\">chạy được thật.</span>",
      heroLead: "Mình là <strong>Bàng Khải Tấn</strong>, Backend Developer & Software Engineer tập trung vào C#/.NET, SQL Server và QA Testing. Mình biến yêu cầu thực tế thành hệ thống ổn định, dữ liệu chặt chẽ và phần mềm chất lượng cao.",
      exploreProjects: "Khám phá dự án", publicRepos: "Mã nguồn minh bạch", featuredProducts: "Sản phẩm tiêu biểu", zynkCommits: "Dự án GitHub", role: "Backend · Software Engineer",
      aboutLabel: "GIỚI THIỆU", aboutTitle: "Tư duy hệ thống,<br><span class=\"muted-heading\">chất lượng sản phẩm.</span>",
      aboutLead: "Sinh viên Công nghệ Thông tin tại HUFLIT, định hướng Backend & Game Server. Mình yêu thích việc thiết kế dữ liệu, xây dựng luồng xử lý máy chủ, tối ưu hiệu năng và tích hợp kiểm thử tự động thành sản phẩm có thể sử dụng thực tế.",
      aboutBody: "ừ hệ thống BookStore Online đến nền tảng quản lý thuê xe, mình đã làm việc với kiến trúc MVC, Entity Framework, Selenium WebDriver, thanh toán trực tuyến, cloud media và các tính năng AI hỗ trợ, và mình luôn chú trọng tính toàn vẹn dữ liệu và trải nghiệm thực tế của người dùng.",
      directionLabel: "ĐỊNH HƯỚNG", directionText: "Backend .NET & Game Server", directionSub: "Xây dựng API, cơ sở dữ liệu và logic máy chủ trò chơi.", educationLabel: "HỌC VẤN", educationText: "HUFLIT University", educationSub: "Software Engineering · Thành phố Hồ Chí Minh.",
      approachLabel: "CÁCH MÌNH LÀM VIỆC", approachTitle: "Từ bài toán đến<br><span class=\"muted-heading\">một sản phẩm vận hành được.</span>",
      approachOneTitle: "Phân tích & Thiết kế dữ liệu", approachOneBody: "Bắt đầu bằng việc mô hình hóa cơ sở dữ liệu chặt chẽ, phân tích luồng dữ liệu và thiết kế cấu trúc hệ thống rõ ràng trước khi code.",
      approachTwoTitle: "Xây dựng Backend bền vững", approachTwoBody: "Sử dụng C#/.NET để phát triển API, tối ưu hóa truy vấn SQL Server và giải quyết các bài toán xử lý đồng bộ trạng thái.",
      approachThreeTitle: "Kiểm thử & Đảm bảo ổn định", approachThreeBody: "Triển khai các kịch bản kiểm thử tự động với Selenium và NUnit nhằm loại bỏ lỗi hồi quy, đảm bảo server vận hành bền bỉ.",
      projectsLabel: "DỰ ÁN TIÊU BIỂU", projectsTitle: "Sản phẩm đã xây,<br><span class=\"muted-heading\">không chỉ là ý tưởng.</span>",
      bookstoreDescription: "Website thương mại điện tử bán sách trực tuyến với toàn bộ luồng mua hàng, giỏ hàng, đối soát thanh toán tự động SePay, PayPal và lưu trữ ảnh Cloudinary.",
      bookstorePoint1: "Mô hình MVC, Entity Framework và hệ thống quản trị danh mục/kho sách.",
      bookstorePoint2: "Tự động hóa đối soát thanh toán và bảo mật User Secrets.",
      bookstorePoint3: "Mã nguồn công khai trên kho GitHub @Tan-art-prog.",
      viewSource: "Xem mã nguồn trên GitHub",
      qaDescription: "Bộ kịch bản kiểm thử tự động (Test Automation Suite) cho hệ thống website quản lý thuê xe, kiểm tra luồng đặt xe, thanh toán và quản lý danh mục.",
      warrantyDescription: "Hệ thống quản trị bán hàng và tra cứu bảo hành thiết bị theo số Serial Number với cấu trúc phân mảnh cơ sở dữ liệu phân tán.",
      skillsLabel: "NĂNG LỰC", skillsTitle: "Công nghệ phục vụ<br><span class=\"muted-heading\">bài toán thực tế.</span>", skillIntroTitle: "Từ dữ liệu đến chất lượng.", skillIntroBody: "Mình ưu tiên nền tảng thuật toán, kiến trúc cơ sở dữ liệu bền vững và chất lượng mã nguồn kiểm thử chuẩn mực.",
      contactTitle: "Có một cơ hội phù hợp?<br><span class=\"gradient-text\">Mình sẵn sàng trao đổi.</span>", contactBody: "Mình đang tìm kiếm cơ hội Backend, QA Automation và Software Engineering Internship/Fresher tại Thành phố Hồ Chí Minh.",
      emailMe: "Gửi email cho mình", callMe: "Gọi trao đổi", currentLocationLabel: "HIỆN TẠI", currentLocation: "Thành phố Hồ Chí Minh", permanentLabel: "THƯỜNG TRÚ", permanentAddress: "Phường Minh Phụng, TP. Hồ Chí Minh", addressNote: "Sẵn sàng làm việc trực tiếp tại TP.HCM hoặc Remote.",
      liveDemo: "Live demo", clickForDetails: "Nhấn vào thẻ để xem chi tiết →", detailHighlights: "TÍNH NĂNG NỔI BẬT", detailRole: "VAI TRÒ", detailArchitecture: "KIẾN TRÚC", detailStatus: "TRẠNG THÁI",
      designedBy: "Thiết kế & phát triển bởi Bàng Khải Tấn", backToTop: "Lên đầu trang ↑"
    },
    en: {
      pageTitle: "Bang Khai Tan — Backend & Software Engineer",
      pageDescription: "The 3D portfolio of Bang Khai Tan — a Backend & Software Engineer specializing in C#/.NET, SQL Server, and QA Automation.",
      navAbout: "About", navApproach: "Approach", navProjects: "Projects", navSkills: "Expertise", navContact: "Contact",
      workCta: "Let's work together", availability: "Open to Internship / Fresher opportunities",
      heroOverline: "SOFTWARE ENGINEERING · HO CHI MINH CITY",
      heroTitle: "Building systems<br><span class=\"gradient-text\">that work for real.</span>",
      heroLead: "I'm <strong>Bang Khai Tan</strong>, a Backend Developer & Software Engineer focused on C#/.NET, SQL Server, and QA Automation. I turn real requirements into stable systems, reliable data, and high-quality software.",
      exploreProjects: "Explore projects", publicRepos: "Public repositories", featuredProducts: "Featured projects", zynkCommits: "GitHub Projects", role: "Backend · Software Engineer",
      aboutLabel: "ABOUT ME", aboutTitle: "System thinking,<br><span class=\"muted-heading\">product quality.</span>",
      aboutLead: "Software Engineering student at HUFLIT, focused on Backend & Game Server. I enjoy designing databases, building server logic, optimizing performance, and integrating automated tests into practical products.",
      aboutBody: "From the BookStore Online system to the car rental platform, I have worked with MVC architecture, Entity Framework, Selenium WebDriver, online payments, cloud media, and AI features.",
      directionLabel: "DIRECTION", directionText: "Backend & Game Server", directionSub: "Building APIs, databases, and game server logic.", educationLabel: "EDUCATION", educationText: "HUFLIT University", educationSub: "Software Engineering · Ho Chi Minh City.",
      approachLabel: "HOW I WORK", approachTitle: "From a problem to<br><span class=\"muted-heading\">a product people can use.</span>",
      approachOneTitle: "Analysis & Data Design", approachOneBody: "Starting with strict database modeling, data flow analysis, and clear system architecture design before writing code.",
      approachTwoTitle: "Server Logic Development", approachTwoBody: "Using C#/.NET to build APIs, optimize SQL Server queries, and solve state synchronization challenges.",
      approachThreeTitle: "Testing & Stability Assurance", approachThreeBody: "Implementing automated test scripts with Selenium and NUnit to eliminate regression bugs and ensure robust server uptime.",
      projectsLabel: "FEATURED PROJECTS", projectsTitle: "Products I've built,<br><span class=\"muted-heading\">not just ideas.</span>",
      bookstoreDescription: "An online bookstore web application featuring a complete checkout flow, cart management, automated payment reconciliation, and Cloudinary media storage.",
      bookstorePoint1: "MVC Architecture, Entity Framework, and category/inventory management.",
      bookstorePoint2: "Automated payment verification and secure User Secrets configuration.",
      bookstorePoint3: "Open-source codebase on GitHub @Tan-art-prog.",
      viewSource: "View source on GitHub",
      qaDescription: "An automated regression test suite for a vehicle rental web application using Selenium WebDriver and NUnit.",
      warrantyDescription: "Sales and product warranty tracking platform using serial numbers with distributed database design.",
      skillsLabel: "EXPERTISE", skillsTitle: "Technology serving<br><span class=\"muted-heading\">real-world problems.</span>", skillIntroTitle: "From data to quality.", skillIntroBody: "I prioritize strong computer science fundamentals, maintainable architectures, and thorough testing.",
      contactTitle: "Have the right opportunity?<br><span class=\"gradient-text\">Let's start a conversation.</span>", contactBody: "I am looking for Backend, QA Automation, and Software Engineering Internship/Fresher opportunities in Ho Chi Minh City.",
      emailMe: "Send me an email", callMe: "Call me", currentLocationLabel: "CURRENTLY IN", currentLocation: "Ho Chi Minh City", permanentLabel: "PERMANENT ADDRESS", permanentAddress: "Minh Phung Ward, Ho Chi Minh City", addressNote: "Available for On-site in HCMC or Remote work.",
      liveDemo: "Live demo", clickForDetails: "Click the card to view details →", detailHighlights: "KEY FEATURES", detailRole: "ROLE", detailArchitecture: "ARCHITECTURE", detailStatus: "STATUS",
      designedBy: "Designed & developed by Bang Khai Tan", backToTop: "Back to top ↑"
    }
  };

  const projectDetails = {
    vi: {
      bookstore: {
        index: "00", kicker: "FEATURED · E-COMMERCE", title: "BookStore Management",
        summary: "Website thương mại điện tử bán sách với luồng mua hàng và đối soát thanh toán tự động.",
        features: [
          "Mô hình MVC, Entity Framework và hệ thống quản trị danh mục.",
          "Tự động hóa đối soát thanh toán với SePay và PayPal.",
          "Tích hợp AI Gemini và lưu trữ đám mây Cloudinary."
        ],
        role: "Backend Developer", architecture: "ASP.NET MVC + SQL Server", status: "Hoàn thiện mã nguồn",
        stack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "Selenium", "NUnit"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/BookStore-Management" }]
      },
      thuexe: {
        index: "01", kicker: "SYSTEM · QA AUTOMATION", title: "Quản Lý Thuê Xe",
        summary: "Hệ thống quản lý hợp đồng thuê xe, kết hợp kịch bản kiểm thử tự động.",
        features: [
          "Hệ thống quản lý danh mục, hợp đồng thuê và trả xe.",
          "Tự động hóa kịch bản kiểm thử (Test Automation) với C#."
        ],
        role: "Developer & QA Tester", architecture: "MVC + Selenium", status: "Hoàn thiện",
        stack: ["C#", "MVC", "Selenium WebDriver", "SQL Server"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/ASPNET-MVC-THUEXE" }]
      },
      mystore: {
        index: "02", kicker: "FRONTEND · E-COMMERCE", title: "MyStore",
        summary: "Giao diện website cửa hàng trực tuyến tĩnh.",
        features: ["Phát triển giao diện UI/UX cho cửa hàng.", "Xử lý tương tác người dùng cơ bản trên trình duyệt."],
        role: "Frontend Developer", architecture: "HTML/CSS/JS", status: "Hoàn thiện",
        stack: ["JavaScript", "HTML", "CSS"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/23DH113167_MyStore" }]
      },
      lab03: {
        index: "03", kicker: "C# · LAB", title: "C# Lab 03",
        summary: "Bài tập thực hành phát triển ứng dụng với C#.",
        features: ["Áp dụng nền tảng lập trình hướng đối tượng (OOP).", "Xử lý thuật toán và luồng dữ liệu cơ bản."],
        role: "Sinh viên", architecture: "Console / WinForms", status: "Hoàn thiện",
        stack: ["C#", ".NET"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/BangKhaiTan_Lab03" }]
      },
      lab05: {
        index: "04", kicker: "C# · LAB", title: "C# Lab 05",
        summary: "Bài tập thực hành phát triển ứng dụng với C# nâng cao.",
        features: ["Thực hành cấu trúc dữ liệu và xử lý logic.", "Tối ưu hóa mã nguồn C#."],
        role: "Sinh viên", architecture: "Console / WinForms", status: "Hoàn thiện",
        stack: ["C#", ".NET"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/Bangkhaitan_Lab05" }]
      }
    },
    en: {
      bookstore: {
        index: "00", kicker: "FEATURED · E-COMMERCE", title: "BookStore Management",
        summary: "E-commerce bookstore with checkout flow and automated payment reconciliation.",
        features: ["MVC architecture and category management.", "Automated payments via SePay and PayPal.", "Gemini AI and Cloudinary storage integration."],
        role: "Backend Developer", architecture: "ASP.NET MVC + SQL Server", status: "Completed",
        stack: ["C#", "ASP.NET MVC", "SQL Server", "Cloudinary"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/BookStore-Management" }]
      },
      thuexe: {
        index: "01", kicker: "SYSTEM · QA AUTOMATION", title: "Car Rental Management",
        summary: "Car rental contract management system with automated testing scripts.",
        features: ["Manage categories, rentals, and return contracts.", "Automated testing scenarios using C#."],
        role: "Developer & QA Tester", architecture: "MVC + Selenium", status: "Completed",
        stack: ["C#", "MVC", "Selenium WebDriver", "SQL Server"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/ASPNET-MVC-THUEXE" }]
      },
      mystore: {
        index: "02", kicker: "FRONTEND · E-COMMERCE", title: "MyStore",
        summary: "Static online store user interface.",
        features: ["UI/UX development for e-commerce.", "Browser-based user interaction handling."],
        role: "Frontend Developer", architecture: "HTML/CSS/JS", status: "Completed",
        stack: ["JavaScript", "HTML", "CSS"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/23DH113167_MyStore" }]
      },
      lab03: {
        index: "03", kicker: "C# · LAB", title: "C# Lab 03",
        summary: "C# application development practice.",
        features: ["Object-Oriented Programming (OOP) application.", "Basic algorithm and data flow handling."],
        role: "Student", architecture: "Console / WinForms", status: "Completed",
        stack: ["C#", ".NET"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/BangKhaiTan_Lab03" }]
      },
      lab05: {
        index: "04", kicker: "C# · LAB", title: "C# Lab 05",
        summary: "Advanced C# application development practice.",
        features: ["Data structure implementation and logic processing.", "C# source code optimization."],
        role: "Student", architecture: "Console / WinForms", status: "Completed",
        stack: ["C#", ".NET"],
        links: [{ label: "GitHub", url: "https://github.com/Tan-art-prog/Bangkhaitan_Lab05" }]
      }
    }
  };

  let activeLanguage = "vi";
  let activeProject = null;

  function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "vi";
    activeLanguage = selectedLanguage;
    const dictionary = translations[selectedLanguage];
    document.documentElement.lang = selectedLanguage;
    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.pageDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", dictionary.pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.pageDescription);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = dictionary[element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    if (languageSelect) languageSelect.value = selectedLanguage;
    if (activeProject) renderProjectDialog(activeProject);
    try { localStorage.setItem("portfolio-language", selectedLanguage); } catch {}
  }

  let savedLanguage = "vi";
  try { savedLanguage = localStorage.getItem("portfolio-language") || "vi"; } catch {}
  applyLanguage(savedLanguage);

  languageSelect?.addEventListener("change", (event) => applyLanguage(event.target.value));

  function closeMobileNav() {
    mobileNav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }

  menuButton?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNav));

  const projectDialog = document.getElementById("projectDialog");
  const dialogClose = document.getElementById("dialogClose");

  function renderProjectDialog(projectId) {
    const project = projectDetails[activeLanguage]?.[projectId];
    if (!project) return;
    activeProject = projectId;
    projectDialog.dataset.project = projectId;
    document.getElementById("dialogProjectIndex").textContent = project.index;
    document.getElementById("dialogProjectKicker").textContent = project.kicker;
    document.getElementById("dialogProjectTitle").textContent = project.title;
    document.getElementById("dialogProjectSummary").textContent = project.summary;
    document.getElementById("dialogProjectRole").textContent = project.role;
    document.getElementById("dialogProjectArchitecture").textContent = project.architecture;
    document.getElementById("dialogProjectStatus").textContent = project.status;

    const featureList = document.getElementById("dialogProjectFeatures");
    featureList.replaceChildren(...project.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }));

    const stackList = document.getElementById("dialogProjectStack");
    stackList.replaceChildren(...project.stack.map((technology) => {
      const item = document.createElement("span");
      item.textContent = technology;
      return item;
    }));

    const linkList = document.getElementById("dialogProjectLinks");
    linkList.replaceChildren(...project.links.map((link) => {
      const item = document.createElement("a");
      item.href = link.url;
      item.target = "_blank";
      item.rel = "noopener";
      item.textContent = `${link.label} ↗`;
      return item;
    }));
  }

  function openProjectDialog(projectId) {
    if (!projectDialog || !projectDetails[activeLanguage]?.[projectId]) return;
    renderProjectDialog(projectId);
    document.body.classList.add("dialog-open");
    projectDialog.showModal();
  }

  document.querySelectorAll(".clickable-project").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      openProjectDialog(card.dataset.project);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProjectDialog(card.dataset.project);
    });
  });

  dialogClose?.addEventListener("click", () => projectDialog.close());
  projectDialog?.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
  });
  projectDialog?.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    activeProject = null;
  });

  function setTheme(theme) {
    root.dataset.theme = theme;
    const isLight = theme === "light";
    const icon = themeButton?.querySelector("span");
    if (icon) icon.textContent = isLight ? "☾" : "☀";
    themeButton?.setAttribute("aria-label", isLight ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng");
  }

  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem("portfolio-theme") || "dark"; } catch {}
  setTheme(savedTheme);

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch {}
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  document.querySelectorAll(".tilt-card").forEach((card) => {
    const strength = Number(card.dataset.tiltStrength || 5);
    let frame;

    card.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch" || reduceMotion.matches) return;
      const rect = card.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * strength * 2;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * strength * -2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        card.style.setProperty("--pointer-rotate-x", `${rotateX}deg`);
        card.style.setProperty("--pointer-rotate-y", `${rotateY}deg`);
      });
    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      card.style.setProperty("--pointer-rotate-x", "0deg");
      card.style.setProperty("--pointer-rotate-y", "0deg");
    });
  });

  const heroVisual = document.querySelector(".hero-visual");
  const heroScene = document.querySelector("[data-scene]");
  const depthSections = [...document.querySelectorAll(".section-block, .contact-section")];
  let sceneFrame;

  heroScene?.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || reduceMotion.matches) return;
    const rect = heroScene.getBoundingClientRect();
    const sceneX = ((event.clientX - rect.left) / rect.width - 0.5) * 32;
    const sceneY = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    cancelAnimationFrame(sceneFrame);
    sceneFrame = requestAnimationFrame(() => {
      heroScene.style.setProperty("--scene-x", `${sceneX}px`);
      heroScene.style.setProperty("--scene-y", `${sceneY}px`);
    });
  });

  heroScene?.addEventListener("pointerleave", () => {
    heroScene.style.setProperty("--scene-x", "0px");
    heroScene.style.setProperty("--scene-y", "0px");
  });

  // LOGIC TỰ ĐỘNG NHẢY SÁNG MENU KHI CUỘN TRANG (SCROLLSPY)
  const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a");

  function updateActiveNavOnScroll() {
    const sections = [
      { id: "contact", el: document.getElementById("contact") },
      { id: "skills", el: document.getElementById("skills") },
      { id: "projects", el: document.getElementById("projects") },
      { id: "approach", el: document.getElementById("approach") },
      { id: "about", el: document.getElementById("about") }
    ];

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    let activeId = "about";

    // Nếu cuộn chạm đáy thì kích hoạt mục Liên hệ
    if (windowHeight + scrollY >= docHeight - 80) {
      activeId = "contact";
    } else {
      for (const sec of sections) {
        if (sec.el) {
          const top = sec.el.offsetTop - 150;
          if (scrollY >= top) {
            activeId = sec.id;
            break;
          }
        }
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${activeId}`) {
        link.classList.add("active");
      }
    });
  }

  let scrollFrame;
  function updateScrollProgress() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
    if (scrollProgressBar) scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    if (heroVisual && !reduceMotion.matches) heroVisual.style.setProperty("--hero-scroll", `${Math.max(window.scrollY * -.08, -48)}px`);
    if (!reduceMotion.matches) depthSections.forEach((section) => {
      const offset = (window.innerHeight / 2 - section.getBoundingClientRect().top) * .035;
      section.style.setProperty("--section-depth", `${Math.max(-18, Math.min(18, offset))}px`);
    });
    updateActiveNavOnScroll();
  }

  window.addEventListener("scroll", () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateScrollProgress);
  }, { passive: true });

  if (currentYear) currentYear.textContent = new Date().getFullYear();
  updateScrollProgress();