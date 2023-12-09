import { Controller } from './controller'

let i = 0;

function genControllerId() {
    return `controller-${i++}`
}

/**
 * 定义一个控制器<包含状态>
 * @param Ctor 
 * @param StateCtro 
 */
export function defineController<ControllerCtor extends Controller<any>>(instance: ControllerCtor, deps: Array<Controller<any>>) {

    if (!instance.id) {
        instance.id = genControllerId()
    }

    instance.deps = deps

    return instance;

}







