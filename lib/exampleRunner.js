(function(exports) {

    var suite = new Suite();

    function example(result) {
        if(result.result == true) {
            suite.passAndFail[0] += 1;
        }
        else {
            suite.passAndFail[1] += 1;
        }
        suite.resultList.push(result);
    }
    function writeOutput() {
        document.write(writePageHtml(suite.resultList, suite.passAndFail));
    }
    exports.example = example;
    exports.writeOutput = writeOutput;
})(this);
