const Sequelize = require("sequelize");
const db = require("../db");
const Ticket = require("../ticket/model");
const User = require("../user/model");

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

//Event.hasMany(Ticket); // get me the tickets of this event
Event.belongsTo(User);

module.exports = Event;
