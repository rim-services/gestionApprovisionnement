package com.rim.services.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.rim.services.models.Admin;

public class Authdao {
	EntityManagerFactory emf = Persistence.createEntityManagerFactory("ServicesUnit");
    EntityManager em = emf.createEntityManager();
    
    public boolean validate(String nom,String password) {
        em.getTransaction().begin();
        String sql = "SELECT u FROM Admin u where  u.email = :nom and u.pass = :password ";
        Query query = em.createQuery(sql,Admin.class);
        query.setParameter("nom",nom);
        query.setParameter("password",password);
        try{
            Admin u = (Admin) query.getSingleResult();
            return true;
        }catch (Exception e){
            return false;
        }
       
    }
}