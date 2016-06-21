declare module 'react-fetch' {
    import { Component } from 'react';


    interface Props {
        url: string;
    }

    export default class Fetch extends Component<Props, {}> { }
}