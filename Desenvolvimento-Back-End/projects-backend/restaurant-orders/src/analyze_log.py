import csv


def readFile(path):
    try:
        with open(path, "r") as file:
            content = list(csv.reader(file, delimiter=","))
            return content
    except FileNotFoundError:
        if ".csv" not in path:
            raise FileNotFoundError(f"Extensão inválida: '{path}'")
        raise FileNotFoundError(f"Arquivo inexistente: '{path}'")


def most_ordered_dish_per_customer(customer, content):
    most_ordered = []
    for items in content:
        if items[0] == customer:
            most_ordered.append(items[1])
    return max(most_ordered, key=most_ordered.count)


def count_ordered_per_customer(customer, content, dish):
    count_ordered = 0
    for items in content:
        if items[0] == customer and items[1] == dish:
            count_ordered += 1
    return count_ordered


def never_ordered_per_customer(customer, content):
    all_foods = set()
    foods = set()
    for items in content:
        all_foods.add(items[1])
        if items[0] == customer:
            foods.add(items[1])
    return all_foods.difference(foods)


def days_never_visited_per_customer(customer, content):
    all_days = set()
    days = set()
    for items in content:
        all_days.add(items[2])
        if items[0] == customer:
            days.add(items[2])
    return all_days.difference(days)


def analyze_log(path_to_file):
    content = readFile(path_to_file)
    most_ordered_maria = most_ordered_dish_per_customer("maria", content)
    most_ordered_arnaldo = count_ordered_per_customer(
        "arnaldo", content, "hamburguer"
    )
    joao_never_ask = never_ordered_per_customer("joao", content)
    joao_never_went = days_never_visited_per_customer("joao", content)
    with open("data/mkt_campaign.txt", "w") as file:
        file.write(f"{most_ordered_maria}\n")
        file.write(f"{most_ordered_arnaldo}\n")
        file.write(f"{joao_never_ask}\n")
        file.write(f"{joao_never_went}\n")
