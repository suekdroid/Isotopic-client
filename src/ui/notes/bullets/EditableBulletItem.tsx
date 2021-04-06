import { Delete } from '@material-ui/icons';
import React from 'react';
import { Bullet } from '../../../../../model/Types';
import { btnIcon, flexRow } from '../../../style/SharedStyles';
import { TextInput } from '../../../ui/shared/input/TextInput';

interface BulletItemProps {
    key: number;
    bullet: Bullet;
    // onKeyPressed: (textValue: string) => void;
    onKeyPressed: (e: React.KeyboardEvent) => void;
    onChangeBulletCheckState: (
        bulletID: number,
        newCheckState: boolean
    ) => void;
    onUpdateSingleBullet: (bulletID: number, bulletText: string) => void;
    onDeleteSingleBullet: (bulletID: number) => void;
}

function EditableBulletItem(props: BulletItemProps): JSX.Element {
    return (
        <li>
            <div
                style={{ ...flexRow, paddingLeft: '10px' }}
                className="colorInput"
                onKeyDown={props.onKeyPressed}
            >
                <input
                    type="checkbox"
                    checked={props.bullet.checked}
                    onChange={(e) =>
                        props.onChangeBulletCheckState(
                            props.bullet.bulletID,
                            e.currentTarget.checked
                        )
                    }
                />
                <TextInput
                    inputType="text"
                    label=""
                    placeholder="Aa"
                    value={props.bullet.bulletText}
                    updateInput={(text: string) =>
                        props.onUpdateSingleBullet(props.bullet.bulletID, text)
                    }
                    validationError={''} //REMEMBER
                />
                <button
                    onClick={() =>
                        props.onDeleteSingleBullet(props.bullet.bulletID)
                    }
                    style={btnIcon}
                >
                    <Delete className="coloricon" />
                </button>
            </div>
        </li>
    );
}

export { EditableBulletItem };
