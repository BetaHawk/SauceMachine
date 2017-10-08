const _ = require('lodash');
const {Ingredient} = require('../models/ingredient');
const data = [
  {
    name: "Barbacue",
    prefix: "barb",
    suffix: "aque",
    type: "sauce",
    profile: {
      hot: 0,
      sweet: 5,
      tang: 2
    }
  },
  {
    name: "Buffalo",
    prefix: "buff",
    suffix: "alo",
    type: "sauce",
    profile: {
      hot: 6,
      sweet: 0,
      tang: 0
    }
  },
  {
    name: "Ghost Pepper",
    prefix: "ghost",
    suffix: "host",
    type: "sauce",
    profile: {
      hot: 10,
      sweet: 0,
      tang: 0
    }
  },
  {
    name: "Honey",
    prefix: "honey",
    suffix: "honey",
    type: "sauce",
    profile: {
      hot: 0,
      sweet: 10,
      tang: 0
    }
  },
  {
    name: "Garlic",
    prefix: "Garlic",
    suffix: "lick",
    type: "extra",
    profile: {
      hot: 2,
      savor: 5
    }
  },
  {
    name: "Parmesan",
    prefix: "Parm",
    suffix: "esan",
    type: "extra",
    profile: {
      savor: 3,
      cheese: 5
    }
  },
  {
    name: "Siracha",
    prefix: "Sira",
    suffix: "cha",
    type: "sauce",
    profile: {
      hot: 6,
      sweet: 2,
      tang: 0
    }
  },
  { 
    name: "Skittles",
    prefix: "Skitt",
    suffix: "ttles",
    type: "strange",
    profile: {
      sweet: 6
    }
  }
];
const ingredients = [];
_.each(data, ingredient => {
  ingredients.push(new Ingredient(ingredient));
});
console.log(ingredients);
module.exports.ingredients = ingredients;
