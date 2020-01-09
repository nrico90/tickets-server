const Sequelize = require("sequelize");
const db = require("../db");
const Event = require("../event/model");
const User = require("../user/model");

const Ticket = db.define(
  "tickets",
  {
    author: { type: Sequelize.STRING },
    picture: { type: Sequelize.STRING },
    price: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING },
    ticketId: { type: Sequelize.INTEGER },
    eventId: { type: Sequelize.INTEGER },
    risk: { type: Sequelize.INTEGER }
  },
  {
    timestamps: false,
    tableName: "ticket"
  }
);

//Ticket.belongsTo(Event, { onDelete: "CASCADE" }); //GET the event for this ticket
Ticket.belongsTo(User);

module.exports = Ticket;
