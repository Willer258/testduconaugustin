import { Button, Form, Input } from "antd";
import React from "react";

function PageLogin() {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item
          label={"UserName"}
          preserve={false}
          name={"username"}
          shouldUpdate
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Password"}
          preserve={false}
          name={"password"}
          shouldUpdate
        >
          <Input.Password />
        </Form.Item>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button htmlType="submit">Connexion</Button>

          <Button
            style={{ margin:'15px', backgroundColor: "red", color: "white" }}
            htmlType="submit"
          >
            Connexion avec Google
          </Button>
          <Button
            style={{margin:'15px', backgroundColor: "blue", color: "white" }}
            htmlType="submit"
          >
            Connexion avec Facebook
          </Button>
          <Button type="dashed" htmlType="submit">
            Connexion avec Twitter
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PageLogin;
