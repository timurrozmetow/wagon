document.addEventListener("DOMContentLoaded", () => {
    const wagonsPage = document.querySelector(".wagons-page");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wagonsPage.classList.add("scrolled-into-view");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(wagonsPage);
  });
  