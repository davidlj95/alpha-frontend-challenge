import {Injectable} from '@angular/core';
import {Thought} from './thought';
import {Mood} from './mood.enum';
import {EMPTY, empty, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  MOCK_THOUGHTS: Array<Thought> = [
    {
      id: 1,
      title: 'I want to join Alpha\'s team',
      description: 'They\'re doing great for the society',
      mood: Mood.Awesome,
      date: new Date()
    }
  ];

  constructor() {
  }

  findById(id: number): Observable<Thought> {
    const foundThought = this.MOCK_THOUGHTS.find(thought => thought.id === id);
    if (foundThought) {
      return of(foundThought);
    } else {
      return EMPTY;
    }
  }

  findAll(): Observable<Array<Thought>> {
    return of(this.MOCK_THOUGHTS);
  }
}
