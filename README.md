# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

### Deployed Endpoint

```bash
    http://image-filter-starter-code-dev222222222222222222222222222222.us-east-1.elasticbeanstalk.com
```

### Test Url

```bash
    http://image-filter-starter-code-dev222222222222222222222222222222.us-east-1.elasticbeanstalk.com/api/v1/filteredimage?image_url=https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg
```
