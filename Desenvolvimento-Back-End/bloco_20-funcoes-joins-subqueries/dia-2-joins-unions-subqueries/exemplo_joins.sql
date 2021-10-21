-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT 
    a.actor_id, a.first_name, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f 
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT 
	s.first_name, s.last_name, a.address
FROM sakila.staff s 
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT
	c.customer_id, c.first_name, email, c.address_id, a.address
FROM sakila.customer c 
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.customer_id LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT
	c.customer_id, c.first_name, email, c.address_id, a.address, a.district
FROM sakila.customer c 
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT
	c.first_name, COUNT(a.address_id) AS quant
FROM sakila.customer c 
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.`active` = 1
GROUP BY c.first_name HAVING quant = 2
ORDER BY c.first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;
SELECT
	s.first_name, s.last_name, ROUND(AVG(p.amount), 2) AS avg_amount
FROM sakila.staff s 
INNER JOIN sakila.payment p 
ON s.staff_id = p.staff_id
GROUP BY s.first_name, s.last_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;
SELECT 
    ac.actor_id, ac.first_name, fac.film_id, f.title
FROM
    sakila.actor ac
        INNER JOIN
    sakila.film_actor fac ON ac.actor_id = fac.actor_id
        INNER JOIN
    sakila.film f ON f.film_id = fac.film_id;
