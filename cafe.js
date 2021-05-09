"use strict";

$(document).ready(function() {
var total = 0;
  
// add hover handler and click handler to each image in table
$("ul img").each(function() {
  
var temp = this.src; //creating a temp variable to store the actual image src

// set up event handlers for each image, on hover
$(this).hover(function () {
this.src = this.id; // setting the id of image as the src on mouse enter
}, function() {
this.src = temp; // setting the src to the old value upon mouse out
}); // end hover


// set up event handlers for each image, when clicked
$(this).click(function(evt) {

// using the image's alt property's data to set items in select box and to calculate the total.
// add selection to textarea and update total
if (this.alt === 'coffee') {
$('#order').append($('<option>', {
value: 1,
text: "$1.75 - Coffee"
}));
total += 1.75;
} else if (this.alt === 'espresso') {
$('#order').append($('<option>', {
value: 1,
text: "$1.95 - Espresso"
}));
total += 1.95;
} else if (this.alt === 'latte') {
$('#order').append($('<option>', {
value: 1,
text: "$2.95 - Latte"
}));
total += 2.95;
} else if (this.alt === 'cappuccino') {
$('#order').append($('<option>', {
value: 1,
text: "$3.45 - Cappuccino"
}));
total += 3.45;
} else if (this.alt === 'biscotti') {
$('#order').append($('<option>', {
value: 1,
text: "$1.95 - Biscotti"
}));
total += 1.95;
} else if (this.alt === 'scone') {
$('#order').append($('<option>', {
value: 1,
text: "$2.95 - Scone"
}));
total += 2.95;
}
  
// display order and total
// appending the total value to inner html of the <p> tag with id as total
$("#total")[0].innerHTML = "Total: $" + Number(total).toFixed(2);
  
// cancel default event of the clicked link
evt.preventDefault();
  
}); // end click
}); // end each
  
// add click event handler for check out button
$("#place_order").click(function() {

// on click of the place order button, redirecting to checkout page
window.location.href='checkout.html';
}); // end click
  
// add click event handler for clear button
$("#clear_order").click(function() {

// on click of clear order, resetting select box and the total to their initial values
$('#order').empty();
$("#total")[0].innerHTML = "&nbsp;";
total = 0;
}); // end click
  
}); // end ready