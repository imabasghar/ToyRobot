import { LeftAction, RightAction } from './../actions/robot';
import * as robot from '../actions/robot';
import { Direction } from '../models/direction';

export class Parser {
  static parseCommand(command: string): robot.Actions | boolean | string {
    try {
      const parts = command.split(' ');
      // If any command (except for PLACE) has more or less than 1 word
      if (parts[0] !== 'PLACE' && parts.length !== 1) {
        return false;
      }

      switch (parts[0]) {
        case robot.PLACE: {
          const payloadParts = parts[1].split(',');
          return new robot.PlaceAction({
            x: parseInt(payloadParts[0], 10),
            y: parseInt(payloadParts[1], 10),
            direction: Direction[payloadParts[2]]
          });
        }
        case robot.LEFT: {
          return new robot.LeftAction('');
        }
        case robot.RIGHT: {
          return new robot.RightAction('');
        }
        case robot.MOVE: {
          return new robot.MoveAction('');
        }

        default: {
          return false;
        }
      }
    } catch (e) {
      return false;
    }
  }
}
