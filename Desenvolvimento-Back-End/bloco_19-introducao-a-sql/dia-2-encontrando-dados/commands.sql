-- SELECT

SELECT * FROM sakila.country;

-- #########################################

-- DISTINTIC 
-- Remove as duplicidades do conjunto de colunas selecionado

SELECT store_id FROM sakila.customer;

SELECT distinct store_id FROM sakila.customer;

SELECT first_name FROM sakila.actor;

SELECT distinct first_name FROM sakila.actor;

SELECT last_name FROM sakila.actor;

SELECT distinct first_name FROM sakila.actor;


SELECT distinct first_name, last_name FROM sakila.actor;

-- #########################################

-- LIMIT
-- Limita o resultado em X

SELECT * FROM sakila.country;

SELECT * FROM country LIMIT 5;

-- #########################################

-- OFFSET

SELECT * FROM country
  ORDER BY country_id
  LIMIT 10 offset 8;

-- #########################################

-- COUNT
-- Conta a quantidade de resultados ignorando valores NULL

SELECT COUNT(*)
FROM sakila.address;

SELECT COUNT(address)
FROM sakila.address;

SELECT COUNT(address2)
FROM sakila.address;

SELECT COUNT(DISTINCT city_id)
FROM sakila.address;

SELECT COUNT(city_id), COUNT(district)
FROM sakila.address;

-- AS - APELIDO

SELECT COUNT(address) FROM sakila.address;

SELECT COUNT(address) as Endereço FROM sakila.address;

-- #########################################

-- COUNT AVANÇADO

SELECT COUNT(*) AS quantidade FROM sakila.address
WHERE district = 'California';

SELECT district, COUNT(*) AS quantidade FROM sakila.address
WHERE district = 'California';

-- #########################################

-- ORDER BY

SELECT * FROM sakila.actor
ORDER BY first_name;

SELECT * FROM sakila.customer
ORDER BY customer_id ASC;

SELECT * FROM sakila.customer
ORDER BY customer_id DESC;
