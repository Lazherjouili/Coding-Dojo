package com.dojo.bookclub.repositories;

import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.bookclub.models.User;
@Repository
public interface UserRepository extends ListCrudRepository<User, Long> {
	
	// for logging user
	Optional<User>findByEmail(String email);

}
