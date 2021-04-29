import React, { useState } from 'react';
import ResizeableBox from './resizableBox/ResizeableBox';
import './style.css';


function DragAndDropArea(props) {

	const [boxes, setBoxes] = useState(props.boxes);
	const [dragTarget, setDragTarget] = useState(0);

	const onDragOver = (e) => {
		e.preventDefault();
	}

	const onDragBox = (ev, id) => {
		setDragTarget(Number(ev.target.getAttribute("index")))
	};

	const onDrop = (e, targetIndex) => {
		const movedItem = boxes[dragTarget];
		const remainingItems = boxes.filter((box, index) => index !== dragTarget);
		const reorderedItems = [
			...remainingItems.slice(0, targetIndex),
			movedItem,
			...remainingItems.slice(targetIndex)
		];
		setBoxes(reorderedItems);
	}

	return (
		<div className='dragArea'>
			{boxes.map((box, i) => {
				return (
					<ResizeableBox
						box={box}
						i={i}
						key={`rBox${i}`}
						onDragOverFn={onDragOver}
						onDropFn={onDrop}
						onDragBoxFn={onDragBox}></ResizeableBox>
				)
			})}
		</div>
	);
};


export default DragAndDropArea;