module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING
  })

  Skill.associate = models => {
    Skill.belongsToMany(models.Team, {
      foreignKey: 'skill_id',
      through: 'team_skills',
      as: 'teams'
    })
  }

  return Skill
}
