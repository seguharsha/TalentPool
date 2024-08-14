create database ;
use ;
create table Items(id int auto_increment primary key,Username varchar(200),Email varchar(200),password varchar(100),role varchar(100) not null);
drop table Items;


CREATE TABLE Gigs(
    Email VARCHAR(100),
    Gigname VARCHAR(100),
    Price VARCHAR(100),
    Skills VARCHAR(100),
    Keywords VARCHAR(100),
    ImageAddress VARCHAR(10000),
    UserReview VARCHAR(100),
    GitHubLink VARCHAR(100)
);

select * from Items;

CREATE TABLE Posts(
    Email VARCHAR(100),
    Phone VARCHAR(100),
    Website VARCHAR(100),
    LinkedIn VARCHAR(1000),
    GitHub VARCHAR(10000),
    CompetitionsWon VARCHAR(100),
    Zip VARCHAR(100)
);
