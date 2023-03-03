# **_WeShare_**

<a href="https://weshare-media.herokuapp.com/" target="_blank" rel="noopener">WeShare</a>(press for Live DEMO) is a website designed as a "real world social media application".This website is a full experience of what a social media app is.

![mockups](/images/mock.png)

# Table of contents
1. <strong>[Objective](#objective)</strong>
2. <strong>[User Experience UX](#experience)</strong>:
    * [User Stories](#user)
    * [FlowChart](#flow)
    * [Site Structure](#structure)
    * [Typography](#typo)
    * [Color Scheme](#color) 
3. <strong>[Existing Features(User)](#user-features)</strong>:
    * [Site Navigation](#nav)
    * [Registration for user](#user-reg)
4. <strong>[Future Features](#future-features)</strong>:
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
* Real-world social media application that provides a full experience of what a social media app.
* User Registration.
* Creating and editing posts.
* Commenting.
* Liking.
* Following other users.

# UX

## User Stories <a name="user"></a>
* User

| As a User | I can share a post so that I can repost it to my friends.               |
|-----------|-----------------------------------------------------------------------------------------------------------------|
| As a User | I can create an event for inviting my friends so that I can meet them.                              |
| As a User | I can create a story with location so that I can share it with my friends.                                   |
| As a User |  I can search for specific user so that I can follow them                                                              |
| As a User |  I like posts so that I can show my interests.                                 |
| As a User |  I can update my username and password so that I can change my display name and keep my profile secure                                     |
| As a User |  I can create events so that I can invite people to join in.                                        |
| As a User | I can edit my own profile so that I can change my profile picture and description.                               |
| As a user | I can block another user so that I hide his content. 
| As a user | I can view all the posts by a specific user so that I can check on their latest posts, or decide I want to follow them.|
|As a user | I can see a list of the most active/followed profiles so that I can see which profiles are popular.|

![userstories](/images/us2.png)
![userstories](/images/us3.png)

## Flowchart <a name="flow"></a>

 The Flowchart for WeShare was made in Lucidchart.
 ![lucidchart](/images//Screenshot%202023-01-30%20at%2004.40.28.png)
The wireframe also made in Lucidchart
![lucidchart2](/images//mocks.png)

## Site Structure <a name="structure"></a>
 WeShare app has as purpose to bring together all the users and create a comunity of people with same interests.

* User :
    * Home, News , SignIn , SignOut .
    * Logged in users will have access to extra functionality : create Posts, Stories, Events and decide what to do with it, the can edit or delete, share,like and comment .
    * Simple Design to attact users.
    * Simple forms with solid validation .

## Typography <a name="typo"></a>
* A combination of 'Shrikhand' and 'sans-serif' has been user for a better looking site.

## Color Scheme <a name="color"></a>
Color scheme was created on <a href="https://coolors.co/">Coolors</a>
![color-scheme](/images/colors.png)
 # Existing Features <a name="user-features"></a> 
WeShare is set up to be easy to use . It contains features that a user would be fimiliar with such as user login,user log out,create post, like and comments.

## Site Navigation
 * ## Heading and Title<a name='nav'></a>
![legged_in](/images/log.png)

![notlogged](/images/notlogged.png)

## Popular Profiles <a name="slider"></a>
![profiles](/images/Screenshot%202023-01-30%20at%2007.43.21.png)

 * User Registration <a name="user-reg"></a> -  has built-in authentication and authorization to check certain criteria is met before an account is validated. All passwords are hidden for security purposes.

 ![register](/images/signup.png)

 * Log In - existing users will have to pass authorisation with entering their current username and password to match the database.
 ![login](/images/singin.png)

 Once logged in, user will see:

 * Sidebar <a name="menu"></a> A list of special features for user - Stories, Feed, Friends, Events and Sport news.
  ![sidebar](/images/sidebar.png)
  
 * Add Post button <a name="events"></a>  - also a special feature which allows the user to create a post.
 * Add Story button - also a special feature which allows the user to create a story to share a special location.

* <strong>Each component : NavBar, SideBar, Main container which holds the posts, forms with validate data, update forms all come together to let the users have the freedom of creation.</strong>
 # Future Features<a name="future-features"></a> 
 Planning to implement extra features as:
 * Share an existing post
 * Block users
 * Stories with timer
 * Better organisation and testing

 # Technologies Used <a name="technologies"></a>
## FRONT-END:
* [HTML5](https://www.w3schools.com/html/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [REACT-BOOTSTRAP](https://react-bootstrap.github.io/) - provides specific styling.
* [ReactJS](https://reactjs.org/)-provides interactivity.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.
* [Cloudinary](https://cloudinary.com/) - used to store pictures .
* [Mockupbro](https://mockupbro.com/mockup/flat-devices-mockup) - user to create mockups.

# React Components 

* Navbar component: This component is a reusable navigation bar that can be used in various pages of the application. To use the Navbar component, simply import it and add it to the appropriate section of the JSX code. You can customize the appearance and functionality of the Navbar component by passing props such as logo image, links, and search bar.

* Asset component: This component is a reusable image or video asset that can be used in various parts of the application. To use the Asset component, simply import it and pass the source URL as a prop. You can customize the appearance and behavior of the Asset component by passing additional props such as width, height, and alt text.

* Avatar component: This component is a reusable user avatar image that can be used in various parts of the application. To use the Avatar component, simply import it and pass the source URL as a prop. You can customize the appearance and behavior of the Avatar component by passing additional props such as size, shape, and online status.

* MoreDropdown component: This component is a reusable dropdown menu that can be used in various parts of the application. To use the MoreDropdown component, simply import it and pass the menu items as an array of objects. You can customize the appearance and behavior of the MoreDropdown component by passing additional props such as position, alignment, and callback functions.

* NotFound component: This component is a reusable error page that can be used when a page or resource is not found. To use the NotFound component, simply import it and add it to the appropriate route in the React Router. You can customize the appearance and behavior of the NotFound component by passing additional props such as error message and image.

* Sidebar component: This component is a reusable side navigation menu that can be used in various pages of the application. To use the Sidebar component, simply import it and add it to the appropriate section of the JSX code. You can customize the appearance and functionality of the Sidebar component by passing props such as links, icons, and active state.

## BACK-END:<a name="packages"></a>
* [PYTHON](https://www.w3schools.com/python/) to get details from the user and validate the inputs with python logic.
* [DJANGO-REST FRAMEWORK](https://www.django-rest-framework.org/)

# Testing:
WeShare website has been properly tested ,all the code has been run through the W3C html Validator,W3C CSS Validator and JavaScript Validator. Minor errors were found on the first About us page. After fixing and retesting, no errors were found .

 ### CSS validator results are below:
 ![Testing2](/images/validator.png)

 ### Javascript Validator results are below:
 ![Testing3](/images/jslint.png)

<a href="#objective" dir='auto'>Back to Top </a>
# Lighthouse

The website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Developer Tools to test each of the pages for:
* Performance - How the page will be loading.- Needs improvement
* Accessibility - Checking if the website is  accessible for all users and how can it be improved.
* Best Practices 
* SEO - Search Engine Optimisation. This helps us to understand if the website is optimised for search engine result rankings.

![lighthouse](/images/lighthouse.png)

# Browser Compatibility
WeShare site was tested on the following browsers with no visible issues for the user:
1. Google Chrome 
2. Safari 
3. Mozilla Firefox
* Appearance, functionality and responsiveness were consistent throughout for a range of browsers and device sizes. 

# Known bugs:
* <strong>PLEASE NOTE MY LAST VERSION BUILD WAS REJECTED ON HEROKU BUT APP WORKS AS EXPECTED WITH NO ERRORS - IT FAILED CAUSE DEPENDENCY ESLINT</strong>
* Sometimes getting error 401.

* ### Resolved
* Multiple times - Error 500 and 400 fixed after sending the right data to API

# Deployment: <a name="deploy"></a>

* The site was deployed to Heroku pages.

1. First we have to create our app on heroku website.
![createapp](/images/create1.png)
2. Name the app.
![create2](/images/create-app.png)

3. Choose Deploy Section and Connect to Github.
![heroku](/images/deploy.png)

 
* The site was deployed to GitHub pages. 
The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** on the left side menu.

 The live link can be found here :https://weshare-media.herokuapp.com

 ### **To create a local clone of this project**<a name="clone"></a>
The method from cloning a project from GitHub is below:
1. Under the repository’s name, click on the **code** tab.
2. In your preffered IDE open **Git Bash**
3. Change the working directory with the location where you would like your clone to be created .
4. Type **git clone** and the paste the URL copied previously.
5. **Enter** button to be pressed and the clone will be created.


# Credits<a name="credits"></a>

* Tutors were very helpful in making me understand the issues I have encountered throughout.
* Please note that some of the functionality is inspired by the walkthrough project done with Code Institute.
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
The site was completed as a Portfolio 5 Project  Full Stack Software Developer React Advanced FrontEnd at the [Code Institute](https://codeinstitute.net/). As such I would like to thank my mentor Jubril Akolade and Code Institute Tutor Support for their help and support.

Mihaela Younas 2023.

<a href="#objective" dir='auto'>Back to Top </a>