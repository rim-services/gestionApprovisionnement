package com.rim.services.dao;

import com.rim.services.models.Produit;
import com.rim.services.models.Produitt;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class Produittdao {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    public List<Produitt> getAll() {
        String sql = "select u from Produitt u order by u.id desc ";
        TypedQuery<Produitt> qr = em.createQuery(sql, Produitt.class);
        return qr.getResultList();
    }

    public Produitt add(Produitt produit) {
        em.getTransaction().begin();
        em.persist(produit);
        em.getTransaction().commit();
        return produit;
    }

    public Produitt update(Produitt produit) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(produit);
        em.getTransaction().commit();
        return produit;
    }

    public boolean remove(Produitt produit) {

        em.getTransaction().begin();

        em.remove(produit);

        em.getTransaction().commit();
        return true;
    }

    public Produitt getById(Long id) {

        return em.find(Produitt.class,id);

    }

}
