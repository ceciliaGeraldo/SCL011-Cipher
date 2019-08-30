    
    document.getElementById("btnComenzar").addEventListener("click", startApp);
    document.getElementById("btnCipher").addEventListener("click", messageToCode);
    document.getElementById("btnDecode").addEventListener("click", messageToDecode); 
    document.getElementById("btnClean").addEventListener("click", cleanContent);   
    document.getElementById("btnChooseCipher").addEventListener("click", goToCipher);
    document.getElementById("btnChooseUncipher").addEventListener("click", goToUnipher);
    document.getElementById("btnOptions").addEventListener("click", goToOptions);
    document.getElementById("btnHome").addEventListener("click", goToHome);
    document.getElementById("question").addEventListener("click", questionTip);
    
   
    function showContent(element){

        document.getElementById(element).style.display = 'block';
    }
    function hideContent(element){

        document.getElementById(element).style.display = 'none';
    }
    function questionTip(){

        showContent("tips");
    }
    function cleanContent(){
        document.getElementById("offset").value="";
        document.getElementById("offset2").value="";
        document.getElementById("textToCipher").value ="";
        document.getElementById("cipherToText").value="";
        document.getElementById("finalMessageC").value = "";

        hideContent("showingMessageC")
        hideContent("tips");
    }
    function goToOptions(){
        cleanContent();
        hideContent("pageWelcome");
        hideContent("cipherMayor");
        hideContent("uncipher");
        showContent("chooseCipherUncipher");
        hideContent("tips");
    }

    function goToHome(){

        cleanContent();
        hideContent("cipherMayor");
        hideContent("uncipher");
        hideContent("chooseCipherUncipher");
        showContent("pageWelcome");
        showContent("footer");
        hideContent("tips");
    }
    function startApp(){
        
        hideContent("pageWelcome");
        showContent("chooseCipherUncipher");
        showContent("footer");
        hideContent("tips");
    }
    function goToCipher(){

        hideContent("chooseCipherUncipher");
        showContent("cipherMayor");
        showContent("footer");
        hideContent("tips");
    }
    function goToUnipher(){

        hideContent("chooseCipherUncipher");
        showContent("uncipher");
        showContent("footer");
        hideContent("tips");
    }

    function messageToCode(){    
        showContent("showingMessageC");   
        let text = document.getElementById("textToCipher").value.toUpperCase();   
        let offset = parseInt(document.getElementById("offset").value);
        let cipherText = cipher.encode(text,offset);        
        document.getElementById("finalMessageC").innerHTML = cipherText;
       

    }

    function messageToDecode(){
        showContent("showingMessageC");   
        let text = document.getElementById("cipherToText").value.toUpperCase();
        let offset = parseInt(document.getElementById("offset2").value);
        let decodeText = cipher.decode(text,offset);        
        document.getElementById("finalMessageC").value = decodeText;        

    }

  
    

