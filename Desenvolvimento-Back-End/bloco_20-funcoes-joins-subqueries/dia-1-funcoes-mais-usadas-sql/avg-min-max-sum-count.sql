-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

-- Fixação 
SELECT * FROM sakila.film;

SELECT ROUND(AVG(`length`), 2) AS 'Média de Duração' FROM sakila.`film`;
SELECT MIN(`length`) AS 'Duração Mínima' FROM sakila.film;
SELECT MAX(`length`) AS 'Duração Máxima' FROM sakila.film;
SELECt SUM(`length`) AS 'Tempo de Exibição Total' FROM sakila.film;
SELECt COUNT(film_id) AS 'Filmes Registrados' FROM sakila.film;