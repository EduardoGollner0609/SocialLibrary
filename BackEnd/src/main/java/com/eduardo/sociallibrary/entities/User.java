package com.eduardo.sociallibrary.entities;

import java.time.LocalDate;
import java.util.List;

public class User {

	private String name;
	private LocalDate birthDate;
	private String email;
	private String username;
	private String password;
	private String biography;
	private String favoriteLiteraryGenre;
	private List<String> books;

	public User() {
	}

	public User(String name, LocalDate birthDate, String email, String username, String password, String biography,
			String favoriteLiteraryGenre, List<String> books) {
		this.name = name;
		this.birthDate = birthDate;
		this.email = email;
		this.username = username;
		this.password = password;
		this.biography = biography;
		this.favoriteLiteraryGenre = favoriteLiteraryGenre;
		this.books = books;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	public String getFavoriteLiteraryGenre() {
		return favoriteLiteraryGenre;
	}

	public void setFavoriteLiteraryGenre(String favoriteLiteraryGenre) {
		this.favoriteLiteraryGenre = favoriteLiteraryGenre;
	}

	public List<String> getBooks() {
		return books;
	}

	public void setBooks(List<String> books) {
		this.books = books;
	}

}