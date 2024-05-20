'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favourite_books.init({
    id_user: DataTypes.INTEGER,
    id_book: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourite_books',
    tableName: 'favourite_books'
  });
  return Favourite_books;
};