import { Bullet } from '../../../../../model/Types';
import { flexRow } from '../../../style/SharedStyles';

interface BulletItemProps {
    key: number;
    bullet: Bullet;
}

function ReadOnlyBulletItem(props: BulletItemProps): JSX.Element {
    return (
        <li>
            <div style={flexRow}>
                <input
                    type="checkbox"
                    checked={props.bullet.checked}
                    readOnly
                />
                <p>{props.bullet.bulletText}</p>
            </div>
        </li>
    );
}

export { ReadOnlyBulletItem };
