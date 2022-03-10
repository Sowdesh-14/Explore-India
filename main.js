

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
var blur=document.getElementById("blur")
var category;
const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    category=document.getElementById("martialarts").textContent
    optionsContainer.classList.remove("active");
    switch(category) {
      case "Indian Monuments":
      monument();
      carosalmonument();
        break;
      case "Sancturaies" :
        Sancturaies();
        carosalsantuaries()
        break;
        case "Festivals" :
        
        festivals()
        carosalfestivals()
          break;
          case "National Leaders" :
            NationalLeaders();
            carosalleader()
            break;
            
              case "Dance Forms" :
           danceforms()
           carosaldance()
              break;
              case "Martial Arts" :
             martialarts()
     carosalmaritalarts()

              break;
      default:
        alert("helo")
    
    }
  });
});
function   carosalmonument(){
  document.getElementById("ccard1").src="./img/monument1.jpg"
  document.getElementById("ccard2").src="./img/monument2.jpg"
  document.getElementById("ccard3").src="./img/monument3.jpg"
  document.getElementById("ccard4").src="./img/monument4.jpg"
  document.getElementById("ccard5").src="./img/monument5.jpg"
  document.getElementById("ccard6").src="./img/monument6.jpg"
  document.getElementById("ccard7").src="./img/monument7.jpg"
  document.getElementById("ccard8").src="./img/monument8.jpg"
}
function   carosaldance(){
  document.getElementById("ccard1").src="./img/dance1.jpg"
  document.getElementById("ccard2").src="./img/dance2.jpg"
  document.getElementById("ccard3").src="./img/dance3.jpg"
  document.getElementById("ccard4").src="./img/dance4.jpg"
  document.getElementById("ccard5").src="./img/dance5.jpg"
  document.getElementById("ccard6").src="./img/dance6.jpg"
  document.getElementById("ccard7").src="./img/dance7.jpg"
  document.getElementById("ccard8").src="./img/dance8.jpg"
}
function   carosalleader(){
  document.getElementById("ccard1").src="./img/leader1.jpg"
  document.getElementById("ccard2").src="./img/leader2.jpg"
  document.getElementById("ccard3").src="./img/leader3.jpg"
  document.getElementById("ccard4").src="./img/leader4.jpg"
  document.getElementById("ccard5").src="./img/leader5.jpg"
  document.getElementById("ccard6").src="./img/leader6.jpg"
  document.getElementById("ccard7").src="./img/leader7.jpg"
  document.getElementById("ccard8").src="./img/leader8.jpg"
}
function   carosalmaritalarts(){
  document.getElementById("ccard1").src="./img/martialarts1.jpg"
  document.getElementById("ccard2").src="./img/martialarts2.jpg"
  document.getElementById("ccard3").src="./img/martialarts3.jpg"
  document.getElementById("ccard4").src="./img/martialarts4.jpg"
  document.getElementById("ccard5").src="./img/martialarts5.jpg"
  document.getElementById("ccard6").src="./img/martialarts6.jpg"
  document.getElementById("ccard7").src="./img/martialarts7.jpg"
  document.getElementById("ccard8").src="./img/martialarts8.jpg"
}
function   carosalsantuaries(){
  document.getElementById("ccard1").src="./img/Sancturaies1.jpg"
  document.getElementById("ccard2").src="./img/Sancturaies2.jpg"
  document.getElementById("ccard3").src="./img/Sancturaies3.jpg"
  document.getElementById("ccard4").src="./img/Sancturaies4.jpg"
  document.getElementById("ccard5").src="./img/Sancturaies5.jpg"
  document.getElementById("ccard6").src="./img/Sancturaies6.jpg"
  document.getElementById("ccard7").src="./img/Sancturaies7.jpg"
  document.getElementById("ccard8").src="./img/Sancturaies8.jpg"
}
function   carosalfestivals(){
  document.getElementById("ccard1").src="./img/festival1.jpg"
  document.getElementById("ccard2").src="./img/festival2.jpg"
  document.getElementById("ccard3").src="./img/festival3.jpg"
  document.getElementById("ccard4").src="./img/festival4.jpg"
  document.getElementById("ccard5").src="./img/festival5.jpg"
  document.getElementById("ccard6").src="./img/festival6.jpg"
  document.getElementById("ccard7").src="./img/festival7.jpg"
  document.getElementById("ccard8").src="./img/festival8.jpg"
}
function festivals(){
   //Card-1
   document.getElementById("card1title").innerHTML = "Deepavali";
   document.getElementById("card1text").innerHTML = "Deepavali is the most spectacular festival celebrated in the Indian subcontinent. It is Hindu festival of lights that is celebrated across the length and breadth of the country.";
   document.getElementById("card1image").src="./img/festival1.jpg"
   //Card-2
   document.getElementById("card2title").innerHTML = "Onam ";
   document.getElementById("card2text").innerHTML = "The biggest festival of Kerala, Onam marks the onset of the harvest season. It is also celebrated to remember King Mahabali, whose spirit is believed to visit his people during this time";
   document.getElementById("card2image").src="./img/festival2.jpg"
   //Card-3
   document.getElementById("card3title").innerHTML = "Dussehra";
   document.getElementById("card3text").innerHTML = " Dussehra marks the end of Navratri as well as Durga Puja. A prominent name in the Indian festival calendar, it is celebrated to commerate the victory of Lord Rama over Ravana <br> ";
   document.getElementById("card3image").src="./img/festival3.jpg"
   //Card-4
   document.getElementById("card4title").innerHTML = "Holi";
   document.getElementById("card4text").innerHTML = "Holi is another noteworthy name in the list of festivals of India. Considered the festival of love and the festival of colors, it signifies the arrival of spring and the victory of good over evil";
   document.getElementById("card4image").src="./img/festival4.jpg"
   //Card-5
   document.getElementById("card5title").innerHTML = "Rakshabandhan";
   document.getElementById("card5text").innerHTML = "Rakshabandhan or Rakhi cherishes the bond between a brother and a sister. On this popular Hindu festival, sisters tie an amulet or talisman on the wrists of their brothers.";
   document.getElementById("card5image").src="./img/festival5.jpg"
   //Card-6
   document.getElementById("card6title").innerHTML = "Easter ";
   document.getElementById("card6text").innerHTML = "Celebrated  with much fervor and joy by the Christian community of India, Easter marks the resurrection of Jesus Christ from the dead. It is celebrated across India ";
   document.getElementById("card6image").src="./img/festival6.jpg"
   //Card-7
   document.getElementById("card7title").innerHTML = " Saga Dawa";
   document.getElementById("card7text").innerHTML = "One of the major festivals of Sikkim, Saga Dawa is celebrated by the Buddhist population of the state . This  commemorates the enlightenment of  Buddha";
   document.getElementById("card7image").src="./img/festival7.jpg"
   //Card-8
   document.getElementById("card8title").innerHTML = "Hemis";
   document.getElementById("card8text").innerHTML = "Hemis is a religious festival from Ladakh, celebrated at Hemis Monastery in honor of Lord Padmasambhava, a spiritual leader and founder of Tibet Tantric Buddhism.";
   document.getElementById("card8image").src="./img/festival8.jpg"
   }

