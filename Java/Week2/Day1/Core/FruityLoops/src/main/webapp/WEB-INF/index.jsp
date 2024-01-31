<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
	<h1>Fruit Store</h1>
	<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
     
    </tr>
  </thead>
  <tbody>
	<c:forEach items="${fruits}" var="onefruit">
	  
    <tr>
      <td><c:out value="${ onefruit.name}"/></td>
      <td><c:out value="${ onefruit.price}"/></td>
    </tr>
   
    </c:forEach>
     </tbody>
    </table>
</body>
</html>