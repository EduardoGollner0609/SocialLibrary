package com.eduardo.sociallibrary.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private LocalDate birthDate;
	private String email;
	private String username;
	private String password;
	private String biography;
	private String favoriteLiteraryGenre;
	private List<String> books = new ArrayList<>();

	@OneToMany(mappedBy = "user")
	private List<Annotation> annotations = new ArrayList<>();

	public User() {
	}

	public User(Long id, String name, LocalDate birthDate, String email, String username, String password,
			String biography, String favoriteLiteraryGenre) {
		this.name = name;
		this.birthDate = birthDate;
		this.email = email;
		this.username = username;
		this.password = password;
		this.biography = biography;
		this.favoriteLiteraryGenre = favoriteLiteraryGenre;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public void addBook(String book) {
		this.books.add(book);
	}

	public List<Annotation> getAnnotations() {
		return annotations;
	}

	public void addAnnotation(Annotation annotation) {
		this.annotations.add(annotation);
	}

}
