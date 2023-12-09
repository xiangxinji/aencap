import { Controller } from './controller';
export * from './controller';
/**
 * 定义一个控制器<包含状态>
 * @param Ctor
 * @param StateCtro
 */
export declare function defineController<ControllerCtor extends Controller<any>>(instance: ControllerCtor, deps: Array<Controller<any>>): ControllerCtor;
