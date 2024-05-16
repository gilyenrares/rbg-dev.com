CREATE DATA rbg_system;
USE rbg_system;

CREATE TABLE users(
  userId INTEGER PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL,
  userPassword VARCHAR(255) NOT NULL,
  userFirstName VARCHAR(255) NOT NULL,
  userLastName VARCHAR(255) NOT NULL,
  userEmail VARCHAR(255) NOT NULL,
  userEmailConfirmed BOOLEAN NOT NULL DEFAULT FALSE,
  userStreetNumber VARCHAR(255) NOT NULL,
  userStreetName VARCHAR(255) NOT NULL,
  userCity VARCHAR(255) NOT NULL,
  userCounty VARCHAR(255) NOT NULL,
  userCountry VARCHAR(255) NOT NULL,
  userPostCode VARCHAR(255) NOT NULL,
  userUpdates BOOLEAN NOT NULL DEFAULT FALSE,
  userNewsletter BOOLEAN NOT NULL DEFAULT FALSE,
  userOffers BOOLEAN NOT NULL DEFAULT FALSE,
  userCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  userModified ON UPDATE CURRENT_TIMESTAMP TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
)