class Queue:
    def __init__(self):
        self.queue = []

    def __len__(self):
        return len(self.queue)

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        try:
            return self.queue.pop(0)
        except Exception:
            return None

    def search(self, index):
        if index >= 0 and index < len(self.queue):
            return self.queue[index]

        raise IndexError()
