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
<title>Save Travels</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
	<h2 class="text-3xl font-bold mt-24 flex pl-32 pr-32">Save Travels</h2>
	<div class="pl-32 pr-32">
		<table class="min-w-full border-collapse block md:table mt-12">
			<thead class="block md:table-header-group">
				<tr
					class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">

					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Expense</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Vendor</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Amount</th>
					<th
						class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>

				</tr>
			</thead>
			<tbody class="block md:table-row-group">

				<c:forEach var="oneExpense" items="${allExpenses}">
					<tr
						class=" border border-grey-500 md:border-none block md:table-row">

						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell text-blue-500"><a
							href="expenses/${oneExpense.id }">${oneExpense.expenseName}</a></td>
						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneExpense.vendor}</td>
						<td
							class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneExpense.amount}</td>
						<td
							class="p-2 md:border md:border-grey-500 text-left  md:table-cell  flex">
							<div class="flex gap-5 items-center">
							<div>
							<button class="text-white bg-green-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
							<a href="/expenses/edit/${oneExpense.id }">Edit</a>
							</button>
							</div>
							<div>
							<form action="/expenses/${oneExpense.id}" method="post">
								<input type="hidden" name="_method" value="delete">
								<button type="submit"
			class="text-white bg-red-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Delete</button>
							</form>
							</div>
							</div>
							</td>

					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	<h2 class="text-3xl font-bold mt-24 flex justify-start ml-24">Add
		an expense</h2>
	<form:form action="/expenses/process" method="POST"
		modelAttribute="expense" class="max-w-sm mt-12 ml-24">

		<div class="mb-5">
			<form:label path="expenseName"
				class="block mb-2 text-sm font-medium text-gray-900 ">Expense Name</form:label>
			<form:errors class="text-red-500" path="expenseName" />
			<form:input type="text" path="expenseName"
				class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
		</div>
		<div class="mb-5">
			<form:label path="vendor"
				class="block mb-2 text-sm font-medium text-gray-900 ">Vendor</form:label>
			<form:errors class="text-red-500" path="vendor" />
			<form:input type="text" path="vendor"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
		</div>

		<div class="mb-5">
			<form:label path="amount"
				class="block mb-2 text-sm font-medium text-gray-900 ">Amount</form:label>
			<form:errors class="text-red-500" path="amount" />
			<form:input type="number" path="amount"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
		</div>

		<div class="mb-5">
			<form:label path="description"
				class="block mb-2 text-sm font-medium text-gray-900 ">Description</form:label>
			<form:errors class="text-red-500" path="description" />
			<form:textarea path="description"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></form:textarea>
		</div>

		<button type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
	</form:form>
</body>
</html>