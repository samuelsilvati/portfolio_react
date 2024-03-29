<h1 align="center">
  Portfólio React
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-link-do-projeto">Link do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

<p align="center">
  <a href="https://eusouosamuel.vercel.app"><img alt="preview" src="./.github/preview.jpg" width="100%"></a>
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript
- Styled Components
- Prismic CMS
- EmailJs

## 💻 Projeto

Projeto de portifólio feito em React com TypeScript. O seção de Portifólio e Sobre do site é alimentada pelo Prismic CMS.

Para executar o projeto na sua máquina, baixe ou clone o repositório e execute os comandos:

### `npm i`

### `npm run dev`

## 💻 Como configurar

Para configurar a seção de "Portfólio" e "Sobre" é necessário criar conta no https://prismic.io e configurar conforme instruções a seguir. A configuração de conexão do prismic deve ir em um aquivo .env seguindo o arquivo .env.example.

O arquivo de configuração da importação do prismic está no diretório src/services . Mais detalhes na documentação a seguir: https://prismic.io/docs/setup-react .

Após criada a conta no Prismic, deve se criar dois custom types como na imagem a seguir:
<img alt="prismic1" src="./.github/prismic1.jpg">

O Custom Type "About Me" deve seguir a seguinte estrutura:
<img alt="prismic2" src="./.github/prismic2.jpg">

O Custom Type "Portfolio" deve seguir a seguinte estrutura:
<img alt="prismic3" src="./.github/prismic3.jpg">

Em seguida, para importar o conteúdo do Prismic basta configurar o arquivo posts.ts em src/helpers/prismic:

<img alt="prismic3" src="./.github/prismic4.jpg">

Para criar o conteúdo no Prismic basta entrar no dashboard Prismic, selecionar o reposotório criado, selecionar o tipo de documento criado clicar em create new, preencher os campos e salvar:

<img alt="prismic3" src="./.github/prismic5.jpg">

Após publicar, o documento será carregado no site

## 🚀 Link do Projeto

https://eusouosamuel.vercel.app

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Samuel 👋🏻 [Veja outros projetos!](https://github.com/samuelsilvati?tab=repositories)
