import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IFile } from '../interfaces/IFile';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, OnChanges, OnDestroy {
  @Input() file: IFile;
  @Output() go: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
    console.log('Init');
  }

  ngOnChanges(value) {
    console.log(value);
  }

  ngOnDestroy() {
    console.log('Destroy', this.file.name);
  }
  action(file: IFile) {
    alert(file.name);
  }

  goTo(name: string) {
    this.go.emit(name);
  }
}
