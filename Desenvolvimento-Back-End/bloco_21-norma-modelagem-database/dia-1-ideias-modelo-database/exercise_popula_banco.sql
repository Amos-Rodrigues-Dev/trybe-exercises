USE zoo;

INSERT INTO Especies(nome)
VALUES 
	('Peixe'),
    ('Aves'),
    ('Mamiferos'),
    ('Repteis');

INSERT INTO Localidade(nome)
	VALUES
		('Zona Sul'),
        ('Zona Norte'),
        ('Zona Leste'),
        ('Zona Oeste');

INSERT INTO Gerentes(nome)
	VALUES
		('Gerente manutenção'),
        ('Gerente rh'),
        ('Gerente compras'),
        ('Gerente geral');

INSERT INTO Cuidadores(nome, gerente_id)
	VALUES
		('Pedro', 1),
        ('Amós', 2),
        ('Carla', 3),
        ('Monique', 4);

INSERT INTO Animais(nome, especie_id, sexo, idade, local_id, cuidador_id)
	VALUES
		('Fileus', 1, 'M', 14, 1, 1),
        ('Xablau', 2, 'M', 16, 2, 2),
        ('Chrass', 3, 'F', 20, 3, 3),
        ('Katreff', 4, 'F', 19, 4, 4);
        
SELECT
	anim.nome,
    espec.nome,
    anim.sexo,
    anim.idade,
    loc.nome,
    cuid.nome,
    gerent.nome
FROM Animais anim 
INNER JOIN Especies espec ON espec.especie_id = anim.especie_id
INNER JOIN Localidade loc ON loc.local_id = anim.local_id
INNER JOIN Cuidadores cuid ON cuid.cuidador_id = anim.animal_id
INNER JOIN Gerentes gerent ON gerent.gerente_id = cuid.gerente_id;
