import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  // isClearUserNameDisabled: boolean = true;

  // onUpdateUserName(event: any): void {
  //   this.isClearUserNameDisabled = !event.target.value
  // }

  onClearUser(): void {
    this.userName = '';
    // this.isClearUserNameDisabled = true;
  }
}
