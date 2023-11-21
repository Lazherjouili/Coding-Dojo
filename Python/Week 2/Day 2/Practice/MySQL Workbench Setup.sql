select name FROM names;
select * FROM names;

INSERT INTO names(name) values("khaled"),("yamna");
delete FROM names where id in (3,2,4);

UPDATE names set name=("amen") where id=5;