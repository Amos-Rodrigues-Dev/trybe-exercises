# Fazendo a instalação do Docker Engine

1. Desinstalando versões anteriores
```
	sudo apt-get remove docker* containerd runc
```

2. Atualizando os índices dos pacotes do apt
```
	sudo apt-get update
	
	sudo apt-get upgrade
```

3. Habilitando HTTPS para o apt
```
	sudo apt-get install \
	    apt-transport-https \
	    ca-certificates \
	    curl \
	    gnupg \
	    lsb-release
```

4. Adicionando uma chave de acesso ao repositório remoto
```
	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

5. Adicionando o repositório
```
	echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

6. Instalando Docker Engine
```
	sudo apt-get update
	
	sudo apt-get install docker-ce docker-ce-cli containerd.io
```

7. Adicionando um usuário ao grupo de usuários docker
```
	sudo groupadd docker
	
	sudo usermod -aG docker $USER
	
	newgrp docker
```

8. Iniciando o Daemon do Docker
```
	sudo systemctl status docker
	
	sudo systemctl start docker
	
	sudo systemctl enable docker
```

9. Validando a instalação
```
	docker run hello-world
```


## Desinstalando o Docker Engine

```
	sudo apt-get purge docker-ce docker-ce-cli containerd.io
	
	sudo rm -rf /var/lib/docker
	
	sudo rm -rf /var/lib/containerd
```


# Rodando o sistema operacional Ubuntu em um container


- Um ponto importante antes de começarmos, é entender que os comandos do Docker funcionam no seguinte formato:

**docker <comando> <sub-comando> <parâmetros>**

`docker container run <nome-da-imagem>:<tag>`

`docker container run ubuntu`



## Listando containers

- `docker container ls`
- `docker container ls -a`
- `docker container ls -l`

* IMAGE: O nome da imagem utilizada para a criação do container ;
* COMMAND: O comando executado/ em execução dentro do container ;
* CREATED: Quando foi criado o container ;
* STATUS: O status atual do mesmo, no nosso caso, encerrado;
* PORT: A porta que estamos utilizando para nos comunicar com o container**;
* NAMES: O apelido do container , como não definimos nenhum, foi criado um aleatório.


## Rodando um comando adicional antes de terminar o container

* `docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>`

* `docker container run ubuntu echo 'Hello Tryber!'`


## Rodando o container de forma interativa

* `docker container run -ti ubuntu`

- t que indica pro docker que estamos requisitando um terminal no container que consiga imprimir o retorno dos nossos comandos;
- i que estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado.

Aqui é possível notar que:
* O domínio do usuário root no terminal do container é o CONTAINER ID do mesmo, nesse caso 65897a6b07fb ( root@65897a6b07fb ) ;
* O comando cat /etc/lsb-release retorna os dados da distribuição, no caso, o Ubuntu 20.04 que é a imagem utilizada;
* Para sair desse terminal interno do container e retornar ao seu terminal, é só utilizar o comando exit .



# Principais comandos do CLI

## Criar e rodar um container

- Deve criar um novo container e roda-lo logo em seguida:

	`docker container run <parâmetros> <imagem>:<tag>`


- O parâmetro --name define um <nome-da-sua-escolha> para aquele container (ao invés de um nome aleatório) :

	`docker container run --name <nome-da-sua-escolha> <imagem>:<tag>`


- Modo 'Cleanup': O parâmetro --rm deve garantir que o container seja removido ao final da execução (útil para testar imagens sem ficar acumulando containers novos) :

	`docker container run --rm <imagem>:<tag>`


- O parâmetro -d (de --detach , desacoplado em português) rodará esse container em segundo plano*:

	`docker container run -d <imagem>:<tag>`

	* (Comando antigo) * Abreviação do comando docker container run :
	
	`docker run <parâmetros> <imagem>:<tag>`



## Criar um container sem executá-lo


- Cria um container com a imagem de referência, mas não o executa imediatamente:

	`docker container create <parâmetros> <imagem>:<tag>`
	
- O parâmetro -it nesse contexto, deve garantir que ao iniciar o container , ele se mantenha ativo e disponha de um terminal de acesso:

	`docker container create -it <imagem>:<tag>`

- (Comando antigo) Abreviação do comando docker container create :

	`docker create <parâmetros> <imagem>:<tag>`


## Listar containers

- Lista ( ls , list em inglês) todos os containers ativos :
	
	`docker container ls`
	
- Lista todos os containers ativos e inativos : 

	`docker container ls -a`

- Lista o último container criado (independente do seu estado) :

	docker container ls -l

- (Comando antigo) Abreviação do comando docker container ls (que também pode ser chamado como docker container ps ):

	`docker ps <parâmetro>`



## Iniciar, reiniciar, pausar, resumir e parar um container

* `docker container start <CONTAINER ID || NAMES>`

* `docker container restart <CONTAINER ID || NAMES>`

* `docker container pause <CONTAINER ID || NAMES>`

* `docker container unpause <CONTAINER ID || NAMES>`

* `docker container stop <CONTAINER ID || NAMES>`


- (Comando antigo) São abreviações para os comandos anteriores:

* `docker <start || restart || pause || unpause || stop> <CONTAINER ID || NAMES>`



## Retomando o acesso a um container interativo rodando em segundo plano

* `docker container attach <CONTAINER ID || NAMES>`

* `docker attach <CONTAINER ID || NAMES>`



## Excluindo containers específicos

* `docker container rm <CONTAINER ID || NAMES>`

* `docker container rm -f <CONTAINER ID || NAMES>`

* `docker rm <CONTAINER ID || NAMES>`


## Limpando containers que não estão sendo utilizados

* `docker container prune`


## Monitorando os processos dentro de um container

* `docker container top <CONTAINER ID || NAMES>`


