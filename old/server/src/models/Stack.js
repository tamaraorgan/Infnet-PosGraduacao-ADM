module.exports = (sequelize, DataTypes) => {
  const Stack = sequelize.define('Stack', {
    stack: DataTypes.STRING,
    image: DataTypes.STRING,
    icon: DataTypes.STRING
  })
  Stack.associate = models => {
    Stack.hasMany(models.Register, { foreignKey: 'stack_id', as: 'registers' })
  }

  return Stack
}
