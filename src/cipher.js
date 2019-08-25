window.cipher = {
  encode: (upperArray,offset) => {
    
    //Aquí iremos añadiendo cada letra transformada
  let outputMsg = '';

  for (let i = 0; i < upperArray.length; i++) {        

      //Obtenemos la posición del caracter a evaluar
      let cIndex = upperArray[i];
      //Obtenemos el código ASCII correspondiente a la letra a evaluar
      let codeASCII = upperArray.charCodeAt(i);
     
      if(codeASCII===32){

        cIndex = String.fromCharCode(32);
        
      }else if(codeASCII===48){
        //los números van del 48 al 57
        cIndex = String.fromCharCode(57);

      } else if(codeASCII===49){

        cIndex = String.fromCharCode(56);
      } else if(codeASCII===50){

        cIndex = String.fromCharCode(55);
      } else if(codeASCII===51){

        cIndex= String.fromCharCode(54);
      }  else if(codeASCII===52){

        cIndex= String.fromCharCode(53);
      }  else if(codeASCII===53){

        cIndex= String.fromCharCode(52);
      } else if(codeASCII===54){

        cIndex= String.fromCharCode(51);
      }  else if(codeASCII===55){

        cIndex= String.fromCharCode(50);

      }  else if(codeASCII===56){

        cIndex= String.fromCharCode(49);

      } else if(codeASCII===57){

        cIndex= String.fromCharCode(48);
      } else{

      cIndex = String.fromCharCode(((codeASCII - 65 + offset) % 26) + 65);
      
      }

      outputMsg = outputMsg + cIndex;          
      
  }

  return outputMsg;
  },

  decode: (upperArray,offset) => {
   //Variable donde almacenaremos letra a letra descifrada
  let outputMsg = '';

  for (let i = 0; i < upperArray.length; i++) {        

      //Obtenemos la posición del caracter a evaluar
      let cIndex = upperArray[i];      

      //Obtenemos el código ASCII correspondiente a la letra a evaluar
      let codeASCII = upperArray.charCodeAt(i);


      if(codeASCII===32){

        cIndex = String.fromCharCode(32);

      }else if(codeASCII===48){
        //los números van del 48 al 57
        cIndex = String.fromCharCode(57);

      } else if(codeASCII===49){

        cIndex = String.fromCharCode(56);
      } else if(codeASCII===50){

        cIndex = String.fromCharCode(55);
      } else if(codeASCII===51){

        cIndex= String.fromCharCode(54);
      }  else if(codeASCII===52){

        cIndex= String.fromCharCode(53);
      }  else if(codeASCII===53){

        cIndex= String.fromCharCode(52);
      } else if(codeASCII===54){

        cIndex= String.fromCharCode(51);
      }  else if(codeASCII===55){

        cIndex= String.fromCharCode(50);

      }  else if(codeASCII===56){

        cIndex= String.fromCharCode(49);

      } else if(codeASCII===57){

        cIndex= String.fromCharCode(48);
      }  
      else{
        //Desciframos la letra correspondiente según sea el offset declarado
        cIndex = String.fromCharCode(((codeASCII - 90 - offset) % 26) + 90);
      }
      
      //Vamos almacenando en el mensaje de salida la letra descifrada
      outputMsg = outputMsg + cIndex;
          
      
  }

  return outputMsg;

},

  
};