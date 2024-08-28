function defineData(){
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

function mainApp(contentsData){
    for (let content of contentsData){
        //質問を出力
        //document.getElementById().textContent =content[0]
        //ページ遷移に伴いfor文の処理が途切れる場合は"content"を引数として受け渡す
        answer =false; //仮でfalse あとで関数化
        if (answer){
            console.log("chosed Y")
            //スキップ処理
        }else if(answer){
            console.log("chosed N")
            //アドバイスを出力
            //document.getElementById().textContent =content[1]
        }else{
            console.log("not defined answer")
        }};
};