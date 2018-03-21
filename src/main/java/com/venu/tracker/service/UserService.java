package com.venu.tracker.service;

import com.venu.tracker.entity.User;

public interface UserService {

	public User getLoggedInUser();

	public User getUserInfoByUserId(String userId);

	public boolean addNewUser(User user);

	String getLoggedInUserId();

}
