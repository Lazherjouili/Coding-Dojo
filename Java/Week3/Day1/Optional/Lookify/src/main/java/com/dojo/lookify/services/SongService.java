package com.dojo.lookify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.lookify.models.Song;
import com.dojo.lookify.repositories.SongRepository;

@Service
public class SongService {

//		DI
	
	@Autowired
	private  SongRepository songRepo;
	
	public Song create(Song s) {
		return songRepo.save(s);
	}
	
	public Song findSongById(Long id) {
		Optional<Song> optionalSong=songRepo.findById(id);
		if(optionalSong.isPresent()) {
			return optionalSong.get();
		}else {
			return null;
		}
	}
	
	
	public List<Song> findAllSong(){
		return songRepo.findAll();
	}
	
	public Song updateSong(Song s) {
		return songRepo.save(s);
	}
	
	public void deleteSong(Long id) {
		songRepo.deleteById(id);
	}
	
	public List<Song> getTop
	
}
