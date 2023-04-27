import { onUnmounted, watch } from "vue";

const KeyboardCommands = {
  // ctrl + s 保存事件
  save: function (event: KeyboardEvent, callback: Function) {
    if ((event.ctrlKey && event.key === "s") || (event.metaKey && event.key === "s")) {
      event.preventDefault(); // Prevent the default behavior of saving the webpage
      callback();
    }
  },
};

export function usePageCommand(type: keyof typeof KeyboardCommands, watchGetter: () => boolean, callback: Function) {
  const cb = (event: KeyboardEvent) => {
    const handler = KeyboardCommands[type];
    if (handler) handler(event, callback);
  };
  watch(
    watchGetter,
    (v) => {
      if (v) {
        document.addEventListener("keydown", cb);
      } else {
        document.removeEventListener("keydown", cb);
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    document.removeEventListener("keydown", cb);
  });
}
