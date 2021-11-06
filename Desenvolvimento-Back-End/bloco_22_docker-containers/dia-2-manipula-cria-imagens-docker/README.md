## Mapeamento de Portas

* A atribuição aleatória das portas é feita pela flag -P:
```
docker run -d -P httpd:2.4
```

* Atribuição manual para especificar a porta, utilizamos a flag -p:
```
docker run -d -p 54321:80 httpd:2.4
```

* Para dar um nome ao container, basta utilizar a flag --name :

`docker run -d -P --name site-trybe httpd:2.4`


## Dockerfile


* Exemplo: react-dockerized

```
npx create-react-app react-dockerized
cd react-dockerized
```

`touch Dockerfile`


### FROM - imagem base 

`FROM ubuntu:latest`


* No Dockerfile do nosso mini-projeto, vamos basear nossa imagem no node:14-alpine (NodeJS versão 14 que roda a partir da distro Alpine) e dar o alias "build" para ela :

`FROM node:14-alpine AS build`


### WORKDIR

`WORKDIR /diretorio/que/sera/utilizado`


* Na nossa aplicação, vamos definir o diretório /app como nosso WORKDIR no Dockerfile :

`WORKDIR /app # Definimos o workdir`


### COPY

`COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]`

* magine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação, para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:

`COPY ["./app", "/usr/src/app"]`

ou

`COPY arquivo1 arquivo2 ./destino `


* No Dockerfile do nosso mini-projeto, vamos copiar todos os arquivos que começam com "package" ( package.json e package-lock.json ), para nosso diretório atual, a pasta /app , usando a forma exec :

```
# FROM node:14-alpine AS build
# WORKDIR /app
COPY package*.json ./
```


### RUN

* O RUN (Nesse contexto, rodar, em português - como em rodar um comando ) irá executar uma lista de comandos durante a criação da imagem.

`RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]`


* No Dockerfile do nosso mini-projeto, vamos rodar o comando de instalação da nossa aplicação, passando um parâmetro para suprimir mensagens de aviso e facilitar a visualização do processo, quando ele ocorrer :

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
RUN npm install
```

### Passos intermediários

* Antes de passar para os próximos comandos, alguns passos intermediários são necessários, como por exemplo, fazer a cópia dos demais arquivos para dentro do container, porém, como já rodamos um npm install , é interessante criarmos um arquivo chamado dockerignore para adicionarmos lá a node_modules, de modo que ela não seja copiada.

```
touch .dockerignore

node_modules
```

* Agora, no Dockerfile do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
COPY . .
```

* Também devemos adicionar um comando para executar o processo de build * da nossa aplicação, no Dockerfile :
* Esses comandos podem variar dependendo da aplicação que você for rodar.
No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo aqui.

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
RUN npm run build
```

* Para entender esse comando, podemos ir no terminal e dentro do diretório de nossa aplicação, rodar o comando para gerar uma build :

`npm run build`


Você pode notar que na raiz do projeto, foi criada uma pasta chamada build . Essa pasta contém uma versão otimizada da sua aplicação React .
Essa versão, geralmente, é utilizada para disponibilização da sua aplicação em processos de deploy (processo automatizado de disponibilização) e publicação na internet.
Para o nosso exemplo, utilizaremos essa build em associação com um servidor http , logo a seguir.


### NGINX

* Aqui faremos um negócio chamado multi-stage build *, que nada mais é que dividir o script do Dockerfile e mais de uma parte.

* Então nessa segunda parte, passaremos a definir no Dockerfile do nosso mini-projeto os comandos do ambiente de produção, no qual utilizaremos um servidor HTTP NGINX .

* Agora, vamos definir a imagem de origem do Nginx , com o alias "prod". Em seguida, iremos copiar as informações da imagem que apelidamos de "build" e sua respectiva pasta para o diretório do servidor, como a seguir:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```

### EXPOSE

* Aqui é necessário sabermos que grande parte dos serviços (sobretudo os da web) disponibilizam uma porta de acesso externo, portanto, precisamos especificá-la com o comando EXPOSE :

`EXPOSE <PORTA-DO-APP-NO-CONTAINER>`


* Por exemplo, se nossa aplicação executa na porta 3000 , precisamos evidenciar no nosso Dockerfile :

`EXPOSE 3000`


* Uma vez "exposta", configuramos nossa imagem para utilizar esta porta.
Por padrão, o Nginx usa a porta 80 para executar as aplicações, então, podemos expor esta porta no nosso Dockerfile :


```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```

* Aqui, vale ressaltar que quando formos rodar um container utilizando uma imagem que expõe uma porta, precisamos atribuir uma porta do nosso sistema hospedeiro ( host ) que direcionará para a porta do sistema convidado ( guest ) .
Fazemos isso com o parâmetro -p :

```
docker container run \
   -p <PORTA-HOST>:<PORTA-GUEST> \
   <IMAGEM>:<TAG>
```

* Por exemplo, se temos uma aplicação que serve na porta 80 que está exposta no Dockerfile e queremos acessá-la a partir da porta 3000 do host , basta executarmos:

```
docker container run \
   -p 3000:80 \
   --rm \
   -dit \
   yeasy/simple-web:latest
```


### CMD

