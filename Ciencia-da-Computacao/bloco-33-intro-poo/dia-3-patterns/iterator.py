from collections.abc import Iterable, Iterator


class MeuIterator(Iterator):
    def __init__(self, iter_data):
        self.__iter_data = iter_data
        self.__indice = 0

    def __next__(self):
        if self.__indice >= len(self.__iter_data):
            raise StopIteration()

        data = self.__iter_data[self.__indice]
        self.__indice += 1
        return data


class MeuIterator2(Iterator):
    def __init__(self, iter_data):
        self.__iter_data = iter_data
        self.__indice = 0

    def __next__(self):
        try:
            while type(self.__iter_data[self.__indice]) != int:
                self.__indice += 1

            data = self.__iter_data[self.__indice]
            self.__indice += 1
            return data
        except IndexError:
            raise StopIteration()


class ListaSemNone(Iterable):
    def __init__(self, data, iterator_strategy=MeuIterator):
        self.__data = data
        self.__iterator_strategy = iterator_strategy

    def __iter__(self):
        return self.__iterator_strategy(self.__data.copy())


# - - - - - -
lista = ListaSemNone(
    [1, 20, 34, "Alfa", None, "Beta", None, None, None, -7.8], MeuIterator2
)

for item in lista:
    print(item)
