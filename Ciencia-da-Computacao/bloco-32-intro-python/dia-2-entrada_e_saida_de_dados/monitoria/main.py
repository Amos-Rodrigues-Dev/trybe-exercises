import sys
from leitura import replace_text
from escrita import write_text_file


def main():
    file_path, searched_word, new_word = sys.argv[1], sys.argv[2], sys.argv[3]
    return replace_text(file_path, searched_word, new_word)


if __name__ == '__main__':
    write_text_file(main())
