package com.rim.services.resource;

import com.rim.services.dao.Admindao;
import com.rim.services.dao.Authdao;
import com.rim.services.models.Admin;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/admin")
public class Adminrecource {
	private static final long serialVersionUID = 1L;

    public Adminrecource() {
        super();
    }
    Admindao ad = new Admindao();
    Authdao authdoa=new Authdao();
    
    @GET
    public List<Admin> getall() {
    	
        return ad.getAll();
    }

    @GET
    @Path("/{idAdmin}")
    public Admin getById(@PathParam("idAdmin") Long id) {

        return ad.getById(id);
    }

    @POST
    public Admin add(Admin admin) {
      return ad.add(admin);
    }


    @PUT
    @Path("/{idAdmin}")
    public Admin update(Admin admin, @PathParam("idAdmin") Long id) {
        admin.setId(id);
       return ad.update(admin);

    }

    @DELETE
    @Path("/{idAdmin}")
    public boolean delete(@PathParam("idAdmin") Long id) {
      return ad.remove(ad.getById(id));
    }
    @GET
    @Path("login/{login}/{password}")
    public boolean getUser(@PathParam("login")String login, @PathParam("password")String password) {
  		boolean userWithToken = authdoa.validate(login, password); 
  		 return  userWithToken ; 
        }
}
