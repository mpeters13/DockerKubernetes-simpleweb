# Matt's Maps
This is a simple web application made while learning Docker and Kubernetes

## The Application
Enter your starting point and your destination to get directions provided by google maps

## What's The Point?
The point of this project was to set up a docker file and run the container to produce a simple web app

## How To Run
1. make sure docker is installed on your local machine
2. create image from the docker file (run "docker build ." in the root directory)
3. using the produced image hash which you should see in the output of the above command, create a running container (run "docker run -p 8080:8080 {image hash}")

The application should now be running on localhost:8080

