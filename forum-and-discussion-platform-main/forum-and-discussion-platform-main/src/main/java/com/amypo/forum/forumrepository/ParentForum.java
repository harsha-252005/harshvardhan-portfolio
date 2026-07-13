package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.ForumsEntity;

@Repository
public interface ParentForum extends JpaRepository<ForumsEntity,Integer> {

}
