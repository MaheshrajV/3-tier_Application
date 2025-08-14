Three-Tier Next.js Docker Deployment

This project demonstrates a standard three-tier enterprise-style application deployed using Docker.

Architecture
The application is composed of three main services:

1. Frontend: A Next.js application serving the user interface.

2. Backend: A Node.js/Express API handling business logic and communicating with the database.

3. Database: A PostgreSQL database for persistent data storage.


All services are orchestrated using Docker Compose, configured to use a single internal network for secure communication.

Prerequisites
Docker Desktop installed on your machine.

A code editor (e.g., VS Code).

Directory Structure
To get started, create the following directory structure:

.
├── .env
├── docker-compose.yml
├── backend
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── database
│   └── Dockerfile
└── frontend
    ├── Dockerfile
    ├── next.config.js
    ├── package.json
    └── app
        └── page.js


Setup and Deployment
Step 1: Create the files
Copy the contents of the immersive documents below into their respective files in the directory structure above.


Step 2: Configure Environment Variables
Create a .env file in the root directory and add the following environment variables. Do not hard-code these values in the code.

POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb


Step 3: Build and Run
From the root directory, run the following command to build the Docker images and start the containers.

docker-compose up --build

This command will:

Build the frontend and backend images from their respective Dockerfiles.

Download the official PostgreSQL image.

Start all three services.

Create a named volume (postgres_data) for persistent database storage.


Step 4: Verify the Deployment
Once the containers are running, you can access the Next.js frontend at http://localhost:3000.

The frontend will attempt to fetch data from the backend API, which is running internally.

You can view the logs for each service using docker-compose logs <service_name>.

To stop and remove the containers and the network, run:


docker-compose down
