export class Point {
    private _x: number;
    private _y: number;

    constructor();
    constructor(x?:any, y?: any);
    constructor(point: [number, number]=[0,0], x?: any, y?: any) {
        this._x=x??point[0]??0;
        this._y=y??point[1]??0;
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
    GetDelta(speed:number,targetPoint: Point): Point {
      let delta=new Point();
      let lineLength = Math.sqrt(Math.pow(targetPoint.X - this.X, 2)
          + Math.pow(targetPoint.Y - this.Y,2));
      let delimeter = lineLength/speed;
      delta.X=speed*(targetPoint.X - this.X)/delimeter;
      delta.Y=speed*(targetPoint.Y - this.Y)/delimeter;
      return delta;
    }

}
