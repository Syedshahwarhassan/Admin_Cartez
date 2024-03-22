import React, { useState } from 'react'
import {getDatabase,ref,set} from 'firebase/database'
import {getStorage,ref as StorageRef,uploadBytes,getDownloadURL} from 'firebase/storage'
import {app} from '../Firebase'
import { toast } from 'react-toastify';
const Upload = () => {
const [title,SetTitle]=useState();
const [des,SetDes]=useState();
const [price,SetPrice]=useState();
const [cate,SetCate]=useState();
const [brand,SetBrand]=useState();
const [img,SetImg]=useState('');
const [id,setId]=useState();
const [CAP,setCAP]=useState();
const idd=(Math.floor(Math.random()*10000000))
// console.log(idd)
// setTimeout(document.getElementById('id').value=idd,3000)
const submit = async () =>{
    
  setId(idd)
    
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
      Brand:brand,
      review:''
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
    <h1 className='upload-head'>Upload Product</h1>
 <form onSubmit={(e)=>e.preventDefault()} action="#" method="post" encType="multipart/form-data" className="form-container">
 <label htmlFor="name" className="form-label">Brand :</label>
  <input type='text' id='Brand' name='id' onChange={(e)=>SetBrand(e.target.value)} className='form-input'/>
  <label htmlFor="name" className="form-label">Title:</label>
  <input type="text" id="name" name="title" required onChange={(e)=>SetTitle(e.target.value)} className="form-input" />
  <label htmlFor="description" className="form-label">Description:</label>
  <textarea id="description" name="description" rows={4} required  onChange={(e)=>SetDes(e.target.value)}className="form-input" defaultValue={""} />
  <label htmlFor="price" className="form-label">Price:</label>
  <input type="number" id="price" name="price" onChange={(e)=>SetPrice(e.target.value)}min={0} step="0.01" required className="form-input" />
  <label htmlFor="price" className="form-label">Compare At Price:</label>
  <input type="number" id="price" name="price" onChange={(e)=>setCAP(e.target.value)}min={0} step="0.01" required className="form-input" />
  <label htmlFor="category" className="form-label" >Category:</label>
  <select id="category" name="category" required onChange={(e)=>SetCate(e.target.value)} className="form-input">
    <option value>Select Category</option>
    <option value="Electronics">Electronics</option>
    <option value="Kitchen">Kitchen</option>
    <option value="Decor">Decor</option>
    {/* Add more options as needed */}
  </select>
  <label htmlFor="image" className="form-label">Image:</label>
  <input type="file" id="image" onChange={(e)=>SetImg(e.target.files[0])} name="image" accept="image/*" required className="form-file-input" />
  <input type="submit" onClick={()=>{submit()}} defaultValue="Submit" className="form-submit" />
</form>

    </div>
  )
}

export default Upload