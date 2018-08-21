(function(exports) {

	var suite = new TestSuite();

	function _resetSuite() {
		suite = new TestSuite();
	}

	function example(result) {
		if(result.result == true) {
			suite.passAndFail[0] += 1;
		}
		else {
			suite.passAndFail[1] += 1;
		}
		document.write(writeExample(result));
		suite.resultList.push(result);
	}
	function writeOutput() {
		document.write(writeResults(suite.passAndFail));
		_resetSuite();
	}
	exports.example = example;
	exports.writeOutput = writeOutput;
})(this);
