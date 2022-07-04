package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Entreedao;

import com.rim.services.models.Entree;

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
@Path("/Entree")
public class Entreeressource {
	
	private static final long serialVersionUID = 1L;

    public Entreeressource() {
        super();
    }
    
    Entreedao EN = new Entreedao();
    
    @GET
    public List<Entree> getall() {
    	
        return EN.getAll();
    }
    
    @GET
    @Path("/{idEntree}")
    public Entree getById(@PathParam("idEntree") Long id) {

        return EN.getById(id);
    }

    @POST
    public Entree add(Entree entree) {
      return EN.add(entree);
    }

    @PUT
    @Path("/{idEntree}")
    public Entree update(Entree entree, @PathParam("idEntree") Long id) {
        entree.setId(id);
       return EN.update(entree);

    }

    @DELETE
    @Path("/{idEntree}")
    public boolean delete(@PathParam("idEntree") Long id) {
      return EN.remove(EN.getById(id));
    }



}
