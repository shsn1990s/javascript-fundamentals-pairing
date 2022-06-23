class Thermostat {

  constructor (){
    this.temperature = 20;
    // Power saving mode.
    this.psm = false;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.psm == true && this.temperature < 25 || this.psm == false) { 
      this.temperature ++; 
    }
  }

  down () {
    this.temperature --;
  }

  setPowerSavingMode(mode){
    this.psm = mode;
  }

  reset() {
    this.temperature = 20;
  }

}

module.exports = Thermostat;