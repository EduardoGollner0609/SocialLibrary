package com.eduardo.sociallibrary.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.ManyToMany;

public class Role {

	private Long id;
	private String authority;

	@ManyToMany
	private Set<User> users = new HashSet<>();

	public Role() {
	}

	public Role(Long id, String authority) {
		this.id = id;
		this.authority = authority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

}
