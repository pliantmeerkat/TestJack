# TestJack

## Instllation

### Dependancies

```
  - Node js
  - Any web browser
```

### Setting up

To set up TestJack first clone or download this repo, then simply copy the *lib* directory to your project directory. in order to setup the full directory run the command ` npm initialize.js ` from within the lib directory. this will then create the appropriate files/ directories required to begin running/ creating tests.

## Running Tests

In order to run the testing suite simply open *testRunner.html* in your browser of choice, the output wll then display directly within your browser. in order to add testing files, tag the spec files **and** source files in the correct place in testRunner (marked by the comment `<!-- enter srec/ source files here -->`.

## Library Functions

In order to create a spec first enclose the tests in a `describe` block, then wrap each test example within an `it` block like so:

  ```
    describe("a test suite", () => {
    
      it("a test", () => {
        example(isTrue(true));
      });
      
      // next example ...
    
    });
  ```

Below i will briefly list the built in matcher's/ assertians. to use these please follow the syntax used in the example spec file, created by running the *npm initialize.js* command.

```
  IsEqualTo(test, compare)
  isGreaterThan(test, compare)
  isLessThan(test, compare)
  isOdd(test)
  isEven(test)
  isTrue(test)
  isFalse(test)
  isEmpty(test)
  isInteger(test)
  isNumber(test)
  isNull(test)
  errorThrown(expectedMessage, foo)
```

## Adding to the Library

I have purposly kept the core functions simple/ easy to add to, adding a new matcher simply requires a new function to be added to the `coreFunctions.js` file. Anyone who wishes to add to the library is free to do so.
