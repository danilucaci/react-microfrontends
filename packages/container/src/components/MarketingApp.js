import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname: currentPathName } = history.location;

        // prevent infinite loops for when both apps update the pathname
        if (currentPathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(() =>
      onParentNavigate({
        pathname: history.location.pathname,
      })
    );
  }, []);

  return <div ref={ref}></div>;
};
