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
<title>Save Travels</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

	
	<div class="flex justify-between mt-24 pr-96">
<h2 class="text-3xl font-bold  flex justify-start ml-24">Edit Expense</h2>
<a href="/expenses" class="text-blue-700 underline">Go back</a>
</div>
<form:form action="/expenses/${expense.id }"   method="POST" modelAttribute="expense" class="max-w-sm mt-12 ml-24">
   <input type="hidden" name="_method" value="put">
  <div class="mb-5">
    <form:label path="expenseName" class="block mb-2 text-sm font-medium text-gray-900 ">Expense Name</form:label>
     <form:errors class="text-red-500" path="expenseName"/>
    <form:input type="text"  path="expenseName" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
  </div>
  <div class="mb-5">
    <form:label  path="vendor" class="block mb-2 text-sm font-medium text-gray-900 ">Vendor</form:label>
     <form:errors class="text-red-500" path="vendor"/>
    <form:input type="text" path="vendor"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
  </div>
 
  <div class="mb-5">
    <form:label path="amount" class="block mb-2 text-sm font-medium text-gray-900 ">Amount</form:label>
    <form:errors class="text-red-500" path="amount"/>
    <form:input type="number" path="amount"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
  </div>
  
  <div class="mb-5">
    <form:label path="description"  class="block mb-2 text-sm font-medium text-gray-900 ">Description</form:label>
    <form:errors class="text-red-500" path="description"/>
    <form:textarea path="description"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></form:textarea>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
</form:form>
</body>
</html>