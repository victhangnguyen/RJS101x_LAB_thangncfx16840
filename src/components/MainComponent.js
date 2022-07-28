import React from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
//! imp Components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

//! imp transition component
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//! imp Redux Actions
import { fetchDishes } from '../redux/actions/dishActions';
import { fetchComments, postComment } from '../redux/actions/commentActions';
import { fetchPromos } from '../redux/actions/promotionActions';
import { fetchLeaders } from '../redux/actions/leaderActions';
//! hooks
import { withRouter } from '../hooks';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // location = useLocation();

  componentDidMount() {
    console.log('%cDidMount', 'color: red; font-weight: bold');
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    console.log('%cMain: ', 'color: blue; font-weight: bold', this.props); //! __DEBUG

    const HomeComponent = () => {
      return (
        <Home
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
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
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
        />
      );
    };

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
          postComment={this.props.postComment}
          // addComment={this.props.addComment}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.router.location.key}
            classNames="page"
            timeout={300}
          >
            <Routes>
              <Route index path="home" element={<HomeComponent />} />
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
              <Route path="*" element={<HomeComponent />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    postComment: (dishId, rating, author, comment) =>
      dispatch(postComment(dishId, rating, author, comment)),
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

// function Main(props) {
//   console.log('%cMain_props: ', 'color: red; font-weight: bold', props); //! __DEBUG __props

//   const params = useParams();
//   const location = useLocation();

//   const HomeElement = () => {
//     return (
//       <Home
//         dishesLoading={props.dishes.isLoading}
//         dishesErrMess={props.dishes.errMess}
//         dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
//         promosLoading={props.promotions.isLoading}
//         promosErrMess={props.promotions.errMess}
//         promotion={
//           props.promotions.promotions.filter(
//             (promotion) => promotion.featured
//           )[0]
//         }
//         leadersLoading={props.leaders.isLoading}
//         leadersErrMess={props.leaders.errMess}
//         leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
//       />
//     );
//   };

//   const DishWithId = () => {
//     const params = useParams();
//     ! react-router-dom v6
//     ! 1. Route components rendered via the element prop don't receive route props.
//     ! 2. Route children components must use React-Hooks to access the Route Context, i.e. useParams, useLocation, useNavigate, etc... and therefore must be Function Components.
//     return (
//       <DishDetail
//         dish={
//           props.dishes.dishes.filter(
//             (dish) => dish.id === parseInt(params.dishId, 10)
//           )[0]
//         }
//         isLoading={props.dishes.isLoading}
//         errMess={props.dishes.errMess}
//         comments={props.comments.comments.filter(
//           (comment) => comment.dishId === parseInt(params.dishId, 10)
//         )}
//         commentsErrMess={props.comments.errMess}
//         postComment={props.postComment}
//         addComment={this.props.addComment}
//       />
//     );
//   };

//   componentDidMount
//   React.useEffect(() => {
//     console.log('%cDidMount', 'color: red; font-weight: bold');
//     props.fetchDishes();
//     props.fetchComments();
//     props.fetchPromos();
//     props.fetchLeaders();
//   }, []); //! once render Mount

//   return (
//     <div className="App">
//       <Header />
//       <TransitionGroup>
//         <CSSTransition key={location.key} classNames="page" timeout={300}>
//           <Routes>
//             <Route index path="home" element={<HomeElement />} />
//             <Route
//               path="/menu"
//               element={
//                 <Menu
//                   dishes={props.dishes.dishes}
//                   isLoading={props.dishes.isLoading}
//                   errMess={props.dishes.errMess}
//                 />
//               }
//             />
//             <Route path="/menu/:dishId" element={<DishWithId />} />
//             <Route path="/contactus" element={<Contact />} />
//             <Route
//               path="/aboutus"
//               element={<About leaders={props.leaders.leaders} />}
//             />
//             <Route path="*" element={<HomeElement />} />
//           </Routes>
//         </CSSTransition>
//       </TransitionGroup>
//       <Footer />
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchDishes: () => dispatch(fetchDishes()),
//     fetchComments: () => dispatch(fetchComments()),
//     postComment: (dishId, rating, author, comment) =>
//       dispatch(postComment(dishId, rating, author, comment)),
//     fetchPromos: () => dispatch(fetchPromos()),
//     fetchLeaders: () => dispatch(fetchLeaders()),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
