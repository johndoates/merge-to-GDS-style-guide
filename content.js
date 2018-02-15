// DWP definitions

var words = [
            ["account (UC)","Claimants create an account as part of the application process."],
            ["agent (UC) (internal)","This is a generic term for DWP staff. It’s mainly used internally. Use work coach, case manager, decision maker if you need to distinguish."],
            ["bertie", "A name."]
],
	wordsLen = words.length;

//Start loop

for (i = 0; i < wordsLen; i++) {

//Get first letter of DWP term

var initial = words[i][0].charAt(0);

// Create class
var giveclass = document.createElement("div");
giveclass.setAttribute("class", "js-subsection-body body-content-wrapper");

// Create heading based on array item
var heading = document.createElement("h3");
giveclass.appendChild(heading);
var headingnode = document.createTextNode(words[i][0]);
giveclass.appendChild(headingnode);

//Add linebreak
var br = document.createElement('br');
giveclass.appendChild(br);

// Create text based on array item
var text = document.createElement("p");
var textnode = document.createTextNode(words[i][1]);
text.appendChild(textnode);

// Combine heading and text
giveclass.appendChild(text);

// Insert heading and text after the reference id - note it's appearing in reverse alphabetical order
var reference = document.getElementById(initial);
var parent = reference.parentNode;
parent.insertBefore(giveclass, reference.nextSibling);

//End loop

}

// Next steps:

// 1. Draw content from a list and put it under the appropriate letter.
// 2. Use a list extracted from the DWP style guide.
// 3. Put each item into the correct alphabetical location.