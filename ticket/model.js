const Sequelize = require("sequelize");
const db = require("../db");
const Event = require("../event/model");
const User = require("../user/model");

const Ticket = db.define(
  "tickets",
  {
    author: { type: Sequelize.STRING },
    picture: { type: Sequelize.STRING },
    price: { type: Sequelize.FLOAT },
    description: { type: Sequelize.STRING }
  },
  {
    timestamps: false,
    tableName: "ticket"
  }
);

Ticket.belongsTo(Event); //GET the event for this ticket
Event.hasMany(Ticket); // get me the tickets of this event
Ticket.belongsTo(User);

module.exports = Ticket;
