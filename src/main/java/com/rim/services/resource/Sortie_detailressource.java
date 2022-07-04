package com.rim.services.resource;

import com.rim.services.dao.Sortie_detaildao;
import com.rim.services.models.Sortie_detail;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/Sortie_detail")
public class Sortie_detailressource {

	private static final long serialVersionUID = 1L;

    public Sortie_detailressource() {
        super();
    }

    Sortie_detaildao EN = new Sortie_detaildao();
    
    @GET
    public List<Sortie_detail> getall() {
    	
        return EN.getAll();
    }
    
    @GET
    @Path("/{idSortie_detail}")
    public Sortie_detail getById(@PathParam("idSortie_detail") Long id) {

        return EN.getById(id);
    }

    @POST
    public Sortie_detail add(Sortie_detail sortie_detail) {
      return EN.add(sortie_detail);
    }

    @PUT
    @Path("/{idSortie_detail}")
    public Sortie_detail update(Sortie_detail sortie_detail, @PathParam("idSortie_detail") Long id) {
        sortie_detail.setId(id);
       return EN.update(sortie_detail);

    }

    @DELETE
    @Path("/{idSortie_detail}")
    public boolean delete(@PathParam("idSortie_detail") Long id) {
      return EN.remove(EN.getById(id));
    }



}
