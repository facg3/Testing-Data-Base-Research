##  What is mocking?

 - Mocking is a process used in unit testing when the unit being tested has external dependencies.  

 - The purpose of mocking is to focus on the code being tested and not on the behavior or state of external dependencies.

 - In mocking, the dependencies are replaced by closely controlled replacement objects that simulate the behavior of the real ones. 

 - There are three main types of replacement objects - stubs, fakes and mocks.

## Why would you mock a database and how does this help with testing?

- Because a mock object is easily created, set up and is quick. Moreover, it is deterministic and has an easily caused behavior. Most importantly, it is directly queriable.

## Mock objects are for writing unit tests

## Not integration tests, not system tests. But fast, code-covering, automated unit tests. You have to isolate the unit from other objects to make a unit test.

# Testing-Data-Base-Research

## What JavaScript / Node.js tools and freamworks are available for testing a database?  
### Tools
-  DB-MOCK : tool for database mocking .
-  pgTAP : Write tests in SQL .
-  PGtools : Testing tools for PostgreSQL.
-  Jasmine : Node package contains helper code for developing and Jasmine tests for node .

### Freamworks :
-  Mocha : Is a simple, flexible, fun JavaScript test framework for node.js and the browser .
-  Unit.js : Unit testing framework for Javascript .
