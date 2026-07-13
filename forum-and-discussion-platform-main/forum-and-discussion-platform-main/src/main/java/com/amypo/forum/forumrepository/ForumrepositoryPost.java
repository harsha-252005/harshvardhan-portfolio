package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.PostEntity;

@Repository
public interface ForumrepositoryPost extends JpaRepository<PostEntity, Integer> {
           
}
