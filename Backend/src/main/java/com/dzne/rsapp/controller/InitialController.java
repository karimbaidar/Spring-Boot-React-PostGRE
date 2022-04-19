package com.dzne.rsapp.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.*;

import com.dzne.rsapp.entities.Course;
import com.dzne.rsapp.services.CourseService;


@CrossOrigin(origins = "http://localhost:3000")  // This is important to avoid cors problem. So must include it.
@RestController
public class InitialController {
	
	@Autowired
	private CourseService courseService;
	
	
	
	@GetMapping("/home")
	public String home()
	{
		return "Home Message";
	}
	
	// Get the courses
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseService.getCourses();
		
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseService.getCourse(Long.parseLong(courseId));
	}

	@PostMapping(path="/courses", consumes="application/json")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseService.addCourse(course);
	}
	
	@PutMapping(path="/courses", consumes="application/json")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<String> deleteCourse(@PathVariable String courseId)
	{
		try{
			this.courseService.deleCourse(Long.parseLong(courseId));
			return new ResponseEntity<>("You will get this message if everything goes right", HttpStatus.OK);
		}
		catch (Exception e) {
		
		    return new ResponseEntity<>("Not OK", HttpStatus.INTERNAL_SERVER_ERROR);


		}
	}
	

}
