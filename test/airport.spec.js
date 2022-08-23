const Airport = require("../src/airport");
const { assertEquals } = require("./test-framework");

//User story 1
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct the airport to land a plane


//Arrange
//Test 1 - I want to land a plane and added it to the listOfPlanes in the Airport and log its name
console.log(`==== test 1 ====`);
let testName = `Test 1 - land a plane`;
let input = `a-123`;
let expectedOutput = `a-123`;

//Act
let testAirport = new Airport();
let actualOutput = testAirport.land(input)

//Assert

let result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);



//User story 2
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

//Arrange
//Test 2 - I want to add a capacity for Airport
console.log(`==== test 2 ====`);
testName = `Test 2 - add a capacity`;
expectedOutput = 10;

//Act
testAirport = new Airport(10);
actualOutput = testAirport.capacity;

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//User story 3
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full

//Arrange
//Test 3 - I want to prevent landing of a plane if the airport is full

console.log(`===Test 3 ===`)
testName = `Test 3 - prevent landing if capacity at full`;
expectedOutput = true;

//Act
testAirport = new Airport(1);
testAirport.land(`a-234`)
actualOutput = testAirport.isFull();

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//Test 4 - I want to prevent landing of a plane if the airport is full

console.log(`=== Test 4 ===`)
testName = `Test 4 - prevent landing if capacity at full when 2 planes are trying to land`;
expectedOutput = `Airport is full`;

//Act
testAirport = new Airport(1);
testAirport.land(`a-234`)
actualOutput = testAirport.land(`a-235`)


//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//User story 4
// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport


//Arrange
//Test 5 - allow plane to take off if at the airport

console.log(`=== Test 5  ===`);

//Act
testName = `Test 5 - allow plane to take off if at the airport`;
//Act
testAirport = new Airport(5);
expectedOutput = 2;
testAirport.land(`a100`);
testAirport.land(`a101`);
testAirport.land(`a102`);
testAirport.takeOff(`a101`);
actualOutput = testAirport.listOfPlanes.length;

//Report

result = assertEquals(expectedOutput, actualOutput);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


//User story 5
// As an air traffic controller
// To avoid confusion
// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

//Arrange
//Test 6 - I want to tell the airport that a plane has already landed if trying to ask to land again

console.log(`=== Test 6  ===`);
testName = `Test 6 - advise airport plane already landed`;
//Act

testAirport = new Airport(1);
testAirport.land(`a-123`);
expectedOutput = `Plane already landed`
actualOutput = testAirport.land(`a-123`);

//Assert

result = assertEquals(expectedOutput, actualOutput);

//Report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);




//Arrange
//Test 7 - prevent plane to take off if not at the airport

console.log(`=== Test 7 ===`);

testName = `Test 7 - prevent plane to take off if not at the airport`;


//Act
testAirport = new Airport(2);
expectedOutput = `Plane not at the airport`;
testAirport.land(`a100`);
testAirport.land(`a101`);
actualOutput = testAirport.takeOff(`a99`);

//Assert

result = assertEquals(actualOutput, expectedOutput);

//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
