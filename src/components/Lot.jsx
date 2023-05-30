const Lot = ({ lotName, imagePath, selected, onSelected }) => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <div className="lot"
                onClick={() => onSelected(lotName)}
                style={{
                    backgroundImage: `url(${imagePath})`
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
            </div>
        </div>

    )
}

export default Lot