* O comando CMD (Que vem de C o m man d Prompt, ou Prompt de comando em português) , sempre é executado quando o container é iniciado .
É interessante ressaltar que pode acontecer de mais de um CMD ser definido em um mesmo Dockerfile e, neste caso, apenas o último terá efeito.
O CMD possui 2 formas: a que vimos até aqui para a execução de comandos shell e as para executáveis. Vamos ver um exemplo:


`CMD ["/bin/echo", "Hello World"]`

* Nesse forma, o primeiro argumento é o executável e os demais são seus parâmetros.
Normalmente utilizamos o CMD para executar o comando que irá rodar com o container, poderíamos usar como exemplo o start de um app , por exemplo:

`CMD npm start`


* Aqui temos mais um ponto de atenção, caso o container seja executado passando um comando no run , o comando passado sobrescreverá o comando definido no CMD .
Podemos utilizar o CMD no Dockerfile do nosso mini-projeto, da seguinte forma:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### ENTRYPOINT

* Vimos que podemos utilizar o CMD para iniciarmos um comando ao executarmos nossos containers , como por exemplo para iniciarmos um app .
Porém, para esse fim recomendamos utilizar ENTRYPOINT (Ponto de entrada em português) , pois, diferentemente do CMD , o comando não será sobrescrito pelo passado no run ao executarmos o container .
Por exemplo:

`ENTRYPOINT ["/bin/echo", "Hello World"]`

* Um ponto de atenção é que ao definirmos um entrypoint , alteramos o comportamento do CMD , que ao ser utilizado irá rodar como base para o comando definido pelo entrypoint , apenas como "parâmetros adicionais" à ele, por exemplo:

```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```

* No Dockerfile do nosso mini-projeto, vamos substituir a linha que estava com CMD, agora passando no nosso ENTRYPOINT :

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

## Gerando uma imagem a partir do nosso Dockerfile


* Mas para que a gente consiga de fato consolidar essas instruções em uma imagem, precisamos rodar o comando docker image build -t <name:tag> <origem_docker_file> !


`docker image build -t react-dockerized:v1 .`

* Também utilizamos o parâmetro -t (de tag ) com o valor react-dockerized:v1 (aqui já estamos puxando uma tag "v1" para nossa imagem) e o ponto . , que está dizendo que o Dockerfile se encontra na mesma pasta em que o comando está sendo executado.

* Para ver nossa aplicação funcionando, podemos rodar nosso mini-projeto no terminal interativo, definindo qual porta do nosso localhost será atribuida para qual porta do container :

`docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1`


* Abra seu navegador na URL http://localhost:8000/ e veja a página padrão do React funcionando. Parabéns, criamos nossa primeira imagem customizada e executamos um container a partir dessa imagem.



# Dockerfile comandos adicionais


## LABEL

* Labels (Rótulos em português) são um mecanismo para atribuir "metadatas" (dados auxiliares) aos seus objetos Docker , como imagens e containers.
Com o parâmetro LABEL , é possível fazer essas definições em nosso Dockerfile .
A documentação oficial recomenda o uso de labels para organizar nossas imagens, registrar informações de licenças, anotar relacionamentos entre containers e outros componentes ou qualquer outras informações que façam sentido ao objetivo do container ou sua aplicação.
As informações são registradas seguindo o parâmetro de "chave e valor", e caso uma chave esteja repetida, a última sobrescreverá as anteriores:

`LABEL <KEY>=<VALUE>`

* É comum registrarmos o "maintener" da imagem, para um possível contato posterior para tirar dúvidas ou sugerir contribuições:

`LABEL maintener="John Doe <john.doe@trybe.com.br>"`

* Esse valor pode ser resgatado posteriormente através do comando docker inspect <CONTAINER ID || NAMES> , onde o valor estará no atributo Labels :


```
"Labels": {
   "maintener": "John Doe <john.doe@trybe.com.br>"
}
```

## ENV

* Em ambientes de desenvolvimento de apps é muito importante o uso de Env ironment Variables (Variáveis de ambiente, em português)*, felizmente também podemos utilizá-las em nossos containers.
* Variáveis de ambiente são valores que são definidos dentro do escopo do sistema operacional, ou seja, são valores que estão disponíveis para todas as aplicações que estão instaladas dentro daquele SO .
No Dockerfile , podemos definir nossas variáveis durante a criação de nossa imagem utilizando o comando ENV :


`ENV <ENV NAME> <ENV VALUE>`

* Podemos utilizá-la, por exemplo, para setar o ambiente onde vamos rodar o app .

`ENV NODE_ENV production`

* Ao rodar nossos containers, também podemos passar variáveis, basta utilizar a tag --env ou -e :

```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```
- Essas sobrescreverão as definidas no Dockerfile caso possuam o mesmo nome.


## USER

* Caso não seja definido nenhum usuário, o Docker irá utilizar o usuário root como padrão, o que não é recomendado por motivos de segurança.
Abaixo temos um exemplo da criação de um usuário com apenas as permissões necessárias em uma imagem ubuntu :

```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```

* Normalmente as imagens já possuem um usuário criado para a execução de nossos apps .
Por exemplo nas imagens node , já possuem um usuário genérico chamado "node" com os privilégios necessários, e para usá-lo, basta adicionarmos o usuário ao diretório de nosso projeto e utilizarmos a tag user :

```
FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD [“node”, “index.js”]
```

