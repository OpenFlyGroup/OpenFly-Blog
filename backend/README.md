# Project Setup Documentation

## Creating a .env File

1. **Create the File:**
   - In the backend/ directory of project, create a file `.env`.

2. **Define Environment Variables:**
   - Add environment variables in the `.env` file:
     ```dotenv
        PG_USER=YOUR_VALUE
        PG_PASSWORD=YOUR_VALUE
        PG_HOST=YOUR_VALUE
        PG_DATABASE=YOUR_VALUE
        PG_PORT=YOUR_VALUE
        JWT_KEY=YOUR_VALUE
        SECRET_KEY=YOUR_VALUE
     ```

3. **Important Note:**
   - Ensure that the `.env` file is included in your project's `.gitignore` to prevent sensitive information from being pushed to version control.

## Setting Up a Virtual Environment (venv)

1. **Create Virtual Environment:**
   - Open a terminal in your project's root directory.

   - Run the following command to create a virtual environment:
     ```bash
     python -m venv venv
     ```

2. **Activate Virtual Environment:**
   - Activate the virtual environment based on your operating system:
     - **Windows:**
       ```bash
       .\venv\Scripts\activate
       ```
     - **Unix or MacOS:**
       ```bash
       source venv/bin/activate
       ```

3. **Install Dependencies:**
   - While the virtual environment is active, install your project dependencies using `pip`. For example:
     ```bash
     pip install -r requirements.txt
     ```

5. **Important Note:**
   - Include the `venv` directory in your project's `.gitignore` to avoid pushing the virtual environment to version control.


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