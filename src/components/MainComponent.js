import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
//! imp Components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
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
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
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
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.props.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route
            path="*"
            element={
              <Home
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.props.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
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

export default connect(mapStateToProps)(Main);
