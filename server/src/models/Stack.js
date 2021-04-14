module.exports = (sequelize, DataTypes) => {
  const Stack = sequelize.define('Stack', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    stack: DataTypes.STRING,
    icon: DataTypes.STRING,
    image: DataTypes.STRING
  })

  Stack.associate = models => {
    Stack.hasMany(models.Team, { foreignKey: 'stack_id', as: 'teams' })
  }

  return Stack
}
