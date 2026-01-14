import React, { useState } from "react";
import "./App.css";

const birthdayData = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "Sudesh Gowda",
    age: 26,
    image: "https://krisubirthaday.netlify.app/static/media/320849616_383478357320075_8435420645393527293_n.c4b90639ed548d0854df.jpg"
  },
  {
    id: 7,
    name: "Naveen Kumar",
    age: 28,
    image: "https://i.pinimg.com/474x/a9/f3/97/a9f397b63d87546828c428d3a1d37895.jpg"
  }
];

function App() {
 const[data,setData]=useState(birthdayData)

 function handleClear(){
  setData([])
 }

  return (
    <main>
      <section className="card-container">
        <h3>{data.length} birthdays today</h3>
        {data.map((value,index) => (
          <div key={value.id} className="person">
            <img src={value.image} alt={value.name} />
            <div className="person-details">
              <h6>{value.name}</h6>
              <p>{value.age} years</p>
            </div>
          </div>
        ))}
        <button onClick={handleClear}>Clear All</button>
      </section>
    </main>
  );
}

export default App;