from .importer import Importer
from inventory_report.inventory.inventory import Inventory


class JsonImporter(Importer):
    def import_data(filename):
        try:
            return Inventory.read_json(filename)
        except ValueError:
            raise ValueError("Arquivo inválido")
