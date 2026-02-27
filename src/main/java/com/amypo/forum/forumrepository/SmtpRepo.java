package com.amypo.forum.forumrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.forum.entity.SmtpEntity;


@Repository
public interface SmtpRepo extends JpaRepository<SmtpEntity,Integer>{
      
}