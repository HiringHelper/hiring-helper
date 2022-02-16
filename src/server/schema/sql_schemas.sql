
CREATE TABLE users (
    user_id serial,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255),
    password varchar(255),
    state varchar(max)
);



CREATE TABLE jobs (
    job_id serial,
    companyName varchar(255),
    jobTitle varchar(255),
    deadline varchar(255),
    dateApplied varchar(255),
    description varchar(255),
    color varchar(255),
    notes varchar(255),
    contacts varchar(255),
    stage varchar(255),
    location varchar(255),
    user int, 
    salary int, 
    offer int,
);


