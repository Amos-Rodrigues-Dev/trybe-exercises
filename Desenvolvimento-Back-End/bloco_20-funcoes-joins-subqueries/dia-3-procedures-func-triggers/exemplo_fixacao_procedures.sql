-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorIdAmountFilm()
BEGIN
	SELECT
		fac.actor_id,
        CONCAT(ac.first_name, ' ', ac.last_name) AS full_name,
		COUNT(*) AS amount_filme
	FROM sakila.actor ac
    INNER JOIN sakila.film_actor fac
    ON ac.actor_id = fac.actor_id
    GROUP BY fac.actor_id 
    ORDER BY amount_filme DESC LIMIT 10;
END $$

DELIMITER ;

-- CALL ShowActorIdAmountFilm();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowInfoCategoryFilm(IN category VARCHAR(100))
BEGIN
	SELECT
		film.film_id,
        film.title,
        categFilm.category_id,
        categ.`name`
	FROM sakila.film film
    INNER JOIN sakila.film_category categFilm
    ON film.film_id = categFilm.film_id
    INNER JOIN sakila.category categ
    ON categ.category_id = categFilm.category_id
    WHERE categ.`name` = category;     
END $$

DELIMITER ;

SELECT 'Children' INTO @category;
CALL ShowInfoCategoryFilm(@category);

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
SELECT * FROM sakila.customer;
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowStatusCustomer(IN emalCustomer VARCHAR(200), OUT statusCustomer VARCHAR(10))
BEGIN
	SELECT
		IF(`active` = 1, 'Ativo', 'Inativo') INTO statusCustomer
	FROM sakila.customer
    WHERE email = emalCustomer; 
END $$

DELIMITER ;

SET @email1 = 'JENNIFER.DAVIS@sakilacustomer.org';
SET @email2 = 'SANDRA.MARTIN@sakilacustomer.org';
CALL ShowStatusCustomer(@email1, @result1);
CALL ShowStatusCustomer(@email2, @result2);
SELECT @result1
UNION
SELECT @result2;







