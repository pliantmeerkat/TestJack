class Suite {
    constructor() {
        this.resultList = [];
        this.passAndFail = [0, 0];
    }

    

    writeOutput() {
        document.write(writePageHtml(this.resultList, this.passAndFail));
    };
}

(function(exports) {

    var suite = new Suite();

    function initialize() {

    }

    function example(result) {
        if(result.result == true) {
            suite.passAndFail[0] += 1;
        }
        else {
            suite.passAndFail[1] += 1;
        }
        suite.resultList.push(result);
    }
    exports.example = example;
})
