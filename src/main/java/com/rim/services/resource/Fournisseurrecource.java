package com.rim.services.resource;
import java.util.List;

import com.rim.services.dao.Fournisseurdao;
import com.rim.services.models.Fournisseur;

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
@Path("/fournisseur")

public class Fournisseurrecource {

	private static final long serialVersionUID = 1L;

    public Fournisseurrecource() {
        super();
    }
    Fournisseurdao ad = new Fournisseurdao();
    
    @GET
    public List<Fournisseur> getall() {
    	
        return ad.getAll();
    }

    @GET
    @Path("/{idFournisseur}")
    public Fournisseur getById(@PathParam("idFournisseur") Long id) {

        return ad.getById(id);
    }

    @POST
    public Fournisseur add(Fournisseur fournisseur) {
      return ad.add(fournisseur);
    }

    @PUT
    @Path("/{idFournisseur}")
    public Fournisseur update(Fournisseur fournisseur, @PathParam("idFournisseur") Long id) {
    	fournisseur.setId(id);
       return ad.update(fournisseur);

    }

    @DELETE
    @Path("/{idFournisseur}")
    public boolean delete(@PathParam("idFournisseur") Long id) {
      return ad.remove(ad.getById(id));
    }
}
