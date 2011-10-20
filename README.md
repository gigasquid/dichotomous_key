# Dichotmous Key

This is a small CoffeScript/ JavaScript library implementing a
[Dichotmous Key](http://en.wikibooks.org/wiki/Dichotomous_Key) for fossils.


## Setup instructions

* Ruby 1.9
* bundle install
* guard (to automatically compile CoffeeScript)  
* rake jasmine
* http://localhost:8888/ to run the tests

##Usage
The fossil key is referenced by 
          
    fossil_key

An example of a key pair of statements is :

    [ { key_pair: 1, statement: "The fossil resembles a modern day seashell", next_statement_pair: 2 },
    { key_pair: 1, statement: "The fossil does not resembles a modern day seashell", next_statement_pair: 8 }]

To get the start of the finder

    fossil_key.start

To get the next statement pair or final answer based on the text chosen:

    fossil_key.choose_statment ("The fossil resembles a modern day seashell")

It will return either the next key pair of statements or the final specimen:
   
    { name: "Dunbarella PELECYPOD", photo_image: "test_photo_image" , drawing_image: "test_drawing_image" , description: "This is a test description" }



