import { decorate, observable, action } from "mobx";

class LandingStateStore {
    title;
    description;
    backgroundStyle;
    isService;
    defaultFocusElement;
    tiles;

    constructor() {
        this.setMain();
    }

    setMain() {
        this.title = 'CHEVAL COLLECTION';
        this.description = 'The smart way to live in the city';
        this.backgroundStyle = `url(${require(`../images/cheval.jpg`)})`;
        this.isService = false;
        this.defaultFocusElement = '.about';
        this.tiles = [
            {title: 'About Hotel', icon: 'about_hotel.svg', menu: 'about'},
            {title: 'Entertainment', icon: 'ott.svg', menu: 'ott'},
            {title: 'Hotel Services', icon: 'room_service.svg', menu: 'services'},
            {title: 'Explore', icon: 'nearby_attractions.svg', menu: 'la'},
        ]
    }



    setBanner(menu) {
        let banner;
        switch (menu) {
            case 'about':
                banner = 'cheval.jpg';
                this.title = 'CHEVAL COLLECTION';
                this.description = 'The smart way to live in the city.';
                break;
            case 'ott':
                banner = 'ott.jpg';
                this.title = 'Enjoy your favorite movies & TV shows';
                this.description = '';
                break;
            case 'services':
                banner = 'service.jpg';
                this.title = 'At your service';
                this.description = 'Enjoy the best service in the city';
                break;
            case 'la':
                banner = 'local_attractions.jpg';
                this.title = 'Beaches, Restaurants & View points ';
                this.description = 'Best places to be';
                break;
            default:
                banner = 'hotel.jpg'
        }

        this.backgroundStyle =
            `url(${require(`../images/${banner}`)})`;
    }

    setFocusElement(elem) {
        this.defaultFocusElement = elem;
    }
}


decorate(LandingStateStore, {
    title: observable,
    description: observable,
    backgroundStyle: observable,
    isService: observable,
    defaultFocusElement: observable,
    tiles: observable,
    setBanner: action,
    setMain: action,
});
const landingStore =  new LandingStateStore();
export default landingStore;