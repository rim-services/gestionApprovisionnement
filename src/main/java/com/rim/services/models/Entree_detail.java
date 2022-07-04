package com.rim.services.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "entree_detail")
public class Entree_detail {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

   // @Column(name = "id_produit")
    //private Long id_produit;

   // @Column(name = "id_entree")
    //private Long id_entree;

    @Column(name = "quantite")
    private Long quantite;

    @Column(name="pu")
    private float pu;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_entree", nullable=false, updatable=false)
	@JsonManagedReference
	private  Entree entree;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_produit", nullable=false, updatable=false)
	@JsonManagedReference
	private  Produit produit;

    public Entree_detail() {
    }

    public Entree_detail(Long id, Produit produit, Entree entree, Long quantite, float pu) {
        this.id = id;
        this.produit = produit;
        this.entree = entree;
        this.quantite = quantite;
        this.pu=pu;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produit getId_produit() {
        return produit;
    }

    public void setId_produit(Produit produit) {
        this.produit = produit;
    }

    public Entree getId_entree() {
        return entree;
    }

    public void setId_entree(Entree Entree) {
        this.entree = Entree;
    }

    public Long getQuantite() {
        return quantite;
    }

    public void setQuantite(Long quantite) {
        this.quantite = quantite;
    }

    public float getPu() {
        return pu;
    }

    public void setPu(float pu) {
        this.pu = pu;
    }
}
