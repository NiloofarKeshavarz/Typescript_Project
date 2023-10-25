"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    //==================== FIRST METHOD
    LikeComponent.prototype.onClick = function () {
        //     if(this.isSelected){
        //     this._likeCount --;
        //     this._isSelected = false;
        // }else{
        //     this._likeCount ++;
        //     this._isSelected = true;
        // }
        this._likeCount += (this.isSelected) ? -1 : +1;
        this._isSelected = !this.isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        //============================Cleaner implemenattion
        //this.likeCount += (this.isSelected)? -1 : +1;
        //this.isSelected = !this.isSelected;
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
