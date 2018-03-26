import { Component, OnInit } from '@angular/core';
import { FileService } from '../providers/file.service';

@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.scss']
})
export class MenuControlComponent implements OnInit {
  folderName: String = '';
  constructor(private _fileService: FileService) { }

  ngOnInit() {
  }

  addFolder(folderName) {
    this._fileService.addFolder({
      name: folderName,
      modified: new Date(Date.now()),
      members: ['Kian', 'Hue', 'Linh'],
      type: 'folder'
    });
  }

}
