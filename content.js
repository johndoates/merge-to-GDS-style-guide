//Indication that extension is running
pageTitle = document.getElementById("manual-title"); 
pageTitle.innerHTML = "Style guide +";

// DWP definitions for style guide
var newTerms = [
["Access to Work","Use plain English. For example, \“money to help you with difficulties at work (known as an ‘Access to Work’ grant)\”."],
["account (UC)","Claimants create an account as part of the application process."],
["agent (UC) (internal)","This is a generic term for DWP staff. It’s mainly used internally. Use work coach, case manager, decision maker if you need to distinguish."],
["agent led process (ALP) (UC) (internal)","A process which is not handled within the online UC service. These are detailed in PDFs and consist of instructions for agents to follow, often with branching logic. <br><br> An agent will usually need to download the latest version of the ALP from a to-do and then follow the instructions. This will often include filling in fields or selecting options from drop-downs within the PDF. They will then upload the completed ALP as part of the same to-do."],
["application (UC)","Use instead of the ‘gather’ to talk about the process of giving DWP information in support of a claim for Universal Credit."],
["apply (for Universal Credit) (UC)","People apply for Universal Credit."],
["appointment (UC)","Use this instead of interview."],
["apportionment / apportioned (UC)","Don’t use. This word has sometimes been used to describe how a Universal Credit payment is made up. Use section / amount / divided / split up instead. For example, the amount of Universal Credit for childcare."],
["assessment period (UC)","Can be used internally. Don’t use for claimants.<br><br> This is a 4 week entitlement period. Claimants are paid at the end of the AP.<br><br> For claimants, try to use actual dates if it’s technically possible. For example: \“You need to tell us about any childcare costs from [DATE] to [DATE].\"<br><br> Otherwise use ‘next payment’, or ‘month’."],
["assessment unit (UC)","Don’t use. It’s sometimes used internally, and for policy purposes is defined: \“An assessment unit includes all the people in a benefit unit, plus any other connected adults, including partners, who are not eligible for Universal Credit in their own right.\" <br><br>Use claimant, couple, person instead. Alternatively address the claimant directly as \“you\”."],
["award (UC)","Don’t use. Use payment or Universal Credit instead."],
["benefit unit (UC)","Don’t use. It’s sometimes used internally, and for policy purposes is defined: “A benefit unit is a claimant, or a couple making a joint claim and any child or qualifying young person they are responsible for. The benefit unit is used in the calculation of the Universal Credit maximum amount. <br><br>Use claimant, couple, person instead. Alternatively address the claimant directly as ‘you’."],
["biometric residence permit","Lower case."],
["blocked case (UC)","Shown in the agent dashboard. These are cases that can’t move forward as more information is required, either from an agent – for example, a decision maker – or the claimant."],
["Brackets","Use brackets for internal / jargon terminology where we have to include it for legal / policy reasons. For example: Your payments may be reduced (or ‘sanctioned’). <br><br>The first time the jargon is used, highlight it using a separate sentence. For example: Your payments may be reduced. This is also known as being ‘sanctioned’."],
["build (UC)","As in ‘the build’. Don’t use. <br><br>Use service, digital service, online, Universal Credit instead."],
["Capitalisation","Don’t capitalise the names of digital services."],
["case (UC)","Mainly used internally by case managers to describe the whole claim. This includes a joint claim."],
["case manager (UC)","Mainly used internally. Case managers work in Service Centres and deal with the processing/progression of claims. Lower case unless it’s someone’s job title."],
["check","Use check rather than validate. For example, we need to check your identity."],
["citizen / claimant / applicant / user / customer / person","None of these should be used to address the person using the service. They should be addressed as \“you\”. <br><br>\“People and person\” should be our first choice. <br><br>\“User\” is a word we use internally to refer to people in the context of a specific service. <br><br>\“Claimant\” might be the most appropriate way to refer to someone who has an active ongoing claim eg Universal Credit. <br><br>\“Applicant\” might be best to refer to someone who is making an initial application. <br><br>\“Customer\” should be avoided because it implies someone has a choice. <br><br>\“Citizen\” is a general term which is rarely useful when talking about the people who use our services."],
["commitment","Claimants must agree to a set of commitments which outline what they’ll do to find work in return for getting Universal Credit. <br><br>Not capitalised. Singular. Not ‘claimant commitment’. Use as part of a sentence to avoid it becoming jargonised."],
["conditionality","Where possible use \“work group\” instead. Internal use only - be very clear that it is not relevant to the claimant which work group / conditionality group they are in - they should only know the outcome in terms of how it affects their commitment."],
["confirm (for example, ‘confirm identity’)","Use this instead of validate. Make sure this doesn’t conflict with \“prove your identity\” - and that it is confirm."],
["couples claim (UC)","Don’t use. Use \“joint claim\” instead."],
["decision maker","Capitals for individuals where it’s their job title; lower case when descriptive or collective."],
["digital by default","This is jargon and shouldn’t be used externally. It’s better to talk about “interacting with government online”."],
["DWP","Use \“the Department for Work and Pensions\” and \“DWP\”."],
["element (UC)","Don’t use. Instead, use “money for”, “part”, “amount” to explain how UC payment is made up. For example: “money for children”; “part of your payment”; “the amount of Universal Credit you get to cover / towards your childcare costs”."],
["European Economic Area","Upper case."],
["fast-track (PYCA)","Lower case and hyphenated: fast-track, fast-tracked."],
["full service, UCFS (UC)","Used internally to distinguish live service from full service. Avoid using internally, and never used externally."],
["gather (UC)","Don’t use. Use service or application instead."],
["jobcentres","Use “jobcentre” for a single building. <br><br>Use “Jobcentre Plus” for the whole organisation. <br><br>Don’t use “job centre”, JCP or Jobcentreplus."],
["joining (a claim) (UC)","Used when one person needs to link their UC account to their partner’s account."],
["joint claim (UC)","Used when a couple is claiming UC."],
["journal (UC)","Used for agents and claimants to communicate."],
["main carer (UC)","Use instead of primary carer or lead carer."],
["national identity card","Lower case."],
["Nationalities","Upper case: British, Irish, Welsh."],
["OK","It’s fine to use it."],
["payment (UC)","Use this instead of award."],
["please / thank you / sorry","Don’t use. They reduce authority and are insincere. As an exception, say sorry when something has gone wrong that’s the fault of the service. For example a 500 page error because of server outage."],
["prove you can apply","Name of the service that work coaches and decision makers use as part of the Universal Credit claim process. Don't use PYCA."],
["reduced payments (sanctions) (UC)","Use reduced payments, and follow with ‘sanctions’ in brackets where necessary."],
["regime","Always spell out what a claimant needs to do - rather than refer to which regime / work group / conditionality group they are in. <br><br>You may still need to use this word in staff-facing guidance."],
["sanction (UC)","Use with an explanation, for example “reduced payments” or “stopped payments”."],
["sanctionable failure (UC)","Be specific about what this is. For example: Something that will reduce the amount of Universal Credit you receive."],
["service (UC)","Use this instead of ‘the build’."],
["sign in / sign out (UC)","Use instead of log in / log out."],
["sorry / thank you / please","Don’t use. They reduce authority and are insincere. As an exception, say sorry when something has gone wrong that’s the fault of the service. For example a 500 page error because of server outage."],
["team leader (UC)","Don’t capitalise unless it’s someone’s job title."],
["thank you / please / sorry","Don’t use. They reduce authority and are insincere. As an exception, say sorry when something has gone wrong that’s the fault of the service. For example a 500 page error because of server outage."],
["to-do (UC)","Lower-case and hyphenated. To-dos are tasks that DWP staff and claimants have to complete in the Universal Credit service. <br><br>Use single quotes if you need to give the name of a specific to-do in running text."],
["to-do list (UC)","Hyphenate to-do list. Only capitalise at the start of sentences."],
["visa","Lower case. A visa is different to a passport. It allows the holder to temporarily be in a country. A visa can be a stamp, sticker or separate document inside a passport."],
["we / us / DWP / pronouns","Using “we” is fine, as long as you’re making it clear as much as possible who the “we” is. Don’t assume the audience will know. Each time you use “we”, make sure you’ve already used the full name of the department or agency in that specific piece of content."],
["work coach","Someone who works in a jobcentre. They help claimants to find work. Don’t capitalise except when used as an individual job title."]
];

