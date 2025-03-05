class Countdown:
    def __init__(self, n):
        self.n = n
    def __iter__(self):
        return self
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        current = self.n
        self.n -= 1
        return current
for n in Countdown(5):
    print(n)
