# Guild Chat

Welcome to the Guild Chat repo! This is a very simple messaging app for demo purposes. 

## Code breakdown


## Tech Stack

* Rails 5.1 / Ruby 2.3.1
* React 16.3 
* Redux 3.7.2
* ActiveModelSerializers

Testing:
* RSpec

## To-Dos

There are many things I didn't implement in the first pass through. Given more time and/or if this was a production project, I would add:

* Use [JSON Web Tokens](https://github.com/jwt/ruby-jwt) for real user authorization.
* Use an authService to store the user in `localStorage` so that a refresh won't "lose" the logged in user
* Allow users to create group conversations. The data model already suppors this, as one `conversation` can have many `users` through `user_conversations`.