import {beforeEach, describe, expect, test} from "@jest/globals";
import {parseFile, readFile, writeFile} from './FileHandler';
import Driver from "../driver/Driver";
import Trip from "../trip/Trip";
import fs from 'fs';

jest.mock('fs');
describe('FileHandler', function () {
    beforeEach(() => {
        fs.writeFile.mockClear();
    });
    describe('parseFile', function () {
        test('should return an drivers and trips given strings that start with drivers and trips', function () {
            const lines = [
                "Driver Dan",
                "Driver Lauren",
                "Driver Kumi",
                "Trip Dan 07:15 07:45 17.3",
                "Trip Dan 06:12 06:32 21.8"
            ];

            const returnValue = parseFile(lines);

            expect(returnValue.drivers.length).toEqual(3);
            expect(returnValue.trips.length).toEqual(2);
            returnValue.drivers.forEach(x => {
                expect((x instanceof Driver)).toBe(true);
            });
            returnValue.trips.forEach(x => {
                expect((x instanceof Trip)).toBe(true);
            });
        });
    });

    describe('writeFile', function () {
        test('should call fs.writefile with the correct parameters', function () {
            const report = "fake report";

            const returnValue = writeFile(report);

            expect(fs.writeFile).toHaveBeenCalledWith("output.txt", report, expect.any(Function));
            expect(fs.writeFile).toHaveBeenCalledTimes(1);
        });
    });
});
