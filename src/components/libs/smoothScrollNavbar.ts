// Smooth Scrolling für die Navbar-Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      anchor instanceof HTMLAnchorElement &&
      anchor !== null &&
      anchor.hasAttribute("href")
    ) {
      const targetId = anchor.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");
      const header = document.getElementById("header");

      if (anchor instanceof HTMLAnchorElement) {
        // change text-decoration with offset and set underline style from font and remove old underline
      }
      if (targetElement !== null && header instanceof HTMLElement) {
        window.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight,
          behavior: "smooth",
        });
      }
    }
  });
});
