package com.dojo.burger.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="burgers")
public class Burger {
	
	// MEMBER VARIABLES
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
		
		@NotBlank
		@Size(min = 4, max = 100)
	private String BurgerName;
		@NotBlank
		@Size(min = 4, max = 100)
	private String RestaurantName;

		@NotNull
		@Min(0)
		@Max(4)
	private Integer Rating;
		@NotBlank
		@Size(min = 4, max = 100)
	private String Notes;
		
		// This will not allow the createdAt column to be updated after creation
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;	
//		----- methods ---
	    // other getters and setters removed for brevity
	    @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
	    
	    // zero-args constructor
		public Burger() {
			
		}
		
		
		// GETTERS & SETTERS
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getBurgerName() {
			return BurgerName;
		}
		public void setBurgerName(String burgerName) {
			BurgerName = burgerName;
		}
		public String getRestaurantName() {
			return RestaurantName;
		}
		public void setRestaurantName(String restaurantName) {
			RestaurantName = restaurantName;
		}
		public Integer getRating() {
			return Rating;
		}
		public void setRating(Integer rating) {
			Rating = rating;
		}
		public String getNotes() {
			return Notes;
		}
		public void setNotes(String notes) {
			Notes = notes;
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
	    
		
	    

}
