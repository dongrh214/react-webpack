import React from 'react'
import { render } from 'react-dom'

import './statics/css/base.less'

import { ua } from './statics/js/util/common'

console.log('userAgent:',ua);

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <img className="img" src={require('./statics/imgs/img.jpg')}/>
            </div>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
);
