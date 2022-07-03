from collections.abc import Iterable
from .inventory_iterator import InventoryIterator


class InventoryRefactor(Iterable):
    def __init__(self, class_importer):
        self.importer = class_importer
        self.data = list()

    def __iter__(self):
        return InventoryIterator(self.data)

    def import_data(self, path, report):
        if report:
            self.data += [item for item in self.importer.import_data(path)]
        else:
            raise ValueError("Arquivo inválido")
