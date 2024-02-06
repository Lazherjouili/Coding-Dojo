package com.dojo.lookify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.lookify.models.Song;

@Repository
public interface SongRepository extends ListCrudRepository<Song, Long> {
	@Query(value="SELECT*FROM songs ORDER BY rating DESC LIMIT 10",nativeQuery=true)
	List<Song> getTopTen();
	

}
