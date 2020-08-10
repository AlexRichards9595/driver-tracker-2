import { Trip } from "./Trip";
import {describe, expect} from "@jest/globals";

describe('Trip', function () {

    test('constructor should return name and parsed miles', function () {
        const name = "name";
        const trip = new Trip(name, "07:15", "07:45", "17.3");

        expect(trip.name).toBe(name);
        expect(trip.miles).toBe(17.3);
        expect(trip.duration).toBe(.5);
    });
});