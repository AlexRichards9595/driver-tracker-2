import {writeFile, parseLines, getLinesFromFile} from "../src/FileHandler";
import {beforeEach, describe, expect, jest, test} from "@jest/globals";
import { run } from "../src/App";
import Report from "../src/Report";
import Driver from "../src/Driver";
import Trip from "../src/Trip";

jest.mock('../src/FileHandler');
jest.mock('../src/Report');
jest.mock('../src/Driver');
jest.mock('../src/Trip');

describe('App', function () {
    describe('given good data', function () {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        const driver1 =  new Driver("name" );
        const driver2 =  new Driver("name2" );
        const fakeLines = ["Driver Dan"];
        const fakeReport = "build report";
        getLinesFromFile.mockImplementation(() => fakeLines);
        parseLines.mockImplementation(() => {return {
            drivers : [
                driver1,
                driver2],
            trips : [
                new Trip("name", "","", 0),
                new Trip("name", "","", 0)]}});
        Report.prototype.getDriverByName.mockImplementation(() => driver1);
        Report.prototype.buildReport.mockImplementation(() => fakeReport);

        test('should call parseLines with what getLinesFromFile returns', function () {
            run();

            expect(parseLines).toHaveBeenCalledWith(fakeLines);
        });
        test('should add drivers to report', function () {
            run();

            expect(Report.mock.instances[0].addDriver).toHaveBeenCalledTimes(2);
        });
        test('should add trips to drivers', function () {
             run();

            expect(driver1.addTrip).toHaveBeenCalledTimes(2);
        });
        test('should call writeFile with the built report', function () {
            run();

            expect(writeFile).toHaveBeenCalledWith(fakeReport);
        });
    });
});