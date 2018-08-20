class Core {

    constructor(suite) {
        // random set?
    }

    static isEqualTo(test, compare) {
        var result = test === compare ? true : false;
        return new Result(result, result == true ? "Is Equal" : "Not Equal");
    }
    static isGreaterThan(test, compare) {
    
    }
    static isLessThan(test, compare) {
    
    }
    static isOdd(test) {
    
    }
    static isEven(test) {
    
    }
    static isEmpty(test) {
    
    }
    static isInteger(test) {
    
    }
    static isString(test) {
    
    }
    static isArray(test) {
    
    }
    static isNull(test) {
    
    }
    static errorThrown(test_function) {
    
    }

    static writeExample(result) {
        var color = result.result == true ? "green" : "red";
        return ("<div class='singleResult' style='background-color:" + color + "'>"+
                "<p>" +
                result.text +
                "</p>");
    }

    static writePageHtml(resultList) {

        var resultOutput = "";

        for(var i = 0; i < resultList.length; i ++) {
            resultOutput += this.writeExample(resultList[i]);
        }

        return ("<div class='Page' id='PageId'>" +
                "<div class='TestResultclass' id='ResultsDiv'>" +
                "<h1 class='ResultTitleClass' id='ResultTitleHead'>Results:</h1>" +
                resultOutput +
                "</div>" +
                "</div>");
    }
}
