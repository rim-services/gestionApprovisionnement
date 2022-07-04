package com.rim.services.resource;

import com.rim.services.dao.Entree_detaildao;
import com.rim.services.models.Entree_detail;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/Entree_detail")
public class Entreer_detailressource {

	private static final long serialVersionUID = 1L;

    public Entreer_detailressource() {
        super();
    }

    Entree_detaildao EN = new Entree_detaildao();
    
    @GET
    public List<Entree_detail> getall() {
    	
        return EN.getAll();
    }
    
    @GET
    @Path("/{idEntree_detail}")
    public Entree_detail getById(@PathParam("idEntree_detail") Long id) {

        return EN.getById(id);
    }

    @POST
    public Entree_detail add(Entree_detail entree_detail) {
      return EN.add(entree_detail);
    }

    @PUT
    @Path("/{idEntree_detail}")
    public Entree_detail update(Entree_detail entree_detail, @PathParam("idEntree_detail") Long id) {
        entree_detail.setId(id);
       return EN.update(entree_detail);

    }

    @DELETE
    @Path("/{idEntree_detail}")
    public boolean delete(@PathParam("idEntree_detail") Long id) {
      return EN.remove(EN.getById(id));
    }



}
