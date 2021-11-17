const User = require('./User');
const Project = require('./Project');
const Rsvp = require('./Rsvp');
const { resolveConfig } = require('prettier');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Rsvp, {
  foreignKey: 'user_id'
})

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Rsvp.belongsTo(User, {
  foreignKey: 'user_id',
});

Rsvp.belongsTo(Project, {
  foreignKey: 'user_id',
});

module.exports = { User, Project };
