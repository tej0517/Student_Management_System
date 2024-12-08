package com.codewithtejas.fullstack_backend.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codewithtejas.fullstack_backend.entity.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long> {

}
