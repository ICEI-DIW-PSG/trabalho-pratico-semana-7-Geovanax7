[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20867831&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: GEOVANA DE SOUZA FERREIRA
- Matricula: 1545034
- Proposta de projeto escolhida:  Organizações e Equipes
- Breve descrição sobre seu projeto: Melhorar o desenvolvimento e a funcionalidade do neu site, para ajudar e facilitar a divulgação e busca das minhas clientes.

## Print da Home-Page

![tela inicial](<imagens/tela inical.jpeg>)

## Print da página de detalhes do item

![detalhe01](<imagens/detalhe 01.jpeg>)
![detalhe02](<imagens/detalhe 02.jpeg>)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

// Efeito suave de rolagem nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    alvo.scrollIntoView({ behavior: 'smooth' });
  });
});
