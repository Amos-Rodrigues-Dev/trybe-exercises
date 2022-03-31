import csv


def read_pokemons(path):
    lista_de_pokemons = []
    with open(path) as file_object:
        pokemons = csv.DictReader(file_object)
        for pokemon in pokemons:
            lista_de_pokemons.append(pokemon)
    return lista_de_pokemons
