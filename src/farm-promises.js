function findCow() {
  return new Promise((resolve, reject) => {
    const cow = {
      name: 'Marguerite',
    };
    resolve(cow);
  });
}

function milkCow(cow) {
  console.log(`milking ${cow}`);
  return new Promise((resolve, reject) => {
    const milk = {
      color: 'white',
    };
    resolve(milk);
  });
}

function transformMilk(milk) {
  console.log(`transform ${milk}`);
  return new Promise((resolve, reject) => {
    const cheese = {
      kind: 'Gruyères',
    };
    resolve(cheese);
  });
}

class Farm {
  constructor() {
    this.name = 'undefined';
  }
  getCheese() {
    const that = this;
    return findCow()
      .then((cow) => {
        const promiseOfMilk = milkCow(cow);
        return promiseOfMilk;
      })
      .then((milk) => {
        const promiseOfCheese = transformMilk(milk);
        return promiseOfCheese;
      })
      .then((cheese) => {
        const finalCheese = cheese;
        finalCheese.producer = this;
        return finalCheese;
      });
  }
}

module.exports = Farm;
