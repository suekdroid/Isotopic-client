import { Delete } from '@material-ui/icons';
import { Bullet } from '../../../model/Types';
import { btnIcon, flexRow, flexRowBetween } from '../../../style/SharedStyles';
import { TextInput } from '../../ui/TextInput';

interface BulletItemProps {
    key: number;
    bullet: Bullet;
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
            <div style={flexRowBetween} className="colorInput">
                <div style={{ ...flexRow, paddingLeft: '10px' }}>
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
                            props.onUpdateSingleBullet(
                                props.bullet.bulletID,
                                text
                            )
                        }
                        validationError={''} //REMEMBER
                    />
                </div>
                <button
                    onClick={() =>
                        props.onDeleteSingleBullet(props.bullet.bulletID)
                    }
                    style={btnIcon}
                >
                    <Delete />
                </button>
            </div>
        </li>
    );
}

export { EditableBulletItem };
