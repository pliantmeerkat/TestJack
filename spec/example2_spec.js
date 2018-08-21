describe("Example 2", () => {

	var subject = new ExampleClass();

	it("passes a test", () => {
		example(isEven(subject.isEvenNumber));
	});
	it("fails another test", () => {
		example(isFalse(true));
	});
	it("is false", () => {
		example(isFalse(false));
	});
});
	