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

var entry = document.createElement("div");
entry.innerHTML = "<h3>" + words[i][0] + "</h3>" + "<p>" + words[i][1] + "</p>";

// Set colour - could I use CSS here?
entry.style.color = "red";

// Hide behind reveal
entry.setAttribute("class", "js-subsection-body body-content-wrapper");

// Insert heading and text after the reference id - note it's appearing in reverse alphabetical order
var reference = document.getElementById(initial);
var parent = reference.parentNode;
parent.insertBefore(entry, reference.nextSibling);

//End loop

}

// Next steps:

// 1. Draw content from a list and put it under the appropriate letter.
// 2. Use a list extracted from the DWP style guide.
// 3. Put each item into the correct alphabetical location.