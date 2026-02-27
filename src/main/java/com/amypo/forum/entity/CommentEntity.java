package com.amypo.forum.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "comment_table")
public class CommentEntity {

    @Id
    
    @Column(name = "id")
    private int id;

    @Column(name = "type")
    private String type;

    @Column(name = "reportedcount")
    private int reportedcount;

    @Column(name = "status")
    private String status;

    @Column(name = "comments")
    private String comments;

    @ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="newid")
    private AdminEntity admin;
}


