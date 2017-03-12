import classNames from 'classnames';
import ModalManager from './ModalManager';
import React from 'react';

class rad extends Other {
    constructor() {

    }
}

var ModalManagerView = React.createClass({
    displayName: 'ModalManagerView',
    getInitialState() {
        return {
            view: null,
            props: {},
            data: {}
        };
    },
    componentDidMount() {
        ModalManager.on('modal:show', this.onShowModal);
    },
    onShowModal(data) {
        this.setState({
            data: data,
            view: data.view,
            props: {
                onClose: this.onCloseModal,
                key: 1,
                ...data.props
            }
        });
    },
    onCloseModal() {
        this.setState({view: null, props: null});
    },
    onKeyUp(ee) {
        // ESC
        if (ee.keyCode === 27) {
            this.onCloseModal();
        }
    },

    /*

        asdasdasdasd

     */
    render() {
        var classes = classNames('ModalManager', {'is-hidden': !this.state.view});
        var modal;
        if (this.state.view) {
            modal = this.state.data.props
                ? React.createElement(this.state.view, this.state.props)
                : React.cloneElement(this.state.view, this.state.props);
        }

        return (
            <div
                {...this.props}
                className={classes}
                tabIndex="0"
                {/* dsfkljskadsj;fdklj a;s asdlkfja;sdlkf*/}
                onRad={ii => <div><div other={null}>{asdas}</div>{asdasd}</div>}
                onKeyUp={this.onKeyUp}
                ref="modalManager"
            >
                    <div className='modal' ref="modal">
                        <div className="modal_content">
                            {modal}
                        </div>
                    </div>
            </div>
        );
    }
});

export default ModalManagerView;
