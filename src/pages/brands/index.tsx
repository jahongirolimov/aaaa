import { useEffect, useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccordionActions from '@mui/material/AccordionActions';
import { ToastContainer} from "react-toastify";
import {getItem, postItem} from "@plugins/httpModels.js"

export default function index() {
  let [brands, setBrands] = useState([])
  async function getBrands(){
      await getItem('/brands').then(response => setBrands(response.data))
  }


  async function postBrands(e:any){
      e.preventDefault();
      let new_brand = {
      name:  e.target[0].value
      }       
      await postItem('/brands', new_brand)
  }

  useEffect(() =>{
    getBrands()
  }, [])
  return (
    <>
    <ToastContainer/>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Add Brands
          </AccordionSummary>
          <AccordionDetails>
              <form id="brand_form" onSubmit={(e) => postBrands(e)}>
                <TextField autoComplete="off" className="w-full " id="standard-basic" label="Enter your Brands" variant="standard" />
                <AccordionActions>
                  <Button id="brand_form" type="submit">Agree</Button>
                </AccordionActions>
              </form>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-[100px]">
        <h1 className="font-bold text-[40px] mb-[30px] text-center">BRANDS LIST</h1>
          {
            brands.map((data) => {
              return (
                <h1 key={data.id} className="p-[10px] mb-[10px] font-bold bg-[#14224e] text-white"> {data.name}</h1>
              )
           })
          }
      </div>  
    </>
  )
}
