package com.rim.services.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "stock")
public class Stock {
 	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
 	@Column(name = "id")
    private Long id;
 	
 	@Column(name = "nom")
    private String nom;
 	
 	@Column(name = "localisation")
    private String  localisation;
 	
  
	public Stock() {
		
	}

	public Stock(Long id, String nom, String localisation) {
		this.id = id;
		this.nom = nom;
		this.localisation = localisation;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getLocalisation() {
		return localisation;
	}

	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}
}
