CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;
-- CREATE TABLE Especies() ENGINE=InnoDB;

CREATE TABLE Especies(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Localidade(
	local_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES Gerentes(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE Animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sexo ENUM ('M','F') NOT NULL,
    idade INT NOT NULL,
    especie_id INT NOT NULL,
    local_id INT NOT NULL,
    cuidador_id INT NOT NULL,
	FOREIGN KEY (especie_id) REFERENCES Especies(especie_id),
    FOREIGN KEY (local_id) REFERENCES Localidade(local_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores(cuidador_id)
) ENGINE=InnoDB;

