/*
File: script.js
GUI Assignment: HW3 Multiplication Table Generator
Timothy Retelle, UMass Lowell Computer Science, timothy_retelle@student.uml.edu
Copyright (c) 2022 by Timothy Retelle. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author. This is a small site to generate multiplication tables.
updated on June 16th, 2022
*/

//variables to hold user inputs
var topStart = 0;
var topEnd = 0;
var sideStart = 0;
var sideEnd = 0;

var table;
var tableRow;
var value;
//var topRow[];
//var sideColumn[];
//function called when the go button is clicked
function generate() {
	
	topStart = document.getElementById("topStart").value;
	topEnd = document.getElementById("topEnd").value;
	sideStart = document.getElementById("sideStart").value;
	sideEnd = document.getElementById("sideEnd").value;
	if(topStart < -50 || topStart > 50 || topEnd < -50 || topEnd > 50 ||sideStart < -50 || sideStart > 50 || sideEnd < -50 || sideEnd > 50){
		document.getElementById("errorMessage").innerHTML = "Error: Input out of bounds";
		return;
	}
	else if(topStart > topEnd || sideStart > sideEnd){
		document.getElementById("errorMessage").innerHTML = "Error: The end cannot be smaller than the start";
		return;
	}
	sideEnd++;//fix off by one error
	document.getElementById("errorMessage").innerHTML = "";//in case there was previously an error, clear it now that there isn't
	table = document.getElementById("multTable");
	
	while(table.firstChild){//just in case there was already a table, remove it
		table.removeChild(table.firstChild);
	}
	
	tableRow = document.createElement("tr");
	
	var newElement = document.createElement("th");//create blank for the corner
	var text = document.createTextNode("");
	newElement.appendChild(text);
	tableRow.appendChild(newElement);
	var first = true;
	for (let j = sideStart; j <= sideEnd; j++){
		for (let i = topStart; i <= topEnd; i++) {
			console.log(sideEnd);
			if(first){
				value = i;
				newElement = document.createElement("th");
			}
			else{
				value = i* (j-1); //multiply by the column, if it isnt the header row
				newElement = document.createElement("td");
			}
			
			text = document.createTextNode(value);
			newElement.appendChild(text);
			tableRow.appendChild(newElement);
		}

		first = false;
		table.appendChild(tableRow);
		tableRow = document.createElement("tr");
		newElement = document.createElement("th");
		text = document.createTextNode(j);
		newElement.appendChild(text);
		tableRow.appendChild(newElement);
	}
	
	
	//create table
	
}
