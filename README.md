# Why?

Are your tired of using same profile for work flows (JIRA, bugtracker, googling etc) and for testing?
Do not want to switch profiles manually?
Wanna use same Chrome as yours but with other bundle of extension?
Wanna intercept queries for some research in automated way?
Puppeteer is the solution. But configuring it can be tricky.

This repo can do this for you.

# pptr-for-qa
Just working puppeteer setup for manual QA purposes

# How to setup
+ Setup nodejs -- I suggest to use it through nvm https://github.com/nvm-sh/nvm/blob/master/README.md
+ Just clone repo
+ run
```
npm i
```
+ copy config_exapmle.json to config.json
+ Replace executablePath with your desirable Chrome exec path

You can find exec path by going to chrome://version

### That's it

Now you can run 
```
  node ./main.js
```
Or any other **__example.js file_** to get first steps.
