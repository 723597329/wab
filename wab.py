from bs4 import BeautifulSoup
import urllib.request
import ssl
ssl._create_default_https_context=ssl._create_unverified_context
url1='https://www.gnu.ac.kr/program/multipleboard/BoardList.jsp?groupNo=10027'
response1=urllib.request.urlopen(url1)
soup=BeautifulSoup(response1,"html.parser")
results=soup.select("form a")
url=results[1].string
url=url.strip()
from flask import Flask,render_template,redirect,url_for,request
app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def result_uproad():
    return render_template('1.html',url1=url)

if __name__=='__main__':
    app.run()
