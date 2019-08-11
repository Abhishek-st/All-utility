import requests
url = 'https://ide.geeksforgeeks.org/main.php'

c="""
a=input('')
print(a)
"""

data= {
    'lang': 'Python3',
    'code': c,
    'input': 'hello',
    'save': 'false'
}

r=requests.post(url,data=data)
print(r.json())
