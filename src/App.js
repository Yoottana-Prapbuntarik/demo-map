import { useState } from 'react';
import './App.css';
import Lot from './components/Lot';
import DynamicIndicator from './components/dynamicSvg/indicator';
function App() {
  const [selected, setSelected] = useState("")
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
                [
                  // 1
                  {
                    name: "1-1",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-2",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-3",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-4",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-5",
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: "1-6",
                    status: '',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: "1-7",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-8",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: "1-9",
                    status: 1,
                    imgPath: "/book.svg"
                  },
                  {
                    name: "1-10",
                    status: 1,
                    imgPath: "/book.svg"
                  },
                  {
                    name: "1-11",
                    status: 1,
                    imgPath: "/book.svg"
                  },
                  {
                    name: "1-12",
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },

                  {
                    status: '',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    status: '',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    status: '',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    status: '',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    status: '',
                    imgPath: "/unavailable.svg"
                  },

                  //  2
                  {
                    name: "",
                    status: "",
                    imgPath: ""
                  },

                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },

                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '',
                    imgPath: ""
                  },

                  //  3
                  {
                    name: '1-13',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    name: '1-14',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-15',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-16',
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: '1-17',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-18',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-19',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-20',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-21',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-22',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-23',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-24',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-25',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    name: '1-26',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-27',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-28',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },

                  // 4
                  {
                    name: '1-29',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    name: '1-30',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-31',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-32',
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: '1-33',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-34',
                    status: 1,
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-35',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-36',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-37',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-38',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-39',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-40',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-41',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    name: '1-42',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-43',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-44',
                    status: '1',
                    imgPath: "/book.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },


                  // 5
                  {
                    name: '1-45',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },

                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '1',
                    imgPath: ""
                  },
                  {
                    status: '',
                    imgPath: ""
                  },


                  // 6
                  {
                    name: '1-62',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    name: '1-46',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-47',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-48',
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: '1-49',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-50',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-51',
                    status: 1,
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-52',
                    status: 1,
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-53',
                    status: 1,
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-54',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-55',
                    status: 1,
                    imgPath: "/book.svg"
                  },
                  {
                    name: '1-56',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-57',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    name: '1-58',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-59',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-60',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-61',
                    status: '1',
                    imgPath: "/available.svg"
                  },

                  // 7
                  {
                    name: '1-79',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    name: '1-63',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-64',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-65',
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: '1-66',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-67',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-68',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-69',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-70',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-71',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-72',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-73',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-74',
                    status: 1,
                    imgPath: "/book.svg"
                  },
                  {
                    status: '',
                    imgPath: ""
                  },
                  {
                    name: '1-75',
                    status: '1',
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-76',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-77',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-78',
                    status: '1',
                    imgPath: "/book.svg"
                  },

                  // 8
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    status: 1,
                    imgPath: ""
                  },
                  {
                    name: '1-80',
                    status: 1,
                    imgPath: "/unavailable.svg"
                  },
                  {
                    name: '1-81',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-82',
                    status: 1,
                    imgPath: "/available.svg"
                  },

                  {
                    name: '1-83',
                    status: '1',
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-84',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                  {
                    name: '1-85',
                    status: 1,
                    imgPath: "/available.svg"
                  },
                ]
                  .map((item, index) => {
                    return (
                      <>
                        {
                          item.imgPath ?
                            <Lot key={index} lotName={item.status === "" ? "" : `${item.name ?? ""}`} imagePath={item.imgPath} selected={selected} onSelected={setSelected} /> :
                            <div style={{ marginTop: '1rem' }}></div>
                        }
                      </>
                    )
                  })
              }

            </div>
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0
            }}>
              Entrance
            </div>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
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
      <div>
        fwefe
      </div>
    </div>
  );
}

export default App;
