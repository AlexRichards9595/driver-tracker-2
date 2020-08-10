import { Report } from './Report';
import { Driver } from '../driver/Driver'
import { Trip } from '../trip/Trip'
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

    test('sortDriver should sort drivers from most miles driven to least ', function () {
        const driver1 = new Driver("driver 1");
        const driver2 = new Driver("driver 2");
        const driver3 = new Driver("driver 3");

        driver1.addTrip(new Trip("driver 1", "7:45", '8:45', 10));
        driver2.addTrip(new Trip("driver 2", "7:45", '8:45', 20));
        driver3.addTrip(new Trip("driver 3", "7:45", '8:45', 30));

        report.addDriver(driver1);
        report.addDriver(driver2);
        report.addDriver(driver3);

        expect(report.drivers[0]).toBe(driver1);
        expect(report.drivers[1]).toBe(driver2);
        expect(report.drivers[2]).toBe(driver3);

        report.sort();

        expect(report.drivers[0]).toBe(driver3);
        expect(report.drivers[1]).toBe(driver2);
        expect(report.drivers[2]).toBe(driver1);
    });

    test('formatData should round miles, and average speeds to nearest integer', function () {
        const driver1 = new Driver("driver 1");
        const driver2 = new Driver("driver 2");

        driver1.addTrip(new Trip("driver 1", "7:45", '8:45', 10.6));
        driver2.addTrip(new Trip("driver 2", "7:45", '9:45', 20.3));

        report.addDriver(driver1);
        report.addDriver(driver2);

        report.formatData();

        expect(driver1.totalMiles).toEqual(11);
        expect(driver1.totalAverageSpeed).toEqual(11);
        expect(driver2.totalMiles).toEqual(20);
        expect(driver2.totalAverageSpeed).toEqual(10);
    });
});