//Get a list of all the H3s (current terms)
var currentTermsList = document.querySelectorAll('h2, h3');
console.log(currentTermsList);

//Set up variable for cycling through new terms
var newTermCounter = 0;

//Start loop of existing terms
for (var currentTermCounter = 0; currentTermCounter < currentTermsList.length; currentTermCounter++) {

//Get the title of the current entry we're looking at
	if (currentTermsList[currentTermCounter].id.length == 1) {
		var currentEntry = currentTermsList[currentTermCounter].id;
	}
	else {
		var currentEntry = currentTermsList[currentTermCounter].innerHTML;
	}

	//Get rid of 'the' from the start of current entry. Repeating for capitalised 'The' is pretty clunky!
	var startofEntry = currentEntry.slice(0,3);
	if (startofEntry = "the ") {
		var currentEntry = currentEntry.replace("the ", "")
	}
		if (startofEntry = "The ") {
		var currentEntry = currentEntry.replace("The ", "")
	}

	//Get lower case versions of new entry, to compare later
	var newEntry = newTerms[newTermCounter][0];
	console.log(newEntry);
	var lowercaseNew = newEntry.toString().toLowerCase();

	//Create text of the new entry for the style guide - make this a function and move? Also find a better way to do the spacing.
	var entryText = document.createElement("div");
	entryText.innerHTML = "<br>" + "<h3>" + newTerms[newTermCounter][0] + "</h3>" + newTerms[newTermCounter][1];
	entryText.style.color = "red";

	// More complicated (but more secure?) way to make the new entry
	// var entryText = document.createElement("h3");
	// var entryHeadingText = document.createTextNode(newTerms[newTermCounter][0]);
	// entryText.appendChild(entryHeadingText);
	// console.log(entryText);
	// var entryPara = document.createElement("p");
	// var entryParaText = document.createTextNode (newTerms[newTermCounter][1]);
	// entryPara.appendChild(entryParaText);
	// console.log(entryPara);
	// entryText.appendChild(entryPara);
	// entryText.style.color = "red";

	// Insert new entry if appropriate
	if (lowercaseNew < currentEntry.toLowerCase()) {

		//Deal with current entries which have multiple paragraphs, bullets etc.
		var x = currentTermsList[currentTermCounter - 1].nextSibling;
		console.log(x);
		console.log("nodeName " + x.nodeName);
		while (x.nodeName != "H2" && x.nodeName != "H3"){
			if (x.nextSibling == null) {
				break;
			}
			var x = x.nextSibling;
			// console.log(x);
			// console.log(x.parentNode);
			// console.log(x.nodeName);
		}
		if (x.nextSibling == null) {
			x.appendChild(entryText);
		}
		else {
			x.previousSibling.appendChild(entryText);
		}
		newTermCounter++;

		//Set up to check if there should be two new terms in a row
		currentTermCounter--;	
	}
}

//Issues
//1. If the first term in a section is an acronym, it sends the new term to the end of the section.
//2. 'The Queen' breaks things.