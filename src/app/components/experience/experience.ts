import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
