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
- ✅ All views display correctly on the smallest mobile device ("iPhone SE").
- ✅ Favicon information is correctly added using https://realfavicongenerator.net/.
- ✅ Metatag information is created and added via https://metatags.io/.
- ✅ All show data is loaded via a fetch call from https://podcast-api.netlify.app/shows.
- ✅ When viewing a specific show, data is loaded via a fetch from the individual show endpoint.
- ✅ Loading states are implemented for initial and new data loading.

[Continue with the other sections as before.]

## Conclusion

I'm incredibly proud of the work I've done on this Capstone Project. It represents not only the technical skills I've developed but also my dedication and commitment to delivering a high-quality software product. While I couldn't achieve all the user stories, I've created a solid foundation for a podcast app that can be further improved and expanded in the future.

Thank you for the opportunity to witness your journey and the impressive results you've achieved.
