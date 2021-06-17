import React from "react";
import { getParamValues } from "../utils/functions";

class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    try {
      if (!location.hash) {
        return history.push("/login");
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", expiryTime);
      history.push("/login");
    } catch (error) {
      history.push("/");
    }
  }
  render() {
    return null;
  }
}

export default RedirectPage;
