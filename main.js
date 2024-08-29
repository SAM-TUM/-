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

function displayContents(selector){
    if (selector =="question"){
        document.getElementById("contentQ").textContent =contentsData[qnum][0]
    }else if (selector =="advice"){
        document.getElementById("contentA").textContent =contentsData[qnum][1]
    };
    qnum++;
};

function transition(id,display){
    document.getElementById(id).style.display =display;
};

function pushedButton(id){
    if (id =="no"){
        transition("question","none");
        transition("advice","display");
        displayContents("advice");
    }else if (id =="yes"){
        displayContents("question")
    }else if (id =="return"){
        qnum--;
        displayContents("question")
    }else if (id =="next"){
        qnum++;
        displayContents("question")
    }
};
