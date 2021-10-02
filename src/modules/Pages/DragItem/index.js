import React, { useState } from 'react';
import {
    arrayMove,
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";
import { exampleData } from '../../../ultils/exampleData';

import './index.scss';

const Handle = SortableHandle(({ tabIndex, images }) => (
    <div className='tab-item' tabIndex={tabIndex}>
        <img alt='' src={images} className='img-tab' />
    </div>
));

const SortableItem = SortableElement(({ value }) => {
    return (
        <div>
            <div className="content">
                <Handle images={value.preview} />
            </div>
        </div>
    );
});

const SortableList = SortableContainer(
    ({ items }) => {
        return (
            <div className='grid'>
                {items.map((item, index) => (
                    <SortableItem
                        key={`item-${item.id}`}
                        index={index}
                        value={item}
                    />
                ))}
            </div>
        );
    });


function DragItem() {
    const _data = exampleData.sort(()=>Math.random() - 0.5);
    const [photos, setPhotos] = useState(_data);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setPhotos(arrayMove(photos, oldIndex, newIndex));
    };

    return (

        <SortableList
            shouldUseDragHandle={true}
            useDragHandle
            axis="xy"
            items={photos}
            onSortEnd={onSortEnd}
        />

    );
}

export default DragItem;