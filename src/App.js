import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    name: "",
    friendsCopy: [{}]
    
  };

componentDidMount() {
  this.setState({friendsCopy: this.state.friends})
}
    removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({
      friends
    });
  };

     sortName = () => {

    let updatedFriends = this.state.friends

    // sort by name
    updatedFriends.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    this.setState({ friends: updatedFriends });
  };



    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;

    // Updating the input's state
    this.setState({
      name: value
    
    })

    this.setState({friends: this.state.friendsCopy})
    console.log("value",value);

   
  };

    handleSearch = event => {
    event.preventDefault();

  let value = this.state.name.toUpperCase();
  console.log("Nameeee",value )
  let results = this.state.friends.filter(friend => friend.name.toUpperCase() === value || friend.name.toUpperCase().includes(value) );
               
  console.log("results",results);
  this.setState({ friends: results });
            
};

  render() {

      return (
      <Wrapper>
            <div className="container">
        <Title>Employee Directory</Title>
        <h6> Click on the Name to sort</h6>
          
<div className="row no-gutters">
  <div className="col-auto">
        <form className="form-inline">
        <input id ="inputSymbol"className="form-control mr-sm-2" type="search" placeholder="Search"   onChange={this.handleInputChange}aria-label="Search"></input>
        <button id="searchBtn"className="btn btn-outline-secondary my-2 my-sm-0"  onClick={this.handleSearch} type="submit">Search</button>
      </form>
      </div>
        </div>
     

{/* <div>Click on carrots to filter names in ascending order</div> */}
<div className="row no-gutters">

   <div className="col-sm-2 col-lg-2">
        
         <button type="button" className="btn btn-link"> Image </button>
         </div>
         <div className="col-sm-2 col-lg-2">
         <button type="button" onClick={this.sortName} className="btn btn-link"> Name </button>
         </div>
         <div className="col-sm-2 col-lg-2">
         <button type="button" className="btn btn-link"> Age </button>
         </div>
         <div className="col-sm-3 col-lg-3">
         <button type="button" className="btn btn-link"> Phone </button>
         </div>
         <div className="col-sm-2 col-lg-2">
        
         <button type="button" className="btn btn-link"> Email </button>
            
        </div>
    </div>
    
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            age={friend.age}
            phone={friend.phone}
            email={friend.email}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;