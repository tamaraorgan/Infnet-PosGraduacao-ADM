module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    skill: DataTypes.STRING,
    image: DataTypes.STRING
  })
  Skill.associate = models => {
    Skill.hasMany(models.Register, {
      foreignKey: 'skill_id',
      as: 'registers'
    })
  }
  return Skill
}
