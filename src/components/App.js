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
    // recipes.then((values) => {
    //     const links = values.map(value => value.get("link"))
    //     this.setState({list: links})
    //     imgProps.list = this.state.list
    //     }
    // )
    //const teste = JSON.parse(recipes)
    console.log(recipes)
  }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
