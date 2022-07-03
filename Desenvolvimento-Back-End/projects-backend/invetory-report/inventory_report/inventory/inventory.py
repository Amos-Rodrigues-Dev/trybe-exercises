import csv
import json
import xmltodict
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def read_csv(cls, path):
        with open(path) as file_csv:
            result = csv.DictReader(file_csv)
            content = list(result)
        return content

    @classmethod
    def read_json(cls, path):
        with open(path) as file_json:
            content = json.load(file_json)
        return content

    @classmethod
    def read_xml(cls, path):
        with open(path) as file_xmls:
            content = xmltodict.parse(file_xmls.read())
            content_list = [
                dict(item) for item in content["dataset"]["record"]
            ]
        return content_list

    @classmethod
    def get_report(cls, report, stock):
        if report == "simples":
            return SimpleReport.generate(stock)
        elif report == "completo":
            return CompleteReport.generate(stock)

    @classmethod
    def import_data(cls, path, report):
        if ".csv" in path:
            return cls.get_report(report, cls.read_csv(path))
        elif ".json" in path:
            return cls.get_report(report, cls.read_json(path))
        elif ".xml" in path:
            return cls.get_report(report, cls.read_xml(path))
        else:
            raise ValueError("Arquivo inválido")
