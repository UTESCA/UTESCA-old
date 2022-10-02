# 💰 FinTorch React APP

## Technical Stack

FinTorch App: React.js

This project is developed & maintained for React version **17.0.2**&#x20;

## Prerequisites

- npm

## Running the app

In the **project directory**, you can run:

### `npm install`

Install all the dependencies that are necessary to run the project. You only need to run this when you pull the project to your local device for the first time, or the new dependency is added in the `package.json` file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Development guide

### Naming Convention

- Branch name

Please only use "-" and the alphabetic letter in the branch name. The branch with the wrong naming convention will be rejected. The person who created the branch should add their name at the front. (e.g. leo-create-navbar-UI)

- Pull Request(PR)

You don't need to write a detailed description. Briefly explain what you have done, and the step to test your work.

> i.e&#x20;
>
> Convert the figma design to React class component: Navigation Bar.
>
> Step to QA: open http://localhost:3000/navbar to view the component.

The title of the PR should follow this naming convention

> i.e:&#x20;
>
> \[NavBar UI] Design the prototype of the navigation bar
>
> The PR with the wrong naming convention will be requested for change.

When your Pull Request is approved and is ready to be merged, you need to **Squash and Merge** (Squash means to combine all commits in your Pull Request into 1 single commit, and merge it to the master branch)

- Commit Rule

You need to follow the [semantic commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. (e.g. feat: Add the nav bar component).

The commit with the commit messages that doesn't follow the semantic commit will be rejected.

The purpose of this rule is to set a standard for our coding style, and make the repo clean. The future incoming developers can easily get onboarded.

### New Package installment

If you want to install a new package to our project, please use `npm install <package name> -save` , and this will save the new package in the package.json file. Don't forget to commit `package.json` if you install the new packages.

### React Components

All components should be in form of **Class Component,** and they should bes stored in /Components folder. Each component should have 1 separate folder, and in that folder, it contains all the necessary files. The naming convention for the component is: the Camel case with the first letter capitalized.

> e.g. I want to create a navigation bar component, and this is the way that I will create it
>
> /Components/NavigationBar/NavigationBar.js
>
> /Components/NavigationBar/styles.css
# UTESCA
