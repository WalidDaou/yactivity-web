import {defineStore, createPinia, setActivePinia} from 'pinia';

// const pinia = createPinia();
// setActivePinia(pinia);

export const usePersistStore = defineStore('main', {
    state: () => ({
        count: 0,
        step: 3,
        showSideBar: false,
        userLogin: false,
        chooseTime: '',
        hour: '14',
        minute: '55',
        logoutTrue: false,
    }),

    actions: {

        increment() {
            this.count++;
        },

        setStep(newStep) {
            this.step = newStep;
        },

        setShowSideBar(bool) {
            this.showSideBar = bool
        },

        setUserLogin(bool) {
            this.userLogin(bool)
        },
        setChooseTime(time) {
            this.chooseTime = time
        },
        setMinute(min) {
            this.minute = min
        },
        setHoure(h) {
            this.hour = h

        },
        setLogoutTrue(bol) {
            this.logoutTrue = bol
        },

    },

    persist: {
        enabled: true,
    },

});

export const useStore = defineStore('Not-main', {


    state: () => ({
        count: 0,
        step: 3,
        showSideBar: false,
        filterNumber: 0,
        chooseTime: 'choose a time',
        hour: 14,
        minute: 20
    }),


    actions: {

        increment() {
            this.count++;
        },

        setStep(newStep) {
            this.step = newStep;
        },

        setShowSideBar(bool) {
            this.showSideBar = bool
        },
        setFilterNumber(num) {
            this.filterNumber = num
        },
        setChooseTime(time) {
            this.chooseTime = time
        },
        setMinute(min) {
            this.minute = min
        },
        setHour(h) {
            this.hour = h

        },

    },


});
