import React from 'react';

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      {props.children}
    </div>
  );
}

export default Jumbotron;
