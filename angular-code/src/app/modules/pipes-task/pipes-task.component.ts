import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Option } from '../../shared/models/pipes-task.model';

@Component({
  selector: 'app-pipes-task',
  templateUrl: './pipes-task.component.html',
  styleUrls: ['./pipes-task.component.css']
})
export class PipesTaskComponent implements OnInit {

  options!: Option[];

  constructor() { }

  ngOnInit(): void {
    this.options = Array.from({ length: 10 }).map(() => ({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      date: faker.date.future()
    }));
  }

}
