from flask import Flask

app = Flask(__name__)


@app.route("/")
@app.route("/tasks")
def home():
    return {"tasks": ["Task1", "Task2", "Task3"]}


if __name__ == "__main__":
    app.run(debug=True)
