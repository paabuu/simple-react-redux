import React from 'react';
import PropTypes from 'prop-types';

const fn = () => {};

const connect = (mapStateToProps=fn, mapDispatchToProps=fn) => {

    return function (Component) {
        class WrapperCpmponent extends React.Component {

            static contextTypes = {
                store: PropTypes.object.isRequired
            }

            state = {
                stateProps: {}
            }

            onStoreChange = () => {
                const { store } = this.context;
                const stateProps = mapStateToProps(store.getState());
                this.setState({
                    stateProps
                });
            }

            componentDidMount() {
                this.onStoreChange();

                this.context.store.subscribe(() => {
                    this.onStoreChange();
                });
            }

            render() {
                const dispatchProps = mapDispatchToProps(this.context.store.dispatch);
                const { stateProps } = this.state;
                return (
                    <Component
                        { ...this.props }
                        { ...dispatchProps }
                        { ...stateProps }
                    ></Component>
                )
            }
        }
        return WrapperCpmponent;
    }
}

export default connect;
