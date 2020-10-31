export interface ItemsViewStore {
    items: any[];
}

export class ItemsViewStoreImpl implements ItemsViewStore {
    items: any[] = [];

    constructor(private itemsWS: SocketIOClient.Socket) {
        console.log('in constructor');
        this.itemsWS.on('connect', () => {
            console.log('Connected');
            this.itemsWS.emit('toServer', { data: 'test data' });
        })
        this.itemsWS.on('toServer', data => console.log('>>>', data));
    }
}