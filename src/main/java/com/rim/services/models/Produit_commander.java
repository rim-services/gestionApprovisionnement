package com.rim.services.models;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "produit_commander")
public class Produit_commander {
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
 	@Column(name = "id")
    private Long id;

 	public Produit_commander() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Produit_commander(Long id, float quantite, Commande commande, Produit produit) {
		super();
		this.id = id;
		this.quantite = quantite;
		this.commande = commande;
		this.produit = produit;
	}
	@Column(name = "quantite")
    private  float quantite;
 	
   @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_commande ", nullable=false, updatable=false)
	@JsonManagedReference
	private Commande  commande ;
   @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_produit", nullable=false, updatable=false)
	@JsonManagedReference
	private  Produit produit;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public float getQuantite() {
	return quantite;
}
public void setQuantite(float quantite) {
	this.quantite = quantite;
}
public Commande getCommande() {
	return commande;
}
public void setCommande(Commande commande) {
	this.commande = commande;
}
public Produit getProduit() {
	return produit;
}
public void setProduit(Produit produit) {
	this.produit = produit;
}


	
	
}
