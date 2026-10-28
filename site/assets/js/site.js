/* Asdale Dynamics, LLC — author site template */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav-list");

  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    var open = list.style.display === "block";
    list.style.display = open ? "" : "block";
    toggle.setAttribute("aria-expanded", String(!open));
  });

  list.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      list.style.display = "";
    });
  });
})();
