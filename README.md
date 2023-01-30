# **_WeShare_**

<a href="https://weshare-media.herokuapp.com/" target="_blank" rel="noopener">WeShare</a>(press for Live DEMO) is a website designed as a "real world social media application".This website is a full experience of what a social media app is.

![mockups](/static/images/flat-devices-mockup.png)

# Table of contents
1. <strong>[Objective](#objective)</strong>
2. <strong>[User Experience UX](#experience)</strong>:
    * [User Stories](#user)
    * [FlowChart](#flow)
    * [Site Structure](#structure)
    * [Typography](#typo)
    * [Color Scheme](#color) 
    * [Project Management](#management)
3. <strong>[Existing Features(User)](#user-features)</strong>:
    * [Site Navigation](#nav)
    * [Welcome Modal](#modal)
    * [Registration for user](#user-reg)
    * [Presentation Slider](#slider)
    * [Menu Page](#menu)
    * [Events Reservations](#events)
    * [Contact page](#contact)
    * [Dropdown Account button](#dropdown)
    * [Blog](#blog) 
    * [Errors 404 and 500](#error)
4. <strong>[Existing Features(Admin)](#features)</strong>:
    * [Admin Panel](#admin)
    * [View/Approve/Delete All Reservations](#view-reservations)
    * [View/Reply/Delete All Messages](#view-messages)
    * [Delete Comments](#delete)
5. <strong>[Future Features](#future-features)</strong>:
    * [Improve Reservations Features](#improve)
    * [Add Reply into the view conversation](#add_reply)
    * [Add Automatic Emails](#emails)
    * [Better User Profile](#better-profile)
    * [More features for Admin section](#more-feat)
6. <strong>[Technologies Used](#technologies)</strong>
7. <strong>[Python Packages](#packages)</strong>
8. <strong>[Testing](#testing)</strong>
9. <strong>[Deployment To Heroku](#deploy)</strong>
10. <strong>[Cloning This Project](#clone)</strong>
11. <strong>[Credits](#credits)</strong>:
    * [Content](#content-credits)
    * [Media](#media)
12. <strong>[Acknowledgments](#acknoledge)</strong>

# Objective <a name="objective"></a>

* The major goal is to prove  a high level of expertise in React and connected it to backend Django Rest FrameWork.
# UX

## User Stories <a name="user"></a>
* User

| As a User | I can create a profile that I can take advantage of different features like,create post or share.               |
|-----------|-----------------------------------------------------------------------------------------------------------------|
| As a User | I edit my profile so that I can easily change profile picture, or change username.                              |
| As a User | I can share stories so that I can share beautiful locations.                                                    |
| As a User | I can view news so that I can stay informed.                                                                    |
| As a User |  I like posts so that I can show my interests.                                                                  |
| As a User |  I can follow other users so that I can easily connect with them .                                              |
| As a User |  I can create events so that I can invite people to join in.                                                    |
| As a User | I can create, update and delete comments on each post so that I can connect and share opinions with other users.|
| As a user | I can block another user so that I hide his content. 

![userstories](/static/images/userstory.png)

## Flowchart <a name="flow"></a>

 The Flowchart for Second Scoop was made in Lucidchart.
 ![lucidchart](/static/images/flowchart.png)
The wireframe also made in Lucidchart
![lucidchart2](/static/images/wire.png)

## Site Structure <a name="structure"></a>
 Second Scoop purpose is to bring together all dessert lovers and improve their services through customer opinions and interactions,offering blog option and also reservation system so users can experience themselvesthe delicious desserts .

* User :
    * Home, Menu , Event Reservation , Contact, Profile dropdown - Check reservations, check messages and Logout .
    * Blog for users to connect and share experieneces .
    * Welcoming Design to attact users.
    * Simple forms with solid validation .
    * Easy way to manage reservations, messages,and posts.

* Admin :
    * Navigation is similar to the User but has speacial features :
        * View all the reservations
        * View all the messages
        * Approve reservations

## Typography <a name="typo"></a>
* A combination of 'Dancing Script' , 'lato' and 'sans-serif' has been user for a better looking site.

## Color Scheme <a name="color"></a>
Color scheme was created on <a href="https://coolors.co/">Coolors</a>
![color-scheme](/static/images/colors.png)
## Project Management <a name="management"></a>
* Database
        * To create the database schema, I used an graph modelling tool Graph Models which shows the entire relationship between all models in the database.I would like to mention that djreservations was not used on this ocassion and I am planning for better structure.
        After following the steps required to install Graph Models, I then used <a href="https://dreampuf.github.io">dreampuf</a> to present the data in a clear way. 
![color-scheme](/static/images/graphviz.png)

<a name="#objective" >Back to Top </a>

 # Existing Features <a name="user-features"></a>
## Existing Features(User) <a name="user"></a>
 
Second Scoop is set up to be easy to use . It contains features that a user would be fimiliar with such as user login,user log out,book reservations and contact forms, blog posts all offering options to create,read,update and delete(CRUD).

## Site Navigation
 * ## Heading and Title<a name='nav'></a>
 ![heasder](/static/images/header.png)
## Modal <a name="modal"></a>
 * Displays Modals of Welcome to direct user to log in or create a new account.

 ![modal](/static/images/modal.png)

## Slider  <a name="slider"></a>
 * Includes the name of the website and a slider showing their delicious desserts .

 ![slider](/static/images/slider.png)

 * ## User Area <a name="user-reg"></a>

 * User Registration -  has built-in authentication and authorization to check certain criteria is met before an account is validated. All passwords are hidden for security purposes.

 ![register](/static/images/register.png)

 * Log In - existing users will ahve to pass authorisation with entering their current username and password to match the database.
 ![login](/static/images/signin.png)
 * Log Out - Users can log out easily and a warning message will be displayed .
 ![logout](/static/images/signout.png)

 Once logged in, user will see:

 * Menu <a name="menu"></a> - a display of some of their recipes with pictures gallery and description.
  ![login](/static/images/menu.png)
  
 * Event Reservations <a name="events"></a>  -CRUD - offering options to create new request with authorisations criteria including : name,date(as a pop up calendar),phone number,number of guests,and message. Once created the reservations will show in Check reservations,there will show if it was approved by the admin or not and also giving options of updated or delete it .

 ![events-page](/static/images/events.png)

* Contact page <a name="contact"></a> - CRUD - displaying a map, offering option of sending a message, after the message is sent in the check you messages tab user can see the messages send and if it was read by admin or not, also can edit or delete any message. 

![contact-page](/static/images/contact2.png)

![contact-page](/static/images/contact.png)

![messages-page](/static/images/messages.png)

* A Drop Down <a name="dropdown"></a>  button with specific username and under that tab will be options to check event,messages or LogOut.

![dropdown](/static/images/drop.png)

* Blog <a name="blog"></a>  - CRUD - this button will display all the posts by other users and each post will have details and offer comment sections to allow users to interact. Every comment or post will be approved by the user before displayed.Users can delete or edit their own post only.
![posts-page](/static/images/posts.png)

### Error 404 and 500 Page.<a name="error"></a> 

![error](/static/images/error.png)

 * ## Admin Area - SuperUser <a name="admin"></a> 
 * From the Pop Up Modal Admin can LogIn .
 * As Admin :
 1. Can manage all the user requests.
 2. Can check and approve or disapprove posts.
 3. Can answer messages.
 4. Can approve events for specific number of guests
![admin-page](/static/images/admin1.png)
![admin-page](/static/images/adminview.png)
![admin-page](/static/images/adminress.png)

 # Future Features<a name="future-features"></a> 
 * Planning to use DJ Reservation as on this occasion I did not use it.
 * In future I am planning on adding Gallery page for images from specific events to attract users.
 * Adding special events where you can book your spot through the site.
 * Adding a booking fee.
 * Better Code Structure and organisation.

 # Technologies Used <a name="technologies"></a>
## FRONT-END:
* [HTML5](https://www.w3schools.com/html/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [BOOTSTRAP](https://getbootstrap.com/) - provides specific styling.
* [JavaScript](https://www.w3schools.com/js/)-provides interactivity.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.
* [Cloudinary](https://cloudinary.com/) - used to store pictures .
* [Mockupbro](https://mockupbro.com/mockup/flat-devices-mockup) - user to create mockups.


## BACK-END:<a name="packages"></a>
* [PYTHON](https://www.w3schools.com/python/) to get details from the user and validate the inputs with python logic.
# Heroku : used for app hosting.

# Testing:
SecondScoop website has been properly tested ,all the code has been run through the W3C html Validator,W3C CSS Validator and JavaScript Validator. Minor errors were found on the first About us page. After fixing and retesting, no errors were found .
### HTML validator results are below:
![errors-html](/static/images/htmlcheck.png)

 ### CSS validator results are below:
 ![Testing2](/static/images/css.png)

 ### Javascript Validator results are below:
 ![Testing3](/static/images/jshint.png)

<a href="#objective" dir='auto'>Back to Top </a>
 ### The app was tested with PEP8 called Pycodestyle.No major errors were found.
 Pep8 Results
 ![Testing4](/static/images/pep1.png)
 ![Testing4](/static/images/pep2.png)
 ![Testing4](/static/images/pep4.png)
 ![Testing4](/static/images/pep5.png)
 ![Testing4](/static/images/pep6.png)
 ![Testing4](/static/images/pep7.png)

# Lighthouse

The website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Developer Tools to test each of the pages for:
* Performance - How the page will be loading.
* Accessibility - Checking if the website is  accessible for all users and how can it be improved.
* Best Practices 
* SEO - Search Engine Optimisation. This helps us to understand if the website is optimised for search engine result rankings.

![lighthouse](/static/images/lighthouse.png)


## Responsiveness Test

* The responsive design tests were carried out manually with [Website Planet](https://www.websiteplanet.com/) ,I can confirm that all the tests were passed.
![web-planet-image-desktop](/static/images/desktop.png)
![web-planet-image-mobile](/static/images/mobile.png)
* The testing was also done through Google Chrome Dev Tools by selecting a device of your choice as follows :
![dev-test](/static/images/dev1tool1.png)
![dev-test](/static/images/dev2.png)

# Browser Compatibility
SecondScoop site was tested on the following browsers with no visible issues for the user:
1. Google Chrome 
2. Safari 
3. Mozilla Firefox
* Appearance, functionality and responsiveness were consistent throughout for a range of browsers and device sizes. 

# Known bugs:

* ### Resolved
* Favicon icon not loading.
* Error in Css testing solved.
![Error-css](/static/images/csserror.png)
* Errors in HTML solved.
![errors-html](/static/images/htmlerror.png)


# Deployment: <a name="deploy"></a>

* The site was deployed to Heroku pages.

1. First we have to create our app on heroku website.
![createapp](/static/images/create-app.png)
2. Name the app.
![create2](/static/images/create1.png)

3. Choose Deploy Section and Connect to Github.
![heroku](/static/images/deploy.png)

 
* The site was deployed to GitHub pages. 
The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** on the left side menu.

 The live link to the Github repository can be found here :https://github.com/mihayounas/second-scoop-milestone-4 .

 ### **To create a local clone of this project**<a name="clone"></a>
The method from cloning a project from GitHub is below:
1. Under the repository’s name, click on the **code** tab.
2. In your preffered IDE open **Git Bash**
3. Change the working directory with the location where you would like your clone to be created .
4. Type **git clone** and the paste the URL copied previously.
5. **Enter** button to be pressed and the clone will be created.


# Credits<a name="credits"></a>

* Tutors were very helpful in making me understand the issues I have encountered throughout.
* Please note that the Post model is inspired by the walkthrough project done with Code Institute.
* Some of the code ideas came from  [Stack Overflow](https://stackoverflow.com/).

### Content<a name="content"></a>

* The font came from [Google Fonts](https://fonts.google.com/).
* The colour scheme was made by [Coolors](https://coolors.co/).
* The icons came from [Favicon icon](https://favicon.io/).
* Wireframes schetch [Lucidchart](https://lucid.app/).
* Some of the code ideas came from  [Stack Overflow](https://stackoverflow.com/).
* Some more research on Slack .

### Media<a name="media"></a>
* Pictures were taken from Pexels(https://www.pexels.com/)

 # Acknowledgements <a name="acknoledge"></a>
The site was completed as a Portfolio 4 Project  Full Stack Software Developer at the [Code Institute](https://codeinstitute.net/). As such I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) and Code Institute Tutor Support for their help and support.

Mihaela Younas 2022.

<a href="#objective" dir='auto'>Back to Top </a>