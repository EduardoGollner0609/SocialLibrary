package com.eduardo.sociallibrary.entities;

import java.time.Instant;

public class Post {

	private String message;
	private Instant moment;
	private Integer likes;

	public Post() {
	}

	public Post(String message, Instant moment, Integer likes) {
		this.message = message;
		this.moment = moment;
		this.likes = likes;
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

}
