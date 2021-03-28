course=[];
mark =[];
chour=[];
tpoint=[];

function displayCourses()
{

total = 0;
totalcredits = 0;
totalpoints = 0;

cn1 = "";
ch1 = "";
cm1 = "";
gr1 = "";
gp1 = "";
tp1 = "";

for (i=0; i<course.length; i++)
 {


tpoint[i]=(chour[i] * M2G(mark[i])[1]).toFixed(2);

cn1 = cn1 + course[i] + "\n";
ch1 = ch1 + chour[i] + "\n";
cm1 = cm1 + mark[i] + "\n";
gr1 = gr1 + M2G(mark[i])[0] + "\n";
gp1 = gp1 + M2G(mark[i])[1] + "\n";
tp1 = tp1 + tpoint[i] + "\n";
 


total = total + parseInt(mark[i]);
totalcredits = totalcredits + parseInt(chour[i]);
totalpoints = totalpoints + parseFloat(tpoint[i]);

 }
 
 
document.getElementById("cn1").innerText=cn1;
document.getElementById("ch1").innerText=ch1;
document.getElementById("cm1").innerText=cm1;
document.getElementById("gr1").innerText=gr1;
document.getElementById("gp1").innerText=gp1;
document.getElementById("tp1").innerText=tp1;


document.getElementById("t").innerText=total;
document.getElementById("tcr").innerText=totalcredits;
document.getElementById("tpo").innerText=totalpoints.toFixed(2);

document.getElementById("cgpa").innerText="GPA = " + (totalpoints/totalcredits).toFixed(2);


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

 function addRecord(){
	if (validation() == true)
	{
	c = document.getElementById("cr").value;
	m = document.getElementById("mr").value;
	cc = document.getElementById("ch").value;
	course[course.length] = c;
	mark[mark.length] = m;
	chour[chour.length]= cc;
    }
    displayCourses();
}

function M2G(m){
    
    g = ""
    point = 0
    if(m<60){ 
        g ="F";
        point=0;
		}
    else
    if(m<=63){ 
        g="D";
        point=1;
		}
    else
    if(m<=66){ 
        g="D+";
        point=1.3;
		}
    else
    if(m<=69){ 
		g="C-";
    point=1.7;
	}
    else
    if(m<=73){ 
        g="C"; 
        point=2;
		}
    else
    if(m<=76){ 
        g="C+";
        point=2.3;
		}
    else
    if(m<=79){ 
        g="B-";
        point=2.7;
		}
    else
    if(m<=83) { 
        g="B";
        point=3;}
    else
    if(m<=86){ 
        g="B+"; 
        point=3.3;
		}
    else
    if(m<=89) { 
        g="A-";
        point=3.7;
		}
    else
    if(m<=100){
        g="A";
        point=4;
		}
    
	gp=[];
	gp[0]=g;
	gp[1]=point;
	
    return gp;
}

function validation(){
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