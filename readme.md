## Installation

1. Checkout the repository

```bash
    git clone -b develop https://github.com/sumeetgala840/selliafemono.git
```

2. With nvm make sure node 12.0.0 is used
   nvm installation: https://jamesauble.medium.com/install-nvm-on-mac-with-brew-adb921fb92cc

```bash
    nvm use 12.0.0
```

3. Install firebase tools 8.16.2

```bash
    npm i -g firebase-tools@8.16.2
```

4. From project root directory

```bash
    yarn
```

## Developement

1. From project root directory

```bash
   yarn web
```

2. From project root directory

```bash
   yarn server
```

3. In the browser, Sellia web app should be running on localhost:3000 (if port is not changed)

```bash
   http://localhost:3000/
```

## Deployment

1. Confirm web/package.json and server/package.json have same entries

2. From project root directory,

```bash
   yarn web:build
```

3. Once 1 completed, from root directory,

```bash
   yarn server:build
```

4. Confirm cloud/next exists

5. From root directory,

```bash
   yarn deploy
```

## Firebase Helper commands

1. Upload cloud functions changes,

```bash
   cd packages/cloud && NODE_ENV=production firebase deploy --only functions:userActivityNotificationListner
```

## Test URL

https://sellia-42377.web.app/
