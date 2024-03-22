import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Upload from './components/Upload'
import Product from './components/Product'
import Top_Nav from './components/Top_Nav'
import Updateproduct from './components/Updateproduct'
import Contact from './components/Contact'
import Review from './components/Review'
const App = () => {
  const productlist =()=>{
    let x=document.getElementById('product-list');
    if(x.style.display=='none')
    x.style.display='block'
  else if( x.style.display='block')
  x.style.display='none'
  }
  return (
    <div className='App-main'>
      <div className='App-aside'>
        <ul className='App-ul'>
          <li>
            <Link className='App-img' > <img style={{margin:"20px"}} src="/logo.png" alt="" height={'30px' } width={'150px'} /></Link>
          </li>
          <li className='App-li'>
            <Link className='App-link' to={'/'}><i className="fa-solid fa-upload" style={{color: '#000000'}} />
&nbsp;Upload</Link>
          </li>
          <li className='App-li'>
            <Link className='App-link' to={'/product'}><i className="fa-brands fa-product-hunt" style={{color: '#000000'}} />
&nbsp;Product</Link>

          </li>
          <li className='App-li'>
            <Link className='App-link'>
            <i className="fa-solid fa-users" style={{color: '#000000'}} />&nbsp;
 Users</Link>
          </li>
          <li className='App-li'>
            <Link to={'/contact'} className='App-link'><i className="fa-solid fa-headset" style={{color: '#000000'}} />
&nbsp;Contact</Link>
          </li>
          <li className='App-li'>
            <Link to={'/review'} className='App-link'><i className="fa-regular fa-comment-dots" style={{color: '#000000'}} />

&nbsp;Reviews</Link>
          </li>
        </ul>
      </div>
<div className='App-data'>
<Top_Nav/>
  <Routes>
    <Route path='/' element={<Upload/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/updateproduct' element={<Updateproduct/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/review' element={<Review/>}></Route>
  </Routes>
</div>
    </div>
  )
}

export default App