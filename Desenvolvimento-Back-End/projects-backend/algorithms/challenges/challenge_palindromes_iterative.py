def is_palindrome_iterative(word):
    word = word.upper()
    low_index = 0
    high_index = len(word) - 1

    if word == "":
        return False

    for i in range(len(word) // 2):
        if word[low_index] != word[high_index]:
            return False
        low_index += 1
        high_index -= 1
    return True
