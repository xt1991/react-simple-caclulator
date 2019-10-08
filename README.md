### Requirement

- Node
- NPM
- Server (npm i server- g) **
- PM2 (npm i pm2 -g) **

** Only in production

### Install

- git clone project
- run npm i

### Develop
- run npm start

### Production
- run npm build
- serve -s build -l portNumber **
- pm2 start ecosystem.config.js **
- pm2 restart <app_name>

** Only for first time

### How to set up production in server 

- git clone project
- run serve -s build -l portNumber
- run pm2 start ecosystem.config.js
- config ngix (or apache) with portNumber

### How to analyze project
- run 'npm run build'
- run 'npm run analyze'
