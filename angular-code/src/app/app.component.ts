import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-code';

  data!: User[];

  ngOnInit(): void {
    this.data = Array.from({length: 10}).map(() => this.createRandomUser());
  }

  createRandomUser(): User {
    return {
      _id: faker.datatype.uuid(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    };
  }
  
}
