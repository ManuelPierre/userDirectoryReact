import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
   

    <div className="row"  >


    <div className="col-sm-3 col-md-3 col-lg-3" id ="content">
           {props.name}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content1">
           {props.occupation}
            </div>
            <div className="col-sm-2 col-md-2 col-lg-3" id ="content2">
          {props.location}
            
    </div>
       <div className="col-sm-2 col-md-2 col-lg-2" id="img-container" >
          <img alt={props.name} src={props.image} />
           </div>
    
       
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>


  );
}

export default FriendCard;
