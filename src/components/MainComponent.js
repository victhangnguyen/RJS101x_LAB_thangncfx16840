import React from 'react';
import { Routes, Route } from 'react-router-dom';
//! imp Components
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

//! import data dishes
import { DISHES } from '../shared/dishes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      // selectedDish: null, //! dishId
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }

  render() {
    const HomePage = () => <Home />;

    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu dishes={this.state.dishes} />} />

          <Route path="*" element={HomePage()} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
