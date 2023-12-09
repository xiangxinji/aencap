
export * from './watcher'

export abstract class Watcher {

    id = '';

    abstract setup(): void

}