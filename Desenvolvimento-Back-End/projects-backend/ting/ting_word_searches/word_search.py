def text_search_by_word(word, array):
    content_list = []
    for index, line in enumerate(array):
        if word in line.lower():
            content_list.append({"linha": index + 1})
    return content_list


def exists_word(word, instance):
    occur_list = []
    for line in instance.queue:
        lines = text_search_by_word(word, line["linhas_do_arquivo"])
        if len(lines):
            occur_list.append(
                {
                    "palavra": word,
                    "arquivo": line["nome_do_arquivo"],
                    "ocorrencias": lines,
                }
            )
    return occur_list


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
