
import React from 'react';

import axios from "axios";
import base_url from "./../api/bootapi";
import {toast} from 'react-toastify';
import {Link} from "react-router-dom";

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

// update function is called so that when you delete a course, it will update the screen and records
const Course = ({course, update}) => {

    const deleteCourse = (id) => {
        
        axios.delete(`${base_url}/courses/${id}`).then(
        
            (response)=>{
           
                toast.success("deleted!");
                update(id);
                  
            
            },
            (error)=>{
                console.log(error);
                toast.success("Something went wrong");
            }
        
        )


    }

    const updateCourse = (id) => {
        
       


    }

    
    return (
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardTitle className="font-weight-bold" tag="h5">{course.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Container className="text-center">
                        <Button color="danger" onClick={() => {
                            deleteCourse(course.id);
                        }}>Delete</Button>
                         
                    </Container>
                    <Link tag ="a" className="list-group-item list-group-item-action"  to={{pathname:"/update-courses", aboutProps:{id:course.id}}}>Update</Link>

                </CardBody>
            </Card>
        </div>
    );
};

export default Course;