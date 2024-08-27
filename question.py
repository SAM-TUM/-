#アプリ内容 
#質問分野

import csv
import advice as ad

#データ取得　仮でinput
gender =input()

#question変数に質問をcsvからリスト形式で渡す
if gender =="male":
  contentsFile =open("contentsMale.csv","r")
elif gender =="female":
  contentsFile =open("contentsFemale.csv","r")
else:
  pass
contentsData =csv.DictReader(contentsFile)

#HTMLでデザイン
for index,content in enumerate(contentsData):
  print(content[question])
  
  #入力受付
  answer =input("Y or N")
  #answered =int(index)+1
  if gender =="male":
    ad.advice_man(answer,content)
  elif gender =="female":
    ad.advice_woman(answer,content)
    
