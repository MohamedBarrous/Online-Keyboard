(function () {

	// Create the keyboard buttons and give each of them an specific/particular id
	var inTextArea = $("textarea#text").val();
	var row1Simplekeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'back'];
	var row2Simplekeys = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter'];
	var row3Simplekeys = ['CAP', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'];
	var row4Simplekeys = ['shift', '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
	var row5Simplekeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
	var row6Simplekeys = ['{', '}', '\"', '\'', ':', '|', '<', '>', '?'];

	for ( value in row1Simplekeys ) {
		var button = $('<button id="' + row1Simplekeys[value] + '" >' + row1Simplekeys[value] + '</button>');
		$(".row1").append(button);
	}
	for ( value in row2Simplekeys) {
		var button = $('<button id="' + row2Simplekeys[value] + '" >' + row2Simplekeys[value] + '</button>');
		$(".row2").append(button);
	}
	for (value in row3Simplekeys) {
		var button = $('<button id="' + row3Simplekeys[value] + '" >' + row3Simplekeys[value] + '</button>');
		$(".row3").append(button);
	}
	for (value in row4Simplekeys) {
		var button = $('<button id="' + row4Simplekeys[value] + '" >' + row4Simplekeys[value] + '</button>');
		$(".row4").append(button);
	}
	
	for (value in row5Simplekeys) {
		var button = $('<button id="' + row5Simplekeys[value] + '" >' + row5Simplekeys[value] + '</button>');
		$(".row5").append(button);
	}
	for (value in row6Simplekeys) {
		var button = $('<button id="' + row6Simplekeys[value] + '" >' + row6Simplekeys[value] + '</button>');
		$(".row6").append(button);
	}
	var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
	$("button").each(function ( ) { 
		if ( letters.indexOf($(this).attr('id')) >= 0) {
			$(this).addClass("letter");
		}
	});
	// The textarea size should be similar to the keyboard size 
	$("textarea#text").css("width", $(".keyboardButtons").css('width'))
	$("textarea#text").css("padding", $(".keyboardButtons").css('padding'))

	function addChar (char) {
		inTextArea = $("textarea#text").val()
		inTextArea = inTextArea + char;
		$("textarea#text").val(inTextArea);
	}
	function back () {
		inTextArea = $("textarea#text").val()
		inTextArea = inTextArea.slice(0, -1);
		$("textarea#text").val(inTextArea);
	}
	function enter () {
		inTextArea = $("textarea#text").val()
		inTextArea = inTextArea + "\n";
		$("textarea#text").val(inTextArea);
	}

	function shiftall() {
		$(".keyboardButtons").find(".letter").each(function () {
			$(this).text($(this).text().toUpperCase());
			$(this).on('click', function () {
				$(".keyboardButtons").find(".letter").each(function () {
					$(this).text($(this).text().toLowerCase());
				});
			})
		});


	}
	function CAP() {
		
		$(".letter").toggleClass("uppercase");
		if ( $(".letter").hasClass("uppercase") ) {
			$(".letter").each(function () {
				$(this).text($(this).text().toUpperCase())
			})
		}else{
			$(".letter").each(function () {
				$(this).text($(this).text().toLowerCase())
			})
		}

	}




	$(".keyboardButtons").find("button").each(function () {
		$(this).on("click", function () { 
		id = $(this).attr("id");
		if (id == 'back') {
			back();
		}else if (id == 'Enter') {
			enter();
		}else if (id == 'shift') {
			shiftall();
		}else if (id == 'CAP') {
			CAP();
		} else if (id == 'tab') {
			addChar('\t');
		}else{
			addChar($(this).text());
		}
	 })
	})

})();