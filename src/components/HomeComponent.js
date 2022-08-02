import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
//! imp Components
import { Loading } from './LoadingComponent';

//! if dishes, leaders, promotions have featured is true
//! Presentational Component
function RenderCard({ item, isLoading, errMess }) {
  // console.log(baseUrl + item.image);
  if (isLoading) {
    //! pending
    return <Loading />;
  } else if (errMess) {
    //! rejected
    return <h3>{errMess && errMess}</h3>;
  }
  //! fulfilled
  else
    return (
      <Card>
        <CardImg src={item && baseUrl + item.image} alt={item?.name} />
        <CardBody>
          <CardTitle className="fw-bold">{item?.name}</CardTitle>
          {item?.designation && (
            <CardSubtitle>{item?.designation}</CardSubtitle>
            <p>Hello</p>
          )}
          <CardText>{item?.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  console.log('%cHome_props render', 'color: red; font-weight: bold'); //! __DEBUG __props
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errMess={props.promosErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.leader}
            isLoading={props.leadersLoading}
            errMess={props.leadersErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
