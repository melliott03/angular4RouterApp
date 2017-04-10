import { Component } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  users = [];

  items = ['Angular 4', 'React', 'Underscore'];
  newItem = "";
  pushItem = function(){

    if(this.newItem != ""){
      console.log('this.newItem::', this.newItem)
      this.items.push(this.newItem);
      this.newItem = "";
    }
  };
  removeItem = function(index){
    this.items.splice(index, 1);
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(usersData => console.log('usersData::', usersData))
    // .subscribe((usersData) => {
    //   // this.users = users;
    //   console.log('usersData::', usersData);
    // })
  }

}
