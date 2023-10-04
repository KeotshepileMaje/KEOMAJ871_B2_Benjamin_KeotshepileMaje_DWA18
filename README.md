# Podcast App Capstone 

Hey there!

I'm thrilled to share the details of my completed Capstone Project for the CodeSpace Software Development Program. This project represents the culmination of my hard work and learning journey, resulting in a fully functional podcast app. In this README file, I'll walk you through the key aspects of my project, including its goals, technology stack, data sources, endpoints, user stories, and more.

## Project Overview

### Goal
The primary objective of this Capstone Project was to develop a podcast app that offers users the ability to explore a diverse range of podcast shows, enjoy episodes, and keep track of their favorite content.

### Technology Stack
For this project, I opted for a technology stack that combines the power of JavaScript with React and the convenience of Bootstrap, along with Supabase for authentication and database management. Here's a breakdown of my technology choices:

- **React**: I leveraged the React library to build a dynamic and responsive user interface.
- **Bootstrap**: Bootstrap provided the essential CSS framework for styling and ensuring a consistent and appealing user experience.
- **Supabase**: I used Supabase for user authentication and database management, ensuring a seamless and secure user experience.

During my final live assessment, I had the opportunity to explain my choice of frameworks and technologies, and this played a crucial role in the successful evaluation of the project.

## Data

The project's data revolves around three primary semantic units:

1. **EPISODE**: These represent specific MP3 files that users can listen to.
2. **SEASON**: A SEASON comprises a collection of EPISODES released within a specific timeframe.
3. **SHOW**: A SHOW refers to a specific podcast that can contain one or more SEASONS.

Additionally, the API provides a **PREVIEW**, which is a summarized version of a SHOW containing basic data but excluding SEASONS or EPISODES.

### Endpoints

To access the data, I utilized fetch requests to the following endpoints:

- `https://podcast-api.netlify.app/shows`: This endpoint returns an array of PREVIEW objects.
- `https://podcast-api.netlify.app/id/<ID>`: This endpoint provides a single SHOW object with embedded SEASON and EPISODE objects.

## Relationships

In this project, various data types are interconnected:

- Multiple EPISODES contribute to forming a SEASON.
- Multiple SEASONS make up a SHOW.
- SHOW and PREVIEW represent two forms of the same data, linked by the `id` property.
- Both SHOW and PREVIEW include a property named GENRE, which is structured differently:
  - GENRE inside PREVIEW is an array of numbers (GENRE ids).
  - GENRE inside SHOW is an array of strings (GENRE titles).

To better understand these relationships, you can refer to the provided chart.

## Genre Titles

As genre information is exposed in PREVIEW as GENRE ids, I included the mapping between GENRE ids and titles in my code:

| ID  | Title                            |
| --- | -------------------------------- |
| 1   | Personal Growth                  |
| 2   | True Crime and Investigative Journalism |
| 3   | History                          |
| 4   | Comedy                           |
| 5   | Entertainment                    |
| 6   | Business                         |
| 7   | Fiction                          |
| 8   | News                             |
| 9   | Kids and Family                  |

## User Stories

I'm delighted to report that I successfully implemented a significant number of User Stories, resulting in a fully functional podcast app. However, it's important to note that not all user stories were achieved, as some might have required additional time and resources. Here's a summary of the completed user stories:

[Include the list of user stories you have completed from your previous message.]
### Deployment and Presentation
- ✅ Project is deployed to a custom Netlify URL.
- ✅ All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.
- ✅ All favicon information has been created and added correctly via https://realfavicongenerator.net/ (you are welcome to use any free PNG image you find on https://www.flaticon.com/).
- ✅ All metatag information has been created and added via https://metatags.io/ (You are welcome to use any free image on https://unsplash.com/). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first).

### Basic Functionality
- ✅ All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows
- ✅ When viewing a specific show, data is loaded via fetch from individual show endpoint
- ✅ There is a loading state while initial data is being loaded
- ✅ There is a loading state while new data is being loaded
- ✅ User can view the details of a show broken down into seasons, sorted by number
- ✅ User can listen to any episode in a season of a show
- ✅ User can see a view where only episodes for a specifically selected season are shown
- ✅ User can toggle between different seasons for the same show
- ✅ User can see the name of all available shows on the platform
- ✅ User sees preview image of shows when browsing
- ✅ User sees the amount of seasons per show as a number when browsing
- ✅ User sees a human-readable date as to when a show was last updated
- ✅ User sees what genres (as genre titles) a show is associated with when browsing
- ✅ User sees a preview image of seasons for a specific show
- ✅ User sees the amount of episodes in a season as a number

### Favorites and Sorting
- ✅ User can go back to a show view from a season-specific view
- ✅ User can mark specific episodes as favourites to find them again
- ✅ User can visit a view where they see all their favourites
- ✅ User can see the show and season of any episode in their favourites list
- ✅ Episodes related by season/show are grouped in favourites
- ✅ User is able to remove episodes from their favourites
- ✅ User can arrange the list of shows by title from A-Z
- ✅ User can arrange the list of shows by title from Z-A
- ✅ User can arrange the list of shows by date updated in ascending order
- ✅ User can arrange the list of shows by date updated in descending order
- ✅ User can filter shows by title through a text input
- ✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)
- ✅ Automatically filter shows by genre if the genre label is clicked on
- ✅ User sees the date and time that an episode was added to their favourites list
- ✅ User can arrange favourites by show titles from A-Z
- ✅ User can arrange favourites by show titles from Z-A
- ✅ User can arrange favourites by date updated in ascending order
- ✅ User can arrange favourites by date updated in descending order

### Audio Player
- ✅ Audio player shows current progress and episode length as timestamps
- ✅ Audio player is always visible, so the user can listen to episodes while they browse
- ✅ User is prompted to confirm they want to close the page when audio is playing
- ✅ App remembers which show and episode the user listened to last when returning to the platform
- ✅ App remembers which shows and episodes the user listened to all the way through
- ✅ App remembers the timestamp where the user stopped listening within a 10-second accuracy period of closing
- ✅ App remembers and shows the timestamp progress of any episode the user has started listening to
- ✅ User can "reset" all their progress, effectively removing their listening history

### Additional Features
- ✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page
- ✅ User can log in via https://app.supabase.com authentication
- ✅ User favourites are stored in the https://app.supabase.com database
- ✅ User favourites are automatically synced when logged in, ensuring that they share favourites between devices
- ✅ Users can share their favourites as a publicly accessible URL

## Conclusion

I'm incredibly proud of the work I've done on this Capstone Project. It represents not only the technical skills I've developed but also my dedication and commitment to delivering a high-quality software product. While I couldn't achieve all the user stories, I've created a solid foundation for a podcast app that can be further improved and expanded in the future.

Thank you for the opportunity to witness your journey and the impressive results you've achieved.
