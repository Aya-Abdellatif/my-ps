# Write your MySQL query statement below

# A CROSS JOIN produces a Cartesian product of the Students and Subjects tables.Each student is paired with every subject, regardless of whether they are related
# A LEFT JOIN keeps all rows from the result of the CROSS JOIN and attempts to match them with rows in the Examinations table.

Select s.student_id, s.student_name, sub.subject_name, Count(e.student_id) As attended_exams
From Students s Cross Join Subjects sub
Left Join Examinations e On s.student_id = e.student_id And sub.subject_name = e.subject_name
Group By s.student_id, sub.subject_name
Order By s.student_id, sub.subject_name;