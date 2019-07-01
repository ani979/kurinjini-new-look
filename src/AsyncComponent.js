import React, { Component } from "react";
export default function asyncComponent(getComponent, props) {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        
        componentWillMount() {
            console.log("this.state.component ", this.state)
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                   
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...props} />
            }
            return null
        }
    }
    return AsyncComponent;
}