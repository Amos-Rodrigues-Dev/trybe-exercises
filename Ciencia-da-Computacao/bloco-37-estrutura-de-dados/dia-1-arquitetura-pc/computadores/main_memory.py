class MainMemory:
    def __init__(self):
        self.clean()
        self.loaded_memory = []

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return float(self.loaded_memory[index])
        except (IndexError, ValueError):
            return 0

    def clean(self):
        self.loaded_memory = []


if __name__ == "__main__":
    teste = MainMemory()
    teste.load(5)
    print(teste.get(0))
    teste.clean()
    print(teste.get(0))
