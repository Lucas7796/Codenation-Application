import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

const imgProps = {
  img: []
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
  recipes.results.map( imagem => {
    imgProps.img = imagem.thumbnail;
    return(
      console.log(imgProps.img)
    )
  })
  }

  renderRecipes(){

    return recipes.results.map( imagem => {
      imgProps.img = imagem.thumbnail;
      return(
        <RecipeItem {...imgProps}/>

      )
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
            {/* <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem /> */}
            {this.renderRecipes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
