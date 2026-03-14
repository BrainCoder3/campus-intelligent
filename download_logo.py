import urllib.request
url = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/ENSA_TETOUAN_LOGO.png'
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'}
)
try:
    with urllib.request.urlopen(req) as response:
        with open('logo.jpg', 'wb') as f:
            f.write(response.read())
    print("Logo downloaded successfully!")
except Exception as e:
    print(f"Error: {e}")
