package com.amypo.forum.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "badges_table")
public class BadgeEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "badges_id")
    private int badges_id;

    @Column(name = "badges_name")
    private String badges_name;

    @Column(name = "badges_type")
    private String badges_type;

    @Column(name = "category")
    private String category; 

    @Column(name = "priorities")
    private int priorities;
}
