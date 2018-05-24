# Foodie Friend Finder - Node and Express Servers

### Overview

"Foodie Friend Finder" application is a web applications that will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Used Express to handle routing.


* Directory Structure:

  ```
  Foodie Friend Finder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Specs

1.Survey contains 10 questions. Each answer falls on a scale from 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express`, `body-parser` and `path`.

3. `htmlRoutes.js` file include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. Application data is stored inside of `app/data/friends.js` as an array of objects. 

- - -



https://mighty-gorge-30765.herokuapp.com/
- - -
