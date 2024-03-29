import { Ref, UnwrapRef, ref } from 'vue'

export type Constructor<T> = new (...args: any[]) => T


export type ControllerCtor<State = any> = Constructor<Controller<State>>

export abstract class Controller<State> {

    id = '';

    state: Ref<UnwrapRef<State>>

    /**
     * 其他的依赖控制器
     */
    deps: Array<Controller<any>> = [];

    constructor(stateCtor: Constructor<State>) {

        this.state = ref(new stateCtor())
    }

    /**
     * 设置依赖
     * @param deps 
     */
    setDep(controller: Controller<any>) {
        this.deps.push(controller)
    }


    /**
     * 获取依赖
     * @param Ctor 
     * @returns 
     */
    getDep<Ctor>(Ctor: Constructor<Ctor>) {
        const res = this.deps.find(d => d.constructor === Ctor) || null
        return res as InstanceType<Constructor<Ctor>> | null
    }

    /**
     * 获取依赖 
     * @param id  
     * @returns 
     */
    getDeptById(id: string) {
        return this.deps.find(d => d.id === id) || null
    }
}