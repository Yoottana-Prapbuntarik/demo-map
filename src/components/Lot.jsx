const Lot = ({ lotName, imagePath, selected, onSelected, raw, debug, customStyle }) => {
    return (
        <div>
            <div className={"lot"}
                onClick={() => onSelected(lotName)}
                style={{
                    backgroundImage: `url(${imagePath})`,
                    ...customStyle
                }}>
                <span className="text-lot">
                    {lotName}
                </span>
            </div>
            <div style={{ position: 'relative' }}>
                {
                    lotName === selected && lotName != "" &&
                    <img src={'selected.svg'} style={{
                        position: 'absolute',
                        left: '7px',
                        right: '7px',
                        top: '7px',
                    }} />
                }
                {
                    debug && 
                    <small
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                        }}
                    >
                        {raw.parking_i},{raw.parking_j}
                        <div style={{background: raw.status === 1 ? 'green' :raw.status === 0 ? 'red' : 'gray', fontSize: '15px' }}>
                            {raw.status}
                        </div>
                    </small>
                }
            </div>
        </div>

    )
}

export default Lot