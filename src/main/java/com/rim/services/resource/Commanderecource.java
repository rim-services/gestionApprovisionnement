package com.rim.services.resource;
import java.util.List;

import com.rim.services.dao.Commandedao;
import com.rim.services.models.Commande;

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
@Path("/commande")


public class Commanderecource {




	private static final long serialVersionUID = 1L;

    public Commanderecource() {
        super();
    }
    Commandedao ad = new Commandedao();
    
    @GET
    public List<Commande> getall() {
    	
        return ad.getAll();
    }

    @GET
    @Path("/{idCommande}")
    public Commande getById(@PathParam("idCommande") Long id) {

        return ad.getById(id);
    }

    @POST
    public Commande add(Commande commande) {
      return ad.add(commande);
    }

    @PUT
    @Path("/{idCommande}")
    public Commande update(Commande commande, @PathParam("idCommande") Long id) {
    	commande.setId(id);
       return ad.update(commande);

    }

    @DELETE
    @Path("/{idCommande}")
    public boolean delete(@PathParam("idCommande") Long id) {
      return ad.remove(ad.getById(id));
    }
}
