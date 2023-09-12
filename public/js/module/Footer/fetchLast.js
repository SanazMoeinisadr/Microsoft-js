const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/last.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                     

                            <span>
                                   <img src=${elem.logoUrl} alt="lang">
                            </span>

                            ${elem.logoTitle}
                            
                     `
              
              }).join("")

              document.querySelector('div.end>a').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData