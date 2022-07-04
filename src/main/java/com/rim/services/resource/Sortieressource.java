package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Sortiedao;
import com.rim.services.models.Sortie;

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
@Path("/Sortie")
public class Sortieressource {

	private static final long serialVersionUID = 1L;

	    public Sortieressource() {
	        super();
	    }
	    
	    Sortiedao SR = new Sortiedao();
	    @GET
	    public List<Sortie> getall() {
	    	
	        return SR.getAll();
	    }
	    
	    @GET
	    @Path("/{idSortie}")
	    public Sortie getById(@PathParam("idSortie") Long id) {

	        return SR.getById(id);
	    }

	    @POST
	    public Sortie add(Sortie sortie) {
	      return SR.add(sortie);
	    }

	    @PUT
	    @Path("/{idSortie}")
	    public Sortie update(Sortie sortie, @PathParam("idSortie") Long id) {
	        sortie.setId(id);
	       return SR.update(sortie);

	    }

	    @DELETE
	    @Path("/{idSortie}")
	    public boolean delete(@PathParam("idSortie") Long id) {
	      return SR.remove(SR.getById(id));
	    }



}