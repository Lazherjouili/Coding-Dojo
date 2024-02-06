package com.dojo.ninja.repositories;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.ninja.models.Dojo;
@Repository
public interface DojoRepository extends ListCrudRepository<Dojo, Long> {

}
