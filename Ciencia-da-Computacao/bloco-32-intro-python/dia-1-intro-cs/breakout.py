students = ["Bruno", "Matheus", "Ricardo"]

mentoria = ["Diego", "Carol"]

# mentoria.append(students)
mentoria.extend(students)
# mentoria.remove(mentoria[2])

# mentoria.sort()

# semana = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"]


# numbers = []
# for n in range(1, 11):
#     numbers.append(n)

numbers = [n * 2 for n in range(1, 11)]


if __name__ == "__main__":
    # print(sorted(mentoria))
    # print(mentoria)
    # print(semana[:2])
    # print(semana[2:])
    # print(semana[0:5:2])
    # print(semana[0::2])
    # print(semana[-1::-2])
    # print(semana[::1])
    # print(semana[::2])
    print(numbers)
