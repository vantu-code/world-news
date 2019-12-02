# World News

<br>



## Description

Search world news and save articles for later. 



<br>

## User Stories

- **404** - As a user I want to see a 404 page when I go to a page that doesn’t exist so that there is an error.
- **500** - As a user I want to see a nice error page when the super team screws it up so that there is an error.
- **homepage** - As a user I want to be able to access the homepage, filter the articles by the searched topic, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite articles to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back into my account.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one can access my account.
- **favorite list** - As a user I want to see my favourites list and delete articles if I want to.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of articles filtered by my search topic.
- **article listing** - As a user I want to be able to read articles, save them for later and retrieve a summary.



<br>



## API Routes (Back-end):



| **Method** | **Route**               | **Description**                                              | Request  - Body                                          |
| ---------- | ----------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                     | Main page route.  Renders home `index` view.                 |                                                          |
| `POST`     | `/`                     | Sends search query to the api                                | {search topic}                                           |
| `GET`      | `/login`                | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`               | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`               | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/profile/edit-profile` | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/profile/edit-profile` | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/favorites`            | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/favorites`            | Private route. Adds a new favorite for the current user.     | { , }                                                    |
| `DELETE`   | `/favorites/:articleId` | Private route. Deletes the existing favorite from the current user. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}

```



Favorites model

```javascript
{
  articleId: String,
}

```



<br>



## Backlog

- Google Translate API
- Weather API
- Store queries to show default search result
- Change Location



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)
