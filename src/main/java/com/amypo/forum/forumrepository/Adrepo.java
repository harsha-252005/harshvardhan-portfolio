package com.amypo.forum.forumrepository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.amypo.forum.entity.AdminEntity;


public interface Adrepo extends JpaRepository<AdminEntity,Integer>{

}