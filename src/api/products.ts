import instance from "./instance";
import { ICategory } from "../interface/product";

// Hàm để lấy danh sách tất cả các danh mục
const getAllCategory = () => {
    return instance.get('/category');
}

// Hàm để lấy thông tin một danh mục dựa trên ID
const getOneCategory = (id: number) => {
    return instance.get('/category/' + id);
}

// Hàm để thêm một danh mục mới
const addCategory = (category: ICategory) => {
    return instance.post('/category', category);
}

// Hàm để cập nhật thông tin một danh mục
const updateCategory = (category: ICategory) => {
    return instance.put('/category/' + category.id, category);
}

// Hàm để xóa một danh mục dựa trên ID
const deleteCategory = (id: number) => {
    return instance.delete('/category/' + id);
}

export { getAllCategory, getOneCategory, addCategory, updateCategory, deleteCategory }