# Write your MySQL query statement below
Select p.product_id, Round(Coalesce(Sum(u.units * p.price) / Sum(u.units), 0.00), 2) AS average_price
From Prices p Left Join UnitsSold u on p.product_id = u.product_id And u.purchase_date BETWEEN p.start_date AND p.end_date
Group By p.product_id;
