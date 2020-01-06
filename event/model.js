const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define(
  "event",
  {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING
    },
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false,
    tableName: "events"
  }
);

module.exports = Event;
