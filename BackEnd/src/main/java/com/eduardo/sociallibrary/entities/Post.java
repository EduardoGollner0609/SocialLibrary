package com.eduardo.sociallibrary.entities;

import java.time.Instant;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Post {

	private String message;
	private Instant moment;
	private Integer likes;

	@ManyToOne
	@JoinColumn(name = "author_id")
	private User author;

	public Post() {
	}

	public Post(String message, Instant moment, Integer likes, User author) {
		this.message = message;
		this.moment = moment;
		this.likes = likes;
		this.author = author;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public Integer getLikes() {
		return likes;
	}

	public void setLikes(Integer likes) {
		this.likes = likes;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}

}
