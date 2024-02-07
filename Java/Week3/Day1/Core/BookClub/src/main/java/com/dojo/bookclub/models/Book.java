package com.dojo.bookclub.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="books")
public class Book {
	
	// MEMBER VARIABLES
			@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			private Long id;

			@NotBlank(message = "Title is required!")
			@Size(min = 3, max = 30, message = "title must be between 3 and 30 characters")
			private String title;

			@NotBlank(message = "Author is required!")
			@Size(min = 3, max = 30, message = "author must be between 3 and 30 characters")
			private String author;

			@NotBlank(message = "Password is required!")
			@Size(min = 4,  message = "mythoughts must be 4 chars ")
			private String mythoughts;

			
			
			// This will not allow the createdAt column to be updated after creation
			@Column(updatable = false)
			@DateTimeFormat(pattern = "yyyy-MM-dd")
			private Date createdAt;
			
			@DateTimeFormat(pattern = "yyyy-MM-dd")
			private Date updatedAt;
			
//			----- methods ---
			// other getters and setters removed for brevity
			@PrePersist
			protected void onCreate() {
				this.createdAt = new Date();
			}

			@PreUpdate
			protected void onUpdate() {
				this.updatedAt = new Date();
			}

			//CONSTRUCTOR ZERO ARGS
			public Book() {
			
			}
			
			//many to one
			@ManyToOne(fetch=FetchType.LAZY)
			@JoinColumn(name="user_id")
			private User user;

			//GETTERS AND SETTERS
			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getTitle() {
				return title;
			}

			public void setTitle(String title) {
				this.title = title;
			}

			public String getAuthor() {
				return author;
			}

			public void setAuthor(String author) {
				this.author = author;
			}

			public String getMythoughts() {
				return mythoughts;
			}

			public void setMythoughts(String mythoughts) {
				this.mythoughts = mythoughts;
			}

			public Date getCreatedAt() {
				return createdAt;
			}

			public void setCreatedAt(Date createdAt) {
				this.createdAt = createdAt;
			}

			public Date getUpdatedAt() {
				return updatedAt;
			}

			public void setUpdatedAt(Date updatedAt) {
				this.updatedAt = updatedAt;
			}

			public User getUser() {
				return user;
			}

			public void setUser(User user) {
				this.user = user;
			}
			
			
			
	

}
