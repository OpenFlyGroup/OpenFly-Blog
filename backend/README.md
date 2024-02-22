# Django Backend Docker Setup

This repository contains the Docker setup for a Django backend.


## Building the Docker Image

```bash
docker build -t backend:latest .
```

This command builds Docker image named `backend:latest` based on the Dockerfile in the project.

## Running the Docker Container

```bash
docker run -p 8000:8000 backend
```

This command runs the Docker container from the `backend:latest` image, mapping port 8000 on the host to port 8000 in the container.

Access your Django app in a web browser at [http://localhost:8000/](http://localhost:8000/).

## Possible Issues and Feedback

If you encounter issues or have feedback, consider the following:

- **Container Startup Issues:** Check the console output when starting the container for any error messages. Ensure that the necessary dependencies are correctly installed.

- **Port Conflicts:** Make sure no other processes are using port 8000 on your machine. If needed, you can modify the port mapping in the `docker run` command.

- **Feedback:** Please feel free to open an issue in this repository for any questions, issues, or feedback. (There is a good chance that I made a mistake xD)

### Notes

- API documentation has been moved to the api folder/