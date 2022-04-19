import e from 'cors';
import React, { Fragment, useEffect, useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';



const UpdateCoursing = (props) => {

  
  if(props.location.aboutProps !== undefined) {

    var tmpId = props.location.aboutProps.id;

  } 

  
  
  useEffect(() =>{

    document.title="Add Courses";

}, []);

const [course, setCourse] = useState({});
const handleForm1 = (e) =>{
  const id=tmpId;
  const values={
    ...course,
    id
  }
  console.log(values);
  // console.log(course);
  putDatatoServer(values);
  e.preventDefault();
}


// Create a function to post data on server
const putDatatoServer = (data) => {
  // console.log(data);
  axios.put(`${base_url}/courses`, data).then(
        
    (response)=>{
        // console.log(response);
        toast("Hello!");
          
    
    },
    (error)=>{
        console.log(error);
        toast.notify("Something went wrong");
    }

)
}

    // you can also use simple return ();
    // onChange function is very important, it updates the values in DB.
    return <Fragment>

<Form onSubmit={handleForm1}>
      {/* <FormGroup>
        <Label for="exampleEmail">Course ID</Label>
        <Input type="number" name="id" id="id" value={tmpId} placeholder="with a placeholder" 
        onChange={(e)=>{   
          setCourse({...course, title:e.target.value})  }}
        
        
        />  
      </FormGroup> */}
      <hr className="my-2" />   

      <FormGroup>
        <Label for="examplePassword">Course Title</Label>
        <Input type="title" name="title" id="title" placeholder="Course Title" onChange={(e)=>{   
          setCourse({...course, title:e.target.value}) // get old data of the course


        }} />
      </FormGroup>
      <hr className="my-2" />

      <FormGroup>
        <Label for="Course Description">Course Decription</Label>
        <Input type="textarea" name="description" id="description"  placeholder="Course description" onChange={(e)=>{   
          setCourse({...course, description:e.target.value}) // get old data of the course


        }} 
        style={{ height:150}}
        
        />
      </FormGroup>
      <br/>
      <Container className="text-center">
      <Button color="success">Update Course</Button>&nbsp;
      <Button color="warning ml-2">clear</Button>
        </Container>

  
    </Form>


    </Fragment>
}

export default UpdateCoursing;