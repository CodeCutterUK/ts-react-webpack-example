import * as React from "react";
//import Fetch from "react-fetch";            //<--- doesn't load react-fetch, but it should, shouldn't it?
import * as Fetch from "react-fetch";     //<--- this one loads react-fetch, but then the types are wrong

console.log(Fetch);

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>,
            <Fetch url="https://api.github.com/orgs/sky-uk" />
        </div>;
    }
}