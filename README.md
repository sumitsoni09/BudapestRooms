# BudapestRooms
Oct. 11th, 2018: Demonstrating heroku hosting with express

Oct. 11, 2018: I started on creating an idea for a hotel where a user can change a room that was given to them to their own personal choice, but came to another conclusion where a customer/user can make a room more of a home for themself by selecting what type of furniture they would like to have and the size of the room but at a fixed price for the size of the room and get to name their room. Started working on the 7 restful routes and made sure that each page got linked from index>show>index, and index>new>index. 

Oct. 12, 2018: started to work on the database to finish using the CRUD method as well as the 7 restful routes in the server. 

Oct. 13, 2018: modified the server a bit and got it to work on heroku, if you follow my commits you will see the transitions. 

Oct. 14, 2018: Made controllers using router instead of app, and having an issue with heroku, keeps on giving me an error for cannot get /. I tried to change for having it redirect from the server to the router gave an error for server, then used app in the controller and gave an application error, So i am thinking that this will be as close to success for now until i can get everything up and running. 

Oct. 14, 2018: Got app to work on Heroku with help from TA hours just needed to put my app.get('/', (req, res)...res.redirect('/budapest') route inside my server and not inside my controller. Going to work on the login page and styling! Will need to ask a few questions on how to get the Suite to match up with the price, EG: (Double = 50, Queen = 100, King = 300, Presidential = 1000, make a home = 300000) 

link to the working app: https://budapestrooms.herokuapp.com/budapest
