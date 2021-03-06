import { useState } from "react";
import "./NewProduct.css"
import {getStorage,ref,getDownloadURL,uploadBytesResumable} from "firebase/storage"

import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


const NewProduct = ({firebaseApp}) => {

    const [inputs , setInputs] = useState({});
    const [file,setFile] = useState(null);
    const [cat,setCat] = useState([]);
    const dispatch = useDispatch()

    const handleChange = (e) => {
      setInputs(prev => {
        return {
          ...prev,
          [e.target.name] : e.target.value
        }
      })
    }

    const handleCat = (e) => {
      setCat(e.target.value.split(","));
    }

    const handleClick = (e) =>{
      e.preventDefault();
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(firebaseApp);
      const StorageRef = ref(storage,fileName);
      const uploadTask = uploadBytesResumable(StorageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default :
          }
        }, 
        (error) => {  }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {...inputs,img : downloadURL , categories : cat};
            addProducts(product,dispatch)
        });
      });
    }

    console.log(file);

    return (
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input type="file" id="file"  onChange={e => setFile(e.target.files[0])}/>
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input type="text" name="title" placeholder="Apple Airpods" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input type="text" name="desc" placeholder="Product desc" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input type="number" name="price" placeholder="100" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
              <label>Categories</label>
              <input type="text" placeholder="Jeans , Skirts" onChange={handleCat}/>
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <select onChange={handleChange} name="inStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            
            <button onClick={handleClick} className="addProductButton">Create</button>
          </form>
        </div>
      );
}

export default NewProduct
