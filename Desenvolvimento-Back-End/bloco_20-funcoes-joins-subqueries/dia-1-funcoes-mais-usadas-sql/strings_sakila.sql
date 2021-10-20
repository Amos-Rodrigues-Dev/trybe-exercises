SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- Para Fixar 
SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está etre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
SELECT LEFT(LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL'), 3);
SELECT REPLACE(LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL'), 'rua', 'PRAÇA');