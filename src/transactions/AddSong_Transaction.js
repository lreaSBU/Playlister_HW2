import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, pos, song) {
        super();
        this.app = initApp;
        this.pos = pos;
        this.song = song;
    }

    doTransaction() {
        this.app.addSong(this.song, this.pos);
    }
    
    undoTransaction() {
        this.app.removeSong(this.pos);
    }
}