SELECT * FROM sakila.actor
WHERE first_name = 'JOHNNY';


SELECT * FROM sakila.actor
  WHERE 
    first_name = 'JOHNNY' 
  AND 
    last_name = 'CAGE';


SELECT title, rental_duration, rating
  FROM SAKILA.FILM
  WHERE rental_duration = 6
    AND rating = 'R';


SELECT title, rental_duration, rating from SAKILA.FILM
  WHERE rental_duration = 6
    AND (rating = 'PG-13' OR rating = 'R');


SELECT * FROM sakila.film
  WHERE title = 'AFFAIR PREJUDICE'
    OR title = 'AFRICAN EGG'
    OR title = 'AGENT TRUMAN'
    OR title = 'AIRPLANE SIERRA';


SELECT * FROM sakila.film
  WHERE title IN (
    'AFFAIR PREJUDICE', 
    'AFRICAN EGG', 
    'AGENT TRUMAN', 
    'AIRPLANE SIERRA'
  );


SELECT * FROM sakila.film
  WHERE title IN (
    SELECT * from sakila.film 
    where rental_duration >= 3 AND rental_duration < 5
  );


SELECT * FROM sakila.film
  WHERE title NOT IN (
    'AFFAIR PREJUDICE', 
    'AFRICAN EGG', 
    'AGENT TRUMAN', 
    'AIRPLANE SIERRA'
  );


SELECT now();  -- data e tempo de agora
SELECT curdate(); -- data de agora
SELECT curtime(); -- tempo de agora
SELECT year(now()); -- Ano atual
SELECT month(now()); -- mês atual
SELECT day(now()); -- dia atual


SELECT * FROM sakila.rental 
  WHERE date(rental_date) = '2005-05-26';


SELECT * FROM sakila.rental
  WHERE rental_date 
    BETWEEN 
      CAST('2005-05-26 00:00:00' AS datetime) 
    AND 
      CAST('2005-05-27 23:59:59' AS datetime);


-- Nomes que iniciam com RA a partir da segunda letra
SELECT * FROM sakila.actor WHERE first_name LIKE '_RA%';

-- Nomes que iniciam com ME a partir da terceira letra
SELECT first_name FROM sakila.actor
WHERE first_name LIKE '__ME%';

-- Nomes com no mínimo 3 caracteres
SELECT first_name FROM sakila.actor
WHERE first_name LIKE '___';

-- Nomes com 3 caracteres que iniciam com B
SELECT first_name FROM sakila.actor
WHERE first_name LIKE 'B__';

