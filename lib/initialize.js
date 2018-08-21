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

//file creation and write

var writeSpecTemplate = function() {
	stream = fs.createWriteStream(path.resolve("../spec/example_spec.js"));
	stream.once("open", (fd) => {
		stream.write(["describe('*Write message here*', () => {",
			"  // var subject = *put source class here*;",
			"  it('this test will pass!', () => {" ,
			"    example(isTrue(true));",
			"  });",
			"\n  it('this test will fail!', () => {",
			"    	example(isFalse(true));",
			"  	 });", "});"].join("\n"));
		stream.end();
	});		
    
};

var wrtieSourceExample = function() {
	stream4 = fs.createWriteStream(path.resolve("../src/example.js"));
	stream4.once("open", (fd) => {
		stream4.write("// Write your class here!");
		stream4.end;
	});
};

var writeTestRunner = function() {
	stream2 = fs.createWriteStream(path.resolve("../testRunner.html"));
	stream2.once("open", (fd) => {
		stream2.write
		(["<!doctype html>",
			"	   <html lang='en'>",
			"	   <head>",
			"	 		<meta charset='utf-8'>",
			"	 		<title>Test Results</title>",
			" 			<meta name='TestJack' content='Test Results'>",
			" 			<meta name='author' content='Jack Branch'>",
			"	 		<link rel='stylesheet' href='/views/css/styles.css?v=1.0'>",
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

var writeStyleSheet = function() {
	stream3 = fs.createWriteStream(path.resolve("../views/css/styles.css"));
	stream3.once("open", (fd) => {
		stream3.write(
			"body {"+
			"	position: relative;"+
			"	background: #00F260;  /* fallback for old browsers */"+
			"	background: -webkit-linear-gradient(to right, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */"+
			"	background: linear-gradient(to right, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"+
			"}"+
			".singleResult {"+
			"	color: yellow;"+
			"	border-style: outset;"+
			"	width: 50%;"+
			"}");
		stream3.end();
	});
};

// function excecution

mkdirSync(path.resolve('../spec'));
mkdirSync(path.resolve('../src'));
mkdirSync(path.resolve('../views'));
mkdirSync(path.resolve('../views/css'));

writeSpecTemplate();
wrtieSourceExample();
writeTestRunner();
writeStyleSheet();