function NationalLeaders(){
  //Card-1
  document.getElementById("card1title").innerHTML = "SardarVallabhbhai Patel";
  document.getElementById("card1text").innerHTML = "Vallabhbhai  was born in 1875 and earned the title ‘Sardar’ after his heroic contribution in BardoliSatyagrah";
  document.getElementById("card1image").src="./img/leader1.jpg"
  //Card-2
  document.getElementById("card2title").innerHTML = "Mahatma Gandhi";
  document.getElementById("card2text").innerHTML = "Gandhi was born in 2nd October, 1869 and was entitled “Father of Nation”because of his great deed";
  document.getElementById("card2image").src="./img/leader2.jpg"
  //Card-3
  document.getElementById("card3title").innerHTML = "Nana Sahib";
  document.getElementById("card3text").innerHTML = " Nana Sahib was a significant contributor and an activist in thr year 1857 uprising in which he led a group of ardent rebellions. ";
  document.getElementById("card3image").src="./img/leader3.jpg"
  //Card-4
  document.getElementById("card4title").innerHTML = "Subhash Chandra Bose";
  document.getElementById("card4text").innerHTML = "Subhas Chandra Bose was born in 1897 in Orissa. The Jallianwala bagh Massacre  shook him and made him return to India from England";
  document.getElementById("card4image").src="./img/leader4.jpg"
  //Card-5
  document.getElementById("card5title").innerHTML = "Rani Lakshmi Bai";
  document.getElementById("card5text").innerHTML = "Rani Lakhsmi Bai, the Queen of Jhansi, was born in 1828. She was a key member of India’s fierce uprising of independence in 1857 ";
  document.getElementById("card5image").src="./img/leader5.jpg"
  //Card-6
  document.getElementById("card6title").innerHTML = "Bhagat Singh";
  document.getElementById("card6text").innerHTML = "Bhagat Singh was quite a famous revolutionary and also  Freedom Fighters of India as he became proud martyr for his country. ";
  document.getElementById("card6image").src="./img/leader6.jpg"
  //Card-7
  document.getElementById("card7title").innerHTML = " Ashfaqulla Khan";
  document.getElementById("card7text").innerHTML = "Born in 1900, Ashfaqulla Khan was another young  revolutionary fire who also sacrificed his life for  India like many other martyrs.";
  document.getElementById("card7image").src="./img/leader7.jpg"
  //Card-8
  document.getElementById("card8title").innerHTML = " Mangal Pandey";
  document.getElementById("card8text").innerHTML = "Born in 1827, hee was among the first rebels to inspire young Indian soldiers to instigate the great rebellion of 1857.";
  document.getElementById("card8image").src="./img/leader8.jpg"
  }
