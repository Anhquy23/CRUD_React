import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { ICategory } from "../../../interface/product";
import { useNavigate, useParams } from "react-router-dom";

interface IProps {
  category: ICategory[];
  onUpdate: (category: ICategory) => void;
}

const EditProduct = (props: IProps) => {
  //lấy giá trị của tham số id từ URL
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState<ICategory>();

  //Hàm này chỉ chạy khi biến id thay đổi
  useEffect(() => {
    //tìm category trên id lấy từ URL.
    const currentProduct = props.category.find(
      (category: ICategory) => category.id == Number(id)
    );
    setCategory(currentProduct);
  }, [id]);

  //Khi category thay đổi useEffect sẽ gọi hàm setFields để đặt giá trị của các trường trong form dựa trên thông tin của category. Điều này giúp hiển thị thông tin hiện tại của danh mục trong form để người dùng có thể chỉnh sửa.
  useEffect(() => {
    setFields();
  }, [category]);
  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      id: category?.id,
      name: category?.name,
      description: category?.description,
    });
  };

  const onFinish = (values: any) => {
    props.onUpdate(values);
    navigate("/admin/product");
    message.success("Cập nhật thành công");
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label=""
        name="id"
        style={{ display: "none" }}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProduct;
