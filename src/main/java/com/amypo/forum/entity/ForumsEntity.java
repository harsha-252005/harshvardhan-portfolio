package com.amypo.forum.entity;

import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import lombok.Data;

@Entity
@Data
@Table(name="forumsactual")
public class ForumsEntity {
	      
	      @Id
	      @GeneratedValue(strategy=GenerationType.IDENTITY)
          @Column(name="forum_id")
          private int forumId;
          @Column(name="forumname")
          private String forumname;
          @Column(name="forumdescription")
          private String forumdescription;
          
          @ManyToMany(cascade=CascadeType.ALL)
          @JoinTable(name="newoptions",
          joinColumns=@JoinColumn(name="forum_id"),
          inverseJoinColumns=@JoinColumn(name="topic_id"))
          private List<TopicsEntity> topic;
}