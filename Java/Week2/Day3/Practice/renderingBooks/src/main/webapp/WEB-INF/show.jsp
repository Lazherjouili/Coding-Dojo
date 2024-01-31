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
<div class="flex justify-center mt-24">
<div class="flex flex-col gap-6  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">

<h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${book.title }</h1>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Description:</span> ${book.description }</p>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Language:</span> ${book.language }</p>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Number of Pages:</span> ${book.numberOfPages }</p>
</div>
</div>
</body>
</html>