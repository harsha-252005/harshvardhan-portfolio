package com.amypo.forum.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="smtpdata")
@Data
public class SmtpEntity {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)  //AutoIncrement
      
	  private int id;
	  private String subject;
	  private String receiver;
	  private String content;
	  }