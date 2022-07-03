from src.analyze_log import (
    most_ordered_dish_per_customer,
    never_ordered_per_customer,
    days_never_visited_per_customer,
)


class TrackOrders:
    # aqui deve expor a quantidade de estoque
    def __init__(self):
        self.__orders = []

    def __len__(self):
        return len(self.__orders)

    def add_new_order(self, customer, order, day):
        self.__orders.append([customer, order, day])

    def get_most_ordered_dish_per_customer(self, customer):
        return most_ordered_dish_per_customer(customer, self.__orders)

    def get_never_ordered_per_customer(self, customer):
        return never_ordered_per_customer(customer, self.__orders)

    def get_days_never_visited_per_customer(self, customer):
        return days_never_visited_per_customer(customer, self.__orders)

    def get_busiest_day(self):
        days = {}
        for *other, day in self.__orders:
            if day not in days:
                days[day] = 1
            else:
                days[day] += 1
        return max(days, key=days.get)

    def get_least_busy_day(self):
        days = {}
        for *other, day in self.__orders:
            if day not in days:
                days[day] = 1
            else:
                days[day] += 1
        return min(days, key=days.get)
