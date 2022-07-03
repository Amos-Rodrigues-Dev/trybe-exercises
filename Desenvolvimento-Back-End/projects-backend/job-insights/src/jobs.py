from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path) as file:
        result = csv.DictReader(file, delimiter=",", quotechar='"')
        list_result = list(result)
    return list_result


if __name__ == "__main__":
    print(read("tests/mocks/jobs.csv"))
