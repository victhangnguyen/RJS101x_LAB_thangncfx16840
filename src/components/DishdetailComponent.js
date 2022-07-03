import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//! Functional Component

function RenderDish({ dish }) {
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

//! Functional Component
function RenderComments({ comments }) {
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
}

//! Array Presentational Component
const DishDetail = (props) => {
  if (!props.dish) return <></>;
  // console.log('props.dish: ', props.dish); //!__DEBUG __props.dish
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
