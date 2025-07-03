import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure Gemini API key
genai.configure(api_key="AIzaSyDRndyPJ_G93odFUSf7Pkeexwht55DBj5g")  # Replace with your Gemini API key!

# Use the current Gemini Pro model name:
model = genai.GenerativeModel("models/gemini-1.5-pro-latest")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    # Gemini API call
    try:
        response = model.generate_content(user_message)
        bot_response = response.text
    except Exception as e:
        bot_response = f"Error: {e}"
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)