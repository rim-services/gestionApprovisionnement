//package com.rim.services.resource;
//
//import com.rim.services.dao.Authdao;
//
//import javax.servlet.*;
//import javax.servlet.annotation.WebFilter;
//import java.io.IOException;
//import java.io.PrintWriter;
//
///**
// * Servlet Filter implementation class LoginFilter
// */
//@WebFilter(
//        urlPatterns = {"/LoginFilter"},
//        servletNames = {"DisplayHeader"}
//        )
////@Path("LoginFilter")
//public class LoginFilter implements Filter {
//	private Authdao authdao;
//	//private Clientsdao loginClient;
//	//private Fournisseurdao loginFournisseur;
//
//    public LoginFilter() {
//        super();
//        // TODO Auto-generated constructor stub
//    }
//
//	@Override
//	public void init(FilterConfig filterConfig) throws ServletException {
//
//	}
//
//
//	/**
//	 * @see Filter#destroy()
//	 */
//	public void destroy() {
//		// TODO Auto-generated method stub
//	}
//
//	/**
//	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
//	 */
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		// TODO Auto-generated method stub
//		// place your code here
//
//		// pass the request along the filter chain
//		 PrintWriter out = response.getWriter ();
//			response.setContentType("text/html");
//			String username = request.getParameter("username");
//	        String password = request.getParameter("password");
//
//	        if (authdao.validate(username, password)) {
//	        	//System.out.println(username);
//          RequestDispatcher dispatcher = request.getRequestDispatcher("login-success.jsp");
//	            dispatcher.forward(request, response);
//
//	        //    AccueilAdmin a1=new AccueilAdmin();
//	          //  chain.doFilter (request, response);
//	            }
//
////	        if (loginClient.validate(username, password)) {
////
////	        	AcceuilClient a2=new AcceuilClient();
////	            chain.doFilter (request, response);
////	            }
////	        if (loginFournisseur.validate(username, password)) {
////
////	        	AcceuilFournisseur a3=new AcceuilFournisseur();
////	            chain.doFilter (request, response);
////	            }
//	              else{
//	            out.print ("erreur login ou mot de passe incorrect" );
//
//	              }
//
//
//
//	}
//
//
//
////	  @see Filter#init(FilterConfig)
//
////	public void init(FilterConfig fConfig) throws ServletException {
////		// TODO Auto-generated method stub
////		 authdao = new Authdao();
////		 //loginClient = new Clientsdao();
////		// loginFournisseur = new Fournisseurdao();
////	}
//
//}
