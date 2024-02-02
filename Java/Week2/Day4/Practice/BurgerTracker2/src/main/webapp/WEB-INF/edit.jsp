<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
	<div class="flex justify-between mt-24">
		<h2 class="text-3xl font-bold  flex justify-start ml-24">Edit a Burger:</h2>
	 	<button  type="submit" class="text-white mr-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a href="/burgers">Go back</a></button>
	 </div>
	
<form:form action="/burgers/${burger.id }"   method="post" modelAttribute="burger" class="max-w-sm mt-12 ml-24">
  <input type="hidden" name="_method" value="put">
  <div class="mb-5">
    <form:label path="BurgerName" class="block mb-2 text-sm font-medium text-gray-900 ">Burger Name</form:label>
    <form:input type="text"  path="BurgerName" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
  </div>
  <div class="mb-5">
    <form:label  path="RestaurantName" class="block mb-2 text-sm font-medium text-gray-900 ">Restaurant Name</form:label>
    <form:input type="text" path="RestaurantName"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
  </div>
 
  <div class="mb-5">
    <form:label path="Rating" class="block mb-2 text-sm font-medium text-gray-900 ">Rating</form:label>
    <form:input type="number" path="Rating"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
  </div>
  
  <div class="mb-5">
    <form:label path="Notes"  class="block mb-2 text-sm font-medium text-gray-900 ">Notes</form:label>
    <form:textarea path="Notes"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></form:textarea>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
</form:form>
</body>
</html>