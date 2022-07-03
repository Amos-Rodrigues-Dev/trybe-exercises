from collections.abc import Iterator


class InventoryIterator(Iterator):
    def __init__(self, iter_data):
        self._iter_data = iter_data
        self._indice = 0

    def __next__(self):
        try:
            item = self._iter_data[self._indice]
        except IndexError:
            raise StopIteration()
        else:
            self._indice += 1
            return item
