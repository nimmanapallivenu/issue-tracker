package com.venu.tracker.entity;

import com.venu.tracker.dto.OperationResponse;

public class UserResponse extends OperationResponse {
	private User data = new User();

	public User getData() {
		return data;
	}

	public void setData(User data) {
		this.data = data;
	}

}