function Sancturaies(){
//Card-1
document.getElementById("card1title").innerHTML = "Corbett National Park";
document.getElementById("card1text").innerHTML = "It was established in 1936 to protect the imposing Bengal Tigers. Located at the foothills of the Himalayan range of Uttarakhand.";
document.getElementById("card1image").src="./img/Sancturaies1.jpg"
//Card-2
document.getElementById("card2title").innerHTML = "Ranthambore National Park";
document.getElementById("card2text").innerHTML = "The majestic Tigers are the pride of this national park. Surrounded by the Banas and Chambal River";
document.getElementById("card2image").src="./img/Sancturaies2.jpg"
//Card-3
document.getElementById("card3title").innerHTML = "Bandipur National Park";
document.getElementById("card3text").innerHTML = " It is the most popular of all the national parks in South India. It is a natural home to Elephants and several other endangered species. ";
document.getElementById("card3image").src="./img/Sancturaies3.jpg"
//Card-4
document.getElementById("card4title").innerHTML = "Nagarhole National Park ";
document.getElementById("card4text").innerHTML = "Nagarhole National Park is located in Mysore district of Karnataka and is a popular destination for Tiger spotting.";
document.getElementById("card4image").src="./img/Sancturaies4.jpg"
//Card-5
document.getElementById("card5title").innerHTML = "Kaziranga National Park";
document.getElementById("card5text").innerHTML = "Kaziranga National Park is the only natural habitat of the endangered One-Horned Rhinos in India as well as in the world. ";
document.getElementById("card5image").src="./img/Sancturaies5.jpg"
//Card-6
document.getElementById("card6title").innerHTML = "Gir National Park";
document.getElementById("card6text").innerHTML = "The Gir National Park  of Gujarat are the only wildlife sanctuaries in India that have Asiatic Lions. October-June is the ideal time to visitand watch these majestic beasts .";
document.getElementById("card6image").src="./img/Sancturaies6.jpg"
//Card-7
document.getElementById("card7title").innerHTML = " Panna National Park,";
document.getElementById("card7text").innerHTML = "Panna National Park is one of the best maintained and completly operational National Parks of India. Declared as a Tiger Reserve Forest of India in 1994.";
document.getElementById("card7image").src="./img/Sancturaies7.jpg"
//Card-8
document.getElementById("card8title").innerHTML = " Great Himalayan National Park";
document.getElementById("card8text").innerHTML = "The Great Himalayan National Park lies among the lush coniferous forests of and the snow-capped mountain , Himachal Pradesh";
document.getElementById("card8image").src="./img/Sancturaies8.jpg"
}
function martialarts(){
  //Card-1
  document.getElementById("card1title").innerHTML = "Kalaripayattu";
  document.getElementById("card1text").innerHTML = "Often known as the ‘Mother Of All Martial Arts’, this 3000-year old art form originating from Kerala, draws inspiration from the raw power. ";
  document.getElementById("card1image").src="./img/martialarts1.jpg"
  //Card-2
 document.getElementById("card2title").innerHTML = "Thang Ta";
 document.getElementById("card2text").innerHTML = "Thang-Ta, which literally means ‘sword and spear’, is one aspect of Huyen Langlon, a traditional martial art from Manipur";
 document.getElementById("card2image").src="./img/martialarts2.jpg"
//Card-3
document.getElementById("card3title").innerHTML = "Mardaani Khel";
document.getElementById("card3text").innerHTML = "Originally from Maharashtra, Mardani Khel is a weapon-based martial art form. It owes its development to the geography of the state ";
document.getElementById("card3image").src="./img/martialarts3.jpg"
//Card-4
document.getElementById("card4title").innerHTML = "Gatka ";
document.getElementById("card4text").innerHTML = "Originating from the state of Punjab, Gatka is believed to be a battle technique created by Sikh warriors during the  period of great Sikh Gurus";
document.getElementById("card4image").src="./img/martialarts4.jpg"
//Card-5
document.getElementById("card5title").innerHTML = "Sqay";
document.getElementById("card5text").innerHTML = "Sqay is an ancient martial art traditionally practiced by the people of Kashmir. It uses  a curved single-edge sword paired with a shield,";
document.getElementById("card5image").src="./img/martialarts5.jpg"
//Card-6
document.getElementById("card6title").innerHTML = "Kushti";
document.getElementById("card6text").innerHTML = "A form of traditional wrestling, Kushti developed during the Mughal Empire by combining the native sport of malla-yuddha ";
document.getElementById("card6image").src="./img/martialarts6.jpg"
//Card-7
document.getElementById("card7title").innerHTML = "Lathi";
document.getElementById("card7text").innerHTML = "When moved back and forth like a sword and aimed at someone, it cuts through the air, lands with a thwacking sound";
document.getElementById("card7image").src="./img/martialarts7.jpg"
//Card-8
document.getElementById("card8title").innerHTML = " Silambam";
document.getElementById("card8text").innerHTML = "Closely linked to Kerala’s Kalaripayattu, Silambam is an ancient stick-martial art of Tamil Nadu. According to Sangam-era literature";
document.getElementById("card8image").src="./img/martialarts8.jpg"
}
 function monument(){
   //Card-1
   document.getElementById("card1title").innerHTML = "  Taj Mahal";
   document.getElementById("card1text").innerHTML = "Built by the Mughal Emperor Shah Jahan, this intricately carved  17th-century . ";
   document.getElementById("card1image").src="./img/monument1.jpg"
   //Card-2
  document.getElementById("card2title").innerHTML = "Qutub Minar";
  document.getElementById("card2text").innerHTML = "Qutub Minar, also known as victory tower, is one of the tallest monuments in Asia. ";
  document.getElementById("card2image").src="./img/monument2.jpg"
 //Card-3
 document.getElementById("card3title").innerHTML = "Golden Temple";
 document.getElementById("card3text").innerHTML = "Also known as Sri Harmandir Sahib, this beautiful religious place of the Sikh community. ";
 document.getElementById("card3image").src="./img/monument3.jpg"
 //Card-4
 document.getElementById("card4title").innerHTML = "Sun Temple";
 document.getElementById("card4text").innerHTML = "Dedicated to the Sun,the temple stands  uniquely. This  was built in 13th century";
 document.getElementById("card4image").src="./img/monument4.jpg"
 //Card-5
 document.getElementById("card5title").innerHTML = "Brihadishwara Temple";
 document.getElementById("card5text").innerHTML = "This ancient  temple in Tamil Nadu is dedicated to Lord Shiva. This depicts Dravidian architecture, ";
 document.getElementById("card5image").src="./img/monument5.jpg"
 //Card-6
 document.getElementById("card6title").innerHTML = "Mysore Palace";
 document.getElementById("card6text").innerHTML = "This popular palace steals and exhibits the show with its grand Indo-Saracenic architecture.  ";
 document.getElementById("card6image").src="./img/monument6.jpg"
 //Card-7
 document.getElementById("card7title").innerHTML = " Victoria Memorial";
 document.getElementById("card7text").innerHTML = "Constructed in the honour of Queen Victoria, this iconic structure is the most popular attraction in Kolkata.";
 document.getElementById("card7image").src="./img/monument7.jpg"
 //Card-8
 document.getElementById("card8title").innerHTML = " Hawa Mahal";
 document.getElementById("card8text").innerHTML = "A prominent landmark in Jaipur, it is an 18th century 5-storey building overlooking the busy streets of the city";
 document.getElementById("card8image").src="./img/monument8.jpg"
}
function danceforms(){
  //Card-1
  document.getElementById("card1title").innerHTML = "Bharatanatyam";
  document.getElementById("card1text").innerHTML = "Performed on the celestial tunes of the Carnatic music, this comes from the state of Tamil Nadu in South.";
  document.getElementById("card1image").src="./img/dance1.jpg"
  //Card-2
 document.getElementById("card2title").innerHTML = "Kathakali";
 document.getElementById("card2text").innerHTML = " Coming from the northern part of the country from the state of Uttar Pradesh,  'Katha' which means story in Hindi ";
 document.getElementById("card2image").src="./img/dance2.jpg"
//Card-3
document.getElementById("card3title").innerHTML = "Kathak";
document.getElementById("card3text").innerHTML = "     Kathakali is another traditional dance form of India which relates to the storytelling.";
document.getElementById("card3image").src="./img/dance3.jpg"
//Card-4
document.getElementById("card4title").innerHTML = "Manipuri";
document.getElementById("card4text").innerHTML = "As you stroll towards the North-east India which is brimming with the rich tradition and their culture";
document.getElementById("card4image").src="./img/dance4.jpg"
//Card-5
document.getElementById("card5title").innerHTML = "Kuchipudi";
document.getElementById("card5text").innerHTML = "Belonging to the Andhra Pradesh, Kuchipudi is probably the toughest form of classical dance in India ";
document.getElementById("card5image").src="./img/dance5.jpg"
//Card-6
document.getElementById("card6title").innerHTML = "Odissi";
document.getElementById("card6text").innerHTML = "Odissi dance form comes from Odisha in the eastern part of India, it is derived from the Hindu temples in Odisha  ";
document.getElementById("card6image").src="./img/dance6.jpg"
//Card-7
document.getElementById("card7title").innerHTML = " Bhangra/Gidda";
document.getElementById("card7text").innerHTML = "    Belonging to Punjab, Bhangra is a heart-pumping dance adorned with the loud beats of dhol";
document.getElementById("card7image").src="./img/dance7.jpg"
//Card-8
document.getElementById("card8title").innerHTML = "Garba";
document.getElementById("card8text").innerHTML = "  Garba comes from Gujarat which is a traditional dance form dedicated to Goddess Durga.";
document.getElementById("card8image").src="./img/dance8.jpg"
}
function toggleclose(){

    var popup1=document.getElementById("popup1")
    popup1.classList.toggle('active')
    blur.classList.toggle('active');
 
}
function toggle(num){
    category=document.getElementById("martialarts").textContent

  if(num==1){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Taj Mahal";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument1.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Corbett National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies1.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Deepavali";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival1.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "SardarVallabhbhai Patel";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader1.jpg"

            break;
            
      case "Dance Forms":
           
    document.getElementById("cardtitle").innerHTML = "Bharatanatyam";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance1.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Kalaripayattu";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts1.jpg"

              break;
      default:
              
      document.getElementById("cardtitle ").innerHTML = "Bharatanatyam";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance1.jpg"

 
 
    }


  }



