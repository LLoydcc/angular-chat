import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent{

    /** over here the component is listening for Inputs with the value
     *  'message' and 'messageTransmission'. These Input fields can be declared as 
     *  properties of a chat-message.component and the corresponding
     *  values will right arrive here. 
     *   
     * 'message' is the text context of the message. 
     * 'messageTransmission' gives information if the message is send or received.
     * 'messageType' is set to 'image' or 'text'. If 'image' is selected, 
     * a picture will be displayed in the chat window. 'text' handles the input, if it's
     * a normal text message. 
     */
    @Input ('message') messageContent: string;
    @Input ('messageTransmission') messageTransmission: string;
    @Input ('messageType') messageType: string;
    messageTime: string;
    
    constructor() { 
        this.messageTime = this.getActualTime();          
    }


    /** calculates the time, the message is send or received. */
    getActualTime(){
        var currentdate = new Date();
        var day = String(currentdate.getDate()).padStart(2, '0');
        var month = String(currentdate.getMonth() + 1).padStart(2, '0');
        var year = currentdate.getFullYear();

        var hour = String(currentdate.getHours()).padStart(2, '0');
        var minute = String(currentdate.getMinutes()).padStart(2, '0');        

        return (day + '.' + month + '.' + year + ' ' + hour + ':' + minute);
    }    
}