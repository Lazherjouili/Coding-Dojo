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
<title>Ninja ana dojo</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
	
	<h2 class="text-3xl font-bold mt-24 flex justify-start ml-24">New Ninja</h2>
	<form:form action="/ninjas/processNinja" method="POST"
		modelAttribute="ninja" class="max-w-sm mt-12 ml-24">
		 <div class="mb-4">
                    <form:select path="dojo" class="border p-2 rounded w-full">
                    <c:forEach items="${allDojos }" var="oneDojo">
                        <option value="${oneDojo.id }">${oneDojo.name }</option>
                      </c:forEach>
                    </form:select>
                </div>
		<div class="mb-5">
			<form:label path="firstName"
				class="block mb-2 text-sm font-medium text-gray-900 ">First Name</form:label>
			<form:errors class="text-red-500" path="firstName" />
			<form:input type="text" path="firstName"
				class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
		</div>
		<div class="mb-5">
			<form:label path="lastName"
				class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</form:label>
			<form:errors class="text-red-500" path="lastName" />
			<form:input type="text" path="lastName"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
		</div>

		<div class="mb-5">
			<form:label path="age"
				class="block mb-2 text-sm font-medium text-gray-900 ">Age</form:label>
			<form:errors class="text-red-500" path="age" />
			<form:input type="number" path="age"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
		</div>

	

		<button type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
	</form:form>
</body>
</html>