import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends React.Component {
  constructor(props) {
    //! ref React.Component constructor
    super(props);
    //! all the dishes information from instructions
    this.state = {
      selectedDish: null,
    };
  }

  componentDidMount() {}

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  renderDish(dish) {
    if (dish !== null) {
      //! render new Card with selected Dish
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className="fw-bold">{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      //! render Empty Fragment
      return <div></div>;
    }
  }

  render() {
    //! variable expression
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle className="fw-bold">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
