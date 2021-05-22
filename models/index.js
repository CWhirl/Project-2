const User = require('./User');
const Event = require('./Event');
<<<<<<< HEAD
=======
const Rsvp = require('./Rsvp');
>>>>>>> main

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

<<<<<<< HEAD
Event.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,Event };
=======
User.hasMany(Rsvp, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

Rsvp.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Event, Rsvp };
>>>>>>> main
