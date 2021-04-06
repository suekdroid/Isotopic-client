import { SyntheticEvent, useEffect, useState } from 'react';
import { Bullet } from '../../../../../model/Types';
import { btnIcon } from '../../../style/SharedStyles';
import { EditableBulletItem } from './EditableBulletItem';
import AddTask from '@material-ui/icons/AddBox';

interface AddBulletProps {
    bullets?: Bullet[];
    onUpdatedBulletArray: (bulletList: Bullet[]) => void;
}

function AddBullets(props: AddBulletProps): JSX.Element {
    const [bulletList, updateBulletList] = useState<Array<Bullet>>(
        props.bullets ? [...props.bullets] : []
    );

    useEffect(() => props.onUpdatedBulletArray(bulletList), [bulletList]);

    const addEmptyBullet = () => {
        updateBulletList([
            ...bulletList,
            { bulletText: '', checked: false, bulletID: Math.random() },
        ]);
    };

    //Combine updates to one function
    const updateBulletCheckedState = (
        bulletID: number,
        newCheckedState: boolean
    ) => {
        const updatedList = bulletList.map((bullet) =>
            bullet.bulletID === bulletID
                ? { ...bullet, checked: newCheckedState }
                : bullet
        );
        updateBulletList([...updatedList]);
    };
    const updateSingleBullet = (bulletID: number, text: string) => {
        const updatedList = bulletList.map((bullet) =>
            bullet.bulletID === bulletID
                ? { ...bullet, bulletText: text }
                : bullet
        );
        updateBulletList([...updatedList]);
    };

    const deleteSingleBullet = (bulletID: number) => {
        const updatedList = bulletList.filter(
            (element) => element.bulletID !== bulletID
        );
        updateBulletList([...updatedList]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Enter':
                if (e.ctrlKey) {
                    addEmptyBullet();
                }
                break;
        }
    };

    return (
        <div>
            <button
                onClick={addEmptyBullet}
                style={btnIcon}
                className="coloricon"
            >
                <AddTask />
            </button>
            <ul style={bulletListStyle}>
                {bulletList.map((bullet) => (
                    <EditableBulletItem
                        key={bullet.bulletID}
                        bullet={bullet}
                        onKeyPressed={handleKeyPress}
                        onChangeBulletCheckState={updateBulletCheckedState}
                        onUpdateSingleBullet={updateSingleBullet}
                        onDeleteSingleBullet={deleteSingleBullet}
                    />
                ))}
            </ul>
        </div>
    );
}

const bulletListStyle = {
    maxHeight: '300px',
    overflow: 'auto',
};

export { AddBullets };
