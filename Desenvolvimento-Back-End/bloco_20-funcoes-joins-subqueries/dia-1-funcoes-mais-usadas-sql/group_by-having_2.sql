SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- Fixação
SELECT * FROM sakila.film;
-- 1
SELECT 
    rating, AVG(length) AS duracao
FROM
    sakila.film
GROUP BY rating
HAVING duracao BETWEEN (115.0) AND (121.50)
ORDER BY duracao;

-- 2
SELECT 
    rating, SUM(replacement_cost) AS custo_substituicao
FROM
    sakila.film
GROUP BY rating
HAVING custo_substituicao > 3950.50
ORDER BY custo_substituicao;