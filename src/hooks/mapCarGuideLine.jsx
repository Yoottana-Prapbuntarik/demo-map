import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCarGuideLine = () => {
    const [floorList, setFloor] = useState([])
    const [floor, selectedFloor] = useState(1)

    useEffect(() => {
        if (floor == 1) {
            const noSlot = { imgPath: '/unavailable.svg' };
            const empty = {};
            const stair = { imgPath: '/stair.svg' }
            const liff = { imgPath: '/liff.svg' }
            axios.get("https://k8s-tsmartoffice.verkoffice.com/parking/reserve/car-guidances?member_type=employee").then((response) => {
                const { floor_1 } = response.data.data
                const convertFromRaw = floor_1.map((item) => {
                    console.log(item);
                    return {
                        ...item,
                        countUnconnected: floor_1.filter((lot)=> lot.status == -1).length,
                        imgPath: item?.status == 1 ? "/available.svg" : "/unavailable.svg"
                    }
                })

                // map row 1
                const row1 = ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13']
                const row_1 = convertFromRaw.filter((item) => {
                    if (row1.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_1.splice(6, 0, stair)
                row_1.push(empty)
                row_1.push(stair)
                row_1.push(liff)
                row_1.push(liff)
                row_1.push(noSlot)


                // map row 2
                const row2 = ['1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20', '1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27', '1-28', '1-29']
                const row_2 = convertFromRaw.filter((item) => {
                    if (row2.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_2.splice(1, 0, empty)
                row_2.splice(14, 0, empty);
                row_2.splice(18, 0, empty);

                const emptyLot = []
                emptyLot.splice(0, 0, empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)
                emptyLot.push(empty)

                const row3 = ['1-31', '1-32', '1-33', '1-34', '1-35', '1-36', '1-37', '1-38', '1-39', '1-40', '1-41', '1-42', '1-43', '1-44', '1-45']
                const row_3 = convertFromRaw.filter((item) => {
                    if (row3.includes(item.parking_lot)) {
                        return item
                    }
                })
                console.log(row3);

                // map row 3
                row_3.splice(0, 0, convertFromRaw.find(item => item.parking_lot === '1-30'))
                row_3.splice(1, 0, empty)
                row_3.splice(14, 0, empty)
                // row_3.splice(15, 0, empty);
                // row_3.splice(16, 0, empty);


                const row4 = ['1-46']
                const row_4 = convertFromRaw.filter((item) => {
                    if (row4.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_4.splice(0, 0, empty)
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
                const row5 = ['1-47', '1-48', '1-49', '1-50', '1-51', '1-52', '1-53', '1-54', '1-55', '1-56', '1-57', '1-58', '1-59', '1-60', '1-61', '1-62', '1-63']
                const row_5 = convertFromRaw.filter((item) => {
                    if (row5.includes(item.parking_lot)) {
                        return item
                    }
                })

                row_5.splice(1, 0, empty)
                row_5.splice(14, 0, empty)

                const row6 = ['1-65', '1-66', '1-67', '1-68', '1-69', '1-70', '1-71', '1-72', '1-73', '1-74', '1-75', '1-76', '1-77', '1-78', '1-79', '1-80']
                const row_6 = convertFromRaw.filter((item) => {
                    if (row6.includes(item.parking_lot)) {
                        return item
                    }
                })

                row_6.splice(0, 0, convertFromRaw.find(item => item.parking_lot === "1-64"))
                row_6.splice(1, 0, empty)
                row_6.splice(14, 0, empty)


                const row7 = ['1-81', '1-82', '1-83', '1-84', '1-85', '1-86']
                const row_7 = convertFromRaw.filter((item) => {
                    if (row7.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_7.splice(0, 0, empty)
                row_7.splice(0, 0, empty)
                row_7.splice(0, 0, empty)
                row_7.splice(4, 0, empty)
                row_7.splice(6, 0, empty)
                row_7.splice(8, 0, empty)
                row_7.splice(10, 0, empty)
                row_7.splice(12, 0, empty)

                console.log(row_7.findIndex(item=> item.parking_lot == '1-81'));
                setFloor([
                    ...row_1,
                ...emptyLot,
                ...row_2,
                ...emptyLot,
                ...row_3,
                ...emptyLot,
                ...row_4,
                ...emptyLot,
                ...row_5,
                ...emptyLot,
                ...row_6,
                ...emptyLot,
                ...row_7
                ])
            })
        }
    }, [floor])

    useEffect(() => {
        if (floor == 2) {
            const noSlot = { imgPath: '/unavailable.svg' };
            const empty = {};
            const stair = { imgPath: '/stair.svg' }
            const liff = { imgPath: '/liff.svg' }
            axios.get("https://k8s-tsmartoffice.verkoffice.com/parking/reserve/car-guidances?member_type=employee").then((response) => {
                const { floor_2 } = response.data.data
                const convertFromRaw = floor_2.map((item) => {
                    return {
                        ...item,
                        imgPath: item?.status == 1 ? "/available.svg" : "/unavailable.svg"
                    }
                })

                // map row 1
                const row1 = ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10', '2-11', '2-12', '2-13', '2-14']
                const row_1 = convertFromRaw.filter((item) => {
                    if (row1.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_1.splice(5, 0, stair)
                row_1.push(stair)
                row_1.push(liff)
                row_1.push(liff)
                row_1.push(noSlot)

                const emptyLists = [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]

                // map row 2
                const row2 = ['2-15', '2-16', '2-17', '2-18', '2-19', '2-20', '2-21', '2-22', '2-23', '2-24', '2-25', '2-26', '2-27', '2-28', '2-29', '2-30', '2-31']
                const row_2 = convertFromRaw.filter((item) => {
                    if (row2.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_2.splice(1, 0, empty)
                row_2.splice(15, 0, empty);


                // // map row 3
                const row3 = ['2-32', '2-33', '2-34', '2-35', '2-36', '2-37', '2-38', '2-39', '2-40', '2-41', '2-42', '2-43', '2-44', '2-45', '2-46', '2-47', '2-48']
                const row_3 = convertFromRaw.filter((item) => {
                    if (row3.includes(item.parking_lot)) {
                        return item
                    }
                })

                row_3.splice(1, 0, empty)
                row_3.splice(15, 0, empty);



                // // map row 4
                const row4 = ['2-50', '2-51', '2-52', '2-53', '2-54', '2-55', '2-56', '2-57', '2-58', '2-59', '2-60', '2-61', '2-62', '2-63', '2-64', '2-65',]
                const row_4 = convertFromRaw.filter((item) => {
                    if (row4.includes(item.parking_lot)) {
                        return item
                    }
                })

                row_4.splice(0, 0, convertFromRaw.find(item => item.parking_lot === "2-49"))
                row_4.splice(1, 0, empty)
                row_4.splice(15, 0, empty)

                const row5 = ['2-67', '2-68', '2-69', '2-70', '2-71', '2-72', '2-73', '2-74', '2-75', '2-76', '2-77', '2-78', '2-79', '2-80', '2-81', '2-82',]
                const row_5 = convertFromRaw.filter((item) => {
                    if (row5.includes(item.parking_lot)) {
                        return item
                    }
                })

                row_5.splice(0, 0, convertFromRaw.find(item => item.parking_lot === "2-66"))
                row_5.splice(1, 0, empty)
                row_5.splice(15, 0, empty)


                const row6 = ['2-83', '2-84', '2-85', '2-86', '2-87', '2-88']
                const row_6 = convertFromRaw.filter((item) => {
                    if (row6.includes(item.parking_lot)) {
                        return item
                    }
                })
                row_6.splice(1, 0, empty)
                row_6.splice(2, 0, empty)
                setFloor([...row_1, ...emptyLists, ...row_2, ...emptyLists, ...row_3, ...emptyLists, ...row_4, ...emptyLists, ...row_5, ...emptyLists, ...row_6])
            })
        }
    }, [floor])

    return {
        floorList,
        floor, selectedFloor
    }
}
