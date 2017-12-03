import { PLACE } from './../actions/robot';
import { Position } from '../models/position';
import * as robot from '../actions/robot';
import { Direction } from '../models/direction';

export interface State {
  position: Position;
  isRobotPlaced: boolean;
}

export const initialState: State = {
  position: {} as Position,
  isRobotPlaced: false
};

export function reducer(state = initialState, action: robot.Actions): State {
  switch (action.type) {
    case robot.PLACE: {
      const newPosition: Position = action.payload as Position;
      return Object.assign({}, state, {
        position: newPosition,
        isRobotPlaced: true
      });
    }

    case robot.LEFT: {
      let direction: Direction = state.position.direction;
      if (direction === Direction.NORTH) {
        direction = Direction.WEST;
      } else {
        direction--;
      }
      const newPosition = Object.assign({}, state.position);
      newPosition.direction = direction;
      return Object.assign ({}, state, {
        position: newPosition
      });
    }

    case robot.RIGHT: {
      let direction: Direction = state.position.direction;
      if (direction === Direction.WEST) {
        direction = Direction.NORTH;
      } else {
        direction++;
      }
      const newPosition = Object.assign({}, state.position);
      newPosition.direction = direction;
      return Object.assign ({}, state, {
        position: newPosition
      });
    }

    case robot.MOVE: {
      const newPosition = Object.assign({}, state.position);
      switch (newPosition.direction) {
        case Direction.NORTH:
          newPosition.y++;
          break;
        case Direction.EAST:
          newPosition.x++;
          break;
        case Direction.SOUTH:
          newPosition.y--;
          break;
        case Direction.WEST:
          newPosition.x--;
          break;
      }
      return Object.assign ({}, state, {
        position: newPosition
      });
    }

    default: {
      return state;
    }
  }
}
