package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.CommentEntity;

@Repository
public interface ForumrepositoryComment extends JpaRepository<CommentEntity, Integer> {
           
}