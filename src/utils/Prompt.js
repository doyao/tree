import { Modal} from 'antd'
import { Prompt} from "react-router-dom"
export const RouterPrompt =({message,promptBoolean})=>{
    return  <Prompt message={
                        location =>
                            !promptBoolean
                            ? true
                            : message || '当前页面有未保存的内容，是否离开?'
                    }
            />
}

// 自定义提示默认
export const  customConfirm = (message,callback) => {
    Modal.confirm({
        title:message,
        onCancel: () => {
            callback(false);
            },
            onOk: () => {
            callback(true);
            }
    })
}