import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'repeater, [repeater]',
  templateUrl: './repeater-task.component.html',
  styleUrls: ['./repeater-task.component.css']
})
export class RepeaterTaskComponent implements OnInit {

  constructor() { }

  @Input()
  options!: User[];

  @ContentChild('head')
  head!: TemplateRef<{}>;

  @ContentChild('body')
  template!: TemplateRef<{item: User}>;

  ngOnInit(): void {
  }

}
