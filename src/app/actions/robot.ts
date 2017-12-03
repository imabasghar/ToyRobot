import { Action } from '@ngrx/store';
import { Position } from '../models/position';

export const PLACE = 'PLACE';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const MOVE = 'MOVE';

export class PlaceAction implements Action {
  readonly type = PLACE;

  constructor(public payload: Position) {}
}

export class LeftAction implements Action {
  readonly type = LEFT;

  constructor(public payload: string) {}
}

export class RightAction implements Action {
  readonly type = RIGHT;

  constructor(public payload: string) {}
}

export class MoveAction implements Action {
  readonly type = MOVE;

  constructor(public payload: string) {}
}

export type Actions = PlaceAction | LeftAction | RightAction | MoveAction;
