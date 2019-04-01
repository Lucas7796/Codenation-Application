# Usando React para listar e filtrar receitas
Interface criada para listar e filtrar receitas.

Criei esta aplicação para o desafio de React da Codenation (https://www.codenation.dev/acceleration/aceleradev-react/challenge/react-0).

## Tópicos
Neste projeto foi utilizado:

- React
- ES6
- Javascript
- Testes unitários (Ainda não aplicados)

## Requisitos
Você precisará do Nodejs instalado em sua máquina.

### Tarefas
1. Renderizar dinamicamente o componente `RecipeItems` para todos os elementos dentro dos dados de amostra (Feito);
2. Ao digitar um texto no `input` dentro do component `Navbar`, os `RecipeItems` deverão ser filtrados, tanto pelo `title` quanto pelo `ingredients` (Feito);
3. O filtro deverá ser `case insensitive` (Feito);
4. (Bônus) fazer o highlight do texto pesquisado dentro do `title` e `ingredients` utilizando a tag `<mark>`(Em desenvolvimento).

### Exemplo
![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-0/BouncyAfraidDikkops-size_restricted.gif)

### BackEnd

Os dados são consumidos a partir do arquivo recipes.json dentro da pasta sample_data.

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm install
```
Para rodar a aplicação:
```
npm start
```
