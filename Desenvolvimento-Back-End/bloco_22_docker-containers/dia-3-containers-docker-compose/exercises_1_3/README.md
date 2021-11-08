# Exercício 1

Crie o arquivo Compose para subir um ghost blog , essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo, você pode ler no site oficial de como criar conteúdos nele e utilizá-lo, para esse exercício utilizaremos apenas sua página de exemplo:

1. Utilize a versão "3" no arquivo;

2. Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine ;

3. Publique a porta 2368 , fazendo bind também para a 2368 ;

4. Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

```
  version: '3'

  services:
    ghost:
      image: ghost:1-alpine
      ports:
        - 2368:2368
```

# Exercício 2

Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados, utilize a imagem mysql:5.7 ;

2. Precisamos definir uma senha root para o nosso bd , para isso utilize a variável MYSQL_ROOT_PASSWORD , lembre-se que é possível utilizar a sintaxe "${}" para passar uma env do host, para a env do container;

3. Agora precisamos configurar nosso service ghost para utilizar o mysql, para isso defina a variável database__client para mysql ;

4. Defina o nome ghost para o nome do database utilizando a variável database__connection__database ;

5. E então, indique a conexão para o nosso mysql na env database__connection__host ;

6. Para definir o usuário ( root ) e senha (a mesma que definimos no nosso mysql), utilize respectivamente as envs database__connection__user e database__connection__password .

7. Utilize a opção depends_on para criar relações de dependências entre os serviços.

8. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

```
  version: '3'

  services:

    ghost:
      image: ghost:1-alpine
      ports:
        - 2368:2368
      depends_on:
        - "db"
      environment:
        # see https://docs.ghost.org/docs/config#section-running-ghost-with-config-env-variables
        database__client: mysql
        database__connection__host: db
        database__connection__user: root
        database__connection__password: example
        database__connection__database: ghost

    db:
      image: mysql:5.7
      environment:
        MYSQL_ROOT_PASSWORD: "${MYSQL_ROOT_PASSWORD}"
```


# Exercício 3

Agora vamos praticar os conceitos de volumes e networks .

1. Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, crie o volume db-data e utilize o caminho target /var/lib/mysql .

2. Ao invés de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.

3. Defina a política de restart para always em todos os serviços;

4. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.


```yaml
version: '3'

services:

  ghost:
    image: ghost:1-alpine
    restart: always
    ports:
      - 2368:2368
    depends_on:
      - "db"
    environment:
      # see https://docs.ghost.org/docs/config#section-running-ghost-with-config-env-variables
      database__client: mysql
      database__connection__host: db
      database__connection__user: root
      database__connection__password: example
      database__connection__database: ghost
    networks:
      - my-network

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: "${MYSQL_ROOT_PASSWORD}"
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - my-network
volumes:
  db-data:

networks:
  my-network:
```

Para executar:

```shell
docker-compose up -d
```

# Exercício 4

Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação React, conforme vimos alguns exemplos do conteúdo:

1. Inicie uma novo projeto ReactJS utilizando o create-react-app ;

2. Crie o Dockerfile , conforme vimos na aula passada;

3. Crie um novo arquivo Compose utilizando a versão 3 ;

4. Defina um serviço no arquivo para nosso app , para isso utilize a opção build para apontar para o Dockerfile ;

5. Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost ;

```
  version: '3'

  services:

    frontend:
      build: ./my-app
      ports:
        - 8080:80
```

# Exercício 5

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react , e então execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.

```
  docker-compose up --build -d
```


# Exercício 6

Crie um arquivo Compose para subir o Wordpress com MySQL :

1. Utilize a imagem wordpress:latest e mysql:5.7 ;

2. Faça bind da porta 80 do container do wordpress para 8080 do host ;

3. Defina as seguintes variáveis para o wordpress :
- WORDPRESS_DB_HOST: db:3306
- WORDPRESS_DB_USER: wordpress
- WORDPRESS_DB_PASSWORD: wordpress
- WORDPRESS_DB_NAME: wordpress

4. Defina as seguintes variáveis para o mysql :
- MYSQL_ROOT_PASSWORD: somewordpress
- MYSQL_DATABASE: wordpress
- MYSQL_USER: wordpress
- MYSQL_PASSWORD: wordpress

5. Defina o volume db_data para o mysql;

6. Utilize o parâmetro depends_on para criar dependência entre os serviços;

7. Adicione a política de restart com o valor always aos serviços;

8. Suba os serviços utilizando docker-compose e abra no terminal para validar o funcionamento.

```
  version: '3.3'

  services:
    db:
      image: mysql:5.7
      volumes:
        - db_data:/var/lib/mysql
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: somewordpress
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wordpress
        MYSQL_PASSWORD: wordpress

    wordpress:
      depends_on:
        - db
      image: wordpress:latest
      ports:
        - "8000:80"
      restart: always
      environment:
        WORDPRESS_DB_HOST: db:3306
        WORDPRESS_DB_USER: wordpress
        WORDPRESS_DB_PASSWORD: wordpress
        WORDPRESS_DB_NAME: wordpress
  volumes:
      db_data: {}
```

Esse exercício tem na própria [documentação oficial](https://docs.docker.com/samples/wordpress/) e possui algumas considerações especiais, vale a pena dar uma olhada! 😉


