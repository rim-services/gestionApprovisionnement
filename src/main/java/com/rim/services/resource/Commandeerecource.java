package com.rim.services.resource;
import java.util.List;

import com.rim.services.dao.Commandedao;
import com.rim.services.dao.Commandeedao;
import com.rim.services.models.Commande;

import com.rim.services.models.Commandee;
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
@Path("/commandee")


public class Commandeerecource {

    private static final long serialVersionUID = 1L;

    public Commandeerecource() {
        super();
    }
    Commandeedao ad = new Commandeedao();

    @GET
    public List<Commandee> getall() {

        return ad.getAll();
    }

    @GET
    @Path("/{idCommande}")
    public Commandee getById(@PathParam("idCommande") Long id) {

        return ad.getById(id);
    }

    @POST
    public Commandee add(Commandee commande) {
        return ad.add(commande);
    }

    @PUT
    @Path("/{idCommande}")
    public Commandee update(Commandee commande, @PathParam("idCommande") Long id) {
        commande.setId(id);
        return ad.update(commande);

    }

    @DELETE
    @Path("/{idCommande}")
    public boolean delete(@PathParam("idCommande") Long id) {
        return ad.remove(ad.getById(id));
    }
}
