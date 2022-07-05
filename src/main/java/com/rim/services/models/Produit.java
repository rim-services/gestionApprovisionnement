package com.rim.services.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;
import java.util.List;


@Entity
@Table(name="produit")
public class Produit {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;

	@Column(name="code")
    private String code;

	@Column(name="libelle")
    private String libelle;

	@Column(name="prix")
    private float prix;

	@Column(name="date_Expiration")
    private Date date_Expiration;

	@Column(name="quantite")
	private int quantite;

	//@Column(name="id_stock")
	//private int id_stock;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_stock", nullable=false, updatable=false)
	@JsonManagedReference
	private  Stock stock;

	
	/*@OneToMany
    @JoinColumn(name="id_entree")
 	private List<Entree_detail> entree_detail;
 	@OneToMany
    @JoinColumn(name="id_sortie")
 	private List<Sortie_detail> sortie_detail;
	
	public List<Sortie_detail> getSortie_detail() {
		return sortie_detail;
	}*/


	/*public void setSortie_detail(List<Sortie_detail> sortie_detail) {
		this.sortie_detail = sortie_detail;
	}


	public List<Entree_detail> getEntree_detail() {
		return entree_detail;
	}


	public void setEntree_detail(List<Entree_detail> entree_detail) {
		this.entree_detail = entree_detail;
	}*/


	public Stock getStock() {
		return stock;
	}


	public void setStock(Stock stock) {
		this.stock = stock;
	}


	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Produit(Long id, String code, String libelle, float prix, Date date_Expiration, int quantite, int id_stock) {
		this.id = id;
		this.code = code;
		this.libelle = libelle;
		this.prix = prix;
		this.date_Expiration = date_Expiration;
		this.quantite = quantite;
		this.stock = stock;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public Date getDate_Expiration() {
		return date_Expiration;
	}
	public void setDate_Expiration(Date date_Expiration) {
		this.date_Expiration = date_Expiration;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

	
}
