import { Component, ElementRef, OnInit ,ViewChild,EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Ingredients } from 'src/app/shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputref: ElementRef;
  @ViewChild('amountInput') amountInputref: ElementRef;
  @Output() ingredientAdded =  new EventEmitter<Ingredients > ();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName= this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
