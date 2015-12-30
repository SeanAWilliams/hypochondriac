/**
 * Created by william on 12/6/2015.
 */

var test = require('unit.js');

describe('Yay we are learning', function (){

	it("works?", function (){
		console.log("you're mother is a hamster, and you're father smells of elderberries ");
		var questions = {
			q1: $('#1').is(":checked"),
			q2: $('#2').is(":checked"),
			q3: $('#3').is(":checked")
		};
		console.log(questions);


		$.ajax({
			url: "api/questionnaire",
			type: "post",
			dataType: "json",
			data: JSON.stringify(questions),
			contentType: "application/json",
			success: function (data) {
				displayAlert(data);
			}
		});
        test.assert(true);
	});

});
