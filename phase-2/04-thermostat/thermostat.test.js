Thermostat = require('./thermostat');
describe('Thermostat', () => {
  it('returns the initial temperature value', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('increases and decreases the temperature', () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });
  it('unable to increase the temperature beyond max temperature as PSMode is on', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++ ) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });
  it('increases temperature beyond 25 as PSMode is off', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 6 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(26);
  });
  it('resets the temperature back to 20', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(30);
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});