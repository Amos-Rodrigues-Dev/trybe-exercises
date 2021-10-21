SELECT * FROM praticando.manufacturers;
SELECT * FROM praticando.products;

SELECT `Name` FROM praticando.manufacturers AS m
WHERE NOT EXISTS (
	SELECT * FROM praticando.products
    WHERE Manufacturer = m.Code
);

-- Fixaçãop
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;
SELECT 
	Id, Title
FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.Id
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
	Id, Title
FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.Id
) AND Title LIKE '%lost%';

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;
SELECT 
	`Name`
FROM hotel.Customers c 
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = c.CustomerId
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM hotel.Cars;
SELECT * FROM hotel.Customers;
SELECT * FROM hotel.CarSales;

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);

