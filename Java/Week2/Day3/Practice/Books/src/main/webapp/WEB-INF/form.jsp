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
<h2 class="text-3xl font-bold mt-24 flex justify-center">Create New Book</h2>
<form action="/books/process"   method="POST" class="max-w-sm mx-auto mt-12 ">
  
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
    <input type="text"  name="title" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " >
  </div>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 ">Language</label>
    <input type="text" name="language"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>
 
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 ">Pages</label>
    <input type="number" name="numOFPages"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  </div>
  
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
    <textarea name="description"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></textarea>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
</form>
</body>
</html>