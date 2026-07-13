package com.amypo.forum.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="topic_table")
public class TopicsEntity {
	      
	      @Id
	      @GeneratedValue(strategy=GenerationType.IDENTITY)
          @Column(name="topic_id")
          private int topicId;
          @Column(name="topictitle")
          private String topictitle;
          @Column(name="topicontent")
          private String topicontent;
          @Column(name="topicviews")
          private int topicviews;
          @Column(name="wordcount")
          private int wordcount;
}