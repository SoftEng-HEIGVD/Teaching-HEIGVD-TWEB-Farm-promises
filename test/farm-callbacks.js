const should = require('chai').should();
const Farm = require('../src/farm-callbacks');

describe('Farm', () => {
  it('should allow me to get cheese', (done) => {
    const farm = new Farm();
    farm.getCheese((cheese) => {
      console.log('I have received cheese');
      should.exist(cheese);
      done();
    });
  });
});
