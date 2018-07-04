import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonitorTemplateService} from './models-service/monitor-service/monitorTemplate-service';



const SERVICE_PROVIDES = [
  { provide: MonitorTemplateService, useClass: MonitorTemplateService },

];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...SERVICE_PROVIDES
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
