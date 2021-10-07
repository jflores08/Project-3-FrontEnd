import MemoryDetailPage from "./pages/MemoryDetailPage"
import {Marker} from 'react-map-gl'
import {useState} from 'react'


allMemories.map((memory) => {

    const coords = memory.location[0]
    const formattedCoords = JSON.parse(coords)
    const [headline, setHeadline] = useState('');
    if  (tagline){
        setHeadline(memory.tagline);
    }else{
        setHeadline(memory.title);
    }

    return (
       <div>
       <Marker 
       latitude={formattedCoords[0]} 
       longitude={formattedCoords[1]}
       >

        if(tagline){}
​       <h1 class='tagline'>{headline}</h1>
        </Marker>


    </div>
    )}
)







//         <button 
//          onClick={(e) => {
//             e.preventDefault()
//             setClickedEvent(event)
//             setHoveredEvent(null)
            
//         }}
//          onMouseEnter={(e) => {
//              if(clickedEvent === null){
//                  setHoveredEvent(event)}
             
//          }}
//          onMouseLeave={(e) => {
//              setHoveredEvent(null)
             
//          }}
//         >
            
//         </button>
//        </Marker>
//     )
// })}
//  {clickedEvent ? (
//     <Popup 
//       latitude={clickedEvent.location.coordinates[0]} 
//       longitude={clickedEvent.location.coordinates[1]}
//       onClose={() => {
//           setClickedEvent(null)
//       }}
//       >
//         <div>
//             <h1>{clickedEvent.name}</h1>
//             <p>{clickedEvent.date.toString().slice(0, 10)}</p>
//         </div>
//     </Popup>
//  ) : null}
 
//  {hoveredEvent ? (
//      <Popup
//       latitude={hoveredEvent.location.coordinates[0]} 
//       longitude={hoveredEvent.location.coordinates[1]}
//      >
//       <div>
//           <h1>hover</h1>
//       </div>
// ​
//       </Popup>
//  ) : null}
//  {/* {clickedFilterMenu ?(
//      <div id="filtermenu">
//          <h1>filter menu</h1>
//          <button onClick={closeFilterMenu}>x</button>
//          <input type="range"></input>
//          <input type="range"></input>
//          <input type="range"></input>
         
//      </div> */}
//  {/* ): null} */}


// const openFilterMenu = (e) => {
//     e.preventDefault()
//     setClickedFilterMenu(true)
//  }
//  const closeFilterMenu = (e) => {
//      e.preventDefault()
//      setClickedFilterMenu(false)
//  }
 

console.log('data is: ', response.data)
                const coords = response.data[0].location[0]
                const formattedCoords= JSON.parse(coords)
                console.log('coords is: ', coords)
                console.log('latatude is: ', formattedCoords[0])




function getAllMemories() {
    return(
    axios.get(`/api/memories`)
        .then(response => {
            console.log('data is: ', response.data)
            // const coords = response.data[0].location[0]
            // const formattedCoords= JSON.parse(coords)
            // console.log('coords is: ', coords)
            // console.log('latatude is: ', formattedCoords[0])
            // console.log('userId from database is: ', response.data.User)
            setAllMemories(response.data)
        
            
            console.log ('User Memories', allMemories)

        })
        .catch(err => console.log(err))
    )
}

    // const getAllMemories = () => {
    // 	        axios.get(`/api/memories`)
    // 	             .then(res => {
                        
    // 	                 setAllMemories(res.data)
    // 	             })
    // 	             .catch(err => console.log(err))
    // 	    }

useEffect(() => {
    getAllMemories()
}, [])






const getAllMemories = () => {
    axios.get(`/api/memories`)
        .then(response => {
            console.log('data is: ', response.data)
            const coords = response.data[0].location[0]
            const formattedCoords= JSON.parse(coords)
            console.log('coords is: ', coords)
            console.log('latatude is: ', formattedCoords[0])
            console.log('userId from database is: ', response.data.User)
            setMemories(response.data)
            console.log ('Memories', memories)
            setAllMemories(memories)
            console.log ('All Memories', allMemories)

        })
        .catch(err => console.log(err));

}

useEffect(() => {
    getAllMemories();
}, [])
