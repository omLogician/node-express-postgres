// const { sequelize, DataTypes } = require(".");
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER
      },
      description:{
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Product;
  };