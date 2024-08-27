#アプリ内容 
#質問分野

import csv

contentsFile = open("contents.csv","r")



#csvでデータ取得　仮でinput
gender =input()

#question変数に質問をcsvからリスト形式で渡す
if gender =="male":
  #男性用処理
  questionLi =input("男性")
elif gender =="female":
  #女性用処理
  questionLi =input("女性")

#HTMLでデザイン
for index,question in enumerate(questionLi):
  print(question)
  
  #入力受付
  button =input("Y or N")
  answered =int(index)+1
  
  #アドバイス出力処理
