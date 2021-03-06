var dataset = [1,2,3,4];
var y = [1,2,3,4];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#graph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json("/data", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 5])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 5])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

// Add Dots
    svg.append('g')
    .selectAll("dot")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return d; } )
    .attr("cy", function (d) { return d; } )
    .attr("r", 10)
    .style("fill", "#69b3a2")
})