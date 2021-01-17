import { GamePageViewer } from './view/GamePageViewer';
import { GameControl } from './components/GameControl';
import $ from "jquery"
const game = new GameControl(new GamePageViewer());

$(document).on("keydown",(e)=>{
    if(e.keyCode === 39){
        game.control_right();
    }else if(e.keyCode === 37){
        game.control_left();
    }else if(e.keyCode === 40){
        game.control_down()
    }else if(e.keyCode === 38){
        game.control_rotate();
    }
})


$("#start").on("click",()=>{
    game.start()
})
$("#pause").on("click",()=>{
    game.pause();
})
