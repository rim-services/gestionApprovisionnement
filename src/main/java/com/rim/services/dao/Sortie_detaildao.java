package com.rim.services.dao;

import com.rim.services.models.Sortie_detail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class Sortie_detaildao {
	
	
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    
    public List<Sortie_detail> getAll() {
        String sql = "select u from Sortie_detail  u order by u.id desc ";
        TypedQuery<Sortie_detail> qr = em.createQuery(sql, Sortie_detail.class);
        return qr.getResultList();
    }
    
    
    public Sortie_detail add(Sortie_detail sortie_detail) {
        em.getTransaction().begin();
        em.persist(sortie_detail);
        em.getTransaction().commit();
        return sortie_detail;
    }
    
    public Sortie_detail update(Sortie_detail sortie_detail) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(sortie_detail);
        em.getTransaction().commit();
        return sortie_detail;
    }
    public boolean remove(Sortie_detail sortie_detail) {

        em.getTransaction().begin();

        em.remove(sortie_detail);

        em.getTransaction().commit();
           return true;
    }

    public Sortie_detail getById(Long id) {

     return em.find(Sortie_detail.class,id);

    }



}
