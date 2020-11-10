import React, {Component} from "react";
import  EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    name: "",
    employeesCopy: [{}]
    
  };

componentDidMount() {
  this.setState({employeesCopy: this.state.employees})
}
    removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({
      employees
    });
  };

     sortName = () => {

    let updatedEmployees = this.state.employees

    // sort by name
    updatedEmployees.sort(function (a, b) {
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

    this.setState({ employees: updatedEmployees });
  };



    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;

    // Updating the input's state
    this.setState({
      name: value
    
    })

    this.setState({employees: this.state.employeesCopy})
    console.log("value",value);

   
  };

    handleSearch = event => {
    event.preventDefault();

  let value = this.state.name.toUpperCase();
  
  let results = this.state.employees.filter(employee => employee.name.toUpperCase() === value || employee.name.toUpperCase().includes(value) );

  this.setState({ employees: results });
            
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
    
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            age={employee.age}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;