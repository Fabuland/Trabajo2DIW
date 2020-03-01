$("[data-toggle=popover]").popover();
$(".carousel").carousel({
  interval: 2000
});
$("#btnShow").click(function() {
  $(".alert")
    .hide()
    .show("medium");
});

$("#btnLogin").click(function() {
  $("#myModal").modal();
});

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function modoOscuro() {
  var element = document.body;
  element.classList.toggle("modo-oscuro");
}