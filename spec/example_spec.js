/* example layout:
    top level block definition - eg describe
        
        variable declaration
        example 1
        example 2

*/

class TestSuite {

    constructor() {
        this.suite = new Suite();
        this.subject = new ExampleClass;
    }

    allTests() {

        this.suite.example(Core.isEqualTo(1, 1));
        this.suite.example(Core.isEqualTo(1, 2));


        this.suite.writeOutput();

    };
}