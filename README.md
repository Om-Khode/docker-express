# Docker Express Commands Readme

This readme provides an explanation of each command used in the Docker commands to build and run an Express application using Docker containers. The provided commands assume you have Docker installed on your system.

### 1. Build Docker Image: `docker build -t express-docker-image .`

- `docker build`: This command is used to build a Docker image from the Dockerfile in the current directory.
- `-t express-docker-image`: The `-t` flag is used to tag the built image with a name. In this case, the image is named "express-docker-image".
- `.`: The dot `.` at the end of the command specifies the build context, which is the current directory containing the Dockerfile.

### 2. Run Docker Container: `docker run --name express-docker-container -d -p 5000:5200 --rm -v "path-to-the-folder:/app" express-docker-image`

- `docker run`: This command is used to run a Docker container from a specified image.
- `--name express-docker-container`: The `--name` flag assigns a name to the running container. In this case, it's named "express-docker-container".
- `-d`: The `-d` flag runs the container in detached mode, which means it runs in the background.
- `-p 5000:5200`: The `-p` flag is used to publish ports from the container to the host. This command maps port 5200 in the container to port 5000 on the host.
- `--rm`: The `--rm` flag automatically removes the container when it stops running, ensuring a clean-up after the container is done.
- `-v "path-to-the-folder:/app"`: The `-v` flag is used to mount a volume from the host to the container. In this case, it mounts the "path-to-the-folder" directory on the host to the "/app" directory in the container.
- `express-docker-image`: This is the name of the Docker image to run, which should match the name specified during the build step.

### 3. Run Docker Container with Environment Variable: `docker run --name express-docker-container -d -p 5000:5200 --rm -e PORT=5200 -v "path-to-the-folder:/app" express-docker-image`

- The only difference from the previous command (Command #2) is the inclusion of the `-e PORT=5200` flag. This flag sets an environment variable `PORT` inside the container to the value `5200`. This is useful for configuring the application to listen on a specific port.

### 4. Run Docker Container with Environment File: `docker run --name express-docker-container -d -p 5000:5300 --rm --env-file ./.env -v "path-to-the-folder:/app" express-docker-image`

- The difference from the previous command (Command #3) is the use of the `--env-file ./.env` flag. This flag specifies a file (usually named ".env") that contains environment variables. These variables are then passed to the container during runtime. It is useful when you have multiple environment variables to set, and it keeps the command line cleaner and more organized.

### 5. List Running Containers: `docker ps`

- This command is used to list all the currently running Docker containers. It provides useful information about each container, such as the container ID, the image used, the names, the exposed ports, and more.

### 6. View Container Logs: `docker logs express-docker-container`

- This command is used to view the logs of a specific container. In this case, it retrieves the logs for the container named "express-docker-container". Logs are essential for debugging and monitoring the behavior of the application running inside the container.

### 7. Stop Running Container: `docker stop express-docker-container`

- This command is used to stop a running Docker container gracefully. It sends a stop signal to the specified container, and it will exit the running process and stop the container. In this case, it stops the container named "express-docker-container".

## Additional Information:

To run the Express application in development mode, add the following script to your `package.json` file:

    `"dev": "nodemon -L server.js"`

- `dev`: This is a custom script name that can be executed using `npm run dev`.
- `nodemon`: This is a Node.js tool used for development. It monitors changes in your source code and automatically restarts the server when changes are detected.
- `-L`: The `-L` flag tells nodemon to follow symbolic links, which is useful if your application uses them.

Remember to install nodemon as a dev dependency using `npm install nodemon --save-dev` before using the `npm run dev` script.

With this information, you should have a better understanding of the Docker commands and how to run an Express application inside a Docker container. Happy coding!
