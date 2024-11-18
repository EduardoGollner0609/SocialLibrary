package com.eduardo.sociallibrary.entities;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_post")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String message;
	private Instant moment;
	private Integer likes;

	@ManyToOne
	@JoinColumn(name = "author_id")
	private User author;

	@OneToMany(mappedBy = "post")
	private List<Comment> comments = new ArrayList<>();

	public Post() {
	}

	public Post(Long id, String message, Instant moment, Integer likes, User author) {
		this.id = id;
		this.message = message;
		this.moment = moment;
		this.likes = likes;
		this.author = author;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public void addComent(Comment comment) {
		this.comments.add(comment);
	}

	public List<Comment> getComments() {
		return comments;
	}

}
