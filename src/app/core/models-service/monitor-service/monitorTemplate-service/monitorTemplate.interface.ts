import { Result, EntitiesResult } from '../../Result';
import { MonitorTemplate } from './monitorTemplate.model';

/**
 * 监控模板抽象接口
 */
export interface MonitorTemplateInterface {
     /**
     * 分页+模糊查询批量列表
     * @returns {Result<EntitiesResult<Servicer>>}
     */
     getMonitorTemplatePagination(page, query): Promise<Result<EntitiesResult<MonitorTemplate>>>;

}
