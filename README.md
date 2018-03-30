#### An application that returns beep, boop, or funny phrases based on user input. 3/30/18

#### By **Cameron Button**

## Description

A website created with C# and HTML where a user can submit a word and determine its raw Scrabble score.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| spec | 0 | beep |
| spec | 1 | beep boop |
| spec | 2 | beep boop 2 |
| spec | 3 | "I'm sorry, Dave.  I'm afraid I can't do that." |
| spec | 10 | beep boop 2 "Sorry" 4 5 "Sorry" 7 8 "Sorry" boop |
| spec | 11 | boop |
| spec | 15 | "I'm sorry, Dave.  I'm afraid I can't do that." |
| spec | 20 | beep boop 2 "Sorry" 4 5 "Sorry" 7 8 "Sorry" boop boop boop boop boop "Sorry" boop boop "Sorry" boop beep |

## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Cameron Button}_**
