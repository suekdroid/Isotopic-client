import CSS from 'csstype';

function Labels(): JSX.Element {
    return (
        <div style={labelComponentStyle} className="darkest">
            <p>Cars</p>
            <p>Hobbies</p>
            <p>Derp</p>
        </div>
    );
}
const labelComponentStyle: CSS.Properties = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '10px 20px 10px 20px',
    alignItems: 'center',
};
export { Labels };
