import React, { useState } from "react";
import { MDBContainer } from "mdbreact";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function BG_Removal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [imgName, setImgName] = useState([]);  
  const [formData, setFormData] = useState({
    input_dir: "",
    image_list: "",
    background_image: "",
    image_source: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function showImage() {
    return jsonResponse.ouput_blobs_list;
  }
  let jsonResponse = {};

  function handleSubmit(arg)  {
    const Array_Image = arg.image_list.includes(",")
      ? arg.image_list.split(",")
      : [arg.image_list];
    const postRecords = { ...arg, image_list: Array_Image };
    console.log(postRecords);
    const url = "https://aimlpythonbgrm.azurewebsites.net/bgrm";

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .post(url, {
        input_dir: "",
        image_list: postRecords.image_list,
        background_image: postRecords.background_image,
        image_source: postRecords.image_source,
      })
      .then((response) => {
        jsonResponse = response.data;
        console.log(jsonResponse);
        setImgName(jsonResponse.ouput_blobs_list);
        handleShow();
      });
  }
  
  return (
    <div className="BG_Removal">
      <MDBContainer>
        <div className="text">
          <h5>Background Removal platform</h5>
          <p className="text-justify"></p>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <p className="text-center">Upload</p>
              <input
                type="text"
                class="form-control is-valid" 
                id="validationServer01"
                name="input_dir"
                value={formData.input_dir}
                onChange={(e) => handleChange(e)}
                placeholder="input_dir"
                size="50"
                required
              />
              <br></br>
              <input
                type="text"
                class="form-control is-valid" 
                id="validationServer01"
                name="image_list"
                value={formData.image_list}
                onChange={(e) => handleChange(e)}
                placeholder="image_URL"
                size="50"
                required
              />
              <br></br>
              <input
                type="text"
                class="form-control is-valid" 
                id="validationServer01"
                name="background_image"
                value={formData.background_image}
                onChange={(e) => handleChange(e)}
                placeholder="background_image"
                size="50"
                required
              />
              <br></br>
              <input
                type="text"
                name="image_source"
                class="form-control is-valid" 
                id="validationServer01"
                value={formData.image_source}
                placeholder="image_source"
                onChange={(e) => handleChange(e)}
                size="50"
                required
              />
              <br></br>

              <div class="d-grid gap-2 col-6 mx-auto">
                <Button type="submit" variant="primary" onClick={() => handleSubmit(formData)}>Submit</Button>      
                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                  </Modal.Header>
                    {imgName.length > 0 &&
                      imgName.map((loop, key) => {
                        return (
                          <div class="img">
                            <img key={key} src={loop} alt="dummy" width="350" height="350"/>
                          </div>
                        );
                      })}
                  
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default BG_Removal;
