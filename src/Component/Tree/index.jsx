import React, { useState} from "react"
import 'antd/dist/antd.css'
import { Tree } from "antd"
import {
  EditOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons"
const { TreeNode } = Tree
const tree=[
  {
    value: '0-0',
    key: '0-0',
    isEditable: false,
    children: [
      {
        value: '0-0-0',
        key: '0-0-0',
        isEditable: false,
        children: [
          { value: '0-0-0-0', key: '0-0-0-0',isEditable: false, },
          { value: '0-0-0-1', key: '0-0-0-1',isEditable: false,  },
          { value: '0-0-0-2', key: '0-0-0-2',isEditable: false,  },
        ],
      },
      {
        value: '0-0-1',
        defaultValue: "0-0-1",
        key: '0-0-1',
        isEditable: false,
        children: [
          { value: '0-0-1-0', key: '0-0-1-0',isEditable: false,},
          { value: '0-0-1-1', key: '0-0-1-1',isEditable: false,},
          { value: '0-0-1-2', key: '0-0-1-2',isEditable: false,},
        ],
      },
      {
        value: '0-0-2',
        key: '0-0-2',
        isEditable: false
      },
    ],
  },
  {
    value: '0-1',
    key: '0-1',
    isEditable: false,
    children: [
      { value: '0-1-0-0', key: '0-1-0-0',isEditable: false, },
      { value: '0-1-0-1', key: '0-1-0-1',isEditable: false, },
      { value: '0-1-0-2', key: '0-1-0-2',isEditable: false, },
    ],
  },
  {
    value: '0-2',
    key: '0-2',
    isEditable: false,
  },
];
export default function Test() {
  const [data, setData] = useState(tree);
  const renderTreeNodes = (data) => {
    let nodeTree = data.map((item) => {
      // 判断节点是否为编辑状态
      if (item.isEditable) {
        item.title = (
          <div>
            <input value={item.value} onChange={(e)=>onChange(e,item.key)}/>
            <CloseOutlined
              style={{ marginLeft: 10 }}
              onClick={()=>onClose()}
            />
            <CheckOutlined
              style={{ marginLeft: 10 }}
              onClick={()=>onSave()}
            />
          </div>
        )
      } else {
        item.title = (
          <div>
            <span>{item.value}</span>
            <span>
              <EditOutlined
                style={{ marginLeft: 10 }}
                onClick={()=>onEdit(item.key)}
              />
            </span>
          </div>
        )
      }
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode title={item.title} key={item.key} />;
    })
    return nodeTree
  }

  // 确定按钮点击函数
  const onSave=()=>{
    saveNode(tree);
    setData(tree);
  }
  const saveNode = (data) =>{
    data.forEach((item) => {
        if (item.children) {
          saveNode(item.children)
        }
        item.isEditable = false
    })
  }


  const onClose=()=>{
    closeNode(tree);
    setData(tree.slice())
  }
  const closeNode = (data) =>{
    data.forEach((item) => {
      if (item.children) {
        saveNode(item.children)
      }
      item.isEditable = false
  })}


  // 当输入框数据发生改变调用changeNode函数 更新tree数据 页面渲染
  const onChange = (e, key) => {
    changeNode(key, e.target.value, tree);
    setData(tree.slice());
  }
  // 让当前编辑节点的输入框的值与tree节点的值同步
  const changeNode = (key, value, data) =>{
    data.forEach((item) => {
        if (item.key === key) {
          item.value = value;
        }
        // 判断是否有子集
        if (item.children) {
          changeNode(key, value, item.children);
        }
    })
  }

  // 调用编辑函数 更新tree数据 使页面数据重新渲染
  const onEdit=(key)=>{
    editNode(key,tree);
    setData(tree.slice())
  }

  // 编辑函数 将树节点的编辑状态isEditable变为ture
  const editNode=(key,data)=>{
    data.forEach((item)=>{
        if(item.key===key){
            item.isEditable=true
        }else{
            item.isEditable=false
        }
        // 判断如果有子集则再次调用
        if(item.children){
            editNode(key,item.children)
        }
    })
  }
  return (
    <div>
      <Tree checkable>
        {renderTreeNodes(data)}
      </Tree>
    </div>
  )
}