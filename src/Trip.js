class Trip  {
    constructor(name, startTime, endTime, miles){
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.miles = parseFloat(miles);
        this.duration = this.getDuration();
        this.averageSpeed = this.calculateAverageSpeed();
    }

    getDuration () {
        const MS_IN_HOUR = 3600000;
        let parsedStartTime = this.getTimeFromString(this.startTime);
        let parsedEndTime = this.getTimeFromString(this.endTime);
        return ((parsedEndTime.getTime() - parsedStartTime.getTime()) / MS_IN_HOUR);
    }

    getTimeFromString(time) {
        const splitTime = time.split(":");
        let parsedTime = new Date();
        parsedTime.setHours(splitTime[0], splitTime[1], 0, 0);
        return parsedTime;
    }

    calculateAverageSpeed () {
        return this.miles / this.duration;
    }
}

export default Trip;