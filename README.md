# Soar Task

Soar Task is a beautiful fintech application built to transfer money between profiles. It is built with React, TypeScript, and Tailwind CSS.

## Features

- Transfer money between profiles
- View transaction history
- View Card details
- View Expense Statistics
- Make Quick Transfers
- View Balance History
- Edit profile information
- Add a new profile

## Set up Locally

1. Clone the repository from [https://github.com/soar-task/soar-task](https://github.com/soar-task/soar-task)
2. cd into the repository
3. Run `npm install` to install the dependencies
4. Run `npm run start` to start the app and the json-server simultenously

## The API Mock

The API mock is hosted on replit and can be accessed at [https://replit.com/@Haroonabdulraza/Moke-API](https://replit.com/@Haroonabdulraza/Moke-API)

- if youre signed up with replit, you can click run to start the server
- if youre not signed up, you can click the run button and it will ask you to sign up for a replit account
- once you sign up, you can click run and it will start the server
- you can use the api mock by sending requests to the url `https://e17d1645-07b6-4b45-930c-b06afdea60e7-00-h8xqi7occwjo.kirk.replit.dev`
- Create and add the url in the .env file to the `VITE_API_URL` variable, as we have in the .env.example file

Note: Make sure to set up the api mock before running the project locally

### Optionally:

- Create and add the url in the .env file to the `VITE_API_URL` variable, as we have in the .env.example file

- If you don't want to use the api mock, you can use the local json-server by running `npm run start`
  - It will start both the json-server at `http://localhost:3000` and the react app at `http://localhost:5173` concurently

Note: Make sure to set up the replit or json-server before running the project locally

## Set up CI/CD Pipeline

I set up CI/CD pipline on Circle CI. The pipeline is configured to runs the Formatter and auto-formats, run ESLint to lint the files and check for errors, runs the tests and build the project.

## Hosted on Vercel

The project is hosted on Vercel. You can access the live site at [https://soar-task.vercel.app/](https://soar-task.vercel.app/)
