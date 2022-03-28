def replace_text(file_path, searched_word, new_word):
    list_of_changed_lines = []
    with open("zen_of_python.txt") as file_object:
        for line in file_object:
            if searched_word in line.lower():
                new_line = [
                    word.lower().replace(searched_word, new_word)
                    for word in line.split()
                ]
                new_line = " ".join(new_line)
                list_of_changed_lines.append(new_line)
    return list_of_changed_lines
