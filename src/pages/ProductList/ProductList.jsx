import "./ProductList.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const handleDelete = (id) =>{   
        console.log(id)
        deleteProducts(id,dispatch);
    };

    useEffect(() => {
        getProducts(dispatch);
    }, [])

const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'product',
      headerName: 'Product',
      width: 300,
      renderCell : (params) => {
         return (
              <div className="productListItem">
                  <img src={params.row.img} alt="" className="productListImg"/>
                  {params.row.name}
              </div>
          )
      }
    },
    {
      field: 'inStock',
      headerName: 'Stock',
      width: 300,
    },

    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
        field : 'action',
        headerName: "Action",
        width: 200,
        renderCell : (params) => {
            return (
                <>
                    <Link to={"/product/" + params.row._id} >
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
                </>
            )
        }
    }
  ];
  


    return (
        <div className="productList">
            <Link to="/addProduct">
                <button className="productAddButton">Add Product</button>
            </Link>
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
