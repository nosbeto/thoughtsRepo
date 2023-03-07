# InquirerSQL

## Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Credits](#credits)
- [License](#license)

## Prerequisites
* Since this is a node.js app, you will need to install node.js in your laptop.  
    * Download the latest version of node.js here --> https://nodejs.org/en/download/  
* After node.js has been installed on your machine, you will need to install npm.  
    * Follow the steps in the following website to install npm --> https://docs.npmjs.com/cli/v9/commands/npm-install?v=true  
* You will also need to have installed mongoDB and have a mongo server running. 
    * Follow the steps in the following website to install mongo --> https://www.mongodb.com/docs/manual/installation/
* Configure your mongo connection 

This is a non-inclusive list of some of the packages that will be installed when you run npm.
* console.table
* dotenv
* mongoose

Once those two prerequisites have been installed on your laptop proceed to the Installation steps

## Installation
1) Clone or download the ZIP to your local repository
2) Open a CLI terminal
3) Navigate to your <code>thoughtsRepo</code> folder 
4) Run the following command to install the necessary npm packages:
    <pre>npm i</pre>
4) Start the application by running the <code>server.js</code> with the following command:
    <pre>nodemon server.js</pre>
6) Start hitting your mongoDB via a restfulAPI!

## Usage 
This code can be used as an starting point for developers who are investigating how to craete a non relational database to handle a social network web application


## Endpoints
For each user, the following requests are available to you:

### User Routes
| Request | Endpoint | Description | 
| ------------- | ------------- | ------------- |
| `GET` | /api/user/ | Sends a GET request to return all user's information|
| `GET` | /api/user/***`<userId>`*** | Sends a GET request to return data about a specific <code>user</code>|
| `POST` | /api/user/ | Sends a POST request to create a new entry in the <code>user</code> collection (creates a new user)|
| `PUT` | /api/user/***`<userId>`*** | Sends a PUT request to update a specific entry in the <code>user</code> collection |
| `POST` | /api/user/***`<userId>`***/friends/***`<userId>`*** | Sends a PUT request to update a specific entry in the <code>user</code> collection |
| `DELETE` | /api/user/***`<userId>`***  | Sends a DELETE request to remove a specific entry in the <code>user</code> collection|
| `DELETE` | /api/user/***`<userId>`***/friends/***`<userId>`***| Sends a DELETE request to remove a specific entry in the <code>user</code> collection. It removes a friend for a specific user |

[User Routes.webm](https://user-images.githubusercontent.com/114036566/223317737-90301345-e575-4514-bad1-1fd07a1ddb2b.webm)


### Thought Routes
| Request | Endpoint | Description | 
| ------------- | ------------- | ------------- |
| `GET` | /api/thoughts/ | Sends a GET request to return all thoughts|
| `GET` | /api/thoughts/***`<thoughtId>`***/ | Sends a GET request to return data about a specific <code>thought</code>|
| `POST` | /api/thoughts/ | Sends a POST request to create a new entry in the <code>thought</code> collection. It needs the username of who is creating the thought in the body|
| `PUT` | /api/thoughts/***`<thoughtId>`*** | Sends a PUT request to update a specific entry in the <code>thoughts</code> collection |
| `POST` | /api/thoughts/***`<thoughtId>`***/reactions | Sends a POST request to create a new reaction entry for a specific <code>thought</code>. It needs the username of who is creating the reaction in the body|
| `DELETE` | /api/thoughts/***`<thoughtId>`***| Sends a DELETE request to remove a specific entry in the <code>thoughts</code> collection |

[Thought Routes.webm](https://user-images.githubusercontent.com/114036566/223317777-5dc1b715-dee8-4298-938d-61b26efb86f9.webm)

https://drive.google.com/file/d/1GL_SgT_bUGHPL1gsx-wZyXjHqouqC6Z7/view
https://drive.google.com/file/d/19dpUkIYrNwUBhoBAr2_mFxm4Sja9mSrf/view

## Credits
* Me
* Myself
* I

Alberto De Armas --> https://github.com/nosbeto

## License

MIT License

Copyright (c) [2023] [Alberto De Armas]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
