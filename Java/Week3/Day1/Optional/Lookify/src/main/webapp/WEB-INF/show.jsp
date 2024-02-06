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
<div class="flex flex-col justify-center gap-5">
<h1 class="text-3xl font-bold text-center mt-24">Title: ${song.title }</h1>
<h1 class="text-3xl font-bold text-center mt-24">Artist: ${song.artist }</h1>
<h1 class="text-3xl font-bold text-center mt-24">Rating: ${song.rating }</h1>
</div>


</body>
</html>