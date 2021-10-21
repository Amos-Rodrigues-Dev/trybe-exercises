USE sakila;
-- LEFT JOIN: quando utilizamos o LEFT JOIN , focamos a tabela da esquerda. São retornados todos os registros da tabela esquerda e valores correspondentes da tabela da direita, caso existam . Valores que não possuem correspondentes são exibidos como nulos.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN: quando utilizamos o RIGHT JOIN , focamos a tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam . Valores que não possuem correspondentes são exibidos como nulos.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN: finalmente, temos o INNER JOIN , que foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas .
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;