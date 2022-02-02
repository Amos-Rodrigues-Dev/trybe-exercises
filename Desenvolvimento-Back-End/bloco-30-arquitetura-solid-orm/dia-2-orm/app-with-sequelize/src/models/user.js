const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_num: DataTypes.STRING,
    },
    {
      //   freezeTableName: true, // utilizado para definir o nome da tabela exatamento igual ao que estar no model ou
      // tableName: "Xablau"
      // underscored: true, //Este campo nos ajudará a resolver o primeiro problema, ele fará com que parâmetros recebidos em Camel Case , sejam convertidos em Snake Case , quando for feita uma consulta a respectiva tabela.
      // tableName: 'Users', // retirando assim a responsabilidade do Sequelize de nomear a tabela.
    },
  );

  return User;
};

module.exports = User;
