import React from 'react';
import { Jumbotron, Button , Container} from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron className="text-center" style={{
        backgroundColor: 'lightgrey',
      }}>
        <h1 className="display-5" style={{
         color:"black",
         fontWeight:"bold", 
         padding:30,
         fontSize:40,
       
         background:"lightgrey"
        }} >Home Page</h1>
                <hr className="my-2" />
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />


      </Jumbotron>
    </div>
  );
};

export default Home;