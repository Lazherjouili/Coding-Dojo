package com.dojo.burger.repositories;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.burger.models.Burger;


@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {

	// Find ALL BOOKS
		List<Burger> findAll();
}
