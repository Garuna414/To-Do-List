import sys
import os

# Add the parent directory to the module search path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import pytest
from server import app  # Import your Flask app

# Fixture to create a test client
@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

# Test: Fetch all tasks
def test_fetch_tasks(client):
    response = client.get("/tasks")
    assert response.status_code == 200
    assert isinstance(response.json, list)

# Test: Create a new task
def test_create_task(client):
    response = client.post("/tasks")
    assert response.status_code == 200
    assert response.json["name"] == "New Task"

# Test: Delete a specific task
def test_delete_task(client):
    # Create a task first
    create_response = client.post("/tasks", json={"name": "Task to Delete"})
    task_id = create_response.json["_id"]
    
    # Delete the created task
    delete_response = client.delete(f"/tasks/{task_id}")
    assert delete_response.status_code == 200

# Test: Delete all tasks
def test_delete_all_tasks(client):
    response = client.delete("/tasks")
    assert response.status_code == 200

# Test: Update a task
def test_update_task(client):
    create_response = client.post("/tasks")
    task_id = create_response.json["_id"]    
    update_response = client.put(f"/tasks/{task_id}", json={"name": "Updated Task"})
    assert update_response.status_code == 200
    assert update_response.json["message"] == "Task updated successfully"
