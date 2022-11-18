// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// The function below will change the background image
function changeBackgroundImage() {
  document.body.style.backgroundImage = "url('../images/leaves.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

var divElement = document.getElementById('viz1668658982710'); var vizElement = divElement.getElementsByTagName('object')[0]; if (divElement.offsetWidth > 800) { vizElement.style.minWidth = '1016px'; vizElement.style.maxWidth = '100%'; vizElement.style.minHeight = '1014px'; vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px'; } else if (divElement.offsetWidth > 500) { vizElement.style.minWidth = '1016px'; vizElement.style.maxWidth = '100%'; vizElement.style.minHeight = '1014px'; vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px'; } else { vizElement.style.minWidth = '1016px'; vizElement.style.maxWidth = '100%'; vizElement.style.minHeight = '1550px'; vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px'; } var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(typeof(elementValue));
  
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      if (filterId == "Year") {
        elementValue = Number(elementValue);
      }
      filters[filterId] = elementValue;
    }
    else
      delete filters[filterId];
    console.log(filters);


    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
}

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([filterId, elementValue]) => {
      filteredData = filteredData.filter(row => row[filterId] === elementValue);
    });
    
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);