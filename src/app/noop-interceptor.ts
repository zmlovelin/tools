/**
 * @author gyjlovelh
 * @createTime 2017/10/8
 */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, mergeMap} from 'rxjs/internal/operators';
import {NzModalService} from 'ng-zorro-antd';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private $router: Router,
              private confirmSrv: NzModalService) {
  }

  /**
   * 拦截器  给请求设置 authorization 的头
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @description
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 拦截请求
    let token = '43aaedb78c2ef89bb9ac1cd5f5f22ec'; // 获取token
    let authReq = null;
    if (token) {
      authReq = req.clone({setHeaders: {Authorization: token}});
    }
    if (req.url === '/business/topology/static/export') {
      authReq = authReq.clone({setHeaders: {'Content-Type': 'form-data'}});
    }
    return next.handle(authReq || req).pipe(mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status !== 200) {
          return Observable.create(observer => observer.next(event));
        }
        return Observable.create(observer => observer.next(event)); // 获取成功的
      }),
      catchError((err: HttpResponse<any>, caught: Observable<any>) => { // 返回异常
        if (err.status === 401) {
          this.confirmSrv.warning({
            nzTitle: '提示',
            nzContent: '登录超时，请重新登录！',
            nzOnOk: () => { }
          });
        }
        return Observable.create(observer => observer.next(event));
      })
    );
  }
}
