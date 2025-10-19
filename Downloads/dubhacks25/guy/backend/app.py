from flask import Flask, request, jsonify
from flask_cors import CORS
from gemini import generate_gemini_reply  # Import function from gemini.py

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    print(f"received from frontend: {user_message}")

    try:
        reply = generate_gemini_reply(user_message)
        print(f"gemini reply: {reply}")
        return jsonify({"reply": reply})
    except Exception as e:
        print("Error:", e)
        return jsonify({"reply": "Error: Could not connect to Gemini."}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)



