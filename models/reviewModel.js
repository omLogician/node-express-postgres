// const { sequelize, DataTypes } = require(".");
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
      rating: {
        type: DataTypes.INTEGER
      },
      description:{
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Review;
  };