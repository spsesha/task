# task

Task repo for interview in assessing MERN stack

## Dev Environment Setup (node version: v8.10.0 and above)

```sh
git clone https://github.com/mani-gk/task.git
cd task
npm install (update values connection.js) ref: Server.1
npm run dev
```

## database credentials and connection string will be forwarded through email

## Requirement

- Server

  1. update database key/value prop in "db/connection.js" file (find in email)
  2. Complete movie.js schema file in "db/Schema/" folder, add required key value pairs just like title and year
  3. Create API and controller for client queries (will be used by React client), please maintain proper naming convention and api versioning

  - /api/v1/movies

    - GET

- Query (Server)

  1. Run query to find the movies release in "USA", with a "tomatoes.viewer.rating" greater than or equal to "3", calculate a new field called "num_favs" that represets how many favorites appear in the "cast" field of the movie (as in you need to find records with given favorites actors/actress in cast field along with that you need to find number of characters(count) in the cast field )

  2. favorites = ["Sandra Bullock","Tom Hanks","Julia Roberts","Kevin Spacey","George Clooney"]

  3. Sort your results by num_favs, tomatoes.viewer.rating, and title, all in descending order

  4. Hint: use aggreagtion pipeline, use $match, $in (for array operators), $setIntersection (for matching), $addFields for adding new fields, \$sort (for sorting records)

  5. MongoDB Aggregation Link (https://docs.mongodb.com/manual/aggregation/)

  6. Query operators Link (https://docs.mongodb.com/manual/reference/operator/aggregation/)

- Client

  1. Create new React project (use React and React-dom library) no need to maintain any state management can use create-react-app

  2. Render queried records on to react view i.e datatable and use pagination to navigate all queried records (count does matters ex: 100 queried records and for each paginate view display 10 records, means 10 \* 10 pagination views )

  3. UI and Design asthetics is upon your interest, but it always good to render data in niche UI, so plan accordingly

  - you can use any react plugin for datatable and pagination (datatable must be responsive)

  - datatable view (ex: as given below), you can add more fields upon your interest,add sorting and on view filtering features on datatable

  - | S.No | Title                  | Num of favorites (num_favs) | Cast(Comma eperated values) | Year |
    | ---- | ---------------------- | --------------------------- | --------------------------- | ---- |
    | 1    | Ingeborg Holm          | 1                           | Sandra Bullock              | 1990 |
    | 2    | Ella Lola, a la Trilby | 3                           | Sandra Bullock,Tom Hanks    | 1913 |

- Hosting (optional)

  1. you can use heroku or any IaaS cloud service for hosting

- Code Push (important)

  1. create new branch namely "task1" in the given repo and push all commits into new task1 branch (dont push code to master branch)
