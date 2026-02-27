package com.amypo.forum.forumrepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.ForumsEntity;


@Repository
public interface ForumrepositoryForums extends JpaRepository<ForumsEntity, Integer> {
	public Page<ForumsEntity> findAll(Pageable page);    
}