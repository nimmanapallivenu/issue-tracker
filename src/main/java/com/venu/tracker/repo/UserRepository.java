package com.venu.tracker.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.venu.tracker.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	Optional<User> findOneByUserId(String userId);

	Optional<User> findOneByUserIdAndPassword(String userId, String password);

}
