import { IFile } from '../interfaces/IFile';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../providers/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: IFile[];
  keyword: String;
  constructor(private _fileService: FileService) { }

  ngOnInit() {
    console.log('Init');
    this._fileService.files.subscribe(newFiles => {
      this.files = newFiles;
    });
    this._fileService.getFiles();
  }

  search(keyword: String) {
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

  goToFolder(folder: IFile) {
    if (folder.type === 'folder') {
      this._fileService.getFiles({ search: '', parentId: folder._id });
    }
  }

}
