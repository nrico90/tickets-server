const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define(
  "event",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    start: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "events"
  }
);

module.exports = Event;
