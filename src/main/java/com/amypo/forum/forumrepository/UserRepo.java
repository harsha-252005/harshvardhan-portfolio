package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amypo.forum.entity.Entityclass;



public interface UserRepo extends JpaRepository<Entityclass,Integer>{

	

}
