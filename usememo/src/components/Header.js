import React from "react";

function Header({ number, data }) {
  console.log("Header Mounted");
  return (
    <div>
      Header - {number}
      <br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default React.memo(Header);
