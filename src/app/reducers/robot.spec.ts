import { RightAction } from './../actions/robot';
import * as robot from './robot';
import * as robotAction from '../actions/robot'
import { reducer } from './robot';
import { Direction } from '../models/direction';

describe('robot reducer', () => {
  it('should return the default state', () => {
    const action = {} as any;

    const result = reducer(undefined, action);
    expect(result).toEqual(robot.initialState);
  });

  it('should place robot on the board', () => {
    const initialState = {
      position: {
        x: 0,
        y: 0,
        direction: Direction.NORTH
      },
      isRobotPlaced: false
    };
    const action = new robotAction.PlaceAction({
      x: 0,
      y: 1,
      direction: Direction.WEST
    });
    const result = reducer(initialState, action);
    expect(result.position.x).toEqual(0);
    expect(result.position.y).toEqual(1);
    expect(result.position.direction).toEqual(Direction.WEST);
    expect(result.isRobotPlaced).toEqual(true);
  });

  it('should rotate left', () => {
    const initialState = {
      position: {
        x: 0,
        y: 0,
        direction: Direction.NORTH
      },
      isRobotPlaced: true
    };
    const action = new robotAction.LeftAction('');
    expect(reducer(initialState, action).position.direction).toEqual(Direction.WEST);

    expect(reducer(reducer(initialState, action), action).position.direction)
      .toEqual(Direction.SOUTH);

    expect(reducer(reducer(reducer(initialState, action), action), action).position.direction)
      .toEqual(Direction.EAST);

    expect(reducer(reducer(reducer(reducer(initialState, action), action), action), action).position.direction)
      .toEqual(Direction.NORTH);
  });

  it('should rotate right', () => {
    const initialState = {
      position: {
        x: 0,
        y: 0,
        direction: Direction.NORTH
      },
      isRobotPlaced: true
    };
    const action = new robotAction.RightAction('');
    expect(reducer(initialState, action).position.direction).toEqual(Direction.EAST);

    expect(reducer(reducer(initialState, action), action).position.direction)
      .toEqual(Direction.SOUTH);

    expect(reducer(reducer(reducer(initialState, action), action), action).position.direction)
      .toEqual(Direction.WEST);

    expect(reducer(reducer(reducer(reducer(initialState, action), action), action), action).position.direction)
      .toEqual(Direction.NORTH);
  });

  it('should move NORTH', () => {
    const initialState = {
      position: {
        x: 0,
        y: 0,
        direction: Direction.NORTH
      },
      isRobotPlaced: true
    };
    const action = new robotAction.MoveAction('');
    const result = reducer(initialState, action);
    expect(result.position.x).toEqual(0);
    expect(result.position.y).toEqual(1);
    expect(result.position.direction).toEqual(Direction.NORTH);

    // Move once again
    expect(reducer(result, action).position.y).toEqual(2);
  });

  it('should move EAST', () => {
    const initialState = {
      position: {
        x: 0,
        y: 0,
        direction: Direction.EAST
      },
      isRobotPlaced: true
    };
    const action = new robotAction.MoveAction('');
    const result = reducer(initialState, action);
    expect(result.position.x).toEqual(1);
    expect(result.position.y).toEqual(0);
    expect(result.position.direction).toEqual(Direction.EAST);

    // Move once again
    expect(reducer(result, action).position.x).toEqual(2);
  });

  it('should move WEST', () => {
    const initialState = {
      position: {
        x: 2,
        y: 3,
        direction: Direction.WEST
      },
      isRobotPlaced: true
    };
    const action = new robotAction.MoveAction('');
    const result = reducer(initialState, action);
    expect(result.position.x).toEqual(1);
    expect(result.position.y).toEqual(3);
    expect(result.position.direction).toEqual(Direction.WEST);

    // Move once again
    expect(reducer(result, action).position.x).toEqual(0);
  });

  it('should move SOUTH', () => {
    const initialState = {
      position: {
        x: 2,
        y: 3,
        direction: Direction.SOUTH
      },
      isRobotPlaced: true
    };
    const action = new robotAction.MoveAction('');
    const result = reducer(initialState, action);
    expect(result.position.x).toEqual(2);
    expect(result.position.y).toEqual(2);
    expect(result.position.direction).toEqual(Direction.SOUTH);

    // Move once again
    expect(reducer(result, action).position.y).toEqual(1);
  });
});
