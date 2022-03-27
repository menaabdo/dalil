import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private user:UserService){}
  title = 'app';
  ngOnInit(): void {
    this.user.getuser()
  }
}
