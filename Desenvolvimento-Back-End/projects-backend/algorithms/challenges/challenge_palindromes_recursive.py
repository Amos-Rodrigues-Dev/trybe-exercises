def is_palindrome_recursive(word, low_index, high_index):
    word = word.upper()
    if word == "":
        return False
    elif high_index - low_index < 1:
        return True
    elif word[low_index] != word[high_index]:
        return False
    return is_palindrome_recursive(word, low_index + 1, high_index - 1)
