

function booking(btn){
		
	
	if(btn == "btn1"){
		document.getElementById("img1").src="../images/cancel.jfif";
		document.getElementById("para").innerHTML="<h3><b>Flight Delay</b></h3><br> My flight is delayed - am I entitled to money or other compensation from the airline?<ul><li>No.  There are no federal laws requiring airlines to provide passengers with money or other compensation when their flights are delayed.  Each airline has its own policies about what it will do for delayed passengers.  If your flight is experiencing a long delay, ask airline staff if they will pay for meals or a hotel room.  While some airlines offer these amenities to passengers, others do not provide any amenities to stranded passengers.</li></ul><br>How do I find out how long my flight will be delayed?<ul><li>Airlines are required to provide passengers with information about a change in the status of the flight if the flight is scheduled to depart within 7 days.  Airlines are required to give these status updates 30 minutes (or sooner) after the airline becomes aware of a status change. The flight status information must, at a minimum, be provided on the airline's website and via the airline's telephone reservation system.</li></ul>";
	
	}else if (btn =="btn2"){
		document.getElementById("img1").src="../images/lostbags.jfif";
		document.getElementById("para").innerHTML="What to do if Your lost the baggage?<br><ul><li>If your bags do not arrive on the carousel, try not to panic. Most so-called lost baggage really is not lost rather, it is delayed. And in most cases an airline can reunite you with your baggage within 24 hours.</li><li>When you realize that your bag is not going to show up on the carousel, go immediately to your airline is lost-baggage counter, which you will find in most big-airport baggage areas. In smaller airports, ask any airline employee where to go. Even if you have someplace you need to be, report missing baggage before you leave the airport. (Some airline contracts specify that you must file no later than four hours after arrival others say 24 hours.) When filing your claim, give the attendant a hotel or home address, as well as a phone number where you can be reached.</li></ul>";
		 
	}else if(btn == "btn3"){
		document.getElementById("img1").src="../images/customser.jfif";
		document.getElementById("para").innerHTML=" <h2><b>FAQs</b></h2><br>Read our frequently asked questions.<br><br><h3>Advantages</h3><ul><li>Account summary</li><li>Award travel</li><li>Upgrades</li><li>Miles</li></ul><br><br><h3>Need More Help? Contact Us<ul><li>Contact AIRWAYs customer support</li><li>Contact Technical Support</li></ul></h3>";
	
	
	
	}else if (btn == "btn5"){
		document.getElementById("img1").src="../images/medical.jpg";
		document.getElementById("para").innerHTML="Travelling can be a bit daunting if you have a medical condition or are pregnant but in most cases you don't need to do anything different. You may need to take some precautions and the information below will help you understand what you need to do.<br><br>For some medical conditions you need to get medical clearance before you can fly, for example:<ul><li>recent illness, hospitalisation, injury or surgery</li><li>existing unstable medical condition</li><li>need for additional oxygen or use of medical equipment on board</li><li>travelling for medical reasons or treatment</li></ul>";
		
	}else if(btn == "btn6"){
		document.getElementById("img1").src="../images/covid.jfif";
		document.getElementById("para").innerHTML="<ul><li>Maintain a distance of 6 feet (2 meters) between you and others as much as possible.</li><li>Avoid contact with anyone who is sick</li><li>Wear a cloth face mask.</li><li>Avoid touching your eyes, nose and mouth</li><li>Clean your hands often. It's especially important after going to the bathroom, before eating, and after coughing, sneezing or blowing your nose.</li></ul>";
	
	}else if (btn == "btn7"){
		document.getElementById("img1").src="../images/travel.jpg";
		document.getElementById("para").innerHTML="<h3 ><b>Travel News </b></h3><br><ol> <li>World's five largest hotels chain lost $25.6bn inmarket cap amid Coronavirus crisis</li><li>italy revealed as the most searched for country for post lock down holidays.</li><li>Airline CEOs to address major industry event.</li><li>Escape and rejuvenate:Instagram's most relaxing locations.</li><li>Contractless technologies gaining traction in travel and tourism industry,  says global-data</li></ol>";
	
	}else{
		alert("Invalid");
	}

}	