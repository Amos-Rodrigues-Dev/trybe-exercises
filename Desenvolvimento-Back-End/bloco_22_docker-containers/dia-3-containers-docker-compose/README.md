# Networks - Redes no Docker

`docker network ls`

## Bridge

* Ao ser iniciado, todo container é associado a uma rede e, caso uma rede não seja seja especificada explicitamente por nós, ele será associado a rede Bridge .
Todos os containers associados a essa rede poderão se comunicar via protocolo TCP/IP e, se soubermos o IP do container que queremos conectar, podemos enviar tráfego a ele. Porém, os IPs de um container são gerados automaticamente, por isso não é muito útil fazermos a conexão dessa forma, pois sempre que o container for reiniciado, o IP poderá mudar.

* Uma maneira de fazermos a descoberta do IP automaticamente pelo nome, é utilizando a opção --link *.

```
docker container run -ti --name container1 busybox

docker container run -ti --link container1 --name container2 busybox

ping container1
```

## Host

* Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host , ou seja, da máquina que roda o ambiente Docker . O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.


## None

* Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.


## Criando Nossa Rede

`docker network create -driver bridge minha-rede` ou
`docker network create -d bridge minha-rede` 



* Para vincularmos nosso container à rede criada durante sua execução, basta utilizarmos o parâmetro --network :

```
docker container run \
    -itd \
    --network minha-rede \
     --name meu-container \
     busybox
```

* Agora, note a rede minha-rede e o driver bridge :

`docker network ls`


* Para conectarmos um container já criado, basta utilizarmos o parâmetro connect :

`docker network connect minha-rede meu-container`


* E para desconectá-lo, basta utilizar o parâmetro disconnect :

`docker network disconnect minha-rede meu-container`



## Volumes - Mapeando pastas para utilização em containers


`docker run -d --name site-trybe2 -p 8881:80 -v "/home/trybe/meu-site/:/usr/local/apache2/htdocs/" httpd:2.4`


`docker inspect site-trybe2 #que é o nome que demos ao nosso container`

## No Dockerfile

`VOLUME ["/data"]`

` docker volume ls`

`ocker volume rm <VOLUME NAME>`

`docker volume prune`


`docker container rm -v <CONTAINER ID || NAMES>`


# Docker Compose


## Instalação

`sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

`sudo chmod +x /usr/local/bin/docker-compose`

`docker-compose --version`


## Compose File - Parte I

* docker-compose.yaml

```
version: "<VERSÃO-DO-COMPOSE>"
services: # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
```

## Version - Utilizaremos a versão 3 do compose , sendo assim, nosso yaml iniciará da seguinte maneira:

`version: '3'`


## Services

```
version: '3'
services:
  frontend::

  backend:

  database:
```


```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
```

### Restart

Este comando pode assumir quatro valores:

* no - Este é o valor padrão assumido pelo Docker e define que o container não irá restartar automaticamente;

* on-failure - Define que o container será reiniciado caso ocorra alguma falha, apontado pelo exit code diferente de zero;

* aways - Especifica que sempre que o serviço parar, seja por um falha ou porque ele finalizou sua execução, ele irá ser reiniciado; *

* unless-stopped - Define que o container sempre seja reiniciado, a menos que a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem depois que o daemon do Docker * seja reiniciado.


```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

### Ports 

* se comporta da mesma maneira que o -p do docker container run 

* Lembre-se sempre: o primeiro parâmetro é a porta do host e o segundo a porta exposta no container .

```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

### Environment

* Outro parâmetro importante é o environment . Com ele, conseguimos configurar as variáveis de ambiente de nossos containers .
Imagine que em nosso exemplo, precisamos passar para nosso back-end uma parte da URL onde o banco de dados irá rodar, em uma variável chamada DB_HOST . Nosso exemplo ficaria assim:

```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```


### Depends On

```
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```
* Nesse exemplo, os services serão iniciados respeitando a ordem das dependências, portanto, o database será iniciado antes do backend , que será startado antes do frontend .



## Up

`docker-compose up`

* Caso você utilize a opção -f:

`docker-compose -f meu-arquivo-compose.yaml up` ou `docker-compose -f meu-arquivo-compose.yml stop`


## Se você está construiu localmente um arquivo docker-compose.yalm como o do exemplo que desenvolvemos até aqui, tente entrar no diretório em que está o arquivo e executar os services utilizando o o comando:

`docker-compose up`

`docker-compose up <SERVICE NAME>`

`docker-compose backend`

`docker-compose up --build <SERVICE NAME>`

* Lembre-se que para os comandos Compose , quando não especificado um arquivo com -f , a ferramenta irá buscar pelo arquivo docker-compose.yaml no diretório atual.


## Down

* Se quisermos parar nossos services , podemos utilizar o comando down . Com ele, todos os containers irão ser parados e os objetos criados pelo up , como as redes, por exemplo, serão removidos.

`docker-compose down`



## Ps

* Semelhante ao comando com containers , podemos utilizar o parâmetro ps para listar os containers ativos. Porém, a grande diferença é que só serão listados os containers pertencentes ao arquivo do Compose referenciado (seja utilizando a flag -f ou utilizando o nome de arquivo padrão).

`docker-compose ps`


## Stop

* Com o comando stop , conseguimos parar os services e, consequentemente, todos os containers relacionados. Diferentemente do down , ele não irá remover as redes e outros objetos criados pelo up .

`docker-compose stop`


`docker-compose stop <SERVICE NAME>`

`docker-compose stop backend`



## Start

* O start funciona de maneira análoga ao stop . Com ele, podemos startar os services parados referentes àquele arquivo Compose .

`docker-compose start`


## Logs

* Outro comando bem interessante é o logs . Com ele, podemos ver os logs de nossos services de maneira semelhante como fazemos unitariamente com os containers . Aqui podemos especificar um service para visualizar os logs de todos os seus containers , ou ver todos os logs daquele ambiente, conforme arquivo do Compose .
De maneira similar também ao comando para containers , podemos utilizar a flag -f ou --follow para acompanhar em tempo real as saídas dos containers e o --tail , em que podemos definir o número de linhas para ser exibidos a partir do final dos logs .


`docker-compose logs -f --tail=100 <SERVICE NAME>`


# Compose File - Parte II


## Volumes

```
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
```

## Networks

```
version: '3'

services:
  frontend-a:
    build: ./frontend_a
    networks:
      - frontend

  backend-a:
    build: ./backend_a
    networks:
      - backend
      - frontend

  backend-b:
    build: ./backend_b
    networks:
      - backend
      - frontend

  db:
    image: mysql
    networks:
      - backend

networks:
  frontend:
  backend:
```

