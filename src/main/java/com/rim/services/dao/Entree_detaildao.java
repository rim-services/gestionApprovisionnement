package com.rim.services.dao;

import com.rim.services.models.Entree_detail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class Entree_detaildao {
	
	
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    
    public List<Entree_detail> getAll() {
        String sql = "select u from Entree_detail  u order by u.id desc ";
        TypedQuery<Entree_detail> qr = em.createQuery(sql, Entree_detail.class);
        return qr.getResultList();
    }
    
    
    public Entree_detail add(Entree_detail entree_detail) {
        em.getTransaction().begin();
        em.persist(entree_detail);
        em.getTransaction().commit();
        return entree_detail;
    }
    
    public Entree_detail update(Entree_detail entree_detail) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(entree_detail);
        em.getTransaction().commit();
        return entree_detail;
    }
    public boolean remove(Entree_detail entree_detail) {

        em.getTransaction().begin();

        em.remove(entree_detail);

        em.getTransaction().commit();
           return true;
    }

    public Entree_detail getById(Long id) {

     return em.find(Entree_detail.class,id);

    }



}
