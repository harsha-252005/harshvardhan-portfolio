package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amypo.forum.entity.PostEntity;





public interface UserProfilerepo extends JpaRepository<PostEntity,Integer>{

}