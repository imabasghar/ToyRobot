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
      return nextState(state, newPosition, true);
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
      return nextState(state, newPosition, state.isRobotPlaced);
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
      return nextState(state, newPosition, state.isRobotPlaced);
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
      return nextState(state, newPosition, state.isRobotPlaced);
    }

    default: {
      return state;
    }
  }
}

const MAX_COLS = 5;
const MAX_ROWS = 5;

function isValidPosition(position: Position) {
  return (
    position.x >= 0 &&
    position.x < MAX_COLS &&
    position.y >= 0 &&
    position.y < MAX_ROWS
  );
}

function nextState(state, newPosition: Position, isRobotPlaced) {
  if (isValidPosition(newPosition)) {
    return Object.assign({}, state, {
      position: newPosition,
      isRobotPlaced: isRobotPlaced
    });
  } else {
    return state;
  }
}
