"use strict";
// clicking the 'new' button will display fields to create a new list item
$('.new-item').click(function () {
	$('.save-item').show();
	$('.new-item-text').show();
	$('.create-new-item ul').show();
	$('.new-item').hide();
});


$('.save-item').click( function() {
	var val = [];
	// checks for a value in input field and makes sure a box is checked before saving
	if ($('.new-item-text').val() !== '' && $('input:checkbox:checked').length > 0 ){
		// the saved value will be equal to whatever is entered in the text box
		var text = $('.new-item-text').val();
		// for each checkbox that is checked, add its value to an array named val
		$('input:checkbox:checked').each(function(i){
			return val[i] = $(this).val();
		});
		// for each item in the array check it's value against the following if/else statement to see which
		// collection should be added to
		_.each(val, function (x) {
			if (x === 'saveOne') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionOne.add(createItem);
			}

			else if (x === 'saveTwo') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionTwo.add(createItem);
			}

			else if (x === 'saveThree') {
				var createItem = new Mover.Models.List({'item': text});
				Mover.collections.collectionThree.add(createItem);
			}
		});
	// uncheck all check boxes, reset the text field to blank and hide the editing elements	
	$('input:checkbox:checked').attr('checked', false)
	$('.new-item-text').val('');
	$('.save-item').hide();
	$('.new-item-text').hide();
	$('.create-new-item ul').hide();
	$('.new-item').show();

	}
	else {
		alert("You must add a new list item and select a list to add the item to before saving");
	}
});



