(function(exports) {

	var result;
	var message;

	function isEqualTo(test, compare) {
		result = test === compare ? true : false;
		message =  "Expected " + test + " to equal " + compare;
		return new Result(result, message);
	}
	function isGreaterThan(test, compare) {
		result = test > compare ? true : false;
		message =  "Expected " + test + " to be greater than " + compare;
		return new Result(result, message);
	}
	function isLessThan(test, compare) {
		result = test < compare ? true : false;
		message =  "Expected " + test + " to be less than " + compare;
		return new Result(result, message);
	}
	function isOdd(test) {
		result = test % 2 != 0 ? true : false;
		message =  "Expected " + test + " to be odd ";
		return new Result(result, message);
	}
	function isEven(test) {
		result = test % 2 == 0 ? true : false;
		message =  "Expected " + test + " to be even ";
		return new Result(result, message);
	}
	function isEmpty(test) {
		result = test.length == 0 ? true : false;
		message =  "Expected " + test + " to be empty ";
		return new Result(result, message);
	}
	function isInteger(test) {
		result = parseInt(parseFloat(test)) === test ? true : false;
		message =  "Expected " + test + " to be an Integer ";
		return new Result(result, message);
	}
	function isNumber(test) {
		result = parseInt(parseFloat(test)) == test ? true : false;
		message =  "Expected " + test + " to be a number ";
		return new Result(result, message);
	}
	function respondsTo(obj, func) {

	}
	function isClass(test, testClass) {
		result = test instanceof testClass ? true : false;
		message =  `Expected  ${typeof(test)} to be a ${typeof(testClass)} `;
		return new Result(result, message);
	}
	function isArray(test) {

	}
	function isNull(test) {
		result = test === null ? true : false;
		message =  "Expected " + test + " to be null ";
		return new Result(result, message);
	}
	function errorThrown(expectedMessage, func) {
		result;
		message;
		try {
			func();
		} catch(err){
			if(err.message == expectedMessage) {
				result = true; 
				message =  "Exception thrown and message match";
			}
			else {
				result = false; 
				message =  "Exception thrown with wrong message: " + err.message + " " + expectedMessage;
			}
			return new Result(result, message);
		}
		return new Result(false, "No exception thrown");       
	}

	function writeExample(result) {
		var color = result.result == true ? "green" : "red";
		return ("<div class='singleResult' style='background-color:" + color + ";' align='center'>"+
				"<li>" +
				result.text +
				"</li>" +
				"</div>");
	}

	function writePageHtml(resultList, passAndFail) {

		var resultOutput = "";

		for(var i = 0; i < resultList.length; i ++) {
			resultOutput += this.writeExample(resultList[i]);
		}

		return ("<div class='Page' id='PageId'>" +
				"<div class='TestResultclass' id='ResultsDiv'>" +
				"<h1 class='ResultTitleClass' id='ResultTitleHead'> <p> Results: </p> </h1>" +
				"<h2>" +
				"<div style='color: green;'>" + passAndFail[0] + " Passes </div>" + 
				"<div style='color: red;'>" + passAndFail[1] + " Faliures </div>" +
				"</h2>" +
				resultOutput +
				"</div>" +
				"</div>");
	}

	exports.isEqualTo = isEqualTo;
	exports.isGreaterThan = isGreaterThan;
	exports.isLessThan = isLessThan;
	exports.isEven = isEven;
	exports.isOdd = isOdd;
	exports.isEmpty = isEmpty;
	exports.isNumber = isNumber;
	exports.isInteger = isInteger;
	exports.isNull = isNull;
	exports.errorThrown = errorThrown;
	exports.isClass = isClass;
	exports.writeExample = writeExample;
	exports.writePageHtml = writePageHtml;

})(this);
