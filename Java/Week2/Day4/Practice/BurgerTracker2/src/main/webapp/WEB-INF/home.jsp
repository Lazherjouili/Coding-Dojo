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
<title>Burgers</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<h2 class="text-3xl font-bold mt-24 flex pl-32 pr-32">All Burgers</h2>
<div class="pl-32 pr-32">
<table class="min-w-full border-collapse block md:table mt-12">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
	
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Burger Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Restaurant Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Rating (out of 5)</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
				
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		
		<c:forEach var="oneBurger" items="${allBurgers}">
			<tr class=" border border-grey-500 md:border-none block md:table-row">
				
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-blue-500">${oneBurger.burgerName} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneBurger.restaurantName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneBurger.rating}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><a href="/burgers/edit/${oneBurger.id }">Edit</a></td>
				
			</tr>
			</c:forEach>	
		</tbody>
	</table>
	</div>
	<h2 class="text-3xl font-bold mt-24 flex justify-start ml-24">Add a Burger:</h2>
<form:form action="/burgers/process"   method="POST" modelAttribute="burger" class="max-w-sm mt-12 ml-24">
  
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