import { arrayMoveImmutable } from 'array-move';
import React, {useState } from 'react';

import {
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";
import { exampleData } from '../../ultils/exampleData';
// import { exampleData } from '../../ultils/exampleData';


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

    const _data = exampleData.sort(() => Math.random() - 0.5);

    const [photos, setPhotos] = useState(_data);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setPhotos(arrayMoveImmutable(photos, oldIndex, newIndex));
    };

    return (
        <div className='container'>
            <div className='header-page'>
                Kéo thả ảnh để ghép thành bức ảnh hoàn chỉnh
            </div>
            <SortableList
                shouldUseDragHandle={true}
                useDragHandle
                axis="xy"
                items={photos}
                onSortEnd={onSortEnd}
            />
        </div>

    );
}

export default DragItem;