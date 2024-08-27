if __name__ == "__main__":
    #はい or いいえ を取得、仮でinput
    x = input("はいorいいえ：")

    #質問番号　仮でinput
    advice = input("質問番号：")

#----------------------------------------
import csv

#質問が無くなるまで繰り返し

#男性用    
def advice_man(x,advice_man):
    #file_man = open('contentsMale.csv','r')    #男性用csvを読み込み
    #advice_woman = csv.DictReader(file_man)     #辞書として変換

    if x == "はい":
        print(advice_man["advice"])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_male.close()

#--------------------------

#女性用 
def advice_woman(x,advice_woman):
    #file_woman = open('contentsFemale.csv','r')    #女性用csvを読み込み
    #advice_woman = csv.DictReader(file_woman)     #辞書として変換
    
    if x == "はい":
        print(advice_woman["advice"])    #質問に対応したアドバイスを出力
    elif x == "いいえ":
        pass

    file_woman.close()

#----------------------------------------
#最後の質問回答後
print("完了ボタン")
