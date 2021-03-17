import { Bullet } from "../../../model/Types";
import { flexRowBetween } from "../../../style/SharedStyles";

interface BulletItemProps {
    key: number;
    bullet: Bullet;
}

function ReadOnlyBulletItem(props: BulletItemProps): JSX.Element {
    return (
        <li>
            <div style={flexRowBetween}>
                <p>{props.bullet.bulletText}</p>
                <input
                    type="checkbox"
                    checked={props.bullet.checked}
                    readOnly
                />
            </div>
        </li>
    );
}

export { ReadOnlyBulletItem };
