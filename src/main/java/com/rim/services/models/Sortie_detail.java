package com.rim.services.models;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "sortie_detail")
public class Sortie_detail {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

   // @Column(name = "id_produit")
    //private Long id_produit;

   // @Column(name = "id_sortie")
   // private Long id_sortie;

    @Column(name = "quantite")
    private Long quantite;

    @Column(name="pu")
    private float pu;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_sortie ", nullable=false, updatable=false)
	@JsonManagedReference
	private  Sortie  sortie ;
	
	public Sortie getSortie() {
		return sortie;
	}

	public void setSortie(Sortie sortie) {
		this.sortie = sortie;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "id_produit", nullable=false, updatable=false)
	@JsonManagedReference
	private  Produit produit;

    public Sortie_detail() {
    }

    public Sortie_detail(Long id, Sortie sortie, Produit produit, Long quantite, float pu) {
        this.id = id;
        this.sortie = sortie;
        this.produit = produit;
        this.quantite = quantite;
        this.pu=pu;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
