package com.rim.services.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.rim.services.models.Produit;

public class Produitdao {
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    public List<Produit> getAll() {
        String sql = "select u from Produit u order by u.id desc ";
        TypedQuery<Produit> qr = em.createQuery(sql, Produit.class);
        return qr.getResultList();
    }
    
    public Produit add(Produit produit) {
        em.getTransaction().begin();
        em.persist(produit); 
        em.getTransaction().commit();
        return produit;
    }
    
    public Produit update(Produit produit) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(produit);
        em.getTransaction().commit();
        return produit;
    }
    
    public boolean remove(Produit produit) {

        em.getTransaction().begin();

        em.remove(produit);

        em.getTransaction().commit();
           return true;
    }
    
    public Produit getById(Long id) {

        return em.find(Produit.class,id);

       }
    


}
