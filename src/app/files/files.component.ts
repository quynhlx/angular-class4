import { IFile } from '../interfaces/IFile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: IFile[];
  constructor() { }

  ngOnInit() {
    console.log('Init');
    this.files = [{
      name: 'Angular',
      modified: new Date(Date.now()),
      members: ['Kian', 'Hue'],
      type: 'folder'
    }, {
      name: 'Janeto Intro',
      modified: new Date(Date.now()),
      members: ['Kha', 'Linh'],
      type: 'folder'
    }, {
      name: 'Nodejs',
      modified: new Date(Date.now()),
      members: ['Khanh', 'Huy'],
      type: 'docx'
    }];
  }

  change() {
    this.files[0] = {
      name: 'Angular 5',
      type: 'folder',
      modified: new Date(Date.now()),
      members: ['Quynh']
    };
  }
  remove() {
    this.files.pop();
  }

}
