#はい or いいえ を取得、仮でinput
x = input("はいorいいえ：")

#質問番号　仮でinput
question = input("質問番号：")

#----------------------------------------
import csv

#質問が無くなるまで繰り返し

#男性用    
def advice_man(x):
    file_man = open('contentsMale.csv','r')    #男性用csv
    advice_man = csv.DictReader(file_man)     #辞書として変換

    if x == "はい":
        #質問に対するアドバイスを出力
        #print(advice_man[question])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_man.close()

#--------------------------

#女性用 
def advice_woman(x):
    file_woman = open('contentsFemale.csv','r')    #女性用csv
    advice_woman = csv.DictReader(file)     #辞書として変換
    
    if x == "はい":
        #質問に対するアドバイスを出力
        #print(advice_woman[question])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_man.close()

#----------------------------------------
#最後の質問回答後
print("完了ボタン")
