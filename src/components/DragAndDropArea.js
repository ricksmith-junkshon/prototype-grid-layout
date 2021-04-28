import React from 'react';
import './style.css';

const boxes = [1 ,2 ,3, 4, 5, 6]

function DragAndDropArea(props) {

    return (
        <div className='dragArea' onDragOver={(e) => onDragOver(e)}>
            {boxes.map((box, i) => {
                return (<div id={`${i}`}
                        style={{padding: '10px', border: '2px sold blue'}}
                        onDrop={(e) => onDrop(e)}>
                            <div className="dragableBox"
                            onDrop={(e) => onDrop(e)}
                            key={i}
                            draggable
                            onDragStart={(ev) => onDragBox(ev, i)}
                            >{box}</div>
                        </div>)
            })}
        </div>
    );

};

const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('ONDragover>>', e)
}

const onDragBox = (ev, id) => {
    // console.log(id, ev, "<><><><><>");
    ev.dataTransfer.setData("id", id)
    // console.log(ev, "<<<EVENT<<<")
};

const onDrop = (e, id) => {
    e.stopPropagation();
    console.log(id, e, "ONDROP<<<<<<<<<<<")
}

export default DragAndDropArea;