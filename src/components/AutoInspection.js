import React,{ useState } from "react";
import { MDBContainer } from 'mdbreact';
import { MDBCheckbox ,MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from "axios";


function AutoInspection() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);
    const [file, setFile] = useState();
    const [imgName, setImgName] = useState()
    

  function handleChange(event) {
    console.log(event.target.files);
    setFile(event.target.files[0]);
  }
  function showImage() {
    return jsonResponse.img_name
  }
  let jsonResponse = {}
  function handleSubmit(event) {
    event.preventDefault()
    const URL = 'https://exteriorlocation.azurewebsites.net/predict';
    const formData = new FormData();
    formData.append('files[]', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    axios.post(URL, formData).then((response) => {
      //console.log(response.data); 
      //response.data(item => response[item.id] = item.img_name);
      jsonResponse = response.data[0]
      console.log(jsonResponse);
      setImgName(jsonResponse.img_name)
    });

  }
    
return (    
        <div className="AutoInspection"> 
            <form onSubmit={handleSubmit}>   
                <MDBContainer>
                    <div className="text">
                        <h5 >Auto Inspection platform</h5>
                        <p className="text-justify">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                        <div className="row">
                            <div className="col-sm-6 col-md-5 col-lg-6">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <p className="text-center">Capture</p>
                
                                    <button className="ripple-surface btn btn-primary" onClick={() => {setChecked(old => !old)}}> Exteriors + Sublocation </button>
                                    <br></br>
                                    <button className="ripple-surface btn btn-primary" onClick={() => {setChecked1(old => !old)}}>Damages</button>
                                    <br></br>
                                    <button className="ripple-surface btn btn-primary" onClick={() => {setChecked(old => !old)}}>All of Above</button>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                            
                                <p className="text-center">Upload</p>
                                <input className="form-control" id="upload-button" type="file" onChange={(e) => handleChange(e)}/>
                                <br></br>
                                <div>
                                    <MDBCheckbox checked={checked} name='inlineCheck' id='inlineCheckbox1' value='option1' label='Exteriors + Sublocation' inline />
                                    <MDBCheckbox checked={checked1} name='inlineCheck' id='inlineCheckbox2' value='option2' label='Damages' inline />
                                </div>
                                <br></br>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Button type="submit" variant="primary" onClick={handleShow}>Submit</Button>
                                    <Modal size="lg" show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Result</Modal.Title>
                                      </Modal.Header>
                                  
                                      <Modal.Body>
                                      <div className="photo">
                                        <img src={imgName} alt="" width="400" height="300" />
                                      </div>
                                        Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                          Close
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </MDBContainer>          
            </form>
        </div> 

);
}

export default AutoInspection;  