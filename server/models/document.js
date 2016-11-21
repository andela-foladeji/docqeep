module.exports = function (sequelize, DataType) {
  const document = sequelize.define('document', {
    title: {
      type: DataType.STRING,
      allowNull: false
    },
    content: {
      type: DataType.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        document.belongsTo(models.user, {
          as: 'owner',
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        });
      }
    }
  });

  return document;
};