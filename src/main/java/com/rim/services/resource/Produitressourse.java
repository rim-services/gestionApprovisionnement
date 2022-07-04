package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Produitdao;
import com.rim.services.models.Produit;

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
@Path("/Produit")
public class Produitressourse {
	private static final long serialVersionUID = 1L;

	public Produitressourse() {
        super();
    }
	Produitdao Prod = new Produitdao();
	 @GET
	    public List<Produit> getall() {
	    	
	        return Prod.getAll();
	    }
	 @GET
	    @Path("/{idProduit}")
	    public Produit getById(@PathParam("idProduit") Long id) {

	        return Prod.getById(id);
	    }
	 
	  @POST
	    public Produit add(Produit produit) {
	      return Prod.add(produit);
	    }
	  @PUT
	    @Path("/{idProduit}")
	    public Produit update(Produit produit, @PathParam("idProduit") Long id) {
		  produit.setId(id);
	       return Prod.update(produit);

	    }

	    @DELETE
	    @Path("/{idProduit}")
	    public boolean delete(@PathParam("idProduit") Long id) {
	      return Prod.remove(Prod.getById(id));
	    }



}
