import json
import os

# Define the file path
file_path = "pw.json"

# Initialize an empty dictionary to store user input
stored_userinfo = {}

# Collect user input
name = input("Enter Your name: ")
username = input("Enter your username: ")
password = input("Enter Your password: ")

# Save the collected information to the dictionary
stored_userinfo['name'] = name
stored_userinfo['username'] = username
stored_userinfo['password'] = password

# Check if the file exists
if os.path.exists(file_path):
    # If the file exists, load its contents
    with open(file_path, "r") as file:
        try:
            existing_data = json.load(file)
        except json.JSONDecodeError:
            existing_data = []  # In case the file is empty or corrupted
else:
    # If the file doesn't exist, initialize an empty list
    existing_data = []

# Append the new user info to the existing data
existing_data.append(stored_userinfo)

# Write the updated list back to the file
with open(file_path, "w") as file:
    json.dump(existing_data, file, indent=4)

print("User information saved successfully!")
