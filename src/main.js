function cssEngine(rule) {
  var css = document.createElement("style"); // Creates <style></style>
  css.type = "text/css"; // Specifies the type
  if (css.styleSheet) css.styleSheet.cssText = rule;
  // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css); // Specifies where to place the css
}

// CSS rules
var rule = `
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body{
  font-family: 'Open Sans', sans-serif;
}

table{
  font-family: inherit;
}

.navigationClass li {
  padding-left: 0;
}

.navigationClass a {
  border: 1px solid #415b76;
  border-bottom: none;
}

.navigationClass a,
.navigationClass a span{
  background: #b3c3d2;
  border-radius: 4px 4px 0 0;
  padding: 2px 6px;
}

.navigationClass a.selectedTabLink,
.navigationClass a.selectedTabLink span {
  background: #eef2f5;
}
`;

console.log("Changing styling of MyTE");
cssEngine(rule);
