
import { defineController } from './controller'
import { Controller } from './controller/controller'
import { defineWatcher, runWatchers } from './watcher'
import { Watcher } from './watcher/watcher'



type DefineOptions = {
    /**
     * 控制器列表
     */
    controllers: Array<Controller<any>>

    /**
     * 监听器列表
     */
    watchers: Array<Watcher>

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


    const { watchers } = options
    watchers.forEach((watcher) => {
        defineWatcher(watcher)
    })


    return {
        runWatchers: () => {
            runWatchers(watchers)
        },
        watchers,
        controllers
    }



}

