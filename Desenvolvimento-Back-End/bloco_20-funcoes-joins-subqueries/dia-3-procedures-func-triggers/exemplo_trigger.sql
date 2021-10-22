-- Criando reações dinâmicas com Triggers

-- Momentos em que um trigger pode ser disparado
-- BEFORE : antes que alguma ação seja executada;
-- AFTER : após alguma ação já ter sido executada.

-- O que pode ativar um Trigger?
-- INSERT ;
-- UPDATE ;
-- DELETE .

-- O que pode ser acessado dentro de um trigger?
-- O valor OLD de uma coluna: valor presente em uma coluna antes de uma operação;
-- O valor NEW de uma coluna: valor presente em uma coluna após uma operação.

-- Em quais operações os valores OLD e NEW estão disponíveis?
-- Operação		OLD		NEW
-- INSERT		Não		Sim
-- UPDATE		Sim		Sim
-- DELETE	S	im		Não

-- Sintaxe
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER ;

-- Exemplos das três operações
-- Para os próximos exemplos, considere as seguintes tabelas e banco de dados:
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

-- Exemplo de trigger para o INSERT :
-- Considerando a tabela perfil , hora de montar um Trigger que define a data de inserção e o tipo de operação, quando um novo registro é inserido.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

-- Para ver o resultado do uso do Trigger na prática, execute o exemplo abaixo:
INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

-- Exemplo de trigger para o UPDATE :
-- Considerando a tabela perfil , hora de montar um Trigger que define a data de atualização e o tipo de operação, quando algum registro for modificado.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;

-- Para ver o resultado do uso do Trigger na prática, execute o exemplo abaixo:
UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

-- Exemplo de trigger para o DELETE :
-- Considerando a tabela log_perfil , hora de criar um trigger que envia informações para essa tabela quando um registro da tabela perfil é excluído.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

-- Para ver o resultado do uso do Trigger na prática, execute o exemplo abaixo:
DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;

