#ログイン
#性別選択
#NEXTボタン
#質問→回答
#NEXTボタン
#--------------------------

#はい or いいえ をcsvで取得、仮でinput
x = input()

#質問番号　仮でinput
question = input()

#保存されたアドバイス一覧　仮でdict
advice_dict = {"質問1": "アドバイス1", "質問2": "アドバイス2", "質問3": "アドバイス3"}


def advice():
    global x,question,advice_dict
    
    #質問が無くなるまで繰り返し
    if x == "はい":
        #質問に対応したアドバイスを出力
        print(advice_dict[question])
    elif x == "いいえ":
        pass

advice()

#--------------------------
#最後の質問
print("完了ボタン")
