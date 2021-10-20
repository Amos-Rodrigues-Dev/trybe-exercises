SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- Fixaçãop
SELECT * FROM sakila.customer;
-- 1
SELECT 
    `active`, COUNT(`active`) AS 'Qunatidade'
FROM
    sakila.customer
GROUP BY `active`;

-- 2
SELECT 
    store_id, IF(`active` = 1, 'ativo', 'inativo') AS 'status', COUNT(`active`) AS Quantidade
FROM
    sakila.customer
GROUP BY store_id, active;

-- 3
SELECT * FROM sakila.film;
SELECT 
    rating, AVG(replacement_cost) AS media_duracao
FROM
    sakila.film
GROUP BY rating
ORDER BY media_duracao DESC;

-- 4
SELECT * FROM sakila.address;

SELECT 
	district, COUNT(*)
FROM 
	sakila.address
GROUP BY district
HAVING COUNT(*) > 5
ORDER BY COUNT(*) DESC
LIMIT 5;
