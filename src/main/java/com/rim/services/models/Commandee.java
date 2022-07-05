package com.rim.services.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "commandee")
public class Commandee {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "date")
    private Date date;

    @Column(name = "etat")
    private String etat;

    @Column(name="id_fournisseur")
    private int id_fournisseur;

    public Commandee() {

    }
    public Commandee(Long id,String libelle,int fournisseur,   Date date,String etat) {

        this.id = id;
        this.id_fournisseur = fournisseur;
        this.date = date;
        this.etat = etat;
        this.libelle=libelle;
    }
    public Commandee(Date date,String etat,String libelle) {

        this.date = date;
        this.etat = etat;
        this.libelle=libelle;
    }

    public Commandee(Long id, Date date, String etat) {
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

    public int getFournisseur() {
        return id_fournisseur;
    }
    public void setFournisseur(int fournisseur) {
        this.id_fournisseur = fournisseur;
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
    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

}


