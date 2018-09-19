import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPassword: string = 'tuna';
  passwords: string[] = ['tuna', 'apple', 'Sparticus', 'billy-bob'];
  clickValues: string[] = [];

  getPassword(): void {
    let passwordNumber: number = Math.floor(Math.random() * this.passwords.length);
    this.secretPassword = this.passwords[passwordNumber];
  };

  onToggleDisplay(): void {
    this.getPassword();
    this.clickValues.push(this.secretPassword);
  }

  getColor(index: number): string {
    return index > 4 ? "blue" : "white";
  }
}
