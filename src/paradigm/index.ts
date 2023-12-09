
import { defineController } from './controller'
import { Controller } from './controller/controller'


type DefineOptions = {
    /**
     * 控制器列表
     */
    controllers: Array<Controller<any>>
}

/**
 * 接受控制器的定义
 */
export function define(options: DefineOptions) {
    const { controllers } = options

    controllers.forEach((controller) => {
        const deps = controllers.filter(i => i !== controller)
        controller.deps = deps
        defineController(controller, deps)
    })


}