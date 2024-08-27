#ログイン
#性別選択
#NEXTボタン
#質問→回答
#NEXTボタン
#----------------------------------------

#はい or いいえ をcsvで取得、仮でinput
x = input("はいorいいえ：")

#質問番号　仮でinput
question = input("質問番号：")

#保存されたアドバイス一覧　仮でdict
#advice_man = {"男質問1": "男アドバイス1", "男質問2": "男アドバイス2", "男質問3": "男アドバイス3"}
#advice_woman = {"女質問1": "女アドバイス1", "女質問2": "女アドバイス2", "女質問3": "女アドバイス3"}

#--------------------------

#男性用    
import csv

file_man = open('男性用ファイル.csv','r')    #男性用
advice_man = csv.DictReader(file)     #辞書として変換

#質問が無くなるまで繰り返し
if x == "はい":
    print(advice_man[question])    #質問に対応したアドバイスを出力
elif x == "いいえ":
    pass

file_man.close()

#--------------------------

#女性用  
import csv

file_woman = open('女性用ファイル.csv','r')
advice_woman = csv.DictReader(file)     #辞書として変換

#質問が無くなるまで繰り返し
if x == "はい":
    print(advice_woman[question])    #質問に対応したアドバイスを出力
elif x == "いいえ":
    pass

file_woman.close()

#----------------------------------------
#最後の質問回答後
print("完了ボタン")
