import {Point} from "src/AngularClasses/point";
export class EnemyMovenment {
  private _startposition:Point
  private _speed:number;
  private _delta:Point;
  constructor(speed:number,targetPoint:Point){
    this._startposition = this.GenerateStartposition();
    this._speed = speed;
    this._delta=this._startposition.GetDelta(this._speed,targetPoint)
  }
private GenerateStartposition():Point{}
  GenerateStartposition():Point{
    let startposition =
        new Point(this.GenerateStartpositionX(),this.GenerateStartpositionY());

  }

  GenerateStartpositionX():number{
    return 0;
  }
  GenerateStartpositionY():number{
    return 0;
  }

  GetStartposition():Point{
    return this._startposition;
  }

}
