import {decorate, observable, action} from "mobx/lib/mobx";
import cartStore from "./cartStore";

class LocalAttractionStore {
    items;
    isLaActive;
    title;
    description;
    selectedItem;
    loyaltyPoints;

    constructor() {
        this.setAttractions();
        this.loyaltyPoints = 1430;
    }

    setAttractions() {
        this.isLaActive = true;
        this.title = "Local Attractions";
        this.description = null;
        this.items = [{
            id: 1,
            title: 'British Museum',
            description :`The British Museum is both an architectural beauty and a trove of some of the world's most noted antiquities. 
            In fact, many travelers it's the best museum in all of London. What's more, it's free to visit.`,
            image:'https://travel.usnews.com/dims4/USNEWS/4d5331f/2147483647/resize/304x256>/quality/85/?url=/static-travel/images/destinations/82/11271619826_08a3ef2d3d_o.jpg',
            sponsored: true,
        },
            {
                id: 2,
                title: 'Tower of London',
                description :`Tower of London's interior is always bustling with activity.
                 The tower, which actually comprises multiple towers – 12 of which can be explored by the public – offers something for everyone. 
                 If you're enchanted with the history of the monarch, don't miss the famous crown jewels exhibition.`,
                image:'https://travel.usnews.com/dims4/USNEWS/7d6dbf4/2147483647/resize/304x256>/quality/85/?url=/static-travel/images/destinations/82/gettyimages-807070322.jpg'
            },
            {
                id: 3,
                title: 'Buckingham Palace',
                description :` Buckingham Palace, the London home of Queen Elizabeth II, is open for tour (except for the queen's private quarters, of course) in the summers and select dates during the winter and spring. On the tour, you'll have access to the 19 State Rooms where the queen and members of the royal family host guests for state, ceremonial and official affairs.`,
                image:'https://travel.usnews.com/dims4/USNEWS/b75c301/2147483647/resize/304x256>/quality/85/?url=/static-travel/images/destinations/82/gettyimages-807070348.jpg'
            },
            {
                id: 4,
                title: 'Portobello Road Market',
                description :`Locals and tourists alike tend to adore Portobello Road Market. Located in the posh Notting Hill neighborhood (made famous by the Hugh Grant and Julia Roberts movie of the same name), the market stretches down the long Portobello Road, considered to be the high street (or main street) of Notting Hill.
                 The market is filled with merchants of all kinds (more than 1,000 to be exact) selling a variety of common flea market items including antiques, art, jewelry, clothing and food. `,
                image:'https://travel.usnews.com/dims4/USNEWS/119b459/2147483647/resize/304x256>/quality/85/?url=/static-travel/images/destinations/82/11438039634_14f38af429_o.jpg'
            }

        ]
    }

    setGifts() {
        this.title = "Souvenirs";
        this.isLaActive = false;
        this.description = 'Gifts and souvenirs will be delivered to your room.';
        this.items = [{
            id:1,
            title: ' Liberty Print Knot Watch',
            description: `A great way to own and wear a fabulous Liberty fabric is with this modern multi-colored Liberty print knot watch. Stylish yet eye-catching in a range of contemporary designs it is a great way to give a truly British gift from this iconic London landmark store. Built in the 1920s from timber from HMS Impregnable and HMS Hindustan, the Liberty building is now as much a London icon as Harrods. `,
            image: 'https://www.gpsmycity.com/img/art_item/e1d7f5a136c-liberty-print-knot-watch.jpg',
            buyable: true,
            price: '£ 10.00',
            pricePoints:'500',
            type:'souvenir'
        },
            {
                id:2,
                title: 'Sherlock Holmes Pub Sign',
                description: `One of London’s main attractions are the old coaching inns and pubs which serve cheap pub food and both alcoholic and non-alcoholic drinks throughout the day. This Sherlock Holmes pub sign is one of a series of London prints and is the ideal gift to thrill any British pub fan.
                 The colorful print measures 12 inches by 8 inches and has a high-quality giclee finish to give added texture and durability. .`,
                image: 'https://www.gpsmycity.com/img/art_item/f545de3f19d-sherlock-holmes-pub-sign.jpg',
                buyable: true,
                price: '£ 7.00',
                pricePoints:'250',
                type:'souvenir'

            },
            {
                id:3,
                title: 'Tower Bridge Cufflinks',
                description: `These classy cufflinks are actually made in Deptford, Southeast London and exude a touch of classic luxury and sophistication without being flashy. They feature a beautifully detailed photographic image by Allison Wiffen of the iconic Tower Bridge. These contemporary ceramic accessories make a beautiful fashion statement with their subtle black and white image and glossy finish.`,
                image: 'https://www.gpsmycity.com/img/art_item/ac405b5296a-tower-bridge-cufflinks.jpg',
                price: '£ 5.00',
                buyable: true,
                pricePoints:'500',
                type:'souvenir'
            },
            {
                id:4,
                title: 'Commemorative Pillbox',
                description: `This tastefully designed and decorated pillbox is part of a collection of items produced by Buckingham Palace to celebrate the wedding of Prince William to Katherine Middleton on April 29, 2011. The official Royal Wedding china collection is only available from the Buckingham Palace shops and makes a very special souvenir and collectible gift. The pillbox measures 2½ inches in diameter and stands one inch high. 
                The removable lid has the couple’s initials entwined in gold and silver with the royal coronet above. .`,
                image: 'https://www.gpsmycity.com/img/art_item/e1c9fe58782-commemorative-pillbox.jpg',
                buyable: true,
                price: '£ 5.00',
                pricePoints:'500',
                type:'souvenir'
            },
            {
                id:6,
                title: 'Die Cast Original Mini Cooper',
                description: `Boys of all ages will love this die cast metal Mini Cooper model which comes in racing red or black. Just like the original, it has a union jack painted on the roof and on both the driver and passenger doors. This scale model is 1:36 and is highly collectible. The model car measures 4½ inches long and the doors really open. It also has pull-back-and-go action wheels for even more fun. First produced in 1967, 
                the Mini Cooper has been a favorite with the British public ever since, being both economical and fun..`,
                image: 'https://www.gpsmycity.com/img/art_item/f5cb6dbdff4-die-cast-original-mini-cooper.jpg',
                buyable: true,
                price: '£ 5.00',
                pricePoints:'500',
                type:'souvenir'
            }]
    }

    selectGiftItem(item) {
        cartStore.addItem(item);
        this.selectedItem = item;
        this.selectedItem.icon = 'tick.svg'

    }

    redeemPoints() {
        this.selectedItem.messages = [`${this.selectedItem.pricePoints} loyalty point has been redeemed`,
            `Your souvenirs will be delivered to your room`];
    }

    addToBill() {
        this.selectedItem.messages = [`${this.selectedItem.price} has been added to your bill`,
            `Your souvenir will be delivered to your room`];
    }

    resetSelectedItems() {
        this.selectedItem = null;
        this.isLaActive = true;
    }

}
decorate(LocalAttractionStore, {
    title: observable,
    description: observable,
    items: observable,
    isLaActive: observable,
    setAttractions: action,
    setGifts: action,
    resetSelectedItems: action

});

const localAttractionStore = new LocalAttractionStore();
export  default localAttractionStore;