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
<title>DOJO</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
	<h2 class="text-3xl font-bold mt-24 flex pl-32 pr-32">${dojo.name } Ninjas</h2>
	<div class="pl-32 pr-32">
		<table class="min-w-full border-collapse block md:table mt-12">
			<thead class="block md:table-header-group">
				<tr
					class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">

					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Age</th>
					

				</tr>
			</thead>
			<tbody class="block md:table-row-group">

				<c:forEach var="dojoNinjas" items="${dojo.dojoNinjas}">
					<tr
						class=" border border-grey-500 md:border-none block md:table-row">

						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell ">${dojoNinjas.firstName}</td>
						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${dojoNinjas.lastName}</td>
						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${dojoNinjas.age}</td>
						

					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	
</body>
</html>