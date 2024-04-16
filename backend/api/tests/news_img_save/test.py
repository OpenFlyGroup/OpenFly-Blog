import requests

url = 'http://localhost:8000/api/news/post-create'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJuaWNrbmFtZSI6ImFkbWluIiwidXNlcl9pZCI6NDcsImNyZWF0ZWQiOiIyMDI0LTA0LTE0VDExOjQxOjQ0LjI2MDA4OSIsImV4cGlyZWQiOiIyMDI0LTA0LTE0VDExOjU2OjQ0LjI2MDA4OSJ9.KMb_8HFI9ZRfZwdvjV5etPeoNEgrTujs2ZxJOPpbqm4'
title = 'Liminal creature'
text = 'In the example above, we declare both quote and fact in the same line with one operator (:=). These variables are then assigned their respective values based on the ordering of variables and value. Since quote is the first variable, and the string "Bears, Beets, Battlestar Galactica" is the first value, quote has a value of "Bears, Beets, Battlestar Galactica". Similarly, fact then is assigned the value true.'
category = 'development'

with open('2.jpg', 'rb') as logo_file, open('1.jpg', 'rb') as main_img_file:
    files = {
        'title': (None, title),
        'text': (None, text),
        'category': (None, category),
        'logoImg': ('logo.jpg', logo_file, 'image/jpeg'),
        'mainImg': ('nn.jpg', main_img_file, 'image/jpeg'),
        'token': (None, token)
    }

    response = requests.post(url, files=files)

if response.status_code == 201:
    print("News uploaded successfully. News ID:", response.text)
else:
    print("Failed to upload news. Status code:", response.status_code)
    print("Error message:", response.text)
