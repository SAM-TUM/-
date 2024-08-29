function defineData(){
    qnum =1
    maleData =[
        ["q1m","a1m"],
        ["q2m","a2m"],
        ["q3m","a3m"],
    ];
    femaleData =[
        ["q1f","a1f"],
        ["q2f","a2f"],
        ["q3f","a3f"],
    ];
};

function selectGender(gender){
    if (gender =="male"){
        contentsData =maleData;
        console.log("male")
    }else if (gender =="female"){
        contentsData =femaleData
        console.log("female")
    }else{
        console.log(gender + "error")
    };
}

function mainApp(answer){
    //質問を出力
    //document.getElementById().textContent =content[0]
    //ページ遷移に伴いfor文の処理が途切れる場合は"content"を引数として受け渡す
    if (answer){
        console.log("chosed Y")
        //スキップ処理
    }else if(answer){
        console.log("chosed N")
        //アドバイスを出力
        //document.getElementById().textContent =content[1]
    }else{
        console.log("not defined answer")
    };
};

function displayContents(select,answer){
    if (select =="question"){
        document.getElementById("question").textContent =contentsData[qnum][0]
        qnum++ ;
    }else if (select =="advice"){
        mainApp(answer)
    }
}

function transition(id,display,selector){
  if (selector =="answer"){
    document.getElementById("id").style.display =display;
  }else if (selector =="return"){
    qnum_previous =qnum-1;
    document.getElementById("question").textContent =contentsData[qnum_previous][0]
  }
}

function transition(id,display){
    document.getElementById("id").style.display =display;
}

