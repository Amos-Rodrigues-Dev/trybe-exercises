def write_text_file(lines):
    with open("output_file.txt", "a") as file_object:
        for line in lines:
            file_object.writelines(f"{line}\n")
