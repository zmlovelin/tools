import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgZorroAntdModule } from 'ng-zorro-antd';
// prng ;
import {MegaMenuModule} from 'primeng/megamenu';
import {DropdownModule} from 'primeng/dropdown';
// 组件;
import { SelectDownComponent } from './tl-selectdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    MegaMenuModule,
    DropdownModule
  ],
  declarations: [
    SelectDownComponent
  ],
  providers: [  ],
  exports: [
    CommonModule,
    MegaMenuModule,
    DropdownModule,
    SelectDownComponent
  ],
  entryComponents: [

  ]
})
export class SharedModule {  }
