import React, { useState } from 'react';
import Course from './Course';
import { Jumbotron, Button , Container} from 'reactstrap';

const Allcourse = () => {



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
        //  fontFamily:"comic sans ms",
         background:"#EF7911"
        }}
        >
            Welcome to Courses App</h1>
         
        </Jumbotron>
      </div>
    );



};

export default Allcourse;