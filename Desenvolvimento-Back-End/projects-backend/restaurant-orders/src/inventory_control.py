class InventoryControl:
    INGREDIENTS = {
        'hamburguer': ['pao', 'carne', 'queijo'],
        'pizza': ['massa', 'queijo', 'molho'],
        'misto-quente': ['pao', 'queijo', 'presunto'],
        'coxinha': ['massa', 'frango'],
    }
    MINIMUM_INVENTORY = {
        'pao': 50,
        'carne': 50,
        'queijo': 100,
        'molho': 50,
        'presunto': 50,
        'massa': 50,
        'frango': 50,
    }

    def __init__(self):
        self.__orders = []
        self.__stock = {
            'pao': 50,
            'carne': 50,
            'queijo': 100,
            'molho': 50,
            'presunto': 50,
            'massa': 50,
            'frango': 50,
        }
        self.__to_buy = {
            'pao': 0,
            'carne': 0,
            'queijo': 0,
            'molho': 0,
            'presunto': 0,
            'massa': 0,
            'frango': 0,
        }

    def get_available_dishes(self):
        food_available = set()
        for food in self.INGREDIENTS:
            food_can_be_made = True
            for ingredients in self.INGREDIENTS[food]:
                if self.__stock[ingredients] == 0:
                    food_can_be_made = False
            if food_can_be_made:
                food_available.add(food)
        return food_available

    def add_new_order(self, customer, order, day):
        dishes = self.get_available_dishes()
        for ingredient in self.INGREDIENTS[order]:
            if order in dishes:
                self.__to_buy[ingredient] += 1
                self.__stock[ingredient] -= 1
            elif order not in dishes:
                return False
            self.__orders.append((customer, order, day))

    def get_quantities_to_buy(self):
        return self.__to_buy
