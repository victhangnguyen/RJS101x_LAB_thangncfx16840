import React from 'react';

  export function Loading() {
    return (
      <div className="col-12">
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
        <p>Loading ... </p>
      </div>
    );
  }
