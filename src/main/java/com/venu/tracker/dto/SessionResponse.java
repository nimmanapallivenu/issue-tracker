package com.venu.tracker.dto;

import io.swagger.annotations.ApiModelProperty;

public class SessionResponse extends OperationResponse {
	@ApiModelProperty(required = true, value = "")
	private SessionItem item;

	public SessionItem getItem() {
		return item;
	}

	public void setItem(SessionItem item) {
		this.item = item;
	}

}
