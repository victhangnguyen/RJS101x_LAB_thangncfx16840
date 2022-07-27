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
//! imp Redux Actions
import { addComment } from '../redux/actions/commentActions';
import { fetchDishes } from '../redux/actions/dishActions';
import { fetchComments } from '../redux/actions/commentActions';
import { fetchPromos } from '../redux/actions/promotionActions';
import { fetchLeaders } from '../redux/actions/leaderActions';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('%cDidMount', 'color: red; font-weight: bold');
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

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
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
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
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                dish={
                  this.props.dishes.dishes.filter((dish) => dish.featured)[0]
                }
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}
                promotion={
                  this.props.promotions.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
                leader={
                  this.props.leaders.leaders.filter(
                    (leader) => leader.featured
                  )[0]
                }
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                dishes={this.props.dishes.dishes}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
              />
            }
          />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders.leaders} />}
          />
          <Route
            path="*"
            element={
              <Home
                dish={
                  this.props.dishes.dishes.filter((dish) => dish.featured)[0]
                }
                promotion={
                  this.props.promotions.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.props.leaders.leaders.filter(
                    (leader) => leader.featured
                  )[0]
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

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
  };
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
