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
<title>Home Page</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

<a href="song/new" class="text-3xl font-bold mt-24 flex pl-32 pr-32">Add New </a>
<a href="" class="text-3xl font-bold mt-24 flex pl-32 pr-32">Top Songs</a>
<input />
<button>submit</button>
	<div class="pl-32 pr-32">
		<table class="min-w-full border-collapse block md:table mt-12">
			<thead class="block md:table-header-group">
				<tr
					class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">

					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Rating</th>

					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>

				</tr>
			</thead>
			<tbody class="block md:table-row-group">

				<c:forEach var="oneSong" items="${allSongs}">
					<tr
						class=" border border-grey-500 md:border-none block md:table-row">

						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-blue-500"><a href="">${oneSong.title}</a></td>
						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneSong.rating}</td>

						<td
							class="p-2 md:border md:border-grey-500 text-left  md:table-cell  flex">
							
							
						
							<form action="/song/${oneSong.id}" method="post">
								<input type="hidden" name="_method" value="delete">
								<button type="submit"
			class="text-white bg-red-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Delete</button>
							</form>
						
							
							</td>

					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

</body>
</html>