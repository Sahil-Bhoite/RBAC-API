# JWT Authentication and RBAC API Project

## Overview
This project implements a RESTful API with JWT Authentication and Role-Based Access Control (RBAC) using FastAPI and MongoDB. The system manages users with different roles and provides role-based access to various endpoints.

## Technologies Used
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project Structure
```
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Projects.tsx
│   │   └── Users.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation and Setup

### Prerequisites
- Node.js & npm installed
- Git

### Local Development Setup
```sh
# Step 1: Clone the repository
git clone [your-repository-url]

# Step 2: Navigate to project directory
cd [project-directory]

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Features
- User registration and authentication
- JWT-based authorization
- Role-Based Access Control (RBAC) with admin and user roles
- CRUD operations for projects
- Secure password hashing
- MongoDB integration using MongoEngine
- Responsive layout with mobile support
- Toast notifications for user feedback
- Sidebar navigation

## API Endpoints

### Authentication Endpoints
```
POST /register
- Register new user
- Body: {"username": "example", "password": "password123", "role": "user"}

POST /login
- User login
- Body: {"username": "example", "password": "password123"}
- Response: {"access_token": "JWT_TOKEN"}
```

### Project Endpoints
```
GET /projects
- Get all projects
- Requires: JWT token
- Access: All authenticated users

POST /projects
- Create new project
- Requires: JWT token with admin role
- Body: {"name": "Project A", "description": "Description of project"}

PUT /projects/{project_id}
- Update project
- Requires: JWT token with admin role

DELETE /projects/{project_id}
- Delete project
- Requires: JWT token with admin role
```

## Testing
To run the test suite:
```sh
npm test
```

## Important Links
- Portfolio: [https://sahil-bhoite.github.io/Portfolio/](https://sahil-bhoite.github.io/Portfolio/)


