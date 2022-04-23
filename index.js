// Homework 2
// Roman Kulyk

/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Dish {
  constructor(cookingTime) {
    this.cookingTime = cookingTime;
  }

  async cook() {
    const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
    await wait(actualCookingTime);
    return this;
  }
}
/* DONT CHANGE THIS CODE - END */

class Ingridient {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}
class Bolognese extends Dish {
  constructor() {
    super(10);
    this.ingridients = {
      spaghetti: 1,
      tomato: 1,
    };
  }
}

class MashedPotatoes extends Dish {
  constructor() {
    super(8);
    this.ingridients = {
      potato: 1,
    };
  }
}

class Steak extends Dish {
  constructor() {
    super(7);
    this.ingridients = {
      meat: 2,
    };
  }
}

class SteakAndFries extends Dish {
  constructor() {
    super(12);
    this.ingridients = {
      meat: 2,
      potato: 1,
    };
  }
}
class Kitchen {
  constructor() {
    this.fridge = {};
    this.orders = new Array();
  }

  addToFridge(ingridients) {
    ingridients.forEach((ingridient) => {
      if (ingridient.name in this.fridge) {
        this.fridge[ingridient.name] += ingridient.amount;
      } else {
        this.fridge[ingridient.name] = ingridient.amount;
      }
    });
  }

  order(dish) {
    for (const [name, amount] of Object.entries(dish.ingridients)) {
      if (name in this.fridge) {
        if (this.fridge[name] - amount >= 0) {
          this.fridge[name] -= amount;
        } else {
          throw "Not enough ingridients in fridge";
        }
      }
    }
    this.orders.push(dish);
  }

  async cookFastestOrder() {
    let fastestDish = this.orders[0];
    this.orders.forEach((dish) => {
      if (dish.cookingTime < fastestDish.cookingTime) {
        fastestDish = dish;
      }
    });
    this.orders = this.orders.filter((e) => e !== fastestDish);
    await fastestDish.cook();
    return fastestDish;
  }

  async cookAllOrders() {
    for (const order of this.orders) {
      await order.cook();
    }
    let allOrders = this.orders;
    this.orders = new Array();
    return allOrders;
  }
}

async function test() {
  try {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
      new Ingridient("potato", 1),
      new Ingridient("spaghetti", 1),
      new Ingridient("meat", 3),
      new Ingridient("tomato", 2),
    ]);

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
  } catch (err) {
    console.error(err);
  }
}

test();
