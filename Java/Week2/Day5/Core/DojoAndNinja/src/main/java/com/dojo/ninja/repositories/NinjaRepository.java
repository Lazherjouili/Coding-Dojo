package com.dojo.ninja.repositories;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.ninja.models.Ninja;
@Repository
public interface NinjaRepository extends ListCrudRepository<Ninja, Long> {

}
