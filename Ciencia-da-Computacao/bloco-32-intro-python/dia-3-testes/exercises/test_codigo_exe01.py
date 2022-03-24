from codigo_exe01 import fizzbuzz


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizz_buzz_divizible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1]


def test_fizzbuzz_divizible_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
