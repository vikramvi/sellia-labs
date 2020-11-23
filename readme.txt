Setup:

1) Checkout the repository
2) With nvm make sure node 12.0.0 is used
3) Install firebase tools 8.16.2

Developement:

1) From root directory, yarn web
2) From root directory, yarn server

Deployment:

1) Confirm web/package.json and server/package.json have same entries 
2) From root directory, yarn web:build
3) Once 1 completed, from root directory, yarn server:build
4) Confirm cloud/next exists
5) From root directory, yarn deploy 
