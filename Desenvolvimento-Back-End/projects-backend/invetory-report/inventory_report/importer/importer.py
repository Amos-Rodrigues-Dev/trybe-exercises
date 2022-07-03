from abc import ABC, abstractmethod


class Importer(ABC):
    def __init__(self, filepath="./"):
        self.filepath = filepath

    @abstractmethod
    def import_data(self, filename):
        raise NotImplementedError
