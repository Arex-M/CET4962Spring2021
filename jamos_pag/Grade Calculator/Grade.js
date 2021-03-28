course=[]; //Cource Name variable
mark =[]; //Grade variable
chour=[]; //Credit variable
tpoint=[]; //GPA variable 

function displayCourses() //Displays the cources
{

total = 0;
totalcredits = 0; //Total credits
totalpoints = 0; //Total grade amount

cn1 = ""; //Displays Course Name
ch1 = ""; //Displays Number of Credits
cm1 = ""; //Displays Course Grade(Numbers)
gr1 = ""; //Displays Course Grade(Letters)
gp1 = ""; //Displays Current GPA
tp1 = ""; //Displays Grade Points

for (i=0; i<course.length; i++)
 {


tpoint[i]=(chour[i] * M2G(mark[i])[1]).toFixed(2);

cn1 = cn1 + course[i] + "\n"; //Calculated Course Name
ch1 = ch1 + chour[i] + "\n";  //Calculated Number of Credits
cm1 = cm1 + mark[i] + "\n";  //Calculated Course Grade(Numbers)
gr1 = gr1 + M2G(mark[i])[0] + "\n";  //Calculated Course Grade(Letters)
gp1 = gp1 + M2G(mark[i])[1] + "\n";  //Calculated Current GPA
tp1 = tp1 + tpoint[i] + "\n";  //Calculated Grade Points
 


total = total + parseInt(mark[i]); //Calculated Total
totalcredits = totalcredits + parseInt(chour[i]); //Calculated Total Credits
totalpoints = totalpoints + parseFloat(tpoint[i]); //Calculated Total Grade Points

 }
 
 
document.getElementById("cn1").innerText=cn1; //Returns the text content of Course Name
document.getElementById("ch1").innerText=ch1; //Returns the text content of Credits
document.getElementById("cm1").innerText=cm1; //Returns the text content of Course Grade(Numbers)
document.getElementById("gr1").innerText=gr1; //Returns the text content of Course Grade(Letters)
document.getElementById("gp1").innerText=gp1;  //Returns the text content of Current GPA
document.getElementById("tp1").innerText=tp1;  //Returns the text content of Grade Points


document.getElementById("t").innerText=total; //Returns the text content of Total
document.getElementById("tcr").innerText=totalcredits; //Returns the text content of Total Credits
document.getElementById("tpo").innerText=totalpoints.toFixed(2); //Returns the text content of Total Grade Points

document.getElementById("cgpa").innerText="GPA = " + (totalpoints/totalcredits).toFixed(2); //Returns the text content of calculated GPA


}

function refreshElement(){
	course=[];
    mark =[];
    chour=[];
    tpoint=[];
    displayCourses();
    
}



function elementObj(id){
	return (document.getElementById(id));
}

 function addRecord(){ //After user clicks "Enter Course"
	if (validation() == true)
	{
	c = document.getElementById("cr").value; //Gets value for Couse Name
	m = document.getElementById("mr").value; //Gets value for Grade
	cc = document.getElementById("ch").value; //Gets value for Credits
	course[course.length] = c; //Displays Couse Name
	mark[mark.length] = m; //Displays value for Grade
	chour[chour.length]= cc; //Displays value for Credits
    }
    displayCourses();
}

function M2G(m){
    
    g = ""
    point = 0
    if(m<60){ //Display Grade as 'F' if grade less than 60
        g ="F";
        point=0;
		}
    else
    if(m<=63){  //Display Grade as 'F' if grade <= 63
        g="D";
        point=1;
		}
    else
    if(m<=66){ //Display Grade as 'F' if grade <= 66
        g="D+";
        point=1.3;
		}
    else
    if(m<=69){ //Display Grade as 'F' if grade <= 69
		g="C-";
    point=1.7;
	}
    else
    if(m<=73){ //Display Grade as 'F' if grade <= 73
        g="C"; 
        point=2;
		}
    else
    if(m<=76){ //Display Grade as 'F' if grade <= 76
        g="C+";
        point=2.3;
		}
    else
    if(m<=79){ //Display Grade as 'F' if grade <= 79
        g="B-";
        point=2.7;
		}
    else
    if(m<=83) { //Display Grade as 'F' if grade <= 83
        g="B";
        point=3;}
    else
    if(m<=86){ //Display Grade as 'F' if grade <= 86
        g="B+"; 
        point=3.3;
		}
    else
    if(m<=89) { //Display Grade as 'F' if grade <= 89
        g="A-";
        point=3.7;
		}
    else
    if(m<=100){ //Display Grade as 'A' if grade <= 100
        g="A";
        point=4;
		}
    
	gp=[];
	gp[0]=g;
	gp[1]=point;
	
    return gp;
}

function validation(){ //Check for Errors
	studentmark = parseInt(document.getElementById("mr").value);
	coursecredit = parseInt(document.getElementById("ch").value);
    if(studentmark<100 && studentmark>=0 && coursecredit>0)
	{
    document.getElementById("error").innerText= "";
	return (true);
    }
	else
	document.getElementById("error").innerText= "Please make sure you enter marks between 0 and 100 and credit hours 0 or above";
}