import * as React from "react";
import * as Fetch from "react-fetch";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
                 <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                 <Fetch url="https://api.github.com/orgs/sky-uk" />
               </div>;
    }
}