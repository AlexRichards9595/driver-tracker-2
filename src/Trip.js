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

        const splitStartTime = this.startTime.split(":");
        let parsedStartTime = new Date();
        parsedStartTime.setHours(splitStartTime[0], splitStartTime[1], 0, 0);

        const splitEndTime = this.endTime.split(":");
        let parsedEndTime = new Date();
        parsedEndTime.setHours(splitEndTime[0], splitEndTime[1], 0, 0);

        return ((parsedEndTime.getTime() - parsedStartTime.getTime()) / MS_IN_HOUR);
    }

    calculateAverageSpeed () {
        return this.miles / this.duration;
    }
}

export default Trip;