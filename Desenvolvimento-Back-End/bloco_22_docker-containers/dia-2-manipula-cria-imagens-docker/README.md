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



