const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/Heademodal.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                     <div class="modal" id="signin1">

                            <div class="modal-dialog modal-md">
                     
                                   <div class="modal-content">
                     
                                          <div class="modal-header">

                                                 <img src=${elem.modalUrl} alt="">

                                                 <button type="button" class="btn-close" data-bs-dismiss="modal"></button>

                                          </div>

                                          <div class="modal-body m-auto ">

                                                 <h4 class="modal-title fw-bold mb-3">
                                                        ${elem.modalTitle}
                                                 </h4>
                                          
                                                 <label for="" class="form-label">
                                                        ${elem.formLabel}
                                                 </label>
                          
                                                 <input type="email" class="form-control" name="pass" id="mail" placeholder="Email" required>
                          
                                                 <label for="" class="form-label mt-3">
                                                        ${elem.passTitle}
                                                 </label>
                                            
                                                 <input type="password" class="form-control" name="pass" id="psa" placeholder="Password" required>
                                            
                                                 <div class="nvshte">
                                                        ${elem.neveshte}
                                                        <span>
                                                               ${elem.neveshteSpan}
                                                        </span>                     
                                                 </div>
                          
                                          </div>

                                          <div class="modal-footer">

                                                 <button type="button" class="btn btn-danger"     data-bs-dismiss="modal">
                                                        ${elem.closeBtn}
                                                 </button>

                                                 <button type="button" class="btn btn-primary">
                                                        ${elem.signBtn}
                                                 </button>

                                          </div>
                     
                                   </div>

                            </div>

                     </div>
                     `

              }).join("")

              document.querySelector('#navContainer').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData