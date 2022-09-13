import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { ReadCsvService } from './services/read-csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallPostApi';

  constructor(private userData:UserdataService, private csvFile : ReadCsvService){}

  getUserFormData(data:any)
  {
    alert(JSON.stringify(data));
    console.warn(JSON.stringify(data));
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })

  }

  changeListener(file:any){
    console.log("hi");
    this.csvFile.ReadCsv(file);
  }
}
