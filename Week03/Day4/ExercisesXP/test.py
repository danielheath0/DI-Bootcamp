import requests

parameters = {"lat":32.038150, "lon": 34.752505}
response = requests.get("http://api.open-notify.org/iss-pass.json", params=parameters)
print(response.json())