import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})

export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  disableSelect = new FormControl(false);
}
