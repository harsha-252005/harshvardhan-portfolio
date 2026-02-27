package com.amypo.forum.forumrepository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.amypo.forum.entity.CommentEntity;



public interface ComRepo extends JpaRepository<CommentEntity,Integer> {

}