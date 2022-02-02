const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_num: DataTypes.STRING,
    },
    // {
    //   freezeTableName: true, // utilizado para definir o nome da tabela exatamento igual ao que estar no model ou
    // tableName: "Xablau"
    // },
  );

  return User;
};

module.exports = User;
