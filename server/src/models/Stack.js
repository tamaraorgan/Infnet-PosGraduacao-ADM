module.exports = (sequelize, DataTypes) => {
  const Stack = sequelize.define('Stack', {
    title: DataTypes.STRING,
    stack: DataTypes.STRING,
    image: DataTypes.STRING
  })
  Stack.associate = (models) => {
    Stack.hasMany(models.Employee, { foreignKey: 'stack_id', as: 'employees' });

  }

  return Stack
}
