Active branch: develop

Setup:
1) Checkout the repository
    git clone -b develop https://github.com/sumeetgala840/selliafemono.git

2) With nvm make sure node 12.0.0 is used
    nvm installation:  https://jamesauble.medium.com/install-nvm-on-mac-with-brew-adb921fb92cc
    nvm use 12.0.0

3) Install firebase tools 8.16.2
    npm i -g firebase-tools@8.16.2

4) From project root directory
    yarn


Developement:

1) From project root directory
    yarn web

2) From project root directory 
    yarn server

Deployment:

1) Confirm web/package.json and server/package.json have same entries 

2) From project root directory, 
    yarn web:build

3) Once 1 completed, from root directory, 
    yarn server:build

4) Confirm cloud/next exists

5) From root directory, 
    yarn deploy 


Firebase Helper commands:

1) Upload cloud functions changes,
cd packages/cloud && NODE_ENV=production firebase deploy --only functions:userActivityNotificationListner

Test URL:
https://sellia-42377.web.app/