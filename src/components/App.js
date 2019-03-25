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
      searchString: ''
    };
  }

// componentWillMount(){
//   recipes.results.map( imagem => {
//     recipeProps.img = imagem.thumbnail;
//     return(
//       console.log(recipeProps.img)
//     )
//   })
//   }

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
        <Navbar />
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
