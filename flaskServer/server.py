import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

client = MongoClient(f'{os.getenv("URI")}')
db = client["taskdb"]
tasks_collection = db["tasks"]


# API Endpoints
# Fetch all tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = list(tasks_collection.find({}, {"_id": 1, "name": 1}))
    for task in tasks:
        task["_id"] = str(task["_id"])
    return jsonify(tasks)

# Create a new task (default name: "New Task")


@app.route("/tasks", methods=["POST"])
def create_task():
    new_task = {"name": "New Task"}
    result = tasks_collection.insert_one(new_task)
    return jsonify({"_id": str(result.inserted_id), "name": new_task["name"]})

# Delete one task by ID


@app.route("/tasks/<task_id>", methods=["DELETE"])
def delete_task(task_id):
    result = tasks_collection.delete_one({"_id": ObjectId(task_id)})
    if result.deleted_count > 0:
        return jsonify({"message": "Task deleted successfully"}), 200
    else:
        return jsonify({"message": "Task not found"}), 404

# Delete all tasks


@app.route("/tasks", methods=["DELETE"])
def delete_all_tasks():
    tasks_collection.delete_many({})
    return jsonify({"message": "All tasks deleted successfully"}), 200

# Update one task by ID


@app.route("/tasks/<task_id>", methods=["PUT"])
def update_task(task_id):
    data = request.json
    if "name" not in data:
        return jsonify({"message": "Task name is required"}), 400

    result = tasks_collection.update_one(
        {"_id": ObjectId(task_id)}, {"$set": {"name": data["name"]}}
    )
    if result.matched_count > 0:
        return jsonify({"message": "Task updated successfully"}), 200
    else:
        return jsonify({"message": "Task not found"}), 404


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
