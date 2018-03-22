import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  @Input() file: any;
  @Output() go: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  action(file: any) {
    alert(file.name);
  }

  goTo(name: String) {
    this.go.emit(name);
  }
}
