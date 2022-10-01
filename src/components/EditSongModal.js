import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { listKeyPair, deleteCallback, hideCallback } = this.props;
        /*let name = "";
        if (listKeyPair) {
            name = listKeyPair.name;
        }*/
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class = "modal-center" id="edit-song-title-input">
                            <label for="tname">Title:</label>
                            <input type="text" id="tname" name="tname"></input>
                        </div>
                        <div class = "modal-center" id="edit-song-artist-input">
                            <label for="aname">Artist:</label>
                            <input type="text" id="aname" name="aname"></input>
                        </div>
                        <div class = "modal-center" id="edit-song-link-input">
                            <label for="lname">Youtube ID:</label>
                            <input type="text" id="lname" name="lname"></input>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}