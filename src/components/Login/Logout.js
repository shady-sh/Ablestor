import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import { useEffect } from "react";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const Logout = () => {
  useEffect(() => {
    if ($.cookie("login_id")) {
      axios
        .get("http://localhost:8000/member/logout", {
          headers,
        })
        .then((returnData) => {
          if (returnData.data.message) {
            $.removeCookie("login_id");
            alert(returnData.data.message);
            window.location.href = "/";
          }
        });
    }
  });
  return <></>;
};

export default Logout;
