package com.amypo.forum.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToOne;


@Entity
@Data
@Table(name="users_table")
public class Entityclass {
	      
	      @Id
          @Column(name="users_id")
          private int users_id;
          @Column(name="usersname")
          private String usersName;
          @Column(name="usersemail")
          private String usersemail;
          @Column(name="userspassword")
          private String userspassword;
          @Column(name="usersrole")
          private String usersrole;
          @OneToOne(cascade = CascadeType.ALL)
          @JoinColumn(name="iduse")
          private PostEntity userspost;
          

}