else if(num==2){
    
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Qutub Minar";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument2.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Ranthambore National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies2.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Onam";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival2.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Nana Sahib";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader2.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Kathakali";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance2.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Thang Ta";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts2.jpg"

              break;
      default:
      
        document.getElementById(" cardtitle").innerHTML = "Kathakali";
        document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
        document.getElementById("cardimage").src="./img/dance2.jpg"
    
    }
  }else if(num==3){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Golden Temple";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument3.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Bandipur National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies3.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Dussehra";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival3.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Nana Sahib";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader3.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Kathakali";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance3.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Mardaani Khel";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts3.jpg"

              break;
      default:
      document.getElementById("cardtitle").innerHTML = "Kathak";
    document.getElementById("cardtext").innerHTML = "Kathakali is another traditional dance form of India which relates to the storytelling. Kathakali translates to the 'storyteller' in the country's language. Coming from the Southern region of the country from Kerala, Kathakali is one of the most renowned and religious dances forms of India. It originates from the tales of Ramayana and Shiva stories";
    document.getElementById("cardimage").src="./img/dance3.jpg"
    }
   
  }
  else if(num==4){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Sun Temple";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument4.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Nagarhole  National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies4.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Holi";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival4.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Subhash Chandra Bose";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader4.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Manipuri";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance4.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Gatka";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts4.jpg"

              break;
      default:
           document.getElementById("cardtitle").innerHTML = "Manipuri";
    document.getElementById("cardtext").innerHTML = "As you stroll towards the North-east India which is brimming with the rich tradition and their unique culture, Manipuri comes as an important symbol to represent the state of Manipur from the region. This dance form is performed to narrate the romantic relationship between the Hindu gods Radha and Krishna, which is famously known as RaasLeela. ";
    document.getElementById("cardimage").src="./img/dance4.jpg"
  }
    }

  else if(num==5){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Brihadishwara Temple";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument5.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Kaziranga  National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies5.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Rakshabandhan";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival5.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Rani Lakshmi Bai";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader5.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Kuchipudi";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance5.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Sqay";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts5.jpg"

              break;
      default:
        document.getElementById("cardtitle").innerHTML = "Kuchipudi";
        document.getElementById("cardtext").innerHTML = "Belonging to the Andhra Pradesh, Kuchipudi is probably the toughest form of classical dance in India. Kuchipudi is not just considered as the dance but a whole religious procedure dedicated to God which includes certain rituals such as sprinkling the holy water, burning the incense sticks and praying to God. Kuchipudi includes both singing and dancing by the performer which is why it requires both the skill and much more dedication than any other art forms in India.";
        document.getElementById("cardimage").src="./img/dance5.jpg"
    
    }
    
  }
  else if(num==6){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Mysore Palace";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument6.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Gir  National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies6.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Easter";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival6.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Bhagat Singh";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader6.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Odissi";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance6.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Kushti";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts6.jpg"

              break;
      default:
        document.getElementById("cardtitle").innerHTML = "Odissi";
        document.getElementById("cardtext").innerHTML = "Odissi dance form comes from the state of Odisha in the eastern part of India. The traditional dance has been derived from the Hindu temples in Odisha. Most of the gestures and movements (Mudras) are inspired by the sculptors and idols belonging to the ancient temples of India. The dance is performed as a way to express the mythological tales of Hindu gods";
        document.getElementById("cardimage").src="./img/dance6.jpg"
    
    }

  }
  else if(num==7){
    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Victoria Memorial";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument7.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Panna   National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies7.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Saga Dawa";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival7.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Ashfaqulla Khan";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader7.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Bhangra/Gidda";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance7.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Lathi";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts7.jpg"

              break;
      default:
      document.getElementById("cardtitle").innerHTML = "Bhangra/Gidda";
    document.getElementById("cardtext").innerHTML = "Belonging to Punjab, Bhangra is a heart-pumping dance adorned with the loud beats of dhol( traditional Indian instrument). It is very prevalent in traditional Punjabi festivals.";
    document.getElementById("cardimage").src="./img/dance7.jpg"
  }

  }else{

    switch(category) {
      case "Indian Monuments":
      
    document.getElementById("cardtitle").innerHTML = "Hawa Mahal";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/monument8.jpg"

        break;
      case "Sancturaies" :
      
    document.getElementById("cardtitle").innerHTML = "Great Himalayan  National Park";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/Sancturaies8.jpg"

        break;
        case "Festivals" :
        
    document.getElementById("cardtitle").innerHTML = "Hemis";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/festival8.jpg"

 
          break;
          case "National Leaders" :
      
    document.getElementById("cardtitle").innerHTML = "Mangal Pandey";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/leader8.jpg"

            break;
            
              case "Dance Forms" :
           
    document.getElementById("cardtitle").innerHTML = "Garba";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/dance8.jpg"

              break;
              case "Martial Arts" :
     
    document.getElementById("cardtitle").innerHTML = "Silambam";
    document.getElementById("cardtext").innerHTML = "Performed on the celestial tunes of the Carnatic music, Bharatnatyam comes from the state of Tamil Nadu in South. The origins of Bharatnatyam can be traced back to 1000 BC, and it originates from the ancient temples of Tamil Nadu performed by the women of the classical period. The dance form is known for its beautiful body movements and gestures which are called Mudras in the traditional language. It focuses on the hand gestures, leg movement and the facial expressions of the dancer.";
    document.getElementById("cardimage").src="./img/martialarts8.jpg"

              break;
      default:
    document.getElementById("cardtitle").innerHTML = "Garba";
    document.getElementById("cardtext").innerHTML = "Garba comes from Gujarat which is a traditional dance form dedicated to Goddess Durga. It is performed in a couple on the typical Gujarati music, and the sticks are used to perform this art form.";
    document.getElementById("cardimage").src="./img/dance8.jpg"
  }
 
  }

  var popup1=document.getElementById("popup1")
  blur.classList.toggle('active');
  popup1.classList.toggle('active')
}

