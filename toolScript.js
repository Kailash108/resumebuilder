function func()
{
    document.getElementById("scrolldown").innerHTML = "Scroll Down To See The Generated Resume"

    document.getElementById("design").style.backgroundColor = "black";
    document.getElementById("design").style.color = "white";

    document.getElementById("heading").innerHTML = "Sample Resume";
    document.getElementById("heading").style.textDecoration = "underline";
    document.getElementById("heading").style.color = "yellow";
    
    x = document.getElementById("name").value;
    document.getElementById("name1").innerHTML = "Name:  <span style='color: gold'>" +x+"</span>";

    x1 = document.getElementById("email").value;
    document.getElementById("email1").innerHTML = "E-Mail:  <span style='color: gold'>" +x1+"</span>";

    x2 = document.getElementById("phno").value;
    document.getElementById("phno1").innerHTML = "Phone:  <span style='color: gold'>" +x2+"</span>";

    x3 = document.getElementById("city").value;
    document.getElementById("city1").innerHTML = "City/Town/Village:  <span style='color: gold'>" +x3+"</span>";

    document.getElementById("educ1").innerHTML = "education";
    //10th Marks & Details
    document.getElementById("class10").innerHTML = "X(Secondary):";
    a = document.getElementById("yoc10").value;
    a1 = document.getElementById("board10").value;
    a2 = document.getElementById("name10").value;
    a3 = document.getElementById("grade10").value;
    document.getElementById("yoc10i").innerHTML = "Year Of Completion:  <span style='color: greenyellow'>" +a+"</span>";
    document.getElementById("board10i").innerHTML = "Board:  <span style='color: greenyellow'>" +a1+"</span>";
    document.getElementById("name10i").innerHTML = "Name Of The School:  <span style='color: greenyellow'>" +a2+"</span>";
    document.getElementById("grade10i").innerHTML = "Grade Or Percentage:  <span style='color: greenyellow'>" +a3+"</span>";
    //12th Marks & Details
    document.getElementById("class11").innerHTML = "XII(Senior Secondary):";
    b = document.getElementById("yoc11").value;
    b1 = document.getElementById("board11").value;
    b2 = document.getElementById("name11").value;
    b3 = document.getElementById("grade11").value;
    document.getElementById("yoc11i").innerHTML = "Year Of Completion:  <span style='color: yellow'>" +b+"</span>";
    document.getElementById("board11i").innerHTML = "Board:  <span style='color: yellow'>" +b1+"</span>";
    document.getElementById("name11i").innerHTML = "Name Of The School:  <span style='color: yellow'>" +b2+"</span>";
    document.getElementById("grade11i").innerHTML = "Grade Or Percentage:  <span style='color: yellow'>" +b3+"</span>";
     //UG Marks & Details
    document.getElementById("classug").innerHTML = "Bachelor Of Technology(B.Tech):";
    c = document.getElementById("nameGrad").value;
    c1 = document.getElementById("univDept").value;
    c2 = document.getElementById("yocGrad").value;
    c3 = document.getElementById("gradeGrad").value;
    document.getElementById("yocug").innerHTML = "Year Of Completion:  <span style='color: palegoldenrod'>" +c+"</span>";
    document.getElementById("nameug").innerHTML = "Name Of The University:  <span style='color: palegoldenrod'>" +c1+"</span>";
    document.getElementById("deptug").innerHTML = "Department:  <span style='color: palegoldenrod'>" +c2+"</span>";
    document.getElementById("gradeug").innerHTML = "Grade Or Percentage:  <span style='color: palegoldenrod'>" +c3+"</span>";
    //Positions Of Responsibilty------>
    document.getElementById("po").innerHTML = "Positions Of Responsibilty"
    por = document.getElementById("por").value
    document.getElementById("por1").innerHTML = "<span color:'purple'>"+por+"</span>";
    //Trainings ---->
    document.getElementById("trai").innerHTML = "Trainings";
    cnam = document.getElementById("couname").value;
    cclg = document.getElementById("couclg").value;
    cdur = document.getElementById("coudur").value;
    document.getElementById("counamei").innerHTML = "Name: <span color:'#6A5ACD'>"+cnam+"</span>";
    document.getElementById("couclgi").innerHTML = "Offered By: <span color:'#6A5ACD'>"+cclg+"</span>";
    document.getElementById("couduri").innerHTML = "Duration: <span color:'#6A5ACD'>"+cdur+"</span>";

    cnam1 = document.getElementById("couname1").value;
    cclg1 = document.getElementById("couclg1").value;
    cdur1 = document.getElementById("coudur1").value;
    document.getElementById("counameii").innerHTML = "Name: <span color:'#6A5ACD'>"+cnam1+"</span>";
    document.getElementById("couclgii").innerHTML = "Offered By: <span color:'#6A5ACD'>"+cclg1+"</span>";
    document.getElementById("coudurii").innerHTML = "Duration: <span color:'#6A5ACD'>"+cdur1+"</span>";
    //Projects---->
    document.getElementById("proj").innerHTML = "Projects";
    pnam = document.getElementById("projname1").value;
    pdesc = document.getElementById("projdesc1").value;
    pdur = document.getElementById("projdur1").value;
    plink = document.getElementById("projlink1").value;
    document.getElementById("projnamei").innerHTML = "Name: <span color:'#6A5ACD'>"+pnam+"</span>";
    document.getElementById("projdesci").innerHTML = "Description: <span color:'#6A5ACD'>"+pdesc+"</span>";
    document.getElementById("projduri").innerHTML = "Duration: <span color:'#6A5ACD'>"+pdur+"</span>";
    document.getElementById("projlinki").innerHTML = "Link: <span color:'#6A5ACD'>"+plink+"</span>";

    pnam1 = document.getElementById("projname2").value;
    pdesc1 = document.getElementById("projdesc2").value;
    pdur1 = document.getElementById("projdur2").value;
    plink1 = document.getElementById("projlink2").value;
    document.getElementById("projnameii").innerHTML = "Name: <span color:'#6A5ACD'>"+pnam1+"</span>";
    document.getElementById("projdescii").innerHTML = "Description: <span color:'#6A5ACD'>"+pdesc1+"</span>";
    document.getElementById("projdurii").innerHTML = "Duration: <span color:'#6A5ACD'>"+pdur1+"</span>";
    document.getElementById("projlinkii").innerHTML = "Link: <span color:'#6A5ACD'>"+plink1+"</span>";
    //Skills------->
    document.getElementById("skills").innerHTML = "Skills";
    s1 = document.getElementById("s1").value;
    s2 = document.getElementById("s2").value;
    s3 = document.getElementById("s3").value;
    s4 = document.getElementById("s4").value;
    s5 = document.getElementById("s5").value;
    s6 = document.getElementById("s6").value;
    document.getElementById("sk1").innerHTML = "1. "+s1;
    document.getElementById("sk2").innerHTML = "2. "+s2;
    document.getElementById("sk3").innerHTML = "3. "+s3;
    document.getElementById("sk4").innerHTML = "4. "+s4;
    document.getElementById("sk5").innerHTML = "5. "+s5;
    document.getElementById("sk6").innerHTML = "6. "+s6;
}