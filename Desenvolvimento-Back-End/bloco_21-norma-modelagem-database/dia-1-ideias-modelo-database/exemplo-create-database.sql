DROP DATABASE IF EXISTS albuns;

CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;
CREATE TABLE artistas(
	artist_id INT AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY (artist_id)
) ENGINE=InnoDB;

CREATE TABLE estilomusical(
	estilo_id INT AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY (estilo_id)
) ENGINE=InnoDB;

CREATE TABLE album(
	album_id INT AUTO_INCREMENT,
    artist_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(7,2) NOT NULL,
    estilo_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (album_id),
    CONSTRAINT fk_artist_id FOREIGN KEY (artist_id) REFERENCES artista(artist_id),
    CONSTRAINT fk_estilo_id FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;
