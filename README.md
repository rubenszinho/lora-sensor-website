# Sistema de Monitoramento do Nível de Água Baseado em LoRa

## Visão Geral do Projeto

Este projeto foi desenvolvido com o objetivo de monitorar em tempo real o nível de água em rios urbanos, utilizando a tecnologia LoRa para a transmissão de dados. A solução é conteinerizada, o que garante portabilidade e facilidade de implantação em diferentes ambientes.

O front-end é responsável por gerar os artefatos que são servidos pelo lado do servidor, projetado em Flask e também conteinerizado com Docker, assegurando consistência no desenvolvimento, teste e produção.

## Configuração do Ambiente de Desenvolvimento Local

Para configurar o ambiente de desenvolvimento local deste projeto, é necessário ter o Node.js e o Docker instalados em seu sistema. Siga as etapas abaixo para instalar dependências, construir o projeto e executar o contêiner:

1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar todas as dependências necessárias.
4. Use `npm start` para iniciar o servidor de desenvolvimento e abrir o aplicativo no seu navegador.
5. Para gerar artefatos para produção, execute `npm run build`.
6. Para construir e executar o contêiner do servidor Flask, siga as instruções detalhadas na seção de Docker deste `README`.

## Screenshots

Aqui estão as visões do cliente final deste sistema:

### Visão Mobile
![Visão Mobile](https://i.imgur.com/6Rwb4Tu.png)

### Visão Desktop
![Visão Desktop](https://i.imgur.com/BMe1sqv.png)
