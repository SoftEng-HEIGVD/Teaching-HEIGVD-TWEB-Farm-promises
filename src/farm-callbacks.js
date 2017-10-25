function findCow(cowIsAvailable) {
  const cow = {
    name: 'Marguerite',
  };
  cowIsAvailable(cow);
}

function milkCow(cow, milkIsReady) {
  const milk = {
    color: 'white',
  };
  milkIsReady(milk);
}

function transformMilk(milk, cheeseIsReady) {
  const cheese = {
    kind: 'Gruyères',
  };
  cheeseIsReady(cheese);
}

class Farm {
  constructor() {
    this.name = 'undefined';
  }
  getCheese(cheeseIsAvailable) {
    findCow((cow) => {
      milkCow(cow, (milk) => {
        transformMilk(milk, (cheese) => {
          const finalCheese = cheese;
          finalCheese.producer = this;
          cheeseIsAvailable(finalCheese);
        });
      });
    });
  }
}

module.exports = Farm;
