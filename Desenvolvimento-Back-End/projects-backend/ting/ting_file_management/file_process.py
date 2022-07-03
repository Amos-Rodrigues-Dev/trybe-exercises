import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    for file in instance.queue:
        if file["nome_do_arquivo"] == path_file:
            return
    content_file = txt_importer(path_file)

    new_content = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(content_file),
        "linhas_do_arquivo": content_file,
    }

    instance.enqueue(new_content)
    sys.stdout.write(str(new_content))


def remove(instance):
    try:
        path_file = instance.dequeue()["nome_do_arquivo"]
        sys.stdout.write(f"Arquivo {path_file} removido com sucesso\n")
    except (IndexError, TypeError):
        sys.stdout.write("Não há elementos\n")


def file_metadata(instance, position):
    try:
        content = instance.search(position)
        sys.stdout.write(str(content))
    except IndexError:
        sys.stderr.write("Posição inválida\n")
