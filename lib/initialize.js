// initializer script

// create src and spec folders
const fs = require('fs');
const path = require('path');
var stream;

const mkdirSync = function(dirPath) {
	try {
		fs.mkdirSync(dirPath);
	} catch(err) {
		if(err.code !== "EEXIST") throw err;
	}
}

// file creation and write

var writeFileSync = function(fileDir, filename) {
	try {
		fs.writeFileSync(fileDir);
		console.log("file created succesfuly");
	} catch(err) {
		if(err.code !== 'EEXIST') throw err;
	}
};

var writeSpecTemplate = function() {
	stream = fs.createWriteStream(path.resolve("../spec/example_spec.js"));
	stream.once("open", (fd) => {
		stream.write(["class TestSuite {",
			"  constructor() {",
			"    this.suite = new Suite();" +
			"    // add your source class here: this.subject = new *your class*;",
			"  }",
			"\n  allTests() {",
            "  // write your tests here... ",
            "  }",
			"\n\n  writeOutput(); // this writes the test output to your browser",
			"};",
        ].join("\n"));
        stream.end();
    });		
    
};

var writeTestRunner = function() {
	stream2 = fs.createWriteStream(path.resolve("../views/testRunner.html"));
	stream2.once("open", (fd) => {
		stream2.write
		(["<!doctype html>",
			"	   <html lang='en'>",
			"	   <head>",
			"	 		<meta charset='utf-8'>",
			"	 		<title>Test Results</title>",
			" 			<meta name='TestJack' content='Test Results'>",
			" 			<meta name='author' content='Jack Branch'>",
			"	 		<link rel='stylesheet' href='css/styles.css?v=1.0'>",
			"	 </head>",
			"	 <body>",
			"			 <div align='center'>",
			"					<script src='../lib/coreFunctions.js'></script>",
			"					<script src='../lib//result.js'></script>",
			"					<script src='../lib/suite.js'></script>",
			"					<script src='../lib/exampleRunner.js'></script>",
			"					<!-- enter srec/ source files here -->",
			"					<script src='../src/example.js'></script>",
			"					<script src='../spec/example_spec.js'></script>",
			"					<!--                               -->",
			"					 <script src='../lib/main.js'></script>",
			"		 </div>",
			" 	 </body>",
			"</html>"].join("\n"));
		stream2.end();
	});
};

// function excecution

mkdirSync(path.resolve('../spec'));
mkdirSync(path.resolve('../src'));
mkdirSync(path.resolve('../views'));

writeFileSync(path.resolve('../src/', "example.js"));

writeSpecTemplate();
writeTestRunner();
