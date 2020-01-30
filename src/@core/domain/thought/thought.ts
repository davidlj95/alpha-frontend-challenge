import {Mood} from './mood.enum';

export class Thought {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public mood: Mood,
    public date: Date,
  ) {
  }
}
