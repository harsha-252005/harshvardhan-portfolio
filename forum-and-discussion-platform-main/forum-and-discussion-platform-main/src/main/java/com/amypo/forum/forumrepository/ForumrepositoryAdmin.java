package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.AdminEntity;
import com.amypo.forum.entity.Entityclass;

@Repository
public interface ForumrepositoryAdmin extends JpaRepository<AdminEntity, Integer> {


           
}