# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    SELECT P.ProductName, C.CategoryName FROM Products AS P JOIN Categories AS C ON p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    SELECT O.OrderID, S.ShipperName FROM Orders AS O JOIN Shippers AS S ON O.ShipperID = S.ShipperID WHERE O.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    SELECT P.ProductName, O.Quantity AS Quantity FROM OrderDetails AS O JOIN Products AS P ON O.ProductID = P.ProductID WHERE O.OrderID = 10251 ORDER BY P.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
    SELECT DISTINCT O.OrderID, C.CustomerName, E.LastName AS EmployeeLastName FROM Orders AS O JOIN Customers AS C ON O.CustomerID = C.CustomerID JOIN Employees AS E ON O.EmployeeID = E.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
    SELECT C.CategoryName AS CategoryName, COUNT(C.CategoryName) AS Count FROM Products AS P JOIN Categories AS C ON C.Categoryid = P.Categoryid GROUP BY c.categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
    SELECT O.OrderID, COUNT(O.ProductID) AS Count FROM OrderDetails AS O GROUP BY O.OrderID
