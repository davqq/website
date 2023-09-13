// Smooth Scrolling für die Navbar-Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (this instanceof HTMLAnchorElement && this.hasAttribute("href")) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const header = document.getElementById("header");

      if (anchor instanceof HTMLAnchorElement) {
        // change text-decoration with offset and set underline style from font and remove old underline
        anchor.style.textDecoration = "underline";
        anchor.style.textUnderlineOffset = "0.2em";
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
