import { Button, Popconfirm, Space, Table, message } from "antd";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interface/product";

interface DataType {
  key: string | number;
  id: number;
  name: string;
  description: string;
}

// Định nghĩa các props mà component ListProduct sẽ nhận được. category là một mảng danh mục sản phẩm và onRemove là một hàm để xóa sản phẩm dựa trên ID.
interface IProps {
  category: ICategory[];
  onRemove: (id: number) => void;
}


const ListProduct = (props: IProps) => {
//Hàm này được gọi khi người dùng xác nhận việc xóa một sản phẩm. Nó gọi props.onRemove(id) để thực hiện việc xóa sản phẩm dựa trên ID, sau đó hiển thị một thông báo thành công bằng cách sử dụng message.success.
  const removeProduct = (id: number) => {
    props.onRemove(id);
    message.success('Xóa sản phẩm thành công')
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Bạn chắc chắn muốn xóa không?"
            onConfirm={() => removeProduct(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" style={{ backgroundColor: "red" }}>
              Remove
            </Button>
          </Popconfirm>
          <Button type="primary">
            <Link to={`/admin/product/edit/${record.id}`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.category.map((item: ICategory) => {
    return {
        key: item.id,
        ...item
    }
})

  return (
    <div>
      <Button type="primary">
        <Link to={"add"}>Thêm sản phẩm</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>
    </div>
  );
};

export default ListProduct;
