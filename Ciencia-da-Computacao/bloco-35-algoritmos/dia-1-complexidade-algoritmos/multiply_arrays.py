def multiply_arrays_0n2(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# meu_array = [1, 2, 3, 4, 5]
# meu_array = list(range(1, 1000))
# multiply_arrays_0n2(meu_array, meu_array)

# medir o tempo de execução: time python3 meu_programa.py


def multiply_arrays_0n3(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# Usar 1000 aqui vai ser muito lento!
meu_array = list(range(1, 200))
multiply_arrays_0n3(meu_array, meu_array, meu_array)
