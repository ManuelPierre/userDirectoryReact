import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function FriendCard(props) {
  return (
   

    <div className="row" id="header" >
  
       <div className="col-sm-2 col-md-2 col-lg-2" id="img-container" >
          <img alt={props.name} src={props.image} />
           </div>

    <div className="col-sm-2 col-md-2 col-lg-2" id ="content">
           {props.name}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-1" id ="content1">
           {props.age}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content2">
          {props.phone}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content3">
          {props.email}
            </div>
           
  
  
    
       
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>


  );
}

export default FriendCard;
