import { Table, Switch, Button, Modal, Form, Input, Row, Col, message } from 'antd';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from "react";
import 'antd/dist/antd.min.css';
function App() {
  const [spin, setSpin] = useState(false)
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState()
  const [mouseLoader, setMouseLoader] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiLink = 'https://maksad.herokuapp.com/api/todos';
  const getData = async () => {
    setLoading(true)
    try {
      const data = await axios.get(apiLink);
      console.log("🚀 ~ file: App.js ~ line 16 ~ getData ~ data", data.data.data)
      setInfo(data.data.data.reverse());
      setLoading(false)
    } catch (e) {
      console.log('error');
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const changeCompleteStatus = async (id) => {
    setLoading(true);
    try {
      const res = await axios.patch(`${apiLink}/${id}`);
      if (res.data.status !== 200) {
        message.error(res.data.message);
        setLoading(false);
        getData()
      }
      message.success(res.data.message);
      setLoading(false);
      getData()
    } catch (e) {
      console.log('Something went wrong, Please try again');
      setLoading(false);
      getData();
    }
  };
  const deleteToDo = async (id) => {
    try {
      setMouseLoader(true)
      const res = await axios.delete(`${apiLink}/${id}`);
      if (res.data.status !== 200) {
        message.error(res.data.message);
        setMouseLoader(false);
      }
      message.success(res.data.message);
      setMouseLoader(false);
      window.location.reload();


    } catch (e) {
      message.error('Something went wrong, Please try again');
      setMouseLoader(false);
    }
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
  const addNewToDo = async (values) => {
    setSpin(true)
    setLoading(true)
    try {
      const res = await axios.post(apiLink, values);
      if (res.data.status !== 200) {
        setSpin(false);
        message.error(res.data.message);
        return
      }
      setSpin(false);
      message.success(res.data.message);
      setIsModalOpen(false)
      window.location.reload();

    } catch (e) {
      console.log('error');
      setSpin(false);
      message.error('Something went wrong, Please try again');

    }
  }
  const columns = [
    {
      title: 'To Do',
      dataIndex: 'todo',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Complete',
      key: 'isCompleted',
      render: (record) =>
        <>
          <Switch defaultChecked={record.isCompleted} onChange={() => changeCompleteStatus(record.id)} />
        </>
    },
    {
      title: '',
      key: 'website',
      render: (record) =>
        <>
          <Button danger onClick={() => deleteToDo(record.id)}>Delete</Button>
        </>
    }
  ];
  // let dataRows = info.reverse()
  return (
    <>
      <div className={mouseLoader ? 'mouseSpin' : 'mouse'} key={1}>


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

          <Form name="nest-messages" onFinish={addNewToDo}>
            <Row>

              <Col span='24'>
                <label>Name </label>
                <Form.Item name={'todo'} rules={[{
                  required: true, message: 'Name is mandatory'
                }]}>
                  <Input placeholder='Add the name' />
                </Form.Item>

              </Col>
              <Col span='24'>
                <label>Description </label>
                <Form.Item name={'description'} rules={[{
                  required: true, message: 'Description is mandatory'
                }]}>
                  <Input placeholder='Add the description' />
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
                  <Button className='createGroupBtn' type="primary" htmlType="submit" loading={spin} style={{ float: 'right' }}>
                    Create
                  </Button>
                </Form.Item>
              </Col>

            </Row>


          </Form>
        </Modal>
      </div>
    </>
  );
}

export default App;
