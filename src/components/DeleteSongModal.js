import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { listKeyPair, deleteCallback, hideCallback } = this.props;
        let name = "";
        if (listKeyPair && listKeyPair.length === 2 && listKeyPair[1]) {
            name = listKeyPair[1].title;
        }
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Delete Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to delete {name}?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}