import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/services/dataprovider';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  documents: any;

  constructor(private dataProvider: DataProvider) { }

  ngOnInit(): void {
    this.documents = this.dataProvider.getDocuments();
  }

}
