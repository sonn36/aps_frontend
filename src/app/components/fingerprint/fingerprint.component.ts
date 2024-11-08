import { Component, Inject } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-fingerprint',
  standalone: true,
  imports: [],
  templateUrl: './fingerprint.component.html',
  styleUrl: './fingerprint.component.css'
})
export class FingerprintComponent {
  text: string = "";


  constructor(private webSocketService: WebsocketService) { }


  ngOnInit() {
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/greetings', (message) => {
        this.text = JSON.parse(message.body).content;
      })


      stompClient.publish({
        destination: '/app/hello',
        body: JSON.stringify({ 'content': "1" })
      });
      stompClient.publish({
        destination: '/app/hello',
        body: JSON.stringify({ 'content': "1" })
      });

    })





  }

}
