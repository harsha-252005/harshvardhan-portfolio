package com.amypo.forum.forumrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.Entityclass;

@Repository
public interface Forumrepository extends JpaRepository<Entityclass, Integer> {

	List<Entityclass> findByUsersNameStartsWith(String usersName);

	List<Entityclass> findByUsersNameEndsWith(String usersName);

	List<Entityclass> findByUsersNameContains(String usersName);

	List<Entityclass> findByUsersNameContaining(String usersName);

	List<Entityclass> findByUsersNameNotContaining(String usersName);

}