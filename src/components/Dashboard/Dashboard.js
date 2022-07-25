import React from "react";
import { useNavigate } from "react-router-dom";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, } from 'cdbreact';

function Dashboard() {
  let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/AutoInspection';
        navigate(path);
    }
    const routeChange1 = () =>{
      let path = '/BG_Removal';
      navigate(path);
  }
    
    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color,
            backgroundColor: color,
            height: 5
          }}
        />
      );


    
return (    
      <div className="Dashboard">
        <body>
          <CDBSidebar>
            <div className="w3-col m4 l3">
              <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
                <CDBSidebarContent>
                  <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="th-large">Computer Vision</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">Recommendation</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                      NLP
                    </CDBSidebarMenuItem>
                  </CDBSidebarMenu>
                </CDBSidebarContent>
            </div>
          </CDBSidebar>
                <form>
                    <div className="text">
                      <br></br>
                      <br></br>
                      <h5 >Auto Inspection platform</h5>
                      <p className="text-justify">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.</p>
                    </div>
                    <div className="text-end">
                      <button type="button" className="btn btn-primary" onClick={routeChange}>Try it out</button> 
                    </div>
                    <div>
                      <ColoredLine color="black" />
                    </div>
                    <div className="text">
                        <h5 className="mt-0">Background Removal Service</h5>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.
                    </div>
                    <div className="text-end">
                        <button type="button" className="btn btn-primary" onClick={routeChange1}>Try it out</button> 
                    </div>
                    
                </form>
        </body>
      </div>     
);
}
  
export default Dashboard;  