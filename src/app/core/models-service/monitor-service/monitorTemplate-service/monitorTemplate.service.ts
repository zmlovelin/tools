import { MonitorTemplateInterface } from './monitorTemplate.interface';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntitiesResult, Result } from '../../Result';
import { MonitorTemplate } from './monitorTemplate.model';

@Injectable()
/**
 * 监控模板服务类
 */
export class MonitorTemplateService implements MonitorTemplateInterface {
    prefixUrl: string;
    constructor(
        private $http: HttpClient,
        @Inject('apiUrl') private api
    ) {
        this.prefixUrl = `/business/monitor/monitorTemplate${api}`;
    }


    /**
     * 监控模板分页列表
     * @param page
     * @returns {Promise<T>}
     */
    getMonitorTemplatePagination(page, search ): Promise<Result<EntitiesResult<MonitorTemplate>>> {
        let body = Object.create({});
        body.pageNum = page.pageNum;
        body.pageSize = page.pageSize;
        body.queryTerm = page.queryTerm;
        for (let key in search) {
            if (key && search[key] && search[key].length !== 0) {
                body.queryTerm[key] = search[key];
            }
        }
        return new Promise((resolve, reject) => {
            this.$http.post(`${this.prefixUrl}/mtList`, body, ).subscribe((result: Result<EntitiesResult<MonitorTemplate>>) => {
                result.code === 0 ? resolve(result) : reject(result);
            });
        });

      // {
      //   headers: new HttpHeaders().set('Authorization', 'e5cd64c7678ab5fac2f56000811edda0')
      // }
    }
}
