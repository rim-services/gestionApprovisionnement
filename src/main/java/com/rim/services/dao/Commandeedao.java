package com.rim.services.dao;

import com.rim.services.models.Commande;
import com.rim.services.models.Commandee;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;


public class Commandeedao {

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();


    public List<Commandee> getAll() {
        String sql = "select u from Commandee u order by u.id desc  ";
        TypedQuery<Commandee> qr = em.createQuery(sql,  Commandee.class);
        return qr.getResultList();
    }
    public  Commandee add( Commandee  commandee) {

        em.getTransaction().begin();
        em.persist(commandee);
        em.getTransaction().commit();
        return  commandee;

    }

    public  Commandee update(Commandee  commande) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(commande);
        em.getTransaction().commit();
        return  commande;
    }

    public boolean remove(Commandee  commande) {

        em.getTransaction().begin();

        em.remove(commande);

        em.getTransaction().commit();
        return true;
    }

    public Commandee getById(Long id) {

        return em.find(Commandee.class,id);

    }



}

