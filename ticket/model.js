const Sequelize = require("sequelize");
const db = require("../db");
const Event = require("../event/model");

const Ticket = db.define("ticket", {
  author: { type: Sequelize.STRING, allowNull: false },
  picture: { type: Sequelize.STRING, allowNull: true },
  price: { type: Sequelize.FLOAT, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false }
});

Ticket.belongsTo(Event, { onDelete: "CASCADE" }); //GET the event for this ticket
Event.hasMany(Ticket); // get me the tickets of this event

module.exports = Ticket;
