d3.selectAll("body").on("change", updatePage); //event listener is created from first line
//whenever there is a change to HTML file, updatePage fxn is called (selection of drop down menu option)
function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};