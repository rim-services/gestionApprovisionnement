package com.rim.services.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.rim.services.models.Entree;

public class Entreedao {
	
	
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    
    public List<Entree> getAll() {
        String sql = "select u from Entree u order by u.id desc ";
        TypedQuery<Entree> qr = em.createQuery(sql, Entree.class);
        return qr.getResultList();
    }
    
    
    public Entree add(Entree entree) {
        em.getTransaction().begin();
        em.persist(entree); 
        em.getTransaction().commit();
        return entree;
    }
    
    public Entree update(Entree entree) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(entree);
        em.getTransaction().commit();
        return entree;
    }
    public boolean remove(Entree entree) {

        em.getTransaction().begin();

        em.remove(entree);

        em.getTransaction().commit();
           return true;
    }

    public Entree getById(Long id) {

     return em.find(Entree.class,id);

    }



}
