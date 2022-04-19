package com.dzne.rsapp.services;

import java.util.List;

import com.dzne.rsapp.entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();
	public Course getCourse(long courseId);
	public Course addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleCourse(long parseLong);

}
