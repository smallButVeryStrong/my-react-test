
#### 项目启动
    nodejs 14版本以上

#### react记录

    1.React.StrictMode 严格模式，不会被渲染，只是会出一些提示和警告

    2.reportWebVitals里边引入提供网络体验的一些类库

    3.如果你写的组件只包含一个render方法，并且没有state，则可以把他写成函数组件

#### 组件之间传值方式
    1.props 
        父组件
        modifyName() {
            this.setState({
                myname: 'lxp1'
            })
        }
        render() {
            const myname = 'lxp'
            return (
                <child name={myname} myClick={() => this.modifyName()}>
            )
        }
        子组件访问： this.props.name
        子组件触发父组件事件
        render() {
            return (
                <button onClick={() => this.props.myClick(//此处还可以传参)}>
            )
        }

#### jsx循环的实现
    [1,2,3].map((item, index) => {
        return (
            <div></div>
        )
    })
        