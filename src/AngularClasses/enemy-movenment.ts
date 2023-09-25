import { Point } from "../AngularClasses/point"
import { WindowSide } from "../AngularClasses/window-side"

export class EnemyMovement {
  private _startPosition:Point;
  private readonly _speed:number;
  private _delta:Point;
  private _imageSize: Point;
  private _currentPosition:Point;

  public constructor(speed:number, targetPoint:Point, imageSize:Point) {
    this._speed = speed;
    this._imageSize =new Point(imageSize);

    this._startPosition = this.GenerateStartPosition();
    this._currentPosition=new Point(this._startPosition)
    this._delta = this._startPosition.GetDelta(this._speed, targetPoint);

  }

  private GenerateStartSide(): WindowSide{
    return Math.trunc(Math.random()*4);
  }

  public Move(){
    this._currentPosition.Increment(this._delta)
  }

  public IsEnimyOutOfScreen() : boolean{
    return     this._currentPosition.X<0||
        this._currentPosition.Y<0||
        this._currentPosition.X>window.innerWidth - this._imageSize.X ||
        this._currentPosition.Y>window.innerHeight - this._imageSize.Y;

  }


  public ApplyPosition(elementStyle:CSSStyleDeclaration): void{
    elementStyle.left=`${this._currentPosition.X}px`;
    elementStyle.top=`${this._currentPosition.Y}px`;
}
  public GenerateStartPosition():Point {
    let startSide = this.GenerateStartSide();
    let startPosition =
      new Point(this.GenerateStartPositionX(startSide), this.GenerateStartPositionY(startSide));
    return startPosition;
  }

  private GenerateStartPositionX(startSide:WindowSide):number{
    switch (startSide){
      case WindowSide.Left:
        return 0;
      case WindowSide.Right:
        return window.innerWidth - this._imageSize.X;
      case WindowSide.Top:
      case WindowSide.Bottom:
        return Math.trunc(Math.random() * window.innerWidth);
    }
  }

  private GenerateStartPositionY(startSide:WindowSide):number{
    switch (startSide){
      case WindowSide.Bottom:
        return window.innerHeight - this._imageSize.Y;
      case WindowSide.Left:
      case WindowSide.Right:
        return Math.trunc(Math.random() * window.innerHeight);
      case WindowSide.Top:
        return 0;
    }
  }
}
