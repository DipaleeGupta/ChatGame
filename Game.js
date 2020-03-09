const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    SUGGEST:  Symbol("suggest"),  
    FORT: Symbol("fort"),
    CONTINUE: Symbol("continue"),
    TALK: Symbol("talk"),
    CHECK:Symbol("check"),
    ENTER: Symbol("enter"),
    FLASHLIGHT: Symbol("flashlight"),
    HELP:Symbol("help"),
    GOINSIDE:Symbol("goinside")
});
export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = `Bhangarh Fort ( Rajasthan , India)  has gained notoriety as one of the most haunted places in India.  Multiple cases of people going missing or returning mentally scarred has forced the Government of India to ban visits after 6 P.M. 
                You are driving from Delhi to Rajasthan and Your son wants to see the fort considering it's history. Will you go  or not?`;
                this.stateCur = GameState.SUGGEST;
                break;
            case GameState.SUGGEST:
                if(sInput.toLowerCase().match("go")){
                    sReply ="The Archeological Survey of India has put up a board on the fort gate that it is prohibited for tourists to stay inside the fort area after sunset and before sunrise. After seeing this board will you go back or will you dare to go inside ?";  
                    
                    this.stateCur = GameState.FORT
                }else {
                    sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
           
                }
                break;
            case GameState.FORT:
                if(sInput.toLowerCase().match("dare")){
                    sReply = "When you step inside you see that the whole place is deserted due to repairs and the security just didn't see you enter. Would you continue having a quick look around for your son's sake or leave?"
                    this.stateCur = GameState.CONTINUE;
                }else{
                    sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                }
                break;            
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "When you're walking around in the mild darkness you suddenly notice a lady in white Saaree with a candle in her hand from the corner of your eye! Do you go talk to her or run away? ";
                    this.stateCur = GameState.TALK;
                }else{
                    sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                }
                break;
            case GameState.TALK:
                    if(sInput.toLowerCase().match("talk")){
                        sReply = "As you turn towards her you see her crying and running towards a dark corner and disappear. Do you go check on her to see if she's okay or run away?";  
                        this.stateCur = GameState.CHECK;
                    }else{
                        sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                    }
                    break;
            case GameState.CHECK:
                        if(sInput.toLowerCase().match("check")){
                            sReply = "When you go near to where she was you realize that there's a hidden door in the corner. Will you still keep going and enter the door or will you run back to your car ?";
                            
                            this.stateCur = GameState.ENTER;
        
                        }else{
                            sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                        }
                        break;
            case GameState.ENTER:
                        if(sInput.toLowerCase().match("enter")){
                            sReply = "As you move towards the door you realize that it's getting darker. Will you use your phone’s flash light or will you run back ?";
                            
                            this.stateCur = GameState.FLASHLIGHT;
        
                        }else{
                            sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                        }
                        break;
            case GameState.FLASHLIGHT:
                        if(sInput.toLowerCase().match("flashlight")){
                            sReply = "You turn on your flashlight and enter the door, the door immediately locks behind you. Will you try to open the door and go back or go inside the tunnel.";
                            
                            this.stateCur = GameState.GOINSIDE;
        
                        }else{
                            sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                        }
                        break;
            case GameState.GOINSIDE:
                            if(sInput.toLowerCase().match("goinside")){
                                sReply = "The Tunnel is having a gate and you heard a lady screaming from out side. Will you go to help her or go back ?";
                                
                                this.stateCur = GameState.HELP;
            
                            }else{
                                sReply = "Your son starts crying , as he really wants to see the fort. Do you still suggest him not to go or do you decide to go inside to see the fort ?";
                            }
                            break;
                 case GameState.HELP:
                                if(sInput.toLowerCase().match("help")){
                                    sReply = "As you run to help the screaming lady, you realized there is no one outside. Will still go inside the fort or come back ?";
                                
                                }else{
                                    sReply = "Hey, you find out the king's palace. hurree!!!";
                                    this.stateCur = GameState.DONE;
                                }
                                break;
        }
        return([sReply]);
    }
}