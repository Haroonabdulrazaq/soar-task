# Soar Task

Soar Task is a beautiful fintech application built to transfer money between profiles. It is built with React, Redux, TypeScript, and Tailwind CSS.

## Live Link 🔗

[Soar Task](https://soar-task-xi.vercel.app/)

## Screenshots 📷

![screenshot](./src/assets/images/soar-task-image.png)

## Video Demo 📷:

[Soar Task](https://drive.google.com/file/d/1HH_jmkdh2-cVaG99HdNd032Psd4r9LFC/view?usp=sharing)

## Features 🚀

- Transfer money between profiles
- View transaction history
- View Card details
- View Expense Statistics
- Make Quick Transfers
- View Balance History
- Edit profile information
- Add a new profile

## Set up Locally 🔧

1. Clone the repository from [https://github.com/soar-task/soar-task](https://github.com/soar-task/soar-task)
2. cd into the repository
3. Run `npm install` to install the dependencies
4. - Create and add the url in the .env file to the `VITE_API_URL` variable, as we have in the .env.example file
5. Run `npm run start` to start the app and the json-server simultenously

## The API Mock

1. The API Mock is hosted on Render: [https://soar-task-api.onrender.com/](https://soar-task-api.onrender.com/)

Note: Make sure to set up the api mock before running the project locally

### Optionally:

- Create and add the url in the .env file to the `VITE_API_URL` variable, as we have in the .env.example file

- If you don't want to use the api mock, you can use the local json-server by running `npm run start`
  - It will start both the json-server at `http://localhost:3000` and the react app at `http://localhost:5173` concurently

## Assumptions

- User wants to send money to a profile from the Quick Transfer section
- The mobile Navigation is used for both tabs and mobile, assuming we will have more tabs and mobile users
- Use Redux tool kit which is a variance of Redux
- Add modal to Settings when user click save buttons
- Made the Setting icon on home page a Link to Settings page
- All data is store and served using JSON-Server for mocking purposes providing 2 options (either on Replit or locally)
- Used Icon best fit to the the text when Icon is not found.
- Used React Hook form with Zod for validation

## Set up CI/CD Pipeline

I set up CI/CD pipline on Circle CI. The pipeline is configured to runs the Formatter and auto-formats, run ESLint to lint the files and check for errors, and build the project.

## Hosted on Vercel 🚀

The project is hosted on Vercel. You can access the live site at [https://soar-task-xi.vercel.app/](https://soar-task-xi.vercel.app/)
Mock API - is Hosted on Render: https://soar-task-api.onrender.com/

## Author 👨

👤 **Haroon Abdulrazaq**

- Github: [@githubhandle](https://github.com/Haroonabdulrazaq)
- Twitter: [@twitterhandle](https://twitter.com/hanq_o)
- Linkedin: [linkedin](https://www.linkedin.com/in/haroonabdulrazaq)
- Portfolio: [Portfolio](https://www.haroonabdulrazaq.tech)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
