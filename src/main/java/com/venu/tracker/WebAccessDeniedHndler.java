package com.venu.tracker;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

@Component
public class WebAccessDeniedHndler implements AccessDeniedHandler{

	private static final  Logger LOG =LoggerFactory.getLogger(WebAccessDeniedHndler.class);
	
	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException exception)
			throws IOException, ServletException {
	
		Authentication auth=SecurityContextHolder.getContext().getAuthentication();
		
		if(auth != null){
			LOG.info(auth.getName()
                    + " was trying to access protected resource: "
                    + request.getRequestURI());
		}
		response.sendRedirect(request.getServletContext()+"/access-denied");
	}

}
