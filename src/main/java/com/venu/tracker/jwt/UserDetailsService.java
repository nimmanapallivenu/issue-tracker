package com.venu.tracker.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.venu.tracker.entity.User;
import com.venu.tracker.repo.UserRepository;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	private final AccountStatusUserDetailsChecker detailsChecker = new AccountStatusUserDetailsChecker();

	@Override
	public final TokenUser loadUserByUsername(String username) throws UsernameNotFoundException, DisabledException {

		final User user = userRepository.findOneByUserId(username)
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
		TokenUser currentUser;
		if (user.isActive() == true) {
			currentUser = new TokenUser(user);
		} else {
			throw new DisabledException("User is not activated (Disabled User)");
			// If pending activation return a disabled user
			// currentUser = new TokenUser(user, false);
		}
		detailsChecker.check(currentUser);
		return currentUser;
	}

}