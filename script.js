let btn=document.querySelector("#btn")               // to access the button
let content=document.querySelector("#content")       // to access the content
let voice= document.querySelector("#voice")          // to access the gif
function speak(text){                                // speak is a function in which command is passed as text variable form, whatever text we pass, Shifra will speak that.
    let text_speak=new SpeechSynthesisUtterance(text)    // create the object of speechSynthesis 
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"                          //to change the male voice into female voice
    window.speechSynthesis.speak(text_speak)         // to speak the assistant,  speechSynthesis is a class in java script 
}

function wishMe(){
    let day= new Date()                              
    let hours=day.getHours()
                                      // to access the getHours function of Date
    if(hours >=0 &&  hours<12){
        speak("Good Morning");
    }
    else if(hours >=12 && hours < 16){
        speak("Good Afternoon");
    }
    else if(hours >=16 && hours <21){
      speak("Good Evening");
    }
    else
    {
        speak("Good Night");
    }
}
window.addEventListener('load',()=>{ 
    console.log('Page loaded!');                 //wish the user when web page is open
    wishMe()
     
}) 

let speechRecognition= window.SpeechRecognition ||  window.webkitSpeechRecognition
let recognition = new speechRecognition()           // create the object
recognition.onresult=(event)=>{                    //when someone start to speak
    
    // console.log(event) 
    let currentIndex = event.resultIndex          // to access the resultIndex event.resultIndex is used and store into a variable     
     let transcript= event.results[currentIndex][0].transcript          // to access the transcript which is on index[0] and store into a variable
     content.innerText=transcript                     // to write the transcript on button 
      takeCommand(transcript.toLowerCase())          // transcript is passed into takeCommand, toLowerCase() change the transcript into lower
}                                                    //case so that shifra will listen the commands always in lower case 


btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"                        // to hide the button on click the button
    voice.style.display= "block"                    // to show the gif on click the button                    
})

function takeCommand(message){                    //take transcript as message
    btn.style.display="flex"                      // to show the button again after take command by Shifra
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hye") || message.includes("hi")){
        speak("hello, what can i help you")
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("i am virtual assistant, created by Sakshi")
    
    }
    else if(message.includes("how are you")){
        speak("i am good")
    }
    else if(message.includes("open youtube") || message.includes("opening youtube")){
        speak("opening you tube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")  || message.includes("opening google")){
     speak("opening google")
     window.open("https://www.google.com/")
    }
    else if(message.includes("open instagram")  || message.includes("opening instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open facebook")  || message.includes("opening facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open calculator") || message.includes("opening calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
       let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"}) 
       speak(time)
    }
    else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"}) 
        speak(date)
     }
     
    else{
        let final_text="this is what i found regarding" +  message.trim().replace(/shifra|shipra|zebra|sihfra|saffron|safron|safra|cifra/g, "");
     
        speak(final_text )
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}` , "_blank")
    }
}    
