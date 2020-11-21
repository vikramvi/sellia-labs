const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = express();

app.use(bodyParser.json());

app.get('/add-post/:id', async (req, res) => {
  const nextApp = next({
    dev,
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '../../public',
      },
    },
  });
  await nextApp.prepare();
  const actualPage = '/add-post';
  const queryParams = { id: req.params.id };
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  nextApp.render(req, res, actualPage, queryParams);
});

app.get('/post/:slug', async (req, res) => {
  const nextApp = next({
    dev,
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '../../public',
      },
    },
  });
  await nextApp.prepare();
  const actualPage = '/single-post';
  const queryParams = { slug: req.params.slug };
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  nextApp.render(req, res, actualPage, queryParams);
});

app.get('/category/:slug', async (req, res) => {
  const nextApp = next({
    dev,
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '../../public',
      },
    },
  });
  await nextApp.prepare();
  const actualPage = '/single-category';
  const queryParams = { slug: req.params.slug };
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  nextApp.render(req, res, actualPage, queryParams);
});

app.get('/profile/:username', async (req, res) => {
  const nextApp = next({
    dev,
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '../../public',
      },
    },
  });
  await nextApp.prepare();
  const actualPage = '/profile';
  const queryParams = { username: req.params.username };
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  nextApp.render(req, res, actualPage, queryParams);
});

app.get('*', async (req, res) => {
  const nextApp = next({
    dev,
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        staticFolder: '../../public',
      },
    },
  });
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();
  return handle(req, res);
});

export default app;
