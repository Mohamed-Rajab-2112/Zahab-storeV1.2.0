import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Input() items;
  @Input() itemType;
  @Output() selectedItem = new EventEmitter();
  filteredItems;
  text: string;
  toggleAutoCompleetList: boolean;
  backdropToggleClass: string[];
  private _LimitOfAutoCompleteResult = 10;

  constructor() {
  }

  ngOnInit() {
    this.filteredItems = [];
    this.text = '';
    this.toggleAutoCompleetList = false;
    this.backdropToggleClass = ['backdrop-hidden'];
  }

  autoComplete(text: string) {
    this.text = text;
    if (text.length >= 2) {
      console.log(text);
      this.toggleAutoCompleetList = true;
      this.filteredItems = this.items.filter((item) => {
        return item.includes(text)
      }).slice(0, this._LimitOfAutoCompleteResult);
    }
    if (this.text == '') {
      this.selectedItem.emit(this.text);
    }
  }

  toggleAutoComplete() {
    this.toggleAutoCompleetList = !this.toggleAutoCompleetList;
    console.log(this.toggleAutoCompleetList);
    this.backdropToggleClass = String(this.backdropToggleClass) == String(['backdrop-hidden']) ? ['backdrop-shown'] : ['backdrop-hidden'];
    console.log(this.backdropToggleClass)
  }

  selectItem(item) {
    this.text = item;
    console.log(item);
    console.log(this.text);
    this.toggleAutoComplete();
    // this.backdropToggleClass = ['backdrop-hidden'];
    this.selectedItem.emit(item);
  }

}
