class Result {
	constructor(passOrFail, testText) {
		this.result = passOrFail;
		try {
			if(!passOrFail) {
				throw new Error(testText);
			}
			this.text = testText;
		} catch(err) {
			this.text = `${testText} <br> ${err.stack}`;
		}
	}
}
