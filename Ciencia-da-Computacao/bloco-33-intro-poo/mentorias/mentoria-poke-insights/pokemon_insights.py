from pokemon_read import read_pokemons


def get_unique_pokemon_types(path):
    lista_de_pokemons = read_pokemons(path)
    lista_de_tipos_unicos = []
    for pokemon in lista_de_pokemons:
        if pokemon['Type 1'] not in lista_de_tipos_unicos:
            lista_de_tipos_unicos.append(pokemon['Type 1'])
    return lista_de_tipos_unicos


def filter_by_pokemon_type(lista_de_pokemons, pokemon_type):
    lista_de_pokemons_por_tipo = []
    for pokemon in lista_de_pokemons:
        if pokemon["Type 1"] == pokemon_type:
            lista_de_pokemons_por_tipo.append(pokemon)
    return lista_de_pokemons_por_tipo


def get_max_attack(path):
    lista_de_pokemons = read_pokemons(path)
    lista_de_ataques = []
    for pokemon in lista_de_pokemons:
        lista_de_ataques.append(int(pokemon['Attack']))
    lista_de_ataques.sort()
    # return max(lista_de_ataques)
    return lista_de_ataques[-1]


def get_min_attack(path):
    lista_de_pokemons = read_pokemons(path)
    lista_de_ataques = []
    for pokemon in lista_de_pokemons:
        lista_de_ataques.append(int(pokemon['Attack']))
    return min(lista_de_ataques)


def matches_attack(pokemon, attack):
    return int(pokemon["Attack"]) <= attack


def filter_by_attack(lista_de_pokemons, attack):
    lista_de_pokemons_filtrada = []
    for pokemon in lista_de_pokemons:
        if matches_attack(pokemon, attack):
            lista_de_pokemons_filtrada.append(pokemon)
    return lista_de_pokemons_filtrada
