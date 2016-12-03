import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

let history = createBrowserHistory();

export default class HistoryProvider extends React.Component {
  render() {
    return this.props.children;
  }
  getChildContext() {
    return { history };
  }
}
HistoryProvider.childContextTypes = {
  history: React.PropTypes.any,
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export function withHash(WrappedComponent) {
  const displayName = `WithHash(${getDisplayName(WrappedComponent)})`;
  class WithHash extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.history = context.history;

      if (!this.history) {
        throw new Error(`Could not find "history" in the context of ${displayName}. Please wrap the root component in a <HistoryProvider>`);
      }

      this.state = {
        hash: history.location.hash,
      };
      this.replaceHash = (newHash) => {
        if (typeof newHash !== 'string' || (newHash.length > 0 && newHash[0] !== '#')) {
          throw new Error(`Expected hash to be an empty string or a string starting with "#" but got ${newHash}`);
        }
        this.history.replace({
          hash: newHash
        });
        this.setState({
          hash: newHash
        });
      }
    }
    render() {
      return (
        <WrappedComponent {...this.props} hash={this.state.hash} replaceHash={this.replaceHash} />
      )
    }
  }
  WithHash.displayName = displayName;
  WithHash.WrappedComponent = WrappedComponent;
  WithHash.contextTypes = {
    history: React.PropTypes.any,
  };
  return WithHash;
}
