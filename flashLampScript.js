function FlashLamp(status, battery) {
    this.status = status;
    this.battery = battery;
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery;
    };
    this.light = function () {
        if (this.status) {
            alert('Lighting');
        } else {
            alert('Not lighting')
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    }
}