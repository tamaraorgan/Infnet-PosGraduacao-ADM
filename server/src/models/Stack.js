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
    Stack.hasMany(models.Project, { foreignKey: 'stack_id', as: 'projects' })
  }

  return Stack
}
