const _ = require('lodash');
const defaultProfile = {
  sweet: 0,
  hot: 0,
  tang: 0,
  savor: 0,
  cheese: 0
};

class Ingredient {
  constructor (data) {
    this._name = data.name;
    this._type = _.isString(data.type) ? data.type : 'other';
    this._prefix = _.isString(data.prefix) ? data.prefix : data.name;
    this._suffix = _.isString(data.suffix) ? data.suffix : data.name;
    const profile = _.isObject(data.profile) ? data.profile : {};
    this._profile = _.merge(defaultProfile, profile);
  }

  get name () {
    return this._name;
  }

  get type () {
    return this._type;
  }

  get prefix () {
    return this._prefix;
  }

  get suffix () {
    return this._suffix;
  }

  get profile () {
    return this._profile;
  }
}

module.exports.Ingredient = Ingredient;