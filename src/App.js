import { useState } from 'react';
import './App.css';
import Lot from './components/Lot';
import DynamicIndicator from './components/dynamicSvg/indicator';
import { useCarGuideLine } from "./hooks/mapCarGuideLine"
function App() {
  const [selected, setSelected] = useState("")
  const { floorList, floor, selectedFloor } = useCarGuideLine()
  return (
    <div className="App">
      <header className="App-header">
        <div className='container-car-guideline'>
          {
            selected &&
            <h5>
              Now selected parking lot: {selected}
            </h5>
          }
          <div className='container-sub-car-guideline'>
            <div className='row-sub-car-guideline'>
              {
                floorList.map((item, index) => {
                  return (
                    <>
                      {
                        item.imgPath ?
                          <>
                            <Lot
                              raw={item}
                              key={index} lotName={`${item.parking_lot ?? ""}`} imagePath={item.imgPath} selected={selected}
                              onSelected={
                                item.imgPath === "/book.svg" || item.imgPath === "/unavailable.svg" ?
                                  (e) => console.log('not selected ', e) :
                                  setSelected
                              }
                            />
                          </>
                          :
                          <div className='mt-1rem'></div>
                      }
                    </>
                  )
                })
              }

            </div>
            <div className='entrance'>
              Entrance
            </div>
          </div>
          <div className='container-status'>
            <div className='avaliable'>
              <div>
                <DynamicIndicator color="#383E53" />
              </div>
              <div className='ml-1rem'>  Available </div>
            </div>
            <div  className="unnavailable">
              <DynamicIndicator color="#C9CBD0" />
              <div className='ml-1rem'>  Unavailable </div>
            </div>
            <div className='booked'>
              <DynamicIndicator color="#EE9C22" />
              <div className='ml-1rem'>  Booked </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={'selected.svg'} />
              <div className='ml-1rem'>
                Selected
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => { selectedFloor(floor == 1 ? 2 : 1); }} >เปลี่ยนชั้น</button>
      </header>
    </div>
  );
}

export default App;
