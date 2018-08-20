class Suite {
    constructor() {
        this.resultList = [];
    }

    example(result) {
        this.resultList.push(result);
    }

    writeOutput() {
        document.write(Core.writePageHtml(this.resultList));
    };
}