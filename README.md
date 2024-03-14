# Marvel Inditextest

## Getting Started

When you download the project you should ask for the .env file, if not the endpoint calls should not work because .env file have private keys necessaries for the api call
First, install all the dependencies on the project:

```bash
pnpm install
```

Second, run the development server:

```bash
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Architecture

As all next application every page should be under <root>/src/app and every of them should have the name `page.js`

Besides we create severals folders: - assets folder: for all images - components: here we create all the client components used by the pages - context: it resides the contexts which wrapped all the applications - data: this folder has the api calls, and also a mock data for the test. - finally also a test folder.

We have the jest, prettier, next and js configuration files.

And our .env file which contains all the necessary variables

### DEPLOY APPLICATION

I just have deploy the application with vercel if you want to visit the page, hte url is : `https://test-marvel.vercel.app/`
