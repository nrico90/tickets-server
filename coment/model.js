const Sequelize = require("sequelize");
const sequelize = require("../db");
const Ticket = require("../ticket/model");
const User = require("../user/model");

const Comment = sequelize.define(
  "Comment",
  {
    text: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "comments"
  }
);

Comment.belongsTo(User);
Comment.belongsTo(Ticket);

module.exports = Comment;
