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

    buildReport() {
        this.sort();
        this.formatData();
        let report = ``;

        for (let driver of this.drivers) {
            if (driver.totalMiles > 0) {
                report += `${driver.name}: ${driver.totalMiles} miles @ ${driver.totalAverageSpeed} mph\n`
            } else {
                report += `${driver.name}: 0 miles\n`
            }
        }
        return report;
    }
}

export default Report;