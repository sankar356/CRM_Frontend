import requests
import json
 
url = "https://api.qa.dewa.gov.ae/ideation/myChallenge"
 
payload = json.dumps({
  "userid": "ALL",
  "challengeid": 0,
  "languagecode": 1033,
  "action": "CHALLENGE"
})
headers = {
  'Accept': 'application/json',
  'hmac-base64': 'YcCRQWW7AmTVsVeq6HihZsdHsQi4FcNGYa3BMt274AU=',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ad1mPuwh9VgpVa76x3qeMx60Aef0'
}
 
response = requests.request("POST", url, headers=headers, data=payload)
 
print(response.text)