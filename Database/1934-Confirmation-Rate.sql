# Write your MySQL query statement below
/*
Select s.user_id, Round(Avg(If(c.action = 'confirmed', 1, 0)), 2) As confirmation_rate
From Signups s left join Confirmations c on s.user_id = c.user_id
Group By s.user_id
*/

#COALESCE: if null returns 0
Select s.user_id, Coalesce(Round(Sum(c.action = 'confirmed')/Count(*), 2), 0.00) As confirmation_rate
From Signups s left join Confirmations c on s.user_id = c.user_id
Group By s.user_id