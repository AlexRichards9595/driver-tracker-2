class Report {
    constructor () {
        this.drivers = [];
    }

    addDriver(driver) {
        this.drivers.push(driver);
    }

    getDriverByName(name) {
        return this.drivers.find(x => x.name === name);
    }

    sort() {
        this.drivers.sort((x, y) => y.totalMiles - x.totalMiles);
    }

    formatData() {
        this.drivers.forEach(x => {
            return x.totalMiles = Math.round(x.totalMiles);
        });
        this.drivers.forEach(x => {
            return x.totalAverageSpeed = Math.round(x.totalAverageSpeed);
        });
    }
}

module.exports = { Report };