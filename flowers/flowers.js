// Define the display method
function printFlowers() 
{
    var name_line = "<td>" + this.name + "</td>";
    var color_line = "<td>" + this.color + "</td>";
    var season_line = "<td>" + this.season + "</td>";
    var shape_line = "<td>" + this.shape + "</td>";
    var scent_line = "<td>" + this.scent + "</td>";

    var row = "<tr>" + name_line + color_line + season_line + shape_line + scent_line + "</tr>";
    document.write(row); 
}

// Define the object constructor function
function Flower(name, color, season, shape, scent) 
{
    // List of attributes for this object
    this.name = name;
    this.color = color;
    this.season = season;
    this.shape = shape;
    this.scent = scent;
    // Assign method to flowers
    this.printFlowers = printFlowers;
}

// Create flower objects with all 5 required parameters
var peony = new Flower("Peony", "Pink", "Spring", "Cupping petal", "Soft and sweet");
var orchid = new Flower("Orchid", "Pink", "Spring", "Rounded and Flat", "Citrus");
var tulip = new Flower("Tulip", "Pink", "Spring", "Classic Cup", "Sweet Citrus");
var magnolia = new Flower("Magnolia", "Cream", "Summer", "Star Shape", "Champagne");
var carnations = new Flower("Carnation", "Red", "Winter", "Large Flowered", "Spicy clove");

// Open table structure in HTML
document.write("<table border='1'><tr><th>Name</th><th>Color</th><th>Season</th><th>Shape</th><th>Scent</th></tr>");

// Display the flowers info in the table rows
peony.printFlowers();
orchid.printFlowers();
tulip.printFlowers();
magnolia.printFlowers();
carnations.printFlowers();

// Close table structure
document.write("</table><br>");

// Create an array of flower names 
var flowerArray = [peony.name, orchid.name, tulip.name, magnolia.name, carnations.name];

// Built-in sort function (sorts alphabetically)
flowerArray.sort(); 

document.write("<strong>Sorted Flower Names:</strong><br>");
for (var counter = 0; counter < flowerArray.length; counter++) 
{
    document.write(flowerArray[counter] + "<br>");
}