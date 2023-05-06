declare const KeyboardCommands: {
    save: (event: KeyboardEvent, callback: Function) => void;
};
export declare function usePageCommand(type: keyof typeof KeyboardCommands, watchGetter: () => boolean, callback: Function): void;
export {};
