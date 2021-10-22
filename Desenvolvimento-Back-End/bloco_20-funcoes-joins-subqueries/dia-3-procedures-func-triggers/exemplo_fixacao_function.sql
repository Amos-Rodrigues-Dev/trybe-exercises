-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION ShowAmountPayment(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE amountResult DOUBLE;
    SELECT 
	SUM(amount)
	FROM sakila.payment
	WHERE customer_id = id
	INTO amountResult;
    RETURN amountResult;
END $$

DELIMITER ;

SELECT ShowAmountPayment(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION ShowFilmByInventory(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE nameFilm VARCHAR(100);
	SELECT
	film.title
	FROM sakila.film film
	INNER JOIN sakila.inventory inv 
	ON inv.film_id = film.film_id
	WHERE inv.inventory_id = id
	INTO nameFilm;
    RETURN nameFilm;
END $$

DELIMITER ;

SELECT ShowFilmByInventory(51);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION ShowAmountFilmByCatogory(categoryName VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE FilmByCateg INT;
	SELECT
		COUNT(*) AS quatFilm
		FROM sakila.film_category filmCateg
		INNER JOIN sakila.category categ
		ON filmCateg.category_id = categ.category_id
		WHERE categ.`name` = categoryName
		GROUP BY filmCateg.category_id
	INTO FilmByCateg;
	RETURN FilmByCateg;
END $$

DELIMITER ;

SET @category = 'Family';
SELECT CONCAT(ShowAmountFilmByCatogory(@category), ' filmes da categora ', @category);
