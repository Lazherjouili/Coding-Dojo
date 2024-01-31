<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Books</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<!-- component -->
<h2 class="text-3xl font-bold mt-24 flex pl-32 pr-32">All Books</h2>
<div class="pl-32 pr-32">
<table class="min-w-full border-collapse block md:table ">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Title</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Language</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Pages</th>
				
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		
		<c:forEach var="oneBook" items="${allBooks }">
			<tr class=" border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneBook.id}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-blue-500"><a href="/books/${oneBook.id }">${oneBook.title}</a> </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneBook.language}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneBook.numberOfPages}</td>
				
			</tr>
			</c:forEach>	
		</tbody>
	</table>
	</div>
</body>
</html>