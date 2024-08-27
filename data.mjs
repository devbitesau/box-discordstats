
class Data {
    constructor() {
        this.allData = []

        datum.forEach(e => {
            this.allData.push(new Point(e.Year, e.Month, e.Day, e.Count))
        });
    }

    GetAll() {
        return this.allData
    }

}

class Point {
    constructor(year,month,day, count) {
        this.Year = year
        this.Month = month
        this.Day = day
        this.Count = count
      }
}

let datum = [
    {Year : 2024, Month: 1, Day: 1, Count: 1},
    {Year : 2024, Month: 1, Day: 2, Count: 2},
    {Year : 2024, Month: 1, Day: 3, Count: 3},
    {Year : 2024, Month: 1, Day: 4, Count: 4},
    {Year : 2024, Month: 1, Day: 5, Count: 5},
    {Year : 2024, Month: 1, Day: 6, Count: 6},
    {Year : 2024, Month: 1, Day: 7, Count: 7},
]


export default Data;
