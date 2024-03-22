import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {getDatabase,ref,set} from 'firebase/database'
import {getStorage,ref as StorageRef,uploadBytes,getDownloadURL} from 'firebase/storage'
import {app} from '../Firebase'
import { toast } from 'react-toastify'
const Updateproduct = () => {
    const location=useLocation();
    console.log(location)
    const [title,SetTitle]=useState(location.state[1].Title);
const [des,SetDes]=useState(location.state[1].Description);
const [price,SetPrice]=useState(location.state[1].Price);
const [cate,SetCate]=useState(location.state[1].Category);
const [brand,SetBrand]=useState(location.state[1].Brand);
const [img,SetImg]=useState('');
const [id,setId]=useState(location.state[1].id);
const [CAP,setCAP]=useState(location.state[1].CAP);
const submit = async () =>{
    

      
      const db=getDatabase(app)
      const storage=getStorage(app)
      const myref=StorageRef(storage,`image/${id}`)
      await uploadBytes(myref,img)
      const imageurl=await getDownloadURL(myref)
  
      const margin=Math.floor(((price-CAP)/CAP*100))
  
      set(ref(db,`/all/`+id),{
        id:id,
        Title:title,
        Description:des,
        Price:price,
        CAP:CAP,
        discount:margin,
        Category:cate,
        ImageUrl:imageurl,
        Brand:brand
    })
  
      toast.info('Product Uploaded')
      // console.log(title)
      // console.log(des)
      // console.log(price)
      // console.log(cate)
      // console.log(img)
  }
  
  return (
    <div>
    <h1 className='upload-head'>Update Product</h1>
   
 <form onSubmit={(e)=>e.preventDefault()} action="#" method="post" encType="multipart/form-data" className="form-container">
 <img src={location.state[1].ImageUrl} height={'200px'} width={'200px'} style={{textAlign:"center"}}/><br/><br/>
 <input type="text" value={id} contentEditable='false' /><br/><br/>
 <label htmlFor="name" className="form-label">Brand :</label>
  <input type='text' id='Brand' name='id' value={brand} onChange={(e)=>SetBrand(e.target.value)} className='form-input'/>
  <label htmlFor="name" className="form-label">Title:</label>
  <input type="text" id="name" name="title" value={title} required onChange={(e)=>SetTitle(e.target.value)} className="form-input" />
  <label htmlFor="description" className="form-label">Description:</label>
  <textarea id="description" name="description" value={des} rows={4} required  onChange={(e)=>SetDes(e.target.value)}className="form-input" defaultValue={""} />
  <label htmlFor="price" className="form-label">Price:</label>
  <input type="number" id="price" name="price" value={price} onChange={(e)=>SetPrice(e.target.value)}min={0} step="0.01" required className="form-input" />
  <label htmlFor="price" className="form-label">Compare At Price:</label>
  <input type="number" id="price" name="price" value={CAP} onChange={(e)=>setCAP(e.target.value)}min={0} step="0.01" required className="form-input" />
  <label htmlFor="category" className="form-label" >Category:</label>
  <select id="category" name="category" value={cate} required onChange={(e)=>SetCate(e.target.value)} className="form-input">
    <option value>Select Category</option>
    <option value="Electronics">Electronics</option>
    <option value="Kitchen">Kitchen</option>
    <option value="Decor">Decor</option>
    {/* Add more options as needed */}
  </select>
  <label htmlFor="image" className="form-label">Image:</label>
  <input type="file" id="image" onChange={(e)=>SetImg(e.target.files[0])} name="image" accept="image/*" required className="form-file-input" />
  <button onClick={()=>{submit()}} className="form-submit">Update</button>
</form>

    </div>  
  )
}

export default Updateproduct