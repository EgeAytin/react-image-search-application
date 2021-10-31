# Image Search Application

Simple image search application which uses [unsplash.com API](https://unsplash.com/documentation#search).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Before Start

Here are a few steps to use Unsplash API features in this app:

You need to create **.env** file in the project directory and add 3 variables:
 - Unsplash demo app API Access Key as REACT_APP_API_ACCESS_KEY
 - Unsplash demo app API Secret Key as REACT_APP_API_SECRET_KEY
 - Unsplash demo app Redirect Uri as REACT_APP_AUTH_REDIRECT_URL
 
In order to create these variables you need to create free developer account from [unsplash.com/developers](https://unsplash.com/developers) and then add new application from **your apps** tab.

In your newly created application:

You can get **Access Key** and **Secret Key** from Keys Section.
![Screen Shot 2021-10-31 at 8 45 24 PM](https://user-images.githubusercontent.com/34595361/139595601-69aeaf6d-485c-4db7-a2d6-cebee6720444.png)

You need to change your **Redirect URI** to complete authentication and check the **Write likes access** checkbox to use like/unlike photo feature of app. (The **Public access** checkbox is checked by default).
![Screen Shot 2021-10-31 at 8 45 06 PM](https://user-images.githubusercontent.com/34595361/139595611-5c966c6d-a501-45a4-8042-6442e0ab269b.png)

After operations above your **.env** file should look like below:
```
REACT_APP_API_ACCESS_KEY = IH9l4pLo5tydtmPDF3XR3e3MtlDYEYQO5}Jh^.M
REACT_APP_API_SECRET_KEY = wTcWxdF6HVVQ7RF9U8PxcaAM7noN2wzBIOQ9uAi
REACT_APP_AUTH_REDIRECT_URL = http://localhost:3000
```

## Source Folders

### `apiService`

##### `index.js`
API requests of the application

##### `axios/interceptors.js` 
Axios API client interceptors which responsible for token configuration and error handling.

### `components`

##### `partials`
Represents partial components of application. In this app it just contains single photo item component.

##### `sections` 
Represents sections of the application (Search Field, Search Results, Header and Footer).

### `context`

Contains context creation for authentication. I used [React Context API](https://reactjs.org/docs/context.html) for sharing and controlling auth state information through the app.
Redux or Mobx can be also used if you have large scaling app. Moreover, if you have a larger app, router or navigation layers will be better place for controlling authentication. 
As an example check out my other repo [React Fluffzy Auth](https://github.com/EgeAytin/react-fluffzy-auth) boilerplate authentication infrastructure for React applications.

### `views`

Represents pages and user interfaces. In this app it just contains Home page.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional Notes

### Design
I took care to keep the design of the application very simple and understandable. This is a test application, so I would like to point out that it does not have any production level design quality.

### 3rd Party Libraries
- I used [bootsrap](https://getbootstrap.com/) for the design layout and most of the components.

- I've used [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) for pagination. A simple Load More button would do the same here. However, I prefer infinite scrolling rather than clicking.

- I used [react-masonry-component](https://github.com/eiriklv/react-masonry-component) to display the search results in the grid layout structure like unsplash.com.

## Author

> Ege Aytın

> ege@fluffzy.com

## License

MIT License

Copyright (c) 2021 Ege Aytın

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
