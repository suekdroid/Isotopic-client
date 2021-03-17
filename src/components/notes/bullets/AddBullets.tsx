import { useEffect, useState } from "react";
import { Bullet } from "../../../model/Types";
import { btnIcon } from "../../../style/SharedStyles";
import { EditableBulletItem } from "./EditableBulletItem";
import AddTask from "@material-ui/icons/AddBox";

interface AddBulletProps {
    bullets?: Bullet[];
    onUpdatedBulletArray: (bulletList: Bullet[]) => void;
}

function AddBullets(props: AddBulletProps): JSX.Element {
    const [bulletList, updateBulletList] = useState<Array<Bullet>>([]);

    useEffect(() => props.onUpdatedBulletArray(bulletList), [bulletList]);

    const addEmptyBullet = () => {
        updateBulletList([
            ...bulletList,
            { bulletText: "", checked: false, bulletID: Math.random() },
        ]);
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

    useEffect(() => {
        if (props.bullets) {
            updateBulletList([...props.bullets]);
        }
    }, []);

    return (
        <div>
            <button onClick={addEmptyBullet} style={btnIcon}>
                <AddTask />
            </button>
            <ul style={bulletListStyle}>
                {bulletList.map((bullet) => (
                    <EditableBulletItem
                        key={bullet.bulletID}
                        bullet={bullet}
                        onUpdateSingleBullet={updateSingleBullet}
                        onDeleteSingleBullet={deleteSingleBullet}
                    />
                ))}
            </ul>
        </div>
    );
}

const bulletListStyle = {
    maxHeight: "300px",
    overflow: "auto",
};

export { AddBullets };
