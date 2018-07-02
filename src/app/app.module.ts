import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

/** 配置 angular i18n **/
import {CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
// prng的下拉搜索
import {DropdownModule} from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import {SharedModule } from 'primeng/shared';
import {MenuTopComponent} from './components/menu-top/menu-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    DropdownModule,
    // 路由模块最后导入。
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  exports: [
    DropdownModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      // 出现#号
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
