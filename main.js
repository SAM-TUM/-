function defineData(){
    qnum =0;
    finish =9;
    currentDisplay ="question";
    adviceLi =[];
    listId =["list1","list2","list3","list4","list5","list6","list7","list8","list9","list10","list11","list12","list13","list14","list15"];
    maleData =[
        ["運動や筋トレはしていますか？　","体が引き締まると、自信がつきます。最初は軽い運動や負荷の少ない筋トレを習慣にしていくといいでしょう。ジムに行ってみるのもおすすめです。"],
        ["眉毛は整えていますか？　","眉毛を整えるだけでも清潔感が出ます。動画などを参考にして処理したり、理容室に行ったりしてみるといいでしょう。"],
        ["体臭対策はしていますか？　","体臭は清潔感の大敵です。お風呂に毎日入ることだけでなく、汗拭きシートを使用したり、洗濯をこまめに行いましょう。また、制汗剤や香水は、使用しすぎると逆効果になることもあるため注意が必要です。"],
        ["おしゃれに気を遣っていますか？","おしゃれは清潔感の元にもなります。まずは理想のロールモデルなどを見つけ、意識してみてはいかがでしょうか"],
        ["普段からありがとうは言えていますか？　","些細なことでも感謝を伝えるようにしましょう。相手との関係を良好に続けていくための基本です。"],
        ["日頃からいろんな事を楽しめていますか？　","人は何かを楽しんでいる時や、笑っている時が一番魅力的に感じるものです。「笑顔が一番」ってよく聞きますよね。物事をポジティブに捉えて、楽しもうと意識してみましょう。"],
        ["人との約束は守れていますか？","約束を守ることで信頼が築かれます。小さな約束でも大切にしましょう。"],
        ["正直で一貫した行動を取れていますか？","誠実さは信頼を築く基盤です。どんな状況でも嘘をつかず、責任ある行動を取ることで、周りからの信頼が深まります。自分に誠実であることが、他者との良好な関係を築く第一歩です。"],
        ["話をしっかりと聞けていますか？","他者の意見に耳を傾け、共感を示すことで、安心感と理解が生まれます。人が話しているときには、遮らずにしっかりと聞き、相手の気持ちを大切にする姿勢を持ちましょう。"],
        ["ムダ毛処理はできていますか？","髭を剃ったり整えたりするだけでも、第一印象は大きく変わります。是非やってみましょう。"],
    ];
    femaleData =[
        ["運動や筋トレはしていますか？　","体が引き締まると、自信がつきます。最初は軽い運動や負荷の少ない筋トレを習慣にしていくといいでしょう。ジムに行ってみるのもおすすめです。"],
        ["眉毛は整えていますか？　","眉毛を整えるだけでも清潔感が出ます。動画などを参考にして処理したり、理容室に行ったりしてみるといいでしょう。"],
        ["体臭対策はしていますか？　","体臭は清潔感の大敵です。お風呂に毎日入ることだけでなく、汗拭きシートを使用したり、洗濯をこまめに行いましょう。また、制汗剤や香水は、使用しすぎると逆効果になることもあるため注意が必要です。"],
        ["おしゃれに気を遣っていますか？","おしゃれは清潔感の元にもなります。まずは理想のロールモデルなどを見つけ、意識してみてはいかがでしょうか"],
        ["普段からありがとうは言えていますか？　","些細なことでも感謝を伝えるようにしましょう。相手との関係を良好に続けていくための基本です。"],
        ["日頃からいろんな事を楽しめていますか？　","人は何かを楽しんでいる時や、笑っている時が一番魅力的に感じるものです。「笑顔が一番」ってよく聞きますよね。物事をポジティブに捉えて、楽しもうと意識してみましょう。"],
        ["人との約束は守れていますか？","約束を守ることで信頼が築かれます。小さな約束でも大切にしましょう。"],
        ["正直で一貫した行動を取れていますか？","誠実さは信頼を築く基盤です。どんな状況でも嘘をつかず、責任ある行動を取ることで、周りからの信頼が深まります。自分に誠実であることが、他者との良好な関係を築く第一歩です。"],
        ["話をしっかりと聞けていますか？","他者の意見に耳を傾け、共感を示すことで、安心感と理解が生まれます。人が話しているときには、遮らずにしっかりと聞き、相手の気持ちを大切にする姿勢を持ちましょう。"],
        ["ムダ毛処理はできていますか？　","腕の毛や髭は女性も生えていることがあります。それらを剃るだけで第一印象は大きく変わります。是非やってみましょう"],
    ];
};

function selectGender(gender){
    if (gender =="male"){
        contentsData =maleData;
        console.log("male")
    }else if (gender =="female"){
        contentsData =femaleData;
        console.log("female")
    }else{
        console.log(gender + "error");
    };
};

function displayContents(selector){
    if (selector =="question"){
        document.getElementById("contentQ").textContent =contentsData[qnum][0];
        currentDisplay ="question";
    }else if (selector =="advice"){
        document.getElementById("contentA").textContent =contentsData[qnum][1];
        currentDisplay ="advice";
        if ((adviceLi.includes(qnum)) ==false)
          adviceLi.push(qnum)
    };
};

function transition(id,display){
    document.getElementById(id).style.display =display;
};

function pushedButton(id){
    if (id =="no"){
        transition("question","none");
        transition("advice","block");
        displayContents("advice");
    }else if (id =="yes"){
        if (qnum ==finish){
            allAdvice();
        }else{
        qnum++;
        displayContents("question");
        };
    }else if (id =="return"){
        if (currentDisplay =="advice"){
            transition("advice","none");
            transition("question","block");
        }else if(currentDisplay =="question") {
            qnum--;
        }
        displayContents("question");
    }else if (id =="next"){
        if (qnum >= finish){
            allAdvice();
        }else if (currentDisplay =="allAdvice"){
            window.location.href ="gender.html";
        }else{
            if (currentDisplay =="advice"){
                transition("advice","none");
                transition("question","block");
            };
            qnum++;
            displayContents("question");
            };
    };
    console.log(qnum);
    console.log(currentDisplay);
};

function allAdvice(){
    listIdIndex =0
    if (currentDisplay =="question"){
        transition("question","none");
        transition("allAdvice","block") //仮でadviceに出力
    }else if (currentDisplay =="advice"){
        transition("advice","none");
        transition("allAdvice","block") //仮でadviceに出力
    };
    transition("next","none");
    currentDisplay =="allAdvice";
    document.getElementById("next").textContent ="アンケートに回答する";
    for (let adviceIndex of adviceLi){
        document.getElementById(listId[listIdIndex]).textContent =contentsData[adviceIndex][1]; //仮でadviceに出力
        listIdIndex++;
    };
    for (let listIdIndexAll = listIdIndex ; listIdIndexAll < 15 ; listIdIndexAll++) {
        document.getElementById(listId[listIdIndexAll]).style.display ="none";
        console.log("消えました")
    };
};
