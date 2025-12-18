package com.dev.upload.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.upload.model.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
