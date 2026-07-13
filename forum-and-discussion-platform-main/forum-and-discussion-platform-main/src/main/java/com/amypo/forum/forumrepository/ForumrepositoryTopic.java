package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.TopicsEntity;

@Repository
public interface ForumrepositoryTopic extends JpaRepository<TopicsEntity, Integer> {
           
}