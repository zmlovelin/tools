import {Common} from '../../common.model';

/**
 * 监控模板实体类
 */
export class MonitorTemplate extends Common {

    // 模板id
    public mtId: string;

    // 模板名称
    public mtName: string;

    // 模板描述
    public mtDescription: string;

    // 关联指标
    public quotas: string[];


    constructor() {
        super();
    }
}
