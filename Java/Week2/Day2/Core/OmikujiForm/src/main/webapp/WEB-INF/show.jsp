<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>omikuji</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex justify-center mt-24">
<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Here's Your Omikuji!</h5>
<p class="font-normal text-gray-700 ">In ${KeyNumber } years,you will live in ${KeyCity } with ${KeyPerson } as your roommate, ${KeyHobby }
 for a living.The next time you see ${KeyThing }, you will have good luck, Also, ${KeySomeone }</p>
</div>
</div>
</body>
</html>