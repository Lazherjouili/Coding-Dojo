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
<title>Books</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class=" mt-24 flex justify-between ">
<h2 class="text-3xl font-bold  flex justify-start ml-24">Add a Book to Your Shelf!</h2>

<button type="submit" class=" mr-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a  href="/books">back to the shelves</a></button>
</div>


	<form:form action="/books/${book.id }" method="PUT"
		modelAttribute="book" class="max-w-sm mt-12 ml-24">

		<div class="mb-5">
			<form:label path="title"
				class="block mb-2 text-sm font-medium text-gray-900 ">Title</form:label>
			<form:errors class="text-red-500" path="title" />
			<form:input type="text" path="title"
				class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
		</div>
		<div class="mb-5">
			<form:label path="author"
				class="block mb-2 text-sm font-medium text-gray-900 ">Author</form:label>
			<form:errors class="text-red-500" path="author" />
			<form:input type="text" path="author"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
		</div>

		

		<div class="mb-5">
			<form:label path="mythoughts"
				class="block mb-2 text-sm font-medium text-gray-900 ">My thoughts</form:label>
			<form:errors class="text-red-500" path="mythoughts" />
			<form:textarea path="mythoughts"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></form:textarea>
		</div>

		<button type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
	</form:form>
</body>
</html>