package com.eduardo.sociallibrary.entities;

public class Annotation {

	private Long id;
	private String book;
	private String summary;

	public Annotation() {
	}

	public Annotation(Long id, String book, String summary) {
		this.book = book;
		this.summary = summary;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBook() {
		return book;
	}

	public void setBook(String book) {
		this.book = book;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

}
