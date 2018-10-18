# BudapestRooms
Oct. 11th, 2018: Demonstrating Heroku hosting with express

Oct. 11, 2018: I started on creating an idea for a hotel where a user can change a room that was given to them to their own personal choice, but came to another conclusion where a customer/user can make a room more of a home for themself by selecting what type of furniture they would like to have and the size of the room but at a fixed price for the size of the room and get to name their room. Started working on the 7 restful routes and made sure that each page got linked from index>show>index, and index>new>index.

Oct. 12, 2018: started to work on the database to finish using the CRUD method as well as the 7 restful routes in the server.

Oct. 13, 2018: modified the server a bit and got it to work on Heroku, if you follow my commits you will see the transitions.

Oct. 14, 2018: Made controllers using router instead of app, and having an issue with Heroku, keeps on giving me an error for cannot get /. I tried to change for having it redirect from the server to the router gave an error for server, then used app in the controller and gave an application error, So i am thinking that this will be as close to success for now until i can get everything up and running.

Oct. 14, 2018: Got app to work on Heroku with help from TA hours just needed to put my app.get('/', (req, res)...res.redirect('/budapest') route inside my server and not inside my controller. Going to work on the login page and styling! Will need to ask a few questions on how to get the Suite to match up with the price, EG: (Double = 50, Queen = 100, King = 300, Presidential = 1000, make a home = 300000)

Oct, 15 2018: Worked on the login page needing some help with that and to get my style sheet up, Once that is done i will have a site ready and organized with a sign up page and a login page with images, will work on all that tomorrow, was just a busy/weird day for me to work on the project not much time had been given in like previous days.

Oct. 16, 2018: worked on the css for all webpages, and added a few more features for the show page which includes a picture, room name, creator of the room, date they will be coming to stay, and what type of style they like. Pretty much done but would like someone to see the style if its ok or needed to be changed, Will try to get a login page up by tomorrow hopefully.  

Oct 17, 2018 put in Date to check in and check out but not working in the seed, missed TA hours to get that fixed from personal issues with the network so tried to work on my own but couldn't figure out on how to fix that. Updated on the style of the app and feel like that it shows what it needed to for now.

Unsolved Problems:
1) Getting dates to show up from seed
2) tried to align the box for create more centered but don't know why its not moving anymore
3) making a drop down box for the room suite where it would show King, Queen, Double, or Presidential and have a fixed price.
4) Tried to make the format really simple and straight forward but wanted to add a login/signup page but made things more complex so kind of left it and was not up for the challenge to work for the last two days. 

Link to the working app: https://budapestrooms.herokuapp.com/budapest
