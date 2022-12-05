/**
 * 事件处理函数
 */
export default class Event {
    events: Map<string, Function[]>;
    emit(key: string, ...params: Array<any>): void;
    on(key: string, callback: Function): void;
    remove(key: string, callback: Function): void;
}
