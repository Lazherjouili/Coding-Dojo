<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Save Travels</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex justify-center mt-24">
<div class="flex flex-col gap-6  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<div class="flex justify-between">
<h1 class="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">Expense Details</h1>
<a href="/expenses" class="text-blue-700 underline">Go back</a>
</div>

<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Expense Name:</span> ${expense.expenseName }</p>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Expense Description:</span> ${expense.description }</p>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Vendor:</span> ${expense.vendor }</p>
<p class="font-normal text-gray-700 text-1x"><span class="font-bold ">Amount Spent:</span> $ ${expense.amount }</p>
</div>
</div>
</body>
</html>