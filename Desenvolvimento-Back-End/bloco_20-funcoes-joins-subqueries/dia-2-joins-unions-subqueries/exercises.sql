SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT
	mov.id,
    mov.title,
    box.domestic_sales,
    box.international_sales
FROM Pixar.Movies mov
INNER JOIN Pixar.BoxOffice box
ON mov.id = box.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
	mov.id,
    mov.title,
    box.domestic_sales,
    box.international_sales
FROM Pixar.Movies mov
INNER JOIN Pixar.BoxOffice box
ON mov.id = box.movie_id
WHERE box.international_sales > box.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
    mov.id,
    mov.title,
    box.rating
FROM Pixar.Movies mov
INNER JOIN Pixar.BoxOffice box
ON mov.id = box.movie_id
ORDER BY mov.title DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	cine.id,
    cine.`name`,
    cine.location,
    mov.title,
    mov.director,
    mov.`year`,
    mov.length_minutes   
FROM Pixar.Theater cine
LEFT JOIN Pixar.Movies mov
ON  cine.id = mov.theater_id
ORDER BY cine.`name` ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	cine.id,
    cine.`name`,
    cine.location,
    mov.title,
    mov.director,
    mov.`year`,
    mov.length_minutes   
FROM Pixar.Theater cine
RIGHT JOIN Pixar.Movies mov
ON  cine.id = mov.theater_id
ORDER BY cine.`name` ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT
    mov.title
FROM Pixar.Movies mov
WHERE mov.id IN (
	SELECT movie_id FROM Pixar.BoxOffice box
    WHERE box.rating > 7.5
    );

SELECT
    mov.title
FROM Pixar.Movies mov
INNER JOIN Pixar.BoxOffice box
ON mov.id = box.movie_id
WHERE box.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT
    mov.title,
    mov.`year`,
	(
	SELECT rating FROM Pixar.BoxOffice box
    WHERE mov.id = box.movie_id
    ) AS box
FROM Pixar.Movies mov
WHERE mov.`year` > 2009;

SELECT
    mov.title,
    mov.`year`,
    box.rating
FROM Pixar.Movies mov
INNER JOIN Pixar.BoxOffice box
ON mov.id = box.movie_id
WHERE mov.`year` > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT
	cine.`name`,
    cine.location
FROM Pixar.Theater cine
WHERE EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE theater_id = cine.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT
	cine.`name`,
    cine.location
FROM Pixar.Theater cine
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE theater_id = cine.id
);
