# Project Overview: Baking Time
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/wireframe_HomePage.png)

## Project Description

Baking Time is an app to display a list of baking recipes, from the index page you will be able to see the complete list with a brief information. App allows you to edit each recipe, to show the detail of the recipes , to create new recipes and delete the ewxisting ones.

Developer: Gladys Cruz

## Project Links

- [github repo](https://github.com/gcruz16/deere-project2-starter)
- [deployment]()

## Wireframes

Four tables were created for this app: 
- Users
- Recipes
- Ingredients
- Instructions

## ER Diagram
- ![wireframes](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/ER.png)
- [react architecture]()

#### Home Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/wireframe_HomePage.png)

#### SignUp  Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/signUpPage.png)

#### Profile Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/profilePage.png)

#### New Recipe Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/newRecipe.png)

#### Edit Recipe Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/editRecipe.png)

#### Show Recipe Page
![](https://github.com/gcruz16/deere-project2-starter/blob/master/public/img/showRecipe.png)


### MVP/PostMVP 

#MVP

- As a User IRender data on page
- List all receipts to the users
- Allow user to create his/her account
- Allow user to edit his/her account
- Allow user to sign out
- Allow user to create new receipts
- Allow user to copy receipts to his/her account
- Allow user to delete receipts to his/her account
- Allow user to edit a receipt from his account
- Do not allow to see a detail of a receipt if user hasn´t been logged in yet

#PostMVP

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

## Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
