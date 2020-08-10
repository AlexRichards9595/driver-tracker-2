import { Driver } from './Driver'
import {beforeEach, describe, expect} from "@jest/globals";
import { Trip } from "../trip/Trip";

describe('Driver', function () {
    test('should construct with name and an empty trips array', function () {
        const name = "name";
        const driver = new Driver(name);

        expect(driver.name).toBe(name);
        expect(driver.trips.length).toEqual(0);
        expect(driver.totalMiles).toEqual(0);
    });

    test('getTotalAverage speed should get the average speed from the total duration and miles', function () {
        const driver = new Driver("name");
        driver.addTrip(new Trip("name", "7:45", "8:45", "40"));
        expect(driver.totalAverageSpeed).toEqual(40);
        driver.addTrip(new Trip("name", "7:45", "10:45", "20"));

        expect(driver.totalAverageSpeed).toEqual(15);
    });
    describe('addTrip', function () {
        let driver;
        let trip1;
        let trip2;
        beforeEach( () => {
            trip1 = new Trip("name1", "7:15", "8:15", "25");
            trip2 = new Trip("name1", "7:15", "9:15", "35");
            driver = new Driver("name1");
        });

        test('addTrip should push a trip in the trips array', function () {
            driver.addTrip(trip1);
            driver.addTrip(trip2);

            expect(driver.trips.length).toEqual(2);
            expect(driver.trips[0]).toBe(trip1);
            expect(driver.trips[1]).toBe(trip2);
        });
        test('should add the trip miles to the drivers total miles', function () {
            expect(driver.totalMiles).toEqual(0);
            driver.addTrip(trip1);
            expect(driver.totalMiles).toEqual(25);
            driver.addTrip(trip2);
            expect(driver.totalMiles).toEqual(60);
        });
        test('should add the trip miles to the drivers total miles', function () {
            expect(driver.totalDuration).toEqual(0);
            driver.addTrip(trip1);
            expect(driver.totalDuration).toEqual(1);
            driver.addTrip(trip2);
            expect(driver.totalDuration).toEqual(3);
        });
        test('should ignore a trip if average speed is less than 5', function () {
            driver.addTrip(new Trip("name1", "7:45", "8:45", "4"));

            expect(driver.trips.length).toBe(0);
            expect(driver.totalDuration).toBe(0);
            expect(driver.totalMiles).toBe(0);
        });
        test('should ignore a trip if average speed is more than 100', function () {
            driver.addTrip(new Trip("name1", "7:45", "8:45", "100"));

            expect(driver.trips.length).toBe(0);
            expect(driver.totalDuration).toBe(0);
            expect(driver.totalMiles).toBe(0);
        });
    });
});