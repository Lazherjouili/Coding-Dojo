package com.dojo.bookclub.repositories;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.bookclub.models.Book;
@Repository
public interface BookRepository extends ListCrudRepository<Book, Long> {

}
