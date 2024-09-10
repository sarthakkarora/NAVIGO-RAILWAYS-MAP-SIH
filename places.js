const placeDetails =
{
    "Ticket Counter":{desc:"Yatra ki shuruaat yahi se—Apne ticket le aur safar ke liye taiyaar ho jao!",img:"./Res/TicketCounter.jpg",fn:ticketcounter},
    "Waiting Lounge":{desc:"Aram se baithein, chai aur pakode ke saath platform ka nazara ka maza lein!" ,img:"./Res/WaitingRoom.jpg",fn:waitinglounge},
    "Breast Feeding Room":{desc:"Chhote baccho ke liye aaramdayak aur suvidha janak jagah—feeding aur changing ke liye yahan aayein!",img:"./Res/FeedingRoom.jpg",fn:feedingroom},
    "Cafeteria":{desc:"Swadisht khane ka adda—Samosa, chai, aur masaledar khana sab yahan milega!",img:"./Res/Cafeteria.jpg",fn:cafeteria},
    "Control Room":{desc:"Station ka dil—yahaan se har gaadi aur suraksha par nazar rakhi jati hai.",img:"./Res/ControlRoom.jpg",fn:controlroom },
    "Information Desk":{desc:"Kisi bhi madad ke liye yahan aayiye—train ki jankari aur yatra ke sujhav milega!",img:"./Res/InformationDesk.jpg",fn:informationdesk },
    "Car/Taxi Parking":{desc:"Teez aur aasan suvidha—apni gaadi park karein ya auto aur taxi pakdein yahan se!",img:"./Res/CarParking.jpg",fn:carparking },
    "Washroom":{desc:  "Saaf aur suvidha janak washrooms—yahan aake apne aaram aur rahat ka dhyan rakhein!" ,img:"./Res/Washroom.jpg",fn:washroom}
};

const moreinfotitle = document.querySelector("#moreinfotitle h2");
const moreinfotext =document.getElementById("moreinfotext");
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");

function ticketcounter(){
    moreinfotitle.innerHTML="Ticket Counter";
    images[0].src="./Res/Carousel/TicketCounter.jpg";
    moreinfotext.innerHTML="Yatra ki shuruaat yahi se—Apne ticket le aur safar ke liye taiyaar ho jao!";
    showMore();
}

function waitinglounge(){
    moreinfotitle.innerHTML="Waiting Lounge";
    images[0].src="./Res/Carousel/WaitingRoom.jpg";
    moreinfotext.innerHTML="Aram se baithein, chai aur pakode ke saath platform ka nazara ka maza lein!";
    showMore();
}

function feedingroom(){
    moreinfotitle.innerHTML="Breast Feeding Room";
    images[0].src="./Res/Carousel/FeedingRoom.jpg";
    moreinfotext.innerHTML="Chhote baccho ke liye aaramdayak aur suvidha janak jagah—feeding aur changing ke liye yahan aayein!";
    showMore();
}

function cafeteria(){
    moreinfotitle.innerHTML="Cafeteria";
    images[0].src="./Res/Carousel/Cafeteria.jpg";
    moreinfotext.innerHTML="Swadisht khane ka adda—Samosa, chai, aur masaledar khana sab yahan milega!";
    showMore();
}

function controlroom(){
    moreinfotitle.innerHTML="Control Room";
    images[0].src="./Res/Carousel/ControlRoom.jpg";
    moreinfotext.innerHTML="Station ka dil—yahaan se har gaadi aur suraksha par nazar rakhi jati hai.";
    showMore();
}

function informationdesk(){
    moreinfotitle.innerHTML="Information Desk";
    images[0].src="./Res/Carousel/InformationDesk.jpg";
    moreinfotext.innerHTML="Kisi bhi madad ke liye yahan aayiye—train ki jankari aur yatra ke sujhav milega!" ;
    showMore();
}

function carparking(){
    moreinfotitle.innerHTML="Car Parking";
    images[0].src="./Res/Carousel/CarParking.jpg";
    moreinfotext.innerHTML="Teez aur aasan suvidha—apni gaadi park karein ya auto aur taxi pakdein yahan se!" ;
    showMore();
}

function washroom(){
    moreinfotitle.innerHTML="Washroom";
    images[0].src="./Res/Carousel/Washroom.jpg";
    moreinfotext.innerHTML="Saaf aur suvidha janak washrooms—yahan aake apne aaram aur rahat ka dhyan rakhein!" ;
    showMore();
}