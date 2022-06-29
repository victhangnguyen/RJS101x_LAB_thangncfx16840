import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function renderDish(dish) {
  if (!dish) return;
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg src={dish.image}></CardImg>
        <CardBody>
          <CardTitle className="fw-bold">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function renderComments(comments) {
  console.log('comments: ', comments);
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} {comment.date}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('this.props: ', this.props);
    return (
      <div className="container">
        <div className="row">
          {renderDish(this.props.dish)}
          {renderComments(this.props.dish?.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
