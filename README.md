## Star wars code challenge

- The task for the star wars code challenge is to create a responsiveness SPA query to [swapi/dev](https://swapi.dev/)

### TODO: 
- create search input where an user can look for his favourite Star Wars character by its
name.
- the information related to the character should be displayed in
the best possible way.
- a list of recent searches, where the user can click and review again the characters
he searched previously without performing any additional AJAX requests.

Solution by [Rendani Luvhengo](mailto:rluvhengo2@gmail.com)
 Demo 

## Proposed Solution

*TODO: 
- Create components folder which I store all the components that will be used.
- Use Thinking React method for Component Hierarchy
- Create NavBar which will only display the name of the application.
- Created MainPage.js component which I will set search input logic.
- Use `React Hooks` -(useState, useEffect) to fetch data from [swapi/dev](https://swapi.dev/) inside the `MainPage.js` component.
     - Set  state `useState` for following:
       - listOfCharacter in  which useState takes an empty array. 
        - searchCharacter in  which useState takes an empty string.
        -  nextUrl in  which useState takes an empty array.
       -  recentSearch(history) in  which useState takes an empty array.
     - Set `useEffect` to make a request for fata when you land in the page from  [swapi/dev](https://swapi.dev/) .
- Set `map()` method to display the character information in which map will call it in a form of character.
- Created Card component in which i will pass data from MainPage.js using props.
- install  `styled-components` following it [documention](https://styled-components.com/) for styling the application.
- use flexbox and grid to make the app responsive.

## Outstanding Todo-list

- Adding testing to the application



## Libraries / Tools Used

- React.js
- Create React App for project setup
- styled components for stlying
- google fonts for font


## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`


### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:start`





