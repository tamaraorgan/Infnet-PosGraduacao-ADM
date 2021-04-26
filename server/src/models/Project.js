module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    project: DataTypes.STRING,
    description: DataTypes.STRING,
    project_manager: DataTypes.STRING,
    progress: DataTypes.STRING,
    data_created: DataTypes.DATE
  })
  Project.associate = models => {
    Project.belongsTo(models.Stack, {
      foreignKey: 'stack_id',
      as: 'stack'
    })
  }
  Project.associate = models => {
    Project.hasMany(models.Team, { foreignKey: 'project_id', as: 'teams' })
  }

  return Project
}
