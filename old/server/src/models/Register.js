module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    employee: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    place: DataTypes.STRING,
    state: DataTypes.STRING
  })
  Register.associate = models => {
    Register.belongsTo(models.Stack, {
      foreignKey: 'stack_id',
      as: 'stacks'
    })
  }
  Register.associate = models => {
    Register.belongsTo(models.Skill, {
      foreignKey: 'skill_id',
      as: 'skills'
    })
  }
  return Register
}
