import { defineStore } from 'pinia'

export const useTestStore = defineStore({
    id: 'gravity-forms-data',
    state: () => {
        const testString = "Here is a test Pinia string";
        return {
            testString,
        }
    },
    persist: true,
})