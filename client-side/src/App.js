import { Table, Switch, Button, Modal, Form, Input, Select, Row, Col } from 'antd';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
function App() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const location = useLocation()
  const getData = async () => {
    setLoading(true)
    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/users');
      setInfo(data.data);
      setLoading(false)
    } catch (e) {
      console.log('error');
      setLoading(false)

    }
  }
  useEffect(() => {
    getData()
  }, [])

  const onChange = (checked, id) => {
    console.log("🚀 ~ file: App.js ~ line 29 ~ onChange ~ id", id)
    console.log(`switch to ${checked}`);
  };
  const deleteInfo = (id) => {
    console.log(id);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addNewUser = (values) => {
    console.log("🚀 ~ file: App.js ~ line 51 ~ addNewUser ~ values", values)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Complete',
      key: 'website',
      render: (record) =>
        <>
          <Switch defaultChecked={record.id} onChange={(e) => onChange(e, record.id)} />
        </>
    },
    {
      title: '',
      key: 'website',
      render: (record) =>
        <>
          <Button danger onClick={() => deleteInfo(record.id)}>Delete</Button>
        </>
    }
  ];
  return (
    <>
      <Button style={{ margin: '25px auto 0 auto', display: 'flex' }} onClick={showModal}>Create new one</Button>
      <Table
        style={{ height: '400px', width: '50%', margin: '50px auto' }}
        columns={columns}
        dataSource={info}
        loading={loading}
        pagination={false}
        bordered={true} />

      {/* Modal to a new one */}

      <Modal footer={false} title="Create new one" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <Form name="nest-messages" onFinish={addNewUser}>
          <Row>

            <Col span='24'>
              <label>Name </label>
              <Form.Item name={'name'} rules={[{
                required: true, message: 'Name is mandatory'
              }]}>
                <Input placeholder='Add the name' />
              </Form.Item>

            </Col>
            <Col span='24'>
              <label>Description </label>
              <Form.Item name={'desc'} rules={[{
                required: true, message: 'Description is mandatory'
              }]}>
                <Input placeholder='Add the description' />
              </Form.Item>

            </Col>

            <Col span='24'>
              <label>Is Complete </label>
              <Form.Item name={'isComplete'}>
                <Switch defaultChecked={false} />
              </Form.Item>

            </Col>

            <Col span='12'>

              <Form.Item>
                <Button type="default" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </Form.Item>
            </Col>

            <Col span='12'>

              <Form.Item>
                <Button className='createGroupBtn' type="primary" htmlType="submit" loading={loading} style={{ float: 'right' }}>
                  Create
                </Button>
              </Form.Item>
            </Col>

          </Row>


        </Form>
      </Modal>
    </>
  );
}

export default App;
