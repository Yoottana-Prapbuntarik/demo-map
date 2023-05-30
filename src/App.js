import { useState, useEffect } from 'react';
import './App.css';
import Lot from './components/Lot';
import DynamicIndicator from './components/dynamicSvg/indicator';
import axios from 'axios';
function App() {
  const [selected, setSelected] = useState("")
  const [floorList, setFloor] = useState([])
  useEffect(() => {
    const noSlot = { imgPath: '/unavailable.svg' };
    const empty = {};

    axios.get("https://tsmartoffice.verkoffice.com/apiuser/reserve/car-guidances/").then((response) => {
      const { floor_1 } = response.data.data
      const convertFromRaw = floor_1.map((item) => {
        return {
          ...item,
          imgPath: item.status == 1 ? "/available.svg" : "/unavailable.svg"
        }
      })

      // map row 1
      const row1 = ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12']
      const row_1 = convertFromRaw.filter((item) => {
        if (row1.includes(item.parking_lot)) {
          return item
        }
      })
      row_1.push(empty)
      row_1.push(empty)
      row_1.push(noSlot)
      row_1.push(noSlot)
      row_1.push(noSlot)
      row_1.push(noSlot)
      row_1.push(noSlot)


      // map row 2
      const row2 = ['1-13', '1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20', '1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27', '1-28']
      const row_2 = convertFromRaw.filter((item) => {
        if (row2.includes(item.parking_lot)) {
          return item
        }
      })
      row_2.splice(1, 0, empty)
      row_2.splice(14, 0, empty);
      row_2.splice(18, 0, empty);


      const row3 = ['1-29', '1-30', '1-31', '1-32', '1-33', '1-34', '1-35', '1-36', '1-37', '1-38', '1-39', '1-40', '1-41', '1-42', '1-43', '1-44']
      const row_3 = convertFromRaw.filter((item) => {
        if (row3.includes(item.parking_lot)) {
          return item
        }
      })

      // map row 3
      row_3.splice(1, 0, empty)
      row_3.splice(14, 0, empty);
      row_3.splice(18, 0, empty);


      const row4 = ['1-45']
      const row_4 = convertFromRaw.filter((item) => {
        if (row4.includes(item.parking_lot)) {
          return item
        }
      })
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)
      row_4.push(empty)


      const row5 = ['1-46', '1-47', '1-48', '1-49', '1-50', '1-51', '1-52', '1-53', '1-54', '1-55', '1-56', '1-57', '1-58', '1-59', '1-60', '1-61']
      const row_5 = convertFromRaw.filter((item) => {
        if (row5.includes(item.parking_lot)) {
          return item
        }
      })

      row_5.splice(0, 0, convertFromRaw.find(item => item.parking_lot === "1-62"))
      row_5.splice(1, 0, empty)
      row_5.splice(14, 0, empty)

      const row6 = ['1-63', '1-64', '1-65', '1-66', '1-67', '1-68', '1-69', '1-70', '1-71', '1-72', '1-73', '1-74', '1-75', '1-76', '1-77', '1-78']
      const row_6 = convertFromRaw.filter((item) => {
        if (row6.includes(item.parking_lot)) {
          return item
        }
      })

      row_6.splice(0, 0, convertFromRaw.find(item => item.parking_lot === "1-79"))
      row_6.splice(1, 0, empty)
      row_6.splice(14, 0, empty)


      const row7 = [ '1-80', '1-81', '1-82', '1-83', '1-84', '1-85']
      const row_7 = convertFromRaw.filter((item) => {
        if (row7.includes(item.parking_lot)) {
          return item
        }
      })
      row_7.splice(0,0, empty)
      row_7.splice(1,0, empty)
      setFloor([...row_1, ...row_2, ...row_3, ...row_4, ...row_5, ...row_6, ...row_7])
    })
  }, [])

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
                          <Lot key={index} lotName={`${item.parking_lot ?? ""}`} imagePath={item.imgPath} selected={selected}
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
      </header>
    </div>
  );
}

export default App;
