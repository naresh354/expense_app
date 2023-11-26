import { useState } from "react";

function useDrawer() {
  const [isOpen, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return {
    isOpen,
    handleDrawerOpen,
    handleDrawerClose,
    handleMenuClick,open,handleMenuClose,anchorEl,setOpen
  };
}

export default useDrawer;
