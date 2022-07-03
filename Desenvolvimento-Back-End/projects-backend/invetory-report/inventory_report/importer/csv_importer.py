from .importer import Importer
from inventory_report.inventory.inventory import Inventory


class CsvImporter(Importer):
    def import_data(filepath):
        if ".csv" in filepath:
            return Inventory.read_csv(filepath)
        raise ValueError("Arquivo inválido")
