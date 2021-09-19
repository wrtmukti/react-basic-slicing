import React from 'react';

function Jobcard(props) {
  return (
    <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4 mb-4 ">
      <div className="card py-4 shadow-lg h-100 hover-top" style={{borderRadius: "30px"}}>
        <div className="text-center"> <img src={props.icon} alt="" width={100} />
          <div className="card-body px-2">
            <h6 className="fw-bold heading-color" style={{fontSize: "20px"}}>{props.title} </h6>
            <p className="mb-0 card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;