course=[]; //Cource Name variable
grade =[]; //Grade variable
credits=[]; //Credit variable
tgrade=[]; //GPA variable 

function displayCourses() //Displays the cources
{

total = 0;
totalcredits = 0; //Total credits
totalgrades = 0; //Total grade amount

crsn = ""; //Displays Course Name
crdsn = ""; //Displays Number of Credits
cgn = ""; //Displays Course Grade(Numbers)
cgl = ""; //Displays Course Grade(Letters)
gpa = ""; //Displays Current GPA
gps = ""; //Displays Grade Points

for (i=0; i<course.length; i++)
 {


tgrade[i]=(credits[i] * M2G(grade[i])[1]).toFixed(2);

crsn = crsn + course[i] + "\n"; //Calculated Course Name
crdsn = crdsn + credits[i] + "\n";  //Calculated Number of Credits
cgn = cgn + grade[i] + "\n";  //Calculated Course Grade(Numbers)
cgl = cgl + M2G(grade[i])[0] + "\n";  //Calculated Course Grade(Letters)
gpa = gpa + M2G(grade[i])[1] + "\n";  //Calculated Current GPA
gps = gps + tgrade[i] + "\n";  //Calculated Grade Points
 


total = total + parseInt(grade[i]); //Calculated Total
totalcredits = totalcredits + parseInt(credits[i]); //Calculated Total Credits
totalgrades = totalgrades + parseFloat(tgrade[i]); //Calculated Total Grade Points

 }
 
 
document.getElementById("crsn").innerText=crsn; //Returns the text content of Course Name
document.getElementById("crdsn").innerText=crdsn; //Returns the text content of Credits
document.getElementById("cgn").innerText=cgn; //Returns the text content of Course Grade(Numbers)
document.getElementById("cgl").innerText=cgl; //Returns the text content of Course Grade(Letters)
document.getElementById("gpa").innerText=gpa;  //Returns the text content of Current GPA
document.getElementById("gps").innerText=gps;  //Returns the text content of Grade Points


document.getElementById("tot").innerText=total; //Returns the text content of Total
document.getElementById("tcr").innerText=totalcredits; //Returns the text content of Total Credits
document.getElementById("tgp").innerText=totalgrades.toFixed(2); //Returns the text content of Total Grade Points

document.getElementById("cgpa").innerText="GPA = " + (totalgrades/totalcredits).toFixed(2); //Returns the text content of calculated GPA


}

function refreshElement(){
	course=[];
    grade =[];
    credits=[];
    tgrade=[];
    displayCourses();
    
}



function elementObj(id){
	return (document.getElementById(id));
}

 function addRecord(){ //After user clicks "Enter Course"
	if (validation() == true)
	{
	cn = document.getElementById("cne").value; //Gets value for Couse Name
	gn = document.getElementById("gne").value; //Gets value for Grade
	cv = document.getElementById("cve").value; //Gets value for Credits
	course[course.length] = cn; //Displays Couse Name
	grade[grade.length] = gn; //Displays value for Grade
	credits[credits.length]= cv; //Displays value for Credits
    }
    displayCourses();
}

function M2G(gn){
    
    x = ""
    point = 0
    if(gn<60){ //Display Grade as 'F' if grade less than 60
        x ="F";
        point=0;
		}
    else
    if(gn<=63){  //Display Grade as 'F' if grade <= 63
        x="D";
        point=1;
		}
    else
    if(gn<=66){ //Display Grade as 'F' if grade <= 66
        x="D+";
        point=1.3;
		}
    else
    if(gn<=69){ //Display Grade as 'F' if grade <= 69
		x="C-";
    point=1.7;
	}
    else
    if(gn<=73){ //Display Grade as 'F' if grade <= 73
        x="C"; 
        point=2;
		}
    else
    if(gn<=76){ //Display Grade as 'F' if grade <= 76
        x="C+";
        point=2.3;
		}
    else
    if(gn<=79){ //Display Grade as 'F' if grade <= 79
        x="B-";
        point=2.7;
		}
    else
    if(gn<=83) { //Display Grade as 'F' if grade <= 83
        x="B";
        point=3;}
    else
    if(gn<=86){ //Display Grade as 'F' if grade <= 86
        x="B+"; 
        point=3.3;
		}
    else
    if(gn<=89) { //Display Grade as 'F' if grade <= 89
        x="A-";
        point=3.7;
		}
    else
    if(gn<=100){ //Display Grade as 'A' if grade <= 100
        x="A";
        point=4;
		}
    
	gp=[];
	gp[0]=x;
	gp[1]=point;
	
    return gp;
}

function validation(){ //Check for Errors
	studentgrade = parseInt(document.getElementById("gne").value);
	coursecredit = parseInt(document.getElementById("cve").value);
    if(studentgrade<100 && studentgrade>=0 && coursecredit>0)
	{
    document.getElementById("error").innerText= "";
	return (true);
    }
	else
	document.getElementById("error").innerText= "Please make sure you enter grades between 0 and 100 and credit hours 0 or above";
}