/**
 * 事件处理函数
 */
export default class Event {
    events = new Map<string, Array<Function>>()

    emit(key: string, ...params: Array<any>) {
      const exists = this.events.has(key);
      if (exists) {
        const callbacks = this.events.get(key);
        callbacks?.forEach((callback) => {
          // eslint-disable-next-line prefer-spread
          callback.apply(null, params);
        });
      }
    }

    on(key: string, callback: Function) {
      const exists = this.events.has(key);
      if (!exists) {
        this.events.set(key, [callback]);
      } else {
        const callbacks = this.events.get(key);
        callbacks?.push(callback);
      }
    }

    remove(key: string, callback: Function) {
      const exists = this.events.has(key);
      if (exists) {
        const callbacks = this.events.get(key) as Array<Function>;
        const ind = callbacks?.indexOf(callback);
        if (ind > -1) {
          callbacks.splice(ind, 1);
        }
      }
    }
}