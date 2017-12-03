import { Direction } from './models/direction';
import { Parser } from './shared/parser';
import { Component } from '@angular/core';
import * as robot from './reducers/robot';
import { Actions as robotActions } from './actions/robot';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  command: string;
  state: robot.State;
  validOutputs: Array<string> = [];

  private REPORT = 'REPORT';

  constructor(private store: Store<any>) {
    this.store.select('robot').subscribe(state => {
      this.state = state;
    });
  }

  runCommand() {
    const result = Parser.parseCommand(this.command);
    if (this.command === this.REPORT && this.state.isRobotPlaced) {
      this.validOutputs.push('REPORT');
      this.validOutputs.push(`${this.state.position.x},${this.state.position.y},${Direction[this.state.position.direction]}`);
    }
    if (result) {
      this.validOutputs.push(this.command);
      console.log(result);
      this.store.dispatch(result as robotActions);
    }

    this.command = '';
  }
}
