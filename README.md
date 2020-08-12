# Driver Tracker

## Overview
Driver tracker tracks drivers. Given an input text that creates new drivers with "Driver [driver-name]" and
new trips with "Trip [driver] [start] [end] [miles]", it calculates the total miles driven for each driver and
their total mph and then orders them from most miles driven to the least. 
## Running the App
run `npm test` in the terminal to run all the tests.
  
run `npm run-script app [file path]` to run the app.  

If you don't specify an input file, it will prompt you to until you do. Once given the 
input file, it will create an output file called output.txt in the project folder with the report.
## Thought Process
After reading the instructions, it made the most sense to me to have the three classes detailed below and a couple 
helper functions to handle the input file. 

#### Report Class
This was to be the highest level class that is responsible for keeping track of all the drivers and then preparing the
data to be written out as a report in the output file.

#### Driver Class
This class was responsible for keeping track of all of it's own trips and calculating totals derived from all the
trips. All drivers would be stored in Report.drivers.

#### Trip Class
This was the lowest level of the classes and it was just responsible for keeping track of it's own data and doing a
couple of calculations on it. 

Reports keep track of all the drivers and each driver keeps track of its own trips.

## Development
Initially, I started out building the Report class since it had the least amount of calculations and thus seemed the
simplest. I quickly realized, however, that starting out with Report forced me to do a lot of integration type tests
much earlier than I wanted. So I restarted and began with the Trip class instead, building up from there. That allowed
me to put off wiring everything together until the end, which felt natural. After building out the classes, I just 
needed some helper functions to feed the contents from the input file into the app.  