$(document).ready(function() {
  
  var ractiveBanner = new Ractive({
    target: "#bannerOutput",
    template: "#bannerTmpl",
    data: data.home
  });
  
  var ractiveProducts = new Ractive({
    target: "#productOutput",
    template: "#productTmpl",
    data: data.home
  });
});
