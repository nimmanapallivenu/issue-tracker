package com.venu.tracker.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.venu.tracker.entity.User;
import com.venu.tracker.repo.UserRepository;
import com.venu.tracker.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	public String getLoggedInUserId() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null) {
			return "nosession";
		}
		return auth.getName();
	}

	public User getLoggedInUser() {
		String loggedInUserId = this.getLoggedInUserId();
		User user = this.getUserInfoByUserId(loggedInUserId);
		return user;
	}

	public User getUserInfoByUserId(String userId) {
		User user = this.userRepository.findOneByUserId(userId).orElseGet(() -> new User());
		return user;
	}

	public boolean insertOrSaveUser(User user) {
		this.userRepository.save(user);
		return true;
	}

	public boolean addNewUser(User user) {
		User newUser = this.getUserInfoByUserId(user.getUserId());
		if (newUser.getUserId().equals("new")) {
			// This means the username is not found therfore its is returning a
			// default value of "new"
			return this.insertOrSaveUser(user);
		} else {
			return false;
		}
	}
}
