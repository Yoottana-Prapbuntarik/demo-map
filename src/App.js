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
        <div style={{
          display: 'flex', flexDirection: 'column', padding: '2rem'
        }}>
          {
            selected &&
            <h5>
              Now selected parking lot: {selected}
            </h5>
          }
          <div style={{ display: 'flex', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(19,1fr)', gridGap: '8px' }}>
              {
                floorList.map((item, index) => {
                  return (
                    <>
                      {
                        item.imgPath ?
                          <Lot 
                          debug
                          raw={item}
                          key={index} lotName={`${item.parking_lot ?? ""}`} imagePath={item.imgPath} selected={selected}
                            onSelected={
                              item.imgPath === "/book.svg" || item.imgPath === "/unavailable.svg" ?
                                (e) => console.log('not selected ', e) :
                                setSelected
                            }
                          /> :
                          <div style={{ marginTop: '1rem' }}></div>
                      }
                    </>
                  )
                })
              }

            </div>
            <div style={{
              position: "absolute",
              bottom: -50,
              right: 0
            }}>
              Entrance
            </div>
          </div>
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: "#383E53" }}>
              <div>
                <DynamicIndicator color="#383E53" />
              </div>
              <div style={{ marginLeft: '1rem' }}>  Available </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: "#C9CBD0" }}>
              <DynamicIndicator color="#C9CBD0" />
              <div style={{ marginLeft: '1rem' }}>  Unavailable </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: "#EE9C22" }}>
              <DynamicIndicator color="#EE9C22" />
              <div style={{ marginLeft: '1rem' }}>  Booked </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={'selected.svg'} />
              <div style={{ marginLeft: '1rem' }}>
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
