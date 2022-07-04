package com.rim.services.resource;

import java.util.List;

import com.rim.services.dao.Stockdao;
import com.rim.services.models.Stock;

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
@Path("/stock")

public class Stockrecource {

	private static final long serialVersionUID = 1L;

    public Stockrecource() {
        super();
    }
    Stockdao ad = new Stockdao();
    
    @GET
    public List<Stock> getall() {
    	
        return ad.getAll();
    }

    @GET
    @Path("/{idStock}")
    public Stock getById(@PathParam("idStock") Long id) {

        return ad.getById(id);
    }

    @POST
    public Stock add(Stock stock) {
      return ad.add(stock);
    }

    @PUT
    @Path("/{idStock}")
    public Stock update(Stock stock, @PathParam("idStock") Long id) {
    	stock.setId(id);
       return ad.update(stock);

    }

    @DELETE
    @Path("/{idStock}")
    public boolean delete(@PathParam("idStock") Long id) {
      return ad.remove(ad.getById(id));
    }
}

