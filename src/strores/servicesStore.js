import { decorate, observable, action } from "mobx";

class ServicesStore {
    title;
    description;
    backgroundStyle;
    isService;
    defaultFocusElement;
    services;
    isOverlay;
    selectedService;

    constructor() {
        this.setService();
    }

    setService() {
        this.title = 'At your service';
        this.description = 'Enjoy the best service in the city';
        this.backgroundStyle = `linear-gradient(
      to bottom,
      transparent 0%,
      #000000 57%,
      black 100%
    ),url(${require(`../images/service.jpg`)})`;
        this.isService = true;
        this.defaultFocusElement = '.gym';
        this.services = [
            {title: 'Gym', icon: 'gym.svg', menu: 'gym' },
            {title: 'Spa', icon: 'spa.svg', menu: 'spa'},
            {title: 'Clean My Room', icon: 'clean.svg', menu:'clean' },
            {title: 'Collect Laundry', icon: 'laundry.svg', menu: 'laundry'},
            {title: 'View My Bill', icon: 'bill.svg', menu: 'bill'},
        ]
        this.selectedService = {name:'', icon: '',title:null,
            messages:['Service assistant will soon be at your doorstep'], isConfirmation:true};
    }

    selectService(serviceName) {
        const  service = this.services.find(item => item.menu === serviceName);
        if(serviceName === 'bill') {
            this.selectedService.isConfirmation = false;
        } else {
            this.selectedService.isConfirmation = true;
        }
        this.selectedService.name = serviceName;
        this.selectedService.icon = service.icon;
        this.isOverlay = true;
    }

    resetOverlay() {
        this.isOverlay = false;
    }

    resetFocusElement(element) {
        this.defaultFocusElement = element;
    }
}

decorate(ServicesStore, {
    title: observable,
    description: observable,
    backgroundStyle: observable,
    isService: observable,
    isOverlay: observable,
    defaultFocusElement: observable,
    services: observable,
    setMain: action,
    selectService: action,
    resetOverlay: action,
});
const servicesStore =  new ServicesStore();
export default servicesStore;