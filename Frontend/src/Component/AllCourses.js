import React, { useState ,useEffect} from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Allcourse = () => {

    useEffect(() =>{

        document.title="All Courses";

    }, []);


    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
        
            (response)=>{
                // console.log(response.data);
                toast.success("Courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        
        )
    }

    // Calling loading Course Function
    useEffect(()=>{

        getAllCoursesFromServer();


    },[]);
    // [] this is used to not cal useEffect multiple times, 
    // so we use [] this to call only once but it will be executed multiple times for each course

    const [courses, setCourses] = useState([
        {title:"Java Course",},
        {title:"nothing"},



]);


const updateCourses = (id) => {

    setCourses(courses.filter((c) => c.id != id));


}



    return (

        <div>
            <h1>All Courses</h1>
            <p> List of Courses</p>
            {
                courses.length > 0 ? courses.map((item) => 
                
                    <Course key = {item.id} course = {item} update={updateCourses}/>  // updateCourses method is used when a person delete a course, the screen would be automatically updated.
                    
                    ) : "No Courses Available"

            }
        </div>

    );



};

export default Allcourse;