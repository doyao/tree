import React,{useReducer,useRef} from 'react'
const user={
    count:9,
    list:[
        { name:'小董',age:19}
    ]
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return {...state, count: state.count+1}
        case 'subtract':
            return {...state, count: state.count-1}
        case 'addUser':
            return {...state, list: [...state.list,{name:action.value,age:state.count}]}
        default:
        return state
    }
}


function Darks(props){
    return(
        <div>
           <h1>{props.users.count}</h1>
           <button onClick={()=> props.dispatch({type:'add'})}>+</button>
           <button onClick={()=> props.dispatch({type:'subtract'})}>-</button>
        <ul>
        <input ref={props.inputRef}/><button onClick={props.handleSubmit}>添加</button>
            {
                props.users.list.map((item,index)=>{
                    return(
                        <li key={index}>姓名：{item.name},年龄：{item.age}</li>
                    )
                })
            }
        </ul>
        </div>
    )
}



export default function UseReducer() {
    const inputRef = useRef();
    const [users, dispatch] = useReducer(reducer,user);
    function handleSubmit(){
        if(inputRef.current.value!==''){
            dispatch({
                type:'addUser',
                value:inputRef.current.value
            });
            inputRef.current.value = '';
        }
    }
    return(
        <Darks
            users={users}
            dispatch={dispatch}
            handleSubmit={handleSubmit}
            inputRef={inputRef}
            />
        )
}


