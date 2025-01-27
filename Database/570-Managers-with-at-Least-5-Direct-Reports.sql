# Write your MySQL query statement below
/*
# [570] [Time Beats: 71.19%] - LeetPush
SELECT e.name
FROM Employee e Join (
    SELECT managerId, Count(managerId) As directReports
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(managerId) >= 5
    ) e2 ON e.id = e2.managerId;
*/
#another solution
SELECT E.name
FROM Employee E INNER JOIN Employee m ON E.id = m.managerId
GROUP BY m.managerId
HAVING COUNT(m.managerId) >= 5;
