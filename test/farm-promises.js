const should = require('chai').should();
const Farm = require('../src/farm-promises');

describe('Farm', () => {
  it('should allow me to get cheese', (done) => {
    const farm = new Farm();
    farm.getCheese()
      .then((cheese) => {
        console.log('I have received cheese');
        should.exist(cheese);
        done();
      }, (error) => {
        should.not.exist(error);
      });

  });
});
