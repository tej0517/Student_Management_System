package com.codewithtejas.fullstack_backend.exception;

public class UserNotFoundException extends RuntimeException{
	
	public UserNotFoundException(Long id) {
		super("could not found user with id "+ id);
	}

}
