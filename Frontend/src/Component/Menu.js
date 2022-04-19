import React, {  } from 'react';
import { ListGroup } from 'reactstrap';
import {Link} from "react-router-dom";

const Menu = () => {


    return (

        <div>
    <ListGroup>
      <Link tag ="a" className="list-group-item list-group-item-action" to="/" action>Home</Link>
      <Link tag ="a" className="list-group-item list-group-item-action"  to="/add-course" action>Add Course</Link>
      <Link tag ="a" className="list-group-item list-group-item-action"  to="/view-courses" action>View Courses</Link>
      <Link tag ="a" className="list-group-item list-group-item-action"  to="/" action>Services</Link>
      <Link tag ="a" className="list-group-item list-group-item-action"  to="/" action>About Us</Link>
    </ListGroup>        
        </div>

    );



};

export default Menu;