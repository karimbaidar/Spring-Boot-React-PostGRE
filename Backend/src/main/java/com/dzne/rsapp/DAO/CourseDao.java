package com.dzne.rsapp.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dzne.rsapp.entities.Course;


// extending jpaRepository will helps us to get all the entities for adding, fetching to database

public interface CourseDao extends JpaRepository<Course, Long> {

	
	
	
}
