export class Point2 {

    // x: number;
    // y : number;

    constructor(private _x: number=0 , private _y: number =0){ //using private in front of the params will create this.x =x ,...
        // this.x = x;
        // this.y = y;
    }

    draw(){
        console.log('x1 =' +this._x + ' and y2= ' + this._y);
    }
    getDistance(){
        //...
    }
    get x(){ // these get and set called properties for READ_ONLY and SETIING_VALUE purposes 
        return this.x;
    }
    set x(value){
        if(value < 0)
            throw new Error('value not less than 0');
            this.x = value;
        
    }
}
