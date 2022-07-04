package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Produit_commanderdao;
import com.rim.services.models.Produit_commander;

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
@Path("/Produit_commander")
public class Produit_commanderressource {
	
	private static final long serialVersionUID = 1L;

    public Produit_commanderressource() {
        super();
    }
    Produit_commanderdao pc = new Produit_commanderdao();
    
    @GET
    public List<Produit_commander> getall() {
    	
        return pc.getAll();
    }

    @GET
    @Path("/{idProduit_commander}")
    public Produit_commander getById(@PathParam("idProduit_commander") Long id) {

        return pc.getById(id);
    }

    @POST
    public Produit_commander add(Produit_commander produit_commander) {
      return pc.add(produit_commander);
    }

    @PUT
    @Path("/{idProduit_commander}")
    public Produit_commander update(Produit_commander produit_commander, @PathParam("idProduit_commander") Long id) {
    	produit_commander.setId(id);
       return pc.update(produit_commander);

    }

    @DELETE
    @Path("/{idProduit_commander}")
    public boolean delete(@PathParam("idProduit_commander") Long id) {
      return pc.remove(pc.getById(id));
    }
	
	

}
