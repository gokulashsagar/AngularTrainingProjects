import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../services/remote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css']
})
export class UpdateFriendComponent implements OnInit {
  remoteID :any
  constructor( private remote : RemoteService, private activeRoute : ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params.get("id"))
    this.remoteID = this.activeRoute.snapshot.params.get("id")
     this.remote.getRemoteUsersByID(this.remoteID).subscribe((data)=>{
       
     })

     
  }

}
