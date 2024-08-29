function defineData(){
    qnum =0;
    finish =2;
    currentDisplay ="question";
    adviceLi =[];
    allAdviceText ="";
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
        qnum++;
        displayContents("question");
    }else if (id =="return"){
        if (currentDisplay =="advice"){
            transition("advice","none");
            transition("question","block");
        }else if(currentDisplay =="question") {
            qnum--;
        }
        displayContents("question");
    }else if (id =="next"){
        if (qnum ==finish){
            allAdvice();
        }
        if (currentDisplay =="advice"){
            transition("advice","none");
            transition("question","block");
        }
        qnum++;
        displayContents("question");
    };
    console.log(qnum);
    console.log(currentDisplay);
};

function allAdvice(){
    for (let advice of adviceLi){
        allAdviceText = allAdviceText + advice + "<br>";
    };
    if (currentDisplay =="question"){
        transition("question","none")
        transition("advice","block") //仮でadviceに出力
    }else if (currentDisplay =="advice"){
        transition("advice","none")
        transition("advice","block") //仮でadviceに出力
    };
    document.getElementById("contentA") =allAdviceText; //仮でadviceに出力
};
