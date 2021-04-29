import React, {useState} from 'react';
import ResizeableBox from './resizableBox/ResizeableBox';
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";
import './style.css';


function DragAndDropArea(props) {

    const [boxes, setBoxes] = useState(props.boxes);
    // const [dragTarget, setDragTarget] = useState(0);

    // const onDragOver = (e) => {
    //     e.preventDefault();
    // }
    
    // const onDragBox = (ev, id) => {
    //     setDragTarget(Number(ev.target.getAttribute("index")))
    // };
    
    // const onDrop = (e, targetIndex, id) => {
    //     const indexToRemove = dragTarget > targetIndex ? dragTarget + 1 : dragTarget;
    //     const target = targetIndex === 0 ? targetIndex : (dragTarget === targetIndex + 1 ? targetIndex : targetIndex + 1 );
    //     const boxToMove = boxes[dragTarget];
    //     const boxArr = boxes.slice();
    //     boxArr.splice(target, 0, boxToMove);
    //     boxArr.splice(indexToRemove, 1)

    //     setBoxes(boxArr);
    // }

    // return (
    //     <div className='dragArea'>
    //         {boxes.map((box, i) => {
    //             return (
    //             <ResizeableBox
    //                 box={box}
    //                 i={i}
    //                 key={`rBox${i}`}
    //                 onDragOverFn={onDragOver}
    //                 onDropFn={onDrop}
    //                 onDragBoxFn={onDragBox}></ResizeableBox>
    //                 )
    //         })}
    //     </div>
    // );
 
  // target id will only be set if dragging from one dropzone to another.
  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(boxes, sourceIndex, targetIndex);
    setBoxes(nextState);
  }
 
  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        id="items"
        boxesPerRow={4}
        rowHeight={220}
        style={{ height: "100%" }}
      >
        {boxes.map((item, i) => (
          <GridItem key={item.id}>
            <div
              className='dragableBox'
              key={`item${i}`}
            >
              {item.data}
            </div>
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  );

};


export default DragAndDropArea;