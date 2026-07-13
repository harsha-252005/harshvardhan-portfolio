package com.amypo.forum.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="newposts_table")
public class PostEntity {
	      
	      @Id
	      @GeneratedValue(strategy=GenerationType.IDENTITY)
          @Column(name="users_id")
          private int users_id;
          @Column(name="postscontent")
          private String postscontent;
          @Column(name="likescount")
          private int likescount;
          @Column(name="replyscount")
          private int replyscount;
          @Column(name="posts_wordcount")
          private int posts_wordcount;
}
