#はい or いいえ
x = input()
question = "質問のリスト"

#質問が無くなるまで繰り返し
while question > 0:
    
    if x == "はい":
      print("質問に対応したアドバイス")
    else:
      pass
        
elif question == 0:
    print("完了ボタン")
