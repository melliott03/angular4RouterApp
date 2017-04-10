import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  memebervar = 'hello from MembersComponent works!';
  arr = ['abc', 'def', 'ghi'];
  obj = {name: 'mike'};

  isTrue = false;
  isTrue2 = true;

  myName = 'Daniel';

  constructor() { }

  ngOnInit() {
  }

}
