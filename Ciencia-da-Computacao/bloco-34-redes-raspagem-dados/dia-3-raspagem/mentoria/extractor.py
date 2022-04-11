from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from enum import Enum


class Extrator:
    def __init__(self):
        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install())
        )
        self.prefixo = "content_content_content_detalhesPregao_"
        self.dict_ids = {
            Atributos.OBJETO: f"{self.prefixo}lblObjetodaLicitacao",
            Atributos.AREA: f"{self.prefixo}lblArea",
            Atributos.LOCAL: f"{self.prefixo}lblLocaldeExecucao",
        }

    def montar_url(self, id):
        url_base = "http://www.imprensaoficial.com.br"
        detalhe = "/ENegocios/MostraDetalhesLicitacao_14_3.aspx?IdLicitacao="
        return f"{url_base}{detalhe}{id}"

    def get_element(self, element):
        return self.driver.find_element(By.ID, self.dict_ids[element]).text

    def extrair_licitacao(self):
        self.driver.get(self.montar_url("1538690"))
        obj = {
            "obj_licitacao": self.get_element(Atributos.OBJETO),
            "area": self.get_element(Atributos.AREA),
            "local": self.get_element(Atributos.LOCAL),
        }
        print(obj)

        self.driver.close()


class Atributos(Enum):
    OBJETO = 0
    AREA = 1
    LOCAL = 2


Extrator().extrair_licitacao()
