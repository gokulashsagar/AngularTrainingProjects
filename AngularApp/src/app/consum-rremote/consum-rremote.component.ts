import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../services/remote.service';

@Component({
  selector: 'app-consum-remote',
  templateUrl: './consum-rremote.component.html',
  styleUrls: ['./consum-rremote.component.css']
})
export class ConsumRremoteComponent implements OnInit {

  friends: any = []
  displayForm: Boolean = false
  message: String = ""
  constructor(private remote: RemoteService) { }
  // ngOnInit() {
  //   this.remote.getRemoteUsers().subscribe(
  //     function(data){
  //        console.log(data)
  //     }
  //   )
  // }
  delete = function (counter) {
    this.remote.deleteFriend(counter).subscribe((data) => {
      this.ngOnInit();
    }
    )
  }

  saveFriend = function (friendDetails) {
    console.log(friendDetails)
    this.remote.addFriend(friendDetails).subscribe((data) =>
    this.ngOnInit(),  
    this.message = "success")
  }
  displayAddFriendForm = function () {
    console.log("displayAddFriendForm")
    this.displayForm = true;
  }
  ngOnInit() {
    this.remote.getRemoteUsers().subscribe(
      (data) => {
        console.log(data)
        this.friends = data
      }
    )
  }

}
