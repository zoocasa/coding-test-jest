# Instructions

Format: a 45 min pair programming session followed by 15 minutes of discussion and feedback.

Goal: We'll be writing Jest unit tests together against a sample React website. React Testing Library is configured to help with testing react Components.

Preparation: Candidate should have a NodeJS (latest LTS) development environment set up on their laptop and be prepared to screen share as we work together.

Notes & Tips: We're simulating a regular work day so the candidate is allowed to Google anything during the test (we don't expect you to have syntax memorized). The most successful candidates share their thoughts as they work, what ideas they have and what they're trying to do. If your IDE supports it, using a split editor/panel with the code on the left (i.e. App.js) and test file on the right (i.e. App.test.js) makes it easier to write tests while developing your code.

# About the sample application
At Zoocasa we help users buy, sell or rent properties. The sample app implements a simplified version of some core use cases for our users.

- A "listing" is a property that is for sale or sold
- The app shows a list listing images down the left side of the screen
- Listings can be sorted by price (ascending vs descending) or filtered by status (for sale vs sold) using the dropdown at the top of the screen
- You can click on a listing image to view the listing details on the right side of the screen
- When looking at the details of a listing you can click the "Take a tour" button to have an agent call you to visit the property

# Getting started
1. Download this git repository to candidate's machine
2. Install packages with `npm install` or `yarn install`
3. Verify environment: use `npm run start` or `yarn start` to run the sample app and go to http://localhost:3000 to explore
4. Running tests: use `npm run test` or `yarn test`
