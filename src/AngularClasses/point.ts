export class Point {
  private _x: number ;
  private _y: number ;

  constructor();
  constructor(point?:Point);
  constructor(x?:number,y?:number) ;
  constructor(x?:any,y?:number)
  {
    console.log("Point constructor",y === undefined ? x: undefined,"x=",x,"y=",y)

    this._x = y === undefined ? (x as Point)?.X : x ?? 0;
    this._y = y?? (x as Point)?.Y ?? 0;
  }

  get X(): number {
    return this._x;
  }

  set X(value: number) {
    this._x = value;
  }

  get Y(): number {
    return this._y;
  }

  set Y(value: number) {
    this._y = value;
  }

  public GetDelta(speed: number, targetPoint: Point): Point {
    let delta = new Point();
    let lineLength = Math.sqrt(
        Math.pow(targetPoint.X - this.X, 2) + Math.pow(targetPoint.Y - this.Y, 2)
    );
    let delimeter = lineLength / speed;

    delta.X = (speed * (targetPoint.X - this.X)) / delimeter;
    delta.Y = (speed * (targetPoint.Y - this.Y)) / delimeter;
    //console.log(this._x,this._y,"delta=", delta, "lineLength=", lineLength, "delimeter=", delimeter, "speed=", speed);
    return delta;

  }

  public Increment(delta: Point): void {
    this._x += delta.X;
    this._y += delta.Y;
  }
}
