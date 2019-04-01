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

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }


  findMatches(searchString, recipes) {
    const teste = recipes.results.filter(recipe => {
      const regex = new RegExp(searchString, 'g');
      return recipe.title.match(regex) || recipe.ingredients.match(regex)
    });
    return teste;
  }
  
  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  renderRecipes(){
    let i = 0;
    return this.findMatches(this.state.searchString, recipes).map( recipe => {
      
      recipeProps.img = recipe.thumbnail;
      recipeProps.title = recipe.title;
      recipeProps.ingredients = recipe.ingredients;
      recipeProps.link = recipe.href;
      i += 1;
      return(
        <RecipeItem key={i} {...recipeProps}/>

      )
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar handleChange={this.handleChange} {...this.state}/>
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
