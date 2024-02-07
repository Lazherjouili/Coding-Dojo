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
</head>
<body>
<h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">Welcome, ${user.userName }</h1>
<p>This is your dashboard. Nothing to see here yet.</p>
<a href="/logout">Logout</a>
</body>
</html>