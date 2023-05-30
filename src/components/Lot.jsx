const Lot = ({ lotName, imagePath, selected, onSelected }) => {
    return (
        <div className="d-flex">

            <div className="lot"
            onClick={()=> onSelected(lotName)} 
            style={{
                backgroundImage: `url(${imagePath})`
            }}>
                <span className="text-lot">
                    {lotName}
                </span>
            </div>
            {
                lotName === selected && lotName != "" &&
                <img src={'selected.svg'} />
            }
        </div>

    )
}

export default Lot