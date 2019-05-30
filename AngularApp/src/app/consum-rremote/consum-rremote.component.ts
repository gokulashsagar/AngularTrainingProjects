import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../services/remote.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import {Router} from '@angular/router'

@Component({
  selector: 'app-consum-remote',
  templateUrl: './consum-rremote.component.html',
  styleUrls: ['./consum-rremote.component.css']
})
export class ConsumRremoteComponent implements OnInit {

  friends: any = []
  displayForm: Boolean = false
  message: String = ""
  constructor(private remote: RemoteService ,private router: Router) { }
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
  //Routing Programatically (Manually)
  update =function(id){
    this.router.navigate(["/updatefriend,id"])

  }

  ngOnInit() {
    this.remote.getRemoteUsers().subscribe(
      (data) => {
        console.log(data)
        this.friends = data
      },
      (error)=>{
        this.message="Error..."+ JSON.stringify(error)
      }
    )
  }

}
