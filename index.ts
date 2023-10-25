import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, false);
component.onClick();
console.log(`likeCount : ${component.likeCount} , isSelected: ${component.isSelected}`);
