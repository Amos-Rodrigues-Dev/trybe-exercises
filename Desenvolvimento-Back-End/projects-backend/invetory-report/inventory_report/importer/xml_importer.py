from pyexpat import ExpatError
from .importer import Importer
from inventory_report.inventory.inventory import Inventory


class XmlImporter(Importer):
    def import_data(filename):
        try:
            return Inventory.read_xml(filename)
        except (ValueError, ExpatError):
            raise ValueError("Arquivo inválido")
