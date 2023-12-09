import { Ref, UnwrapRef } from 'vue';
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type ControllerCtor<State = any> = Constructor<Controller<State>>;
export declare abstract class Controller<State> {
    id: string;
    state: Ref<UnwrapRef<State>>;
    /**
     * 其他的依赖控制器
     */
    deps: Array<Controller<any>>;
    constructor(stateCtor: Constructor<State>);
    /**
     * 设置依赖
     * @param deps
     */
    setDep(controller: Controller<any>): void;
    /**
     * 获取依赖
     * @param Ctor
     * @returns
     */
    getDep<Ctor>(Ctor: Constructor<Ctor>): Ctor | null;
    /**
     * 获取依赖
     * @param id
     * @returns
     */
    getDeptById(id: string): Controller<any> | null;
}
