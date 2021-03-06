import React, {userEffect} from 'react';


function ResizeableBox(props) {
 
    return (
        <div id={`${props.i}`}
            key={`container${props.i}`}
            style={{ padding: '10px', border: '2px sold blue' }}
            onDragOver={(e) => props.onDragOverFn(e)}
        >
            <div className="dragableBox"
                onDrop={(e) => props.onDropFn(e, props.i)}
                key={props.i}
                id={`box_${props.box.id}`}
                index={props.i}
                draggable
                onDragStart={(ev) => props.onDragBoxFn(ev, props.i)}
            >
                {/* below we can add a conditional for rendering graphs or text */}
                {props.box.data}</div>
        </div>
    );
}

export default ResizeableBox;