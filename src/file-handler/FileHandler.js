import fs from 'fs';
import Driver from '../driver/Driver.js';
import Trip from "../trip/Trip.js";

const readFile = () => {
    if (!process.argv[2]) {
        console.log('Please specify a file to read');
        process.exit();
    }

    const lines = fs.readFileSync(process.argv[2], 'utf-8')
        .split('\n');

    return parseFile(lines);
};

function parseFile(lines) {
    let data = {
        drivers: [],
        trips: []
    };

    lines.forEach(line => {
        const parsedLine = line.split(' ');
        if (parsedLine[0] === 'Driver') {
            data.drivers.push(new Driver(parsedLine[1]));
        } else if (parsedLine[0] === 'Trip') {
            data.trips.push(new Trip(parsedLine[1], parsedLine[2], parsedLine[3], parsedLine[4]));
        }
    });
    return data;
}


const writeFile = (report) => {
    fs.writeFile('output.txt', report, () => console.log("Report was written successfully"));
};

export { readFile, writeFile, parseFile };