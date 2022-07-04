package com.rim.services.dao;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import com.rim.services.models.Stock;

public class Stockdao {


	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
	
    
    public List<Stock> getAll() {
        String sql = "select u from Stock u order by u.id desc ";
        TypedQuery<Stock> qr = em.createQuery(sql, Stock.class);
        return qr.getResultList();
    }
    public Stock add(Stock stock) {
        em.getTransaction().begin();
        em.persist(stock); 
        em.getTransaction().commit();
        return stock;
    }

    public Stock update(Stock stock) {
        System.out.println("here ");
        em.getTransaction().begin();
        em.merge(stock);
        em.getTransaction().commit();
        return stock;
    }

    public boolean remove(Stock stock) {

        em.getTransaction().begin();

        em.remove(stock);

        em.getTransaction().commit();
           return true;
    }

    public Stock getById(Long id) {

     return em.find(Stock.class,id);

    }



}
