from .inventory.inventory import Inventory
import sys


def main():
    if len(sys.argv) < 3:
        sys.stderr.write("Verifique os argumentos\n")
    else:
        path = sys.argv[1]
        report = sys.argv[2]
        sys.stdout.write(Inventory.import_data(path, report))
