// 🛒

import { useState } from "react";
import { Link } from "react-router";
import CartDetails from "./CartDetails";

type Props = {
  hover?: boolean;
};

const CartButton = ({ hover }: Props) => {
  const [showPreview, setShowPreview] = useState(false);

  function onHover() {
    if (!hover) return;
    setShowPreview(true);
  }

  function onHoverEnd() {
    if (!hover) return;
    setShowPreview(false);
  }

  return (
    // see: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block
    <div
      className="relative inline-block"
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <Link to="/cart" className="inline w-[50px] h-[30px] cursor-pointer">
        Cart
      </Link>
      {showPreview && (
        <div
          className="absolute end-0 top-6 border subtle-background"
          onMouseEnter={onHover}
          onMouseLeave={onHoverEnd}
        >
          <CartDetails />
        </div>
      )}
    </div>
  );
};

export default CartButton;
