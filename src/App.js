import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Components/Home";
import Overviews from "./Components/Overviews";
import Entries from "./Components/Entries";
import categories from "./categories";

class App extends Component {
  state = {
    expenses: [],
    amount: "",
    category: "",
    description: "",
    categories: categories,
  };
  inputHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  addClickHandler = () => {
    this.setState({
      expenses: [
        ...this.state.expenses,
        {
          amount: this.state.amount,
          category: this.state.category,
          description: this.state.description,
        },
      ],
      
        amount: "",
        category: "",
        description: "",
    
    });
  };

  deleteHandler = (itemIndex) => {
    let exp = this.state.expenses.filter((item, index) => index !== itemIndex);
    this.setState({
      expenses: exp,
    });
    alert("Are you sure you want to delete this expense?");
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container-fluid">
            <nav>
              <ul>
                <li>
                  <NavLink to="/overviews/">Overviews</NavLink>
                </li>
                <li>
                  <NavLink to="/entries/">Entries</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route
              path="/overviews/"
              render={() => (
                <Overviews
                  expenses={this.state.expenses}
                  categories={this.state.categories}
                />
              )}
            />
            <Route
              path="/entries/"
              render={() => (
                <Entries
                  expenses={this.state.expenses}
                  amount={this.state.amount}
                  categories={this.state.categories}
                  inputHandler={(e) => this.inputHandleChange(e)}
                  addBtn={(e) => this.addClickHandler(e)}
                  deleteHandlerFn={(itemIndex) => this.deleteHandler(itemIndex)}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
