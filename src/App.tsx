import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib';
import { ButtonSize } from 'antd/lib/button';
import { DownloadOutlined } from '@ant-design/icons';

type Props = {}

type State = {
  size: ButtonSize
}

class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      size: 'large',
    };
  }
  

  handleSizeChange = (e: RadioChangeEvent) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </>
    );
  }
}
export default App;
