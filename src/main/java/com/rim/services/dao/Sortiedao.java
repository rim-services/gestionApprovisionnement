package com.rim.services.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.rim.services.models.Sortie;

public class Sortiedao {

	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    
    
    public List<Sortie> getAll() {
        String sql = "select u from Sortie u order by u.id desc ";
        TypedQuery<Sortie> qr = em.createQuery(sql, Sortie.class);
        return qr.getResultList();
    }
    
    public Sortie add(Sortie sortie) {
        em.getTransaction().begin();
        em.persist(sortie); 
        em.getTransaction().commit();
        return sortie;
    }
    
    public Sortie update(Sortie sortie) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(sortie);
        em.getTransaction().commit();
        return sortie;
    }
    public boolean remove(Sortie sortie) {

        em.getTransaction().begin();

        em.remove(sortie);

        em.getTransaction().commit();
           return true;
    }

    public Sortie getById(Long id) {

     return em.find(Sortie.class,id);

    }


}
