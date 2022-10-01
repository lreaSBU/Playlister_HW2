import React from "react";

class Song{
    constructor(n, a, l){
        this.title = n;
        this.artist = a;
        this.youTubeId = l;
    }
}

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    removeSong = (e) => {
        console.log("REMOVING!!!");
        let num = this.getItemNum()-1;
        const { song } = this.props;
        let send = new Song(song.title, song.artist, song.youTubeId);
        console.log("--> " + send.title + ", " + send.artist + ", " + send.youTubeId);
        this.props.removeCallback(num, send);
    }
    edit = (e) => {
        let num = this.getItemNum()-1;
        const { song } = this.props;
        let send = new Song(song.title, song.artist, song.youTubeId);
        this.props.editCallback(num, send);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        //console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.edit}
                draggable="true"
            >
                {num}. <a href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                    {song.title} by {song.artist}
                    </a>

                <button className={"playlister-song-button"} onMouseDown={this.removeSong}>X</button>
            </div>
        )
    }
}