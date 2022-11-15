import React, { Component } from 'react';

class GoogleAds extends Component {

    googleInit = null;

    componentDidMount() {
      const { timeout } = this.props;
      this.googleInit = setTimeout(() => {
        if (typeof window !== 'undefined')
          (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, timeout);
    }
  
    componentWillUnmount() {
      if (this.googleInit) clearTimeout(this.googleInit);
    }
  
    render() {
     
      return (
        <div >
          <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: "center" }}
            data-ad-client={'ca-pub-6796247302325530'}
            data-ad-slot={this.props.slot}
            data-ad-format={"auto"}
            data-full-width-responsive="true"
          ></ins>
        </div>
      );
    }
}

export default GoogleAds;