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
                  -- {comment.author}
                  {', '}
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
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

//! Presentational Component
class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
