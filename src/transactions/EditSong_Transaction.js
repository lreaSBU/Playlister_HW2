import jsTPS_Transaction from "../common/jsTPS.js"
class Song{
    constructor(n, a, l){
        this.title = n;
        this.artist = a;
        this.youTubeId = l;
    }
}
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, pos, song, sum) {
        super();
        this.app = initApp;
        this.pos = pos;
        this.os = song;
        this.ns = new Song(sum[0], sum[1], sum[2]);
    }

    doTransaction() {
        this.app.setSong(this.pos, this.ns);
    }
    
    undoTransaction() {
        this.app.setSong(this.pos, this.os);
    }
}