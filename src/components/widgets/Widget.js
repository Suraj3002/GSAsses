import './Widget.css'

const Widget = ({name,number,gas,growth}) => {
  let val = false;
  if(name === "Emission By Carding") val = true;

  return (
    <div className='widget'>
        <div className="left">
            <div className='title-name'>{name}</div>
            <div className="number">{number}</div>
            <div className="gas">{gas}</div>
            <div className="exText">
            <div className="growth">{growth}</div>
            {val === true && <p className='p-text'>From 4.6%</p> }
            </div>
        </div>
    </div>
  )
}

export default Widget