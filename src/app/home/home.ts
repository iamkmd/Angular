import { Component, computed, effect, inputBinding, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  
  constructor(){
     effect(() =>
     {
      console.log(this.counter);
      console.log(this.data());  
     })
     effect(() =>
     {
        if(this.speed() > 50 )
        {
          this.color = 'Yellow';
          this.fruit.set('Banana');
        }
        if(this.speed() > 70)
        {
          this.color= 'Orange';
          this.fruit.set('Orange');
        }
        if(this.speed() > 100)
        {
          this.color = 'red';
          this.fruit.set('Apple');
        }
     })
       
  }
   
  
  name="Mansi";
  count=0;

  onClick()
  {
    this.count++;
  }


  
//   • $event is a special Angular template variable that captures the DOM event object (like a MouseEvent or InputEvent).

// • $event.target refers to the HTML element that triggered the event (e.g., an <input> or <button>).

// • $event.target.value retrieves the current value inside that HTML element (typically used with form inputs like text boxes, dropdowns, or checkboxes).


  hasEvent(action:any)
  {
    console.log(action);
  }

  //Property Binding 

  btn_Disable=true;
  toggle()
  {
    this.btn_Disable=!this.btn_Disable;
  }

  inputBinding= false;
  url="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
  
  // Signals
  counter = 100;
  data= signal(10);                                

  updateCount()
  {
     this.counter++;
  }

  updateData()
  {
    this.data.set(this.data() + 5);
  }


  //Update signals :- Computed signals
  //Here we explicitly update the Area after updating the hieght
  // hieght = 200;
  // width = 1000;
  // area : number = this.hieght * this.width;

  // updateArea()
  // {
  //   this.hieght =this.hieght+ 5;
  //   this.area = this.hieght * this.width;
    
  // }

  // But don't want to do that because I have computed Signal which is derived the one reactive value from the expression and it only readonly value means you don't need to update manually you can Use Computed signals.... 

  height = signal(100);
  width = signal(20);
  //copmputed signals always use callback function don't write expression directly...
  area = computed(() => (this.height() * this.width()));

  updateArea()
  {
    this.height.set(this.height() + 5);
  }

  

  //  Change the speed and color and fruit name using signals and effect.

   speed = signal(10);
   color = 'Green';
   fruit= signal("Guava");

   increaseSpeed()
   {
    this.speed.set(this.speed() + 5);
   }

   




}
