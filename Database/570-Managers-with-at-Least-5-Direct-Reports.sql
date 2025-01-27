# Write your MySQL query statement below
SELECT e.name
FROM Employee e Join (
    SELECT managerId, Count(managerId) As directReports
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(managerId) >= 5
    ) e2 ON e.id = e2.managerId;
