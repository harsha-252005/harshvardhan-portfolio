package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.BadgeEntity;

@Repository
public interface ForumrepositoryBadge extends JpaRepository<BadgeEntity, Integer> {
           
}