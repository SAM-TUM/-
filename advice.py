#はい or いいえ を取得、仮でinput
x = input("はいorいいえ：")

#質問番号　仮でinput
question = input("質問番号：")

#----------------------------------------
import csv

#質問が無くなるまで繰り返し

#男性用    
def advice_male(x):
    file_male = open('contentsMale.csv','r')    #男性用csv
    advice_male = csv.DictReader(file_male)     #辞書として変換

    if x == "はい":
        print(advice_male[advice])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_male.close()

#--------------------------

#女性用 
def advice_woman(x):
    file_female = open('contentsFemale.csv','r')    #女性用csv
    advice_female = csv.DictReader(file_female)     #辞書として変換
    
    if x == "はい":
        print(advice_female[advice])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_female.close()

#----------------------------------------
#最後の質問回答後
print("完了ボタン")
