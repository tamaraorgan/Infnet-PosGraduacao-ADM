module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    place: DataTypes.STRING,
    state: DataTypes.STRING
  })
  Team.associate = models => {
    Team.belongsTo(models.Stack, {
      foreignKey: 'stack_id',
      as: 'stack'
    })
  }
  Team.associate = models => {
    Team.belongsToMany(models.Skill, {
      foreignKey: 'team_id',
      through: 'team_skills',
      as: 'skills'
    })
  }

  return Team
}
