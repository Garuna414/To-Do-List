# To-Do List Application

A simple To-Do List application with a **ReactJS frontend** styled with **Tailwind CSS**, a **Flask backend**, and **MongoDB Atlas** as the database.

---

## Features

- Add tasks with default names.
- View all tasks.
- Update tasks by ID.
- Delete individual tasks by ID or clear all tasks.
- RESTful API powered by Flask.

---

## Project Structure

```
To-Do List
├── client/        # ReactJS frontend project files
├── flaskServer/         # Flask backend files
│   ├── server.py    # Flask server with API endpoints
│   ├── requirements.txt
│   └── .env         # Environment variables for Flask and MongoDB Atlas
└── README.md        # Project documentation
```

---

## Tech Stack

- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Flask (Python)
- **Database**: MongoDB Atlas

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Garuna414/To-Do-List.git
cd To-Do-List
```

### 2. Setup Backend

1. Navigate to the `flaskServer` folder:

   ```bash
   cd flaskServer
   ```

2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file in the `flaskServer` folder with the following content:

   ```env
   URI=<Your MongoDB Connection String>
   ```

4. Run the Flask server:

   ```bash
   python server.py
   ```

   The server will be available at `http://127.0.0.1:5000/`.

### 3. Setup Frontend

1. Navigate to the `client` folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000/`.

---

## Running Tests

### Backend Tests

1. Install `pytest` if not already installed:
   ```bash
   pip install pytest
   ```
2. Run the tests:
   ```bash
   pytest
   ```

---

## Deployment

### Backend Deployment on Render

1. Push the code to a GitHub repository.
2. Go to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your repository and set the build and start commands:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python server.py`
4. Add the `URI` environment variable in Render settings.
5. Deploy the service.

### Frontend Deployment on Render

1. Push the frontend code to a GitHub repository.

2. Go to [Render](https://render.com/) and create a new **Web Service**.

3. Connect your repository and set the build and start commands:

   - Build Command: `yarn; yarn build`
   - Start Command: `yarn start`

4. Update the `apiUrl` environment variable to point to your backend's Render URL.

---

## API Endpoints

### Base URL

The base URL for the API is: `https://to-do-list-u0jh.onrender.com`

### Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/tasks`           | Fetch all tasks     |
| POST   | `/tasks`           | Create a new task   |
| PUT    | `/tasks/<task_id>` | Update a task by ID |
| DELETE | `/tasks/<task_id>` | Delete a task by ID |
| DELETE | `/tasks`           | Delete all tasks    |

---

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

