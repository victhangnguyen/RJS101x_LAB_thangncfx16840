import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
//! imp Components
import { Loading } from './LoadingComponent';

//! presentational Component
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

//! presentational Component
function RenderComments(props) {
  // console.log('RenderComments: ', props);

  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {props.comments.map((comment) => {
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
      <CommentForm dishId={props.dishId} addComment={props.addComment} />
    </div>
  );
}

//! presentational Form Component
const CommentForm = (props) => {
  // console.log('%cCommentForm_props: ', 'color: red; font-weight: bold', props); //! __DEBUG __props
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const formik = useFormik({
    initialValues: {
      rating: 5,
      name: '',
      comment: '',
    },
    onSubmit: (values) => {
      toggleModal();
      props.addComment(
        props.dishId,
        values.rating,
        values.author,
        values.comment
      );
    },
  });
  return (
    <div>
      <Button color="primary" onClick={toggleModal}>
        Submit Comment
      </Button>
      <Modal isOpen={isOpenModal} toggle={toggleModal}>
        <Form onSubmit={formik.handleSubmit}>
          <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
          <ModalBody className="p-3">
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="comment">Comment</Label>
              <Input
                id="comment"
                type="textarea"
                rows="5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

//! Array Presentational Component
const DishDetail = (props) => {
  // console.log('props: ', props); //! __DEBUG __props
  if (props.isLoading) {
    //! pending
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    //! rejected
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else {
    //! fulfilled
    if (!props.dish) return <></>;
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            dishId={props.dish.id}
            addComment={props.addComment}
          />
        </div>
      </div>
    );
  }
};

export default DishDetail;
