describe("Example 1", () => {

	var subject = new ExampleClass();

	it("passes a test", () => {
		example(isEven(subject.isEvenNumber));
	});
	it("fails a test", () => {
		example(isOdd(subject.isEvenNumber));
	});
	it("is true", () => {
		example(isTrue(false));
	});
});
	