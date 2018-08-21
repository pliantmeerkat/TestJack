
class TestSuite {

	constructor() {
		this.suite = new Suite();
		this.subject = new ExampleClass;
	}

	errorFunction() {
		throw new Error ("Test error");
	}

	noErrorFunction() {
		return 0;
	}

	allTests() {

		// persistence checks : subj should have same var value at the end of file
		example(isEqualTo(this.subject.isOne, 1));
		this.subject.isOne = 2;
		example(isEqualTo(this.subject.isOne, 2));
		example(isGreaterThan(this.subject.isOne, 2));
		example(isGreaterThan(2, this.subject.isOne));
		example(isEven(1));
		example(isEven(2));
		example(isEmpty([]));
		example(isEmpty([1, 2, 3]));
		example(isNumber(12));
		example(isInteger(12));
		example(isNumber("hekli"));
		example(isNumber("11"));
		example(isInteger("11"));
		example(isNull(null));
		example(isNull(11));
		example(errorThrown("Test error", this.errorFunction));
		example(errorThrown("Test error", this.noErrorFunction));
		example(isClass(11, String));
		example(isClass(this.subject, ExampleClass));
		//example(respondsTo())


		// persistance test
		example(isEqualTo(this.subject.isOne, 1));
		writeOutput();

	}
}