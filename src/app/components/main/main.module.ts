
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ROUTER_CONFIG } from './main.routes';
import { MainComponent} from './main.component';
import { SharedModule } from '../../shared';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  providers: [ ],
  declarations: [ MainComponent ]
})
export class MainModule {

}
