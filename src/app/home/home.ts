import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  
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
}
