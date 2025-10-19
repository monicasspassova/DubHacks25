# gemini model here?
# import os 
# import json
# from google import genai
# from google.genai import types


# api_key = os.getenv("GEMINI_API_KEY")

# # Need to set environment variable with api key on own device!!!
# client = genai.Client(api_key = api_key)

# # Makes sure config file is in the right place
# BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# config_path = os.path.join(BASE_DIR, "model config.json")

# # reads configurement file
# with open(config_path, 'r') as f:
#     config = json.load(f)

# # create chat w/ configuring from file
# chat = client.chats.create(model = "gemini-2.5-flash", config= types.GenerateContentConfig(
#     system_instruction = config.get("system_instruction"),
#     temperature = config.get("temperature"),
#     max_output_tokens = config.get("maxOutputTokens"))
# )

# # loop chat
# go = True
# while go:
#     msg = input("\n")
#     if (msg == "quit"): go =False
#     response = chat.send_message(msg)
#     print(response.text)

import os
from google import genai
from google.genai import types
import json


api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

# Load model configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
config_path = os.path.join(BASE_DIR, "model config.json")

#reads configurement file
with open(config_path, 'r') as f:
    config = json.load(f)

# Function to generate a reply from Gemini
def generate_gemini_reply(user_message: str) -> str:
    chat = client.chats.create(model = "gemini-2.5-flash", config= types.GenerateContentConfig(
    system_instruction = config.get("system_instruction"),
    temperature = config.get("temperature"),
    max_output_tokens = config.get("maxOutputTokens"))
    )
    response = chat.send_message(user_message)
    print("Raw Gemini response:", response)
    return response.text
    