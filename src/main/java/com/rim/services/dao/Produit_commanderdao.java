package com.rim.services.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.rim.services.models.Produit_commander;

public class Produit_commanderdao {
	
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
	public List<Produit_commander> getAll() {
        String sql = "select u from Produit_commander  u order by u.id desc ";
        TypedQuery<Produit_commander> qr = em.createQuery(sql, Produit_commander.class);
        return qr.getResultList();
    }
	
	public Produit_commander add(Produit_commander produit_commander) {
        em.getTransaction().begin();
        em.persist(produit_commander); 
        em.getTransaction().commit();
        return produit_commander;
    }
	public Produit_commander update(Produit_commander produit_commander) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(produit_commander);
        em.getTransaction().commit();
        return produit_commander;
    }

	public boolean remove(Produit_commander produit_commander) {

        em.getTransaction().begin();

        em.remove(produit_commander);

        em.getTransaction().commit();
           return true;
    }

    public Produit_commander getById(Long id) {

     return em.find(Produit_commander.class,id);

    }

}
