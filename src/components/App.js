import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

const recipeProps = {
  img: [],
  title: [],
  ingredients: [],
  link: []
}

const valor = {
  value: ''
}

function findMatches(wordToMatch, recipes) {
  return recipes.filter(recipe => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return recipe.title.match(regex) || recipe.ingredients.match(regex)
  });
}

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  componentWillMount(){
    this.searchString = 'als';
    console.log(this.searchString)
    //valor.value = 'amem'
    
  }

  renderRecipes(){

    return recipes.results.map( recipe => {
      recipeProps.img = recipe.thumbnail;
      recipeProps.title = recipe.title;
      recipeProps.ingredients = recipe.ingredients;
      recipeProps.link = recipe.href;
      return(
        <RecipeItem {...recipeProps}/>

      )
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar {...this.state}/>
        <div className="container mt-10">
          <div className="row">
            {this.renderRecipes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
