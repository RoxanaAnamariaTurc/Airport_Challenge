## Airport Challenge

### Project Objectives

Project aim is to create a test driven application that would satisfy all the user stories.

### Technologies Used

* Javascript

### Project Approach

Step 1 . Created all the domain model for the user stories provided
Step 2. Start to implement the tests based on an user story at a time
Step 3. Created the specRunner file and imported all tests to this file to be able to run them all from the same place




User story 1
Domain model
| Object  | Properties                  | Message      | Output  |
| ------- | --------------------------- | ------------ | ------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane) | @String |

User story 2
Domain model

| Object  | Properties                  | Message      | Output  |
| ------- | --------------------------- | ------------ | ------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane) | @String |
|         | capacity                    |              |         |

User story 3
Domain model

| Object  | Properties                  | Message      | Output   |
| ------- | --------------------------- | ------------ | -------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane) | @String  |
|         | capacity                    |              |          |
|         |                             | isFull()     | @boolean |


User story 4
Domain model

| Object  | Properties                  | Message      | Output   |
| ------- | --------------------------- | ------------ | -------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane) | @String  |
|         | capacity                    |              |          |
|         |                             | isFull()     | @boolean |
|         |                             | takeOff()    |          |

User story 5
Domain model

| Object  | Properties                  | Message         | Output               |
| ------- | --------------------------- | --------------- | -------------------- |
| Airport | listOfPlanes[@Array@planes] | land(@plane)    | @String              |
|         | capacity                    |                 |                      |
|         |                             | isFull()        | @boolean             |
|         |                             | takeOff(@plane) | @String or undefined |


### Getting Started

To install the project , fork this repository and clone it to your local machine;
Go to airport-challenge folder and find the src folder where the file airport.js is located, in this file is the code to be tested;
Next go to test folder and check the airport.spec.js file to see all the tests written;
You can then go back to the main folder airport-challenge and run the file specRunner.js to check that all tests are passing.

### Project Review
By working on this project and trying my best to accomplish the requirements I had the chance to practice test driven development and to improve my JS knowledge

### Potential Next Steps for the Project

Next steps could be to approach the extended criteria and maybe create a user interface for the project using front end libraries and frameworks
