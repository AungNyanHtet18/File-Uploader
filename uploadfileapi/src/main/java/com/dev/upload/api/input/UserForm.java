package com.dev.upload.api.input;

import com.dev.upload.model.entity.User;

import jakarta.validation.constraints.NotNull;

public record UserForm(
	
	@NotNull(message = "Please enter user name.")
	String username,
	@NotNull(message = "Please enter email.")
	String email,
	String phone) {
 
	public User entity(String imagePath) {
		 var entity = new User();
		 entity.setName(username);
		 entity.setEmail(email);
		 entity.setPhone(phone);
		 entity.setImagePath(imagePath);
		 return entity;
	}
	
}
