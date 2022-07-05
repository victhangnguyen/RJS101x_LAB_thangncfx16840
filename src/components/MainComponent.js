import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
//! imp Components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

//! import shared
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      // selectedDish: null, //! dishId
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }

  render() {
    //!
    const DishWithId = () => {
      const params = useParams();
      //! react-router-dom v6
      //! 1. Route components rendered via the element prop don't receive route props.
      //! 2. Route children components must use React-Hooks to access the Route Context, i.e. useParams, useLocation, useNavigate, etc... and therefore must be Function Components.
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (commet) => commet.dishId === parseInt(params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About leaders={this.state.leaders}/>} />
          <Route
            path="*"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
