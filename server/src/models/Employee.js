module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    place: DataTypes.STRING,
    state: DataTypes.STRING
  })
  Employee.associate = models => {
    Employee.belongsTo(models.Stack, {
      foreignKey: 'stack_id',
      as: 'stacks'
    })
  }
  return Employee
}
