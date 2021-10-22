-- Tipos de retorno comuns:
-- DETERMINISTIC - Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;
-- READS SQL DATA - Indica para o MySQL que sua função somente lerá dados.
-- Em muitas situações, sua function estará apenas lendo e retornando dados. Nesses casos, a opção READS SQL DATA deve ser usada. No entanto, sempre avalie o tipo mais adequado à sua função.

-- Estrutura padrão de uma stored function:
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

-- Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

-- Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);
