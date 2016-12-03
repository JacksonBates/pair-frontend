import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function withHash(WrappedComponent) {
  const displayName = `WithHash(${getDisplayName(WrappedComponent)})`;
  class WithHash extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.history = history;

      this.state = {
        hash: this.history.location.hash,
      };
      this.replaceHash = (newHash) => {
        if (typeof newHash !== 'string' || (newHash.length > 0 && newHash[0] !== '#')) {
          throw new Error(`Expected hash to be an empty string or a string starting with "#" but got ${newHash}`);
        }
        this.history.replace({
          hash: newHash
        });
      }
    }
    componentWillMount() {
      this.unlisten = this.history.listen((location, action) => {
        this.setState({
          hash: location.hash,
        });
      });
    }
    componentWillUnmount() {
      this.unlisten();
    }
    render() {
      return (
        <WrappedComponent {...this.props} hash={this.state.hash} replaceHash={this.replaceHash} />
      )
    }
  }
  WithHash.displayName = displayName;
  WithHash.WrappedComponent = WrappedComponent;
  return WithHash;
}
