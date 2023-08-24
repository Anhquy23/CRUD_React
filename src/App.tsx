import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./Component/layout/AdminLayout";
import ListProduct from "./Component/Admin/Product/ListProduct";
import Dashboard from "./Component/Admin/Dashboard";
import Login from "./Component/Authen/Login";
import Register from "./Component/Authen/Register";
import AddProduct from "./Component/Admin/Product/AddProduct";
import EditProduct from "./Component/Admin/Product/EditProduct";
import { useEffect, useState } from "react";
import { ICategory } from "./interface/product";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/products";

function App() {
  
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    // Khi component được render, gọi hàm getAllCategory để lấy danh sách danh mục
    getAllCategory().then(({ data }) => setCategory(data));
  }, []);

  const onHandleRemove = (id: number) => {
    // Gọi hàm deleteCategory để xóa danh mục dựa trên ID
    // Sau đó cập nhật lại state category bằng cách loại bỏ danh mục vừa xóa khỏi mảng
    deleteCategory(id).then(() =>
      setCategory(category.filter((item: ICategory) => item.id !== id))
    );
  };
  
  const onHandleAdd = (category: ICategory) => {
    addCategory(category).then(() => {
      //lấy danh sách tất cả các danh mục sau khi đã thêm danh mục mới.
      getAllCategory().then(({ data }) => {
        //Khi thêm thì danh mục mới sẽ ở đầu mảng.
        const updatedCategoryList = [category, ...data];
        //cập nhật lại state category bằng danh sách danh mục đã được cập nhật.
        setCategory(updatedCategoryList);
      });
    });
  };
  
  const onHandleUpdate = (category: ICategory) => {
    updateCategory(category).then(() =>
      getAllCategory().then(({ data }) => setCategory(data))
    );
  };

  return (
      <Router>
        <Routes>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route
              path="product"
              element={
                <ListProduct category={category} onRemove={onHandleRemove} />
              }
            />
            <Route
              path="product/add"
              element={<AddProduct onAdd={onHandleAdd} />}
            />
            <Route
              path="product/edit/:id"
              element={
                <EditProduct onUpdate={onHandleUpdate} category={category} />
              }
            />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    
  );
}

export default App;
