package com.eduardo.sociallibrary.entities;

import java.time.Instant;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Comment {

	private Long id;
	private String text;
	private Instant moment;
	private Integer likes;

	@ManyToOne
	@JoinColumn(name = "post_id")
	private Post post;

	public Comment() {
	}

	public Comment(Long id, String text, Instant moment, Integer likes, Post post) {
		this.id = id;
		this.text = text;
		this.moment = moment;
		this.likes = likes;
		this.post = post;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
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

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

}
