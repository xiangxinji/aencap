import { Controller } from './controller/controller';
import { Watcher } from './watcher/watcher';
declare type DefineOptions = {
    /**
     * 控制器列表
     */
    controllers: Array<Controller<any>>;
    /**
     * 监听器列表
     */
    watchers: Array<Watcher>;
};
/**
 * 接受控制器的定义
 */
export declare function define(options: DefineOptions): {
    runWatchers: () => void;
    watchers: Watcher[];
    controllers: Controller<any>[];
};
export {};
