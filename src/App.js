import { getLinesFromFile, writeFile, parseLines } from './FileHandler.js';
import Report from './Report.js';

const run = () => {
    console.log("did this run");
    const report = new Report();
    const data = parseLines(getLinesFromFile());
    data.drivers.forEach(driver => report.addDriver(driver));
    data.trips.forEach(trip => report.getDriverByName(trip.name).addTrip(trip));
    const output = report.buildReport();
    writeFile(output);
};

export { run };