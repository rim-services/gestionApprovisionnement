package com.rim.services.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "commande")
public class Commande {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
 	@Column(name = "id")
    private Long id;

 	@Column(name = "date")
    private Date date;
 	
 	@Column(name = "etat")
    private String etat;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_fournisseur", nullable=false, updatable=false)
	@JsonManagedReference
	private Fournisseur fournisseur;

	// 	@Column(name = "id_fournisseur")
//    private Long id_fournisseur;


	public Commande() {
		
	}
	public Commande(Long id,Fournisseur fournisseur,   Date date,String etat) {
		super();
		this.id = id;
		this.fournisseur = fournisseur;
		this.date = date;
		this.etat = etat;
	}
	public Commande(Date date,String etat) {
		super();
		this.date = date;
		this.etat = etat;
	}

	public Commande(Long id, Date date, String etat) {
		this.id = id;
		this.date = date;
		this.etat = etat;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public Fournisseur getFournisseur() {
		return fournisseur;
	}
	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	
}


