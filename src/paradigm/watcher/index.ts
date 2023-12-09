import { Watcher } from "./watcher";


let i = 0;
function genWatcherId() {
    return `watcher-${i++}`
}



export function defineWatcher(instance: Watcher) {

    if (!instance.id) {
        instance.id = genWatcherId()
    }

    return instance;
}


export function runWatchers ( watchers: Array<Watcher>) {
    watchers.forEach(watcher => {
        watcher.setup()
    })
}