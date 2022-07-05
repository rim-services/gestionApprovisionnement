package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Produitdao;

import com.rim.services.dao.Produittdao;
import com.rim.services.models.Produit;
import com.rim.services.models.Produitt;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/Produitt")
public class Produittrecource {
    private static final long serialVersionUID = 1L;

    public Produittrecource() {
        super();
    }
    Produittdao Prod = new Produittdao();
    @GET
    public List<Produitt> getall() {

        return Prod.getAll();
    }
    @GET
    @Path("/{idProduit}")
    public Produitt getById(@PathParam("idProduit") Long id) {

        return Prod.getById(id);
    }

    @POST
    public Produitt add(Produitt produit) {
        return Prod.add(produit);
    }
    @PUT
    @Path("/{idProduit}")
    public Produitt update(Produitt produit, @PathParam("idProduit") Long id) {
        produit.setId(id);
        return Prod.update(produit);

    }

    @DELETE
    @Path("/{idProduit}")
    public boolean delete(@PathParam("idProduit") Long id) {
        return Prod.remove(Prod.getById(id));
    }



}
