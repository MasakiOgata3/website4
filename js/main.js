// 尾形社会保険労務士事務所 - メインJavaScript

document.addEventListener("DOMContentLoaded", function () {
  
  // ヘッダースクロール処理
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("nav-fixed");
      } else {
        header.classList.remove("nav-fixed");
      }
    });
  }

  // モバイルメニューの開閉
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // サービスタブの切り替え（サービスページのみ）
  const serviceTabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".service-content");
  
  if (serviceTabs.length > 0) {
    serviceTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const targetService = this.getAttribute("data-service");

        // すべてのタブを非アクティブ状態に
        serviceTabs.forEach((t) => {
          t.classList.remove("border-primary", "text-primary", "bg-blue-50");
          t.classList.add("border-transparent", "text-gray-600");
        });
        
        // クリックされたタブをアクティブに
        this.classList.remove("border-transparent", "text-gray-600");
        this.classList.add("border-primary", "text-primary", "bg-blue-50");

        // すべてのコンテンツを非表示
        serviceContents.forEach((content) => {
          content.classList.add("hidden");
        });
        
        // 選択されたコンテンツを表示
        const targetContent = document.getElementById(targetService);
        if (targetContent) {
          targetContent.classList.remove("hidden");
        }
      });
    });
  }

  // アコーディオンの開閉（FAQなど）
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  if (accordionTriggers.length > 0) {
    accordionTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        const icon = this.querySelector(".accordion-icon");

        if (targetContent && icon) {
          if (targetContent.classList.contains("active")) {
            // アコーディオンを閉じる
            targetContent.classList.remove("active");
            icon.classList.remove("ri-subtract-line");
            icon.classList.add("ri-add-line");
          } else {
            // すべてのアコーディオンを閉じる
            document.querySelectorAll(".accordion-content").forEach((content) => {
              content.classList.remove("active");
            });
            document.querySelectorAll(".accordion-icon").forEach((i) => {
              i.classList.remove("ri-subtract-line");
              i.classList.add("ri-add-line");
            });
            
            // クリックされたアコーディオンを開く
            targetContent.classList.add("active");
            icon.classList.remove("ri-add-line");
            icon.classList.add("ri-subtract-line");
          }
        }
      });
    });
  }

  // スムーススクロール
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }
});