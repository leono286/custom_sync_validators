import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // singleInputReactive
  // singleInputTemplateDriven
  // crossFieldReactive
  // crossFieldTemplateDriven

  componentToShow = 'singleInputReactive';

  showComponent(selected:string){
    this.componentToShow = selected;
  }

}
