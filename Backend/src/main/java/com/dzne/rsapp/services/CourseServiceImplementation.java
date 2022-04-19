package com.dzne.rsapp.services;

//import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dzne.rsapp.DAO.CourseDao;
import com.dzne.rsapp.entities.Course;



@Service
public class CourseServiceImplementation implements CourseService {

//	List<Course> list;
	
	
	// Peforming Dependency Injection = Automatically connecing all the materials related to Course
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImplementation() {
		
//		list = new ArrayList<>();
//		list.add(new Course(145, "Java course", "This contain basic sof Java"));
//		list.add(new Course(4343, "Spring Boot", "Creating Rest Api"));
		
	}
	
	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		
//		Course c = null;
//		// ForEach Loop
//		for(Course course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c= course;
//				break;
//			}
//		}
		
//		return c;
		// DAO is also known as entity class repository
		return courseDao.findById(courseId).get();

		//Basically getOne is a lazy load operation. Thus you get only a reference (a proxy) to the entity.
		// That means no DB access is actually made. Only when you call it's properties then it will query the DB.
		// findByID does the call 'eagerly'/immediately when you call it, thus you have the actual entity fully populated.

//		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
	
		
//		list.add(course);
		
		
//		return course;
		
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {

//		Course myCustomer = courseDao.findById(course.getId()).get();
		
		// lamda e-> is used to get only one course in e and then check its id with course id. 
//		list.forEach(e->{
//			if(e.getId() == course.getId())
//			{
//				e.setTitle(course.getTitle()); // adding title
//				e.setDescription(course.getDescription());
//
//			}
//		});


		courseDao.save(course);
		return course;
	}

	@Override
	public void deleCourse(long parseLong) {
		
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		
//		list = this.list.stream().filter(e->e.getId() != parseLong).collect(Collectors.toList());
		
	
	}
 
	
	
	
	


}
