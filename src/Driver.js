class Driver {
    constructor (name){
        this.name = name;
        this.trips = [];
        this.totalMiles = 0;
        this.totalDuration = 0;
        this.totalAverageSpeed = 0;
    }

    addTrip (trip) {
        if (trip.averageSpeed > 5 && trip.averageSpeed < 100) {
            this.trips.push(trip);
            this.totalMiles += trip.miles;
            this.totalDuration += trip.duration;
            this.totalAverageSpeed = this.getTotalAverageSpeed();
        }
    }

    getTotalAverageSpeed () {
        return this.totalMiles / this.totalDuration;
    }
}

export default Driver;