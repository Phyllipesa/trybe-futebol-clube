# TFC - Trybe Futebol Clube!

O TFC é um site informativo sobre partidas e classificações de futebol! ⚽️

No time de desenvolvimento do TFC, seu squad ficou responsável por desenvolver uma API e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, você vai construir um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento deve respeitar regras de negócio providas no projeto e sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

Habilidades exercitadas:

- A realização da dockerização dos apps, network, volume e compose;
- A modelagem de dados com MySQL através do Sequelize;
- A criação e associação de tabelas usando models do sequelize;
- A construção de uma API REST com endpoints para consumir os models criados;
- A construção de um CRUD com TypeScript, utilizando ORM;
  
## Projeto

![Print do Projeto](https://i.imgur.com/NsEDVvn.png)


## Executar Localmente

Clone o projeto 

```bash
  git clone git@github.com:Phyllipesa/trybe-futebol-clube.git
```

Entre no diretório

```bash
  cd trybe-futebol-clube/
```

Instale as dependências

```bash
  npm install
```

Abra o projeto usando Vscode ou Intellij

- Configure o arquivo /app/backend/.env


Rodando a aplicação

```bash
  docker compose up -d
```


## Tecnologias

 - TypeScript

## Autores

- [@phyllipesa](https://github.com/phyllipesa) - Desenvolvimento do projeto
- [@betrybe](https://github.com/betrybe) - Commit inicial
