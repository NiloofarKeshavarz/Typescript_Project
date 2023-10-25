export class LikeComponent{
   
    constructor(public _likeCount: number , public _isSelected : boolean ){
    
    }

    //==================== FIRST METHOD
    onClick(){
    //     if(this.isSelected){
    //     this._likeCount --;
    //     this._isSelected = false;
    // }else{
    //     this._likeCount ++;
    //     this._isSelected = true;
    // }
    this._likeCount += (this.isSelected)? -1 : +1;
    this._isSelected = !this.isSelected;

    }

    //============================Cleaner implemenattion
    //this.likeCount += (this.isSelected)? -1 : +1;
    //this.isSelected = !this.isSelected;

    get likeCount(){
        return this._likeCount;
    }
    
    get isSelected(){
        return this._isSelected;
    }
  
}