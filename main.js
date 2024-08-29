function defineData(){
    qnum =0
    currentDisplay ="question"
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
};

function displayContents(selector){
    if (selector =="question"){
        document.getElementById("contentQ").textContent =contentsData[qnum][0]
        currentDisplay ="question"
    }else if (selector =="advice"){
        document.getElementById("contentA").textContent =contentsData[qnum][1]
        currentDisplay ="advice"
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
        displayContents("question")
    }else if (id =="return"){
        if (currentDisplay =="advice"){
            transition("advice","none");
            transition("question","block");
        }else if(currentDisplay =="question") {
            qnum--;
        }
        displayContents("question");
    }else if (id =="next"){
        qnum++;
        displayContents("question");
    };
    console.log(qnum)
    console.log(currentDisplay)
};
