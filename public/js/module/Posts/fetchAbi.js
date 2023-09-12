const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/abi.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                            <img src=${elem.abiUrl} alt="abi" 
                            class="img-fluid w-100 d-xl-inline-block">
                    
                     `

              }).join("")

              document.querySelector('div.abi>div.row').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData