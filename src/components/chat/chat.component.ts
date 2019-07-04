import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatComponent{    
    messages: Array<Message> = [];
    uploadImage: string = '';

    /** function gets called if user pressed enter. The text from the input
     *  field is passed into the messages array with the type 'send'.
     * 
     *  type 'send' will display a user message.
     *  type 'received' will display a bot message.
     * 
     *  the type will be needed in the chat-message.component to render 
     *  the right message form.
     */
    onSubmit(f: NgForm){         
        var message: Message = {
            content: f.value.message,
            type: 'text',
            transmission: 'send'
        };
        this.messages.push(message); 
        
        var receivingMessage: Message = {
            content: 'Moin moin, du Eumelgesicht!',
            type: 'text',
            transmission: 'received'
        };
        this.messages.push(receivingMessage);
    }

    /** handles if an image is added to the conversation over the image upload
     *  button.  
     */
    onImageUpload(file){              
        var reader = new FileReader();   
        var message: Message = {
            content: '',
            type: 'image', 
            transmission: 'send'
        }; 

        reader.onload = (function(file){
            message.content = String(reader.result);            
        });
        
        this.messages.push(message);
        reader.readAsDataURL(file);                                  
    }
}

/** Message object */
class Message{    
    content: string;
    type: string;
    transmission: string;
}
