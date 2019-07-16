function FlashLamp() {
    this.status = false;
    this.battery = Battery;
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert('Lighting');
            this.battery.decreaseEnergy();
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