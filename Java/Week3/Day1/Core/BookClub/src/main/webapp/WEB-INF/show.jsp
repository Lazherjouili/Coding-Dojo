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
<div class="flex flex-col pl-32 pr-32 mt-24">

	<div  class="flex  justify-between mb-12">
	<h2 class="text-3xl font-bold  flex">${book.title }</h2>
	<button type="submit" class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a  href="/books">back to the shelves</a></button>
	</div>
	<div>
	<p class="font-bold text-2xl"> <c:choose> <c:when test="${book.user.id==user_id }"> <span class="text-orange-700">You</span></c:when><c:otherwise> <span class="text-orange-700">${book.user.userName }</span> </c:otherwise> </c:choose>  read <span class ="text-violet-700">${book.title }</span> by <span class="text-lime-500">${book.author }</span>.Here are Bella's thoughts: </p>
	</div>
	
	<div class="flex  mt-8">
<div class="flex flex-col gap-6  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">


<p class="font-normal text-gray-700 text-1x">${book.mythoughts }</p>

</div>
</div>
<c:if test="${ book.user.id==user_id}">
<div class="flex items-center  gap-8 mt-8">

<button type="submit" class="  text-white bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a  href="/books/edit/${book.id }">Edit</a></button>
<form action="/books/${book.id }" method="POST">
<input type="hidden" name="_method" value="delete">
<button type="submit" class="  text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Delete</button>
</form>
</div>
</c:if>
</div>

</body>
</html>