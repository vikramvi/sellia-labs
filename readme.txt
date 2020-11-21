Deployment:

NB: due to recent changes in the firebase & firebase tools you may need to follow below setup if you encounter any deployment issue,

1 - Tested and working with Node 8.1.0, Firebase tools 6.4.0

2 - Updated the package.json with the fix, If in headless-graphql/package.json cp packages/server/{package.json,.env} does not work and needs changing to cp packages/server/package.json packages/cloud/ & cp packages/server/.env packages/cloud/

3 - copy the yarn.lock file into the cloud deployment folder