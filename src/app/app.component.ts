import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fundamentos-Angular';
  inputT = document.getElementById("meu-input");

  inputType = "text";
  inputText = "Texto Inicial";
  isDisabled = true;

  buttonTitle = "Titulo do Botao";
  buttonDisable = true;




  enableInput() {
    this.isDisabled = false;
  }
  disableInput(){
    this.isDisabled = true;
  }

  inputSenha() {
    this.inputType = "password";
  }
  inputTexto(){
    this.inputType = "text";
  }

  LogInputText(){    
    console.log(this.inputT);
  }

  handleInputKey(event: Event){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  enableButton(){
    if(this.buttonDisable == true){
      this.buttonDisable = false;
    }else{
      this.buttonDisable = true;
    }
  }

  //Style Binding

    widthButton1 = '110px';
    widthButton2 = 120;
  
    stylesObj = {
      width: '160px',
      backgroundColor: 'grey',
    }

  updateStyleObj(){
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }
  updateStyleObjCorrect(){
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    }
  }
  updateWidth(){
    this.widthButton2 = 200;
  }

  //Class Binding
  isRedButton = true;
  isGreen = true;
}
