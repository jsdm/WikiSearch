$("document").ready(function() {
  $("form").on("click", function() {
    $("form").toggleClass('open');
  });
  $("form:not(:active)")
  // $(document).click(function() {
  //   console.log("hej");
  //   $("form").toggleClass('open');
  // })
});