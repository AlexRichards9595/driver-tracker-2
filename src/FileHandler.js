import fs from 'fs';
import Driver from './Driver.js';
import Trip from "./Trip.js";

const getLinesFromFile = () => {
    if (!process.argv[2]) {
        console.log('Please specify a file to read');
        process.exit();
    }

    return  fs.readFileSync(process.argv[2], 'utf-8').split('\n');
};

function parseLines(lines) {
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

export { getLinesFromFile, writeFile, parseLines };