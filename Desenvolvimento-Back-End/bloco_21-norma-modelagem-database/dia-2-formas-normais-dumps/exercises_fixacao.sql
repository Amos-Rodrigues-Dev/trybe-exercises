CREATE SCHEMA IF NOT EXISTS func;
USE func;

CREATE TABLE Setores(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_setor VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Funcionarios(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    datacadastro DATE NOT NULL,
    ativo TINYINT DEFAULT 1,
	setor_id INT NOT NULL,
    FOREIGN KEY (setor_id) REFERENCES Setores(setor_id)
) ENGINE=InnoDB;

DELIMITER $$
CREATE TRIGGER trigger_insert_data_funcionario
	BEFORE INSERT ON Funcionarios
	FOR EACH ROW
BEGIN
	SET NEW.datacadastro = CURRENT_DATE();
END $$
DELIMITER ;

INSERT INTO Setores(nome_setor)
	VALUES
		('Administração'),
        ('Vendas'),
        ('Operacional'),
        ('Estratégico'),
        ('Vendas'),
        ('Marketing');

INSERT INTO Funcionarios(nome, sobrenome, email, telefone, setor_id)
	VALUES
		('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', 1),
        ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', 2),
        ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', 3),
        ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', 4);

SELECT
	CONCAT(f.nome, ' ',f.sobrenome) AS nome_completo,
    f.email,
    f.telefone,
    DATE_FORMAT(f.datacadastro, '%d/%m/%Y') AS data_cadastro,
    s.nome_setor,
    IF(f.ativo = 1, 'Ativo', 'Inativo') AS `status`
FROM Funcionarios f 
INNER JOIN Setores s ON s.setor_id = f.setor_id;

UPDATE Funcionarios
SET ativo = 0
WHERE funcionario_id = 3;
