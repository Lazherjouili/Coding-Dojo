package com.dojo.bookclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.bookclub.models.Book;
import com.dojo.bookclub.models.User;
import com.dojo.bookclub.services.BookService;
import com.dojo.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("books")
public class BookController {

	// DI
			@Autowired
			private BookService bookServ;
			 @Autowired
			 private UserService userServ;
			// display all books
//			@GetMapping("")
//			public String home( Model model,HttpSession session) {
//				// retrieve all books from db
//				List<Book> allBooks = bookServ.allBooks();
//				model.addAttribute("allBooks",allBooks);
//				Long userId=(Long) session.getAttribute("user_id");
//				  User user=userServ.findUserById(userId);
//				  model.addAttribute("user",user);
//				return "home.jsp";
//			}
			//display one book
			@GetMapping("/{id}")
			public String findOneBookById(@PathVariable("id") Long id, Model model) {
				Book selectedBook = bookServ.findBookById(id);
				model.addAttribute("book",selectedBook);
				return "show.jsp";
			}
			
			@GetMapping("/new")
			public String displayForm(@ModelAttribute("book") Book book) {
				return "form.jsp";
			}
			
			// Process Book
			@PostMapping("/process")
			public String createBook(@Valid @ModelAttribute("book") Book book,
					BindingResult result,HttpSession session,
					Model model) {
				if (result.hasErrors()) {
					// retrieve all books from db
					List<Book> allBooks = bookServ.allBooks();
					model.addAttribute("allBooks",allBooks);
					return "home.jsp";
				}else {
					// grab the user id from session
					Long userId = (Long) session.getAttribute("user_id");
					// grab the user by their id
					User user = userServ.findUserById(userId);
					// set the book's author as the current loggedin user(username)
					book.setUser(user);
					Book newBook = bookServ.createBook(book);
					return "redirect:/books";
				}
				
			}
			
			@DeleteMapping("/{id}")
			public String deleteBook(@PathVariable("id") Long id) {
				
				bookServ.deleteBook(id);
				
				return "redirect:/books";
			}
			
			
			// Display Edit Form
			
			@GetMapping("/edit/{id}")
			public String getMethodName(Model model, @PathVariable("id") Long id) {
				// find the book by the id
				Book selectedBook = bookServ.findBookById(id);
				model.addAttribute("book",selectedBook);
				return "edit.jsp";
			}
			
			@PutMapping("/{id}")
			public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result,HttpSession session) {
				
				if(result.hasErrors()) {
					return "edit.jsp";
				}else {
					// grab the user id from session
					Long userId = (Long) session.getAttribute("user_id");
					// grab the user by their id
					User user = userServ.findUserById(userId);
					// set the book's author as the current loggedin user(username)
					book.setUser(user);
					// if there are no errors save the updated book to DB
					bookServ.updateBook(book);
				
					return "redirect:/books";
				}
			}

	
}
