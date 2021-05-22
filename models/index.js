const User = require('./User');
const Event = require('./Event');
const Rsvp = require('./Rsvp');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

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
