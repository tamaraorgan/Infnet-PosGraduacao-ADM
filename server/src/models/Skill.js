module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    skill: DataTypes.STRING,
    image: DataTypes.STRING,
  })
  Skill.associate = models => {
    Skill.belongsTo(models.Register, {
      foreignKey: 'register_id',
      as: 'registers'
    })
  }
  return Skill
}
