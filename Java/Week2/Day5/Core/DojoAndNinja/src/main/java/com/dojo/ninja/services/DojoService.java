package com.dojo.ninja.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.ninja.models.Dojo;
import com.dojo.ninja.repositories.DojoRepository;

@Service
public class DojoService {

	
	// Business LOGIC
			// C R U D
			
			// DI
			@Autowired
			private DojoRepository dojoRepo;
			
			// READ ALL
			public List<Dojo> allDojos(){
				return dojoRepo.findAll();
			}
			
			// CREATE
			public Dojo createDojo(Dojo b) {
				return dojoRepo.save(b);
			}
			
			
			// READ ONE
			public Dojo findDojoById(Long id) {
				Optional<Dojo> maybeDojo = dojoRepo.findById(id);
				if(maybeDojo.isPresent()) {
					return maybeDojo.get();
				}else {
					return null;
				}
			}
			
			// UPDATE
			public Dojo updateDojo(Dojo b) {
				return dojoRepo.save(b);
			}
			
			// DELETE
			public void deleteDojo(Long id) {
				dojoRepo.deleteById(id);
			}
			
}
