import Report from '../src/Report';
import Driver from '../src/Driver'
import Trip from '../src/Trip'
import {beforeEach, describe, expect, test} from "@jest/globals";

describe('Report', function () {
    let report;
    beforeEach(() => {
       report = new Report();
    });
    test('should construct with empty drivers array', function () {

        expect(report.drivers.length).toEqual(0);
    });

    test('addDriver should push driver to drivers array', function () {
        const name = 'name';
        const driver = new Driver(name);

        expect(report.drivers.length).toEqual(0);
        report.addDriver(driver);
        expect(report.drivers.length).toEqual(1);
        expect(report.drivers[0].name).toBe(name);
    });

    test('getDriver by name should get driver from drivers by name', function () {
        const name1 = "name1";
        const name2 = "name2";
        const driver1 = new Driver(name1);
        const driver2 = new Driver(name2);
        report.addDriver(driver1);
        report.addDriver(driver2);

        expect(report.getDriverByName(name1)).toBe(driver1);
        expect(report.getDriverByName(name2)).toBe(driver2);
    });

    describe('data management', function () {
        let driver1;
        let driver2;
        let driver3;

        beforeEach(() => {
            driver1 = new Driver("Lauren");
            driver2 = new Driver("Dan");
            driver3 = new Driver("Kumi");

            driver2.addTrip(new Trip('Dan', '07:15', '07:45', '17.3'));
            driver2.addTrip(new Trip('Dan', '06:12', '06:32', '21.8'));
            driver1.addTrip(new Trip('Lauren', '12:01', '13:16', '42.00'));

            report.addDriver(driver3);
            report.addDriver(driver2);
            report.addDriver(driver1);
        });

        test('sort should sort drivers from most miles driven to least ', function () {
            expect(report.drivers[0]).toBe(driver3);
            expect(report.drivers[1]).toBe(driver2);
            expect(report.drivers[2]).toBe(driver1);

            report.sort();

            expect(report.drivers[0]).toBe(driver1);
            expect(report.drivers[1]).toBe(driver2);
            expect(report.drivers[2]).toBe(driver3);
        });

        test('formatData should round miles, and average speeds to nearest integer', function () {
            report.formatData();

            expect(driver1.totalMiles).toEqual(42);
            expect(driver1.totalAverageSpeed).toEqual(34);
            expect(driver2.totalMiles).toEqual(39);
            expect(driver2.totalAverageSpeed).toEqual(47);
            expect(driver3.totalMiles).toEqual(0);
            expect(driver3.totalAverageSpeed).toEqual(0);
        });

        test('buildReport should build a report body from its data', function () {
            const expectedReport =
                "Lauren: 42 miles @ 34 mph\nDan: 39 miles @ 47 mph\nKumi: 0 miles\n";

            report.sort();
            report.formatData();
            const actualReport = report.buildReport();

            expect(actualReport).toBe(expectedReport);
        });
    })